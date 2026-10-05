// Client-side validation, photo previews, and submission for quote + contact forms.
// Submissions POST multipart/form-data to PUBLIC_FORM_ENDPOINT (see .env.example).

import { SITE } from '../data/site';

const MAX_FILES = 10;
const MAX_BYTES = 10 * 1024 * 1024;

const MESSAGES: Record<string, string> = {
  valueMissing: 'This field is required.',
  typeMismatch: 'Please enter a valid email address.',
  tooShort: 'Please add a little more detail.',
};

type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function errorEl(field: Element) {
  return field.closest('.field')?.querySelector<HTMLElement>('.err') ?? null;
}

function setError(field: Element, msg: string) {
  const wrap = field.closest<HTMLElement>('.field');
  const err = errorEl(field);
  if (wrap) wrap.dataset.invalid = msg ? 'true' : 'false';
  if (err) err.textContent = msg;
  field.setAttribute('aria-invalid', msg ? 'true' : 'false');
  if (err && !err.id) err.id = `${(field as Field).id || (field as Field).name}-err`;
  if (err) field.setAttribute('aria-describedby', err.id);
}

function validateField(field: Field): boolean {
  let msg = '';
  if (field.dataset.phone !== undefined && field.value.trim()) {
    const digits = field.value.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 11) msg = 'Please enter a valid phone number.';
  }
  if (!msg && !field.validity.valid) {
    const key = Object.keys(MESSAGES).find((k) => field.validity[k as keyof ValidityState]);
    msg = key ? MESSAGES[key] : field.validationMessage;
  }
  setError(field, msg);
  return !msg;
}

function initPhotos(form: HTMLFormElement) {
  const input = form.querySelector<HTMLInputElement>('[data-photos]');
  const zone = form.querySelector<HTMLElement>('[data-dropzone]');
  const list = form.querySelector<HTMLUListElement>('[data-thumbs]');
  if (!input || !zone || !list) return;

  let files: File[] = [];

  const sync = () => {
    const dt = new DataTransfer();
    files.forEach((f) => dt.items.add(f));
    input.files = dt.files;
    list.replaceChildren(
      ...files.map((f, i) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = URL.createObjectURL(f);
        img.alt = f.name;
        img.onload = () => URL.revokeObjectURL(img.src);
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute('aria-label', `Remove ${f.name}`);
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M18 6 6 18"/></svg>';
        btn.onclick = () => {
          files.splice(i, 1);
          sync();
        };
        li.append(img, btn);
        return li;
      })
    );
  };

  const add = (incoming: FileList | null) => {
    if (!incoming) return;
    const rejected: string[] = [];
    for (const f of Array.from(incoming)) {
      if (!f.type.startsWith('image/')) rejected.push(`${f.name} is not an image`);
      else if (f.size > MAX_BYTES) rejected.push(`${f.name} is larger than 10 MB`);
      else if (files.length >= MAX_FILES) rejected.push(`only ${MAX_FILES} photos allowed`);
      else files.push(f);
    }
    setError(input, rejected.length ? `Skipped: ${rejected.join('; ')}.` : '');
    sync();
  };

  input.addEventListener('change', () => add(input.files));
  ['dragenter', 'dragover'].forEach((t) => zone.addEventListener(t, () => zone.classList.add('is-over')));
  ['dragleave', 'drop'].forEach((t) => zone.addEventListener(t, () => zone.classList.remove('is-over')));
  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    add((e as DragEvent).dataTransfer?.files ?? null);
  });
}

function preselectService(form: HTMLFormElement) {
  const select = form.querySelector<HTMLSelectElement>('[data-service-select]');
  const wanted = new URLSearchParams(location.search).get('service');
  if (!select || !wanted) return;
  const opt = Array.from(select.options).find((o) => o.value.toLowerCase() === wanted.toLowerCase());
  if (opt) select.value = opt.value;
}

async function submit(form: HTMLFormElement) {
  const wrap = form.closest('[data-form-wrap]')!;
  const status = form.querySelector<HTMLElement>('[data-status]')!;
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const fields = Array.from(form.querySelectorAll<Field>('input:not([type=hidden]):not([type=file]):not([type=radio]), select, textarea')).filter(
    (f) => !f.closest('.hp')
  );

  const invalid = fields.filter((f) => !validateField(f));
  if (invalid.length) {
    status.dataset.kind = 'error';
    status.textContent = 'Please fix the highlighted fields.';
    invalid[0].focus();
    return;
  }

  const showSuccess = () => {
    form.hidden = true;
    const success = wrap.querySelector<HTMLElement>('[data-success]')!;
    success.hidden = false;
    success.focus();
    success.scrollIntoView({ block: 'center', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };

  const data = new FormData(form);
  if (String(data.get('company_website') ?? '')) return showSuccess(); // honeypot: silently drop bots
  data.delete('company_website');

  const endpoint = form.dataset.endpoint;
  status.textContent = '';
  button.disabled = true;
  const label = button.innerHTML;
  button.textContent = 'Sending…';

  try {
    if (!endpoint) {
      if (import.meta.env.DEV) {
        console.warn('[forms] PUBLIC_FORM_ENDPOINT is not set — simulating a successful submission in dev.', Object.fromEntries(data));
        await new Promise((r) => setTimeout(r, 600));
        return showSuccess();
      }
      throw new Error('Form endpoint not configured');
    }
    const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    showSuccess();
  } catch (err) {
    console.error('[forms]', err);
    status.dataset.kind = 'error';
    status.textContent = `Sorry — we couldn’t send your request online. Please call us at ${SITE.phone} and we’ll take care of you.`;
  } finally {
    button.disabled = false;
    button.innerHTML = label;
  }
}

export function initForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-form]').forEach((form) => {
    if (form.dataset.ready) return;
    form.dataset.ready = 'true';
    initPhotos(form);
    preselectService(form);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submit(form);
    });
    form.addEventListener(
      'blur',
      (e) => {
        const t = e.target as Field;
        if (t.matches('input:not([type=file]):not([type=radio]), select, textarea') && !t.closest('.hp')) validateField(t);
      },
      true
    );
  });
}
