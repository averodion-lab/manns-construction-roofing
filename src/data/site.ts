// Single source of truth for business details. Import from here; never hardcode.
export const SITE = {
  name: 'Manns Construction & Roofing',
  shortName: 'Manns',
  phone: '912-246-9486',
  phoneHref: 'tel:+19122469486',
  smsHref: 'sms:+19122469486',
  status: 'Licensed & Insured',
  description:
    'Manns Construction & Roofing provides professional roofing, construction, remodeling, storm restoration, siding, gutters, concrete, tree removal, land clearing, and equipment services. Licensed & Insured.',
  // TODO: owner to provide. Leave null until confirmed — never invent these.
  address: null as string | null,
  serviceArea: null as string | null,
  email: null as string | null,
  // While true, the projects gallery shows a note that photos are representative examples.
  placeholderPhotos: true,
  formEndpoint: (import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined) ?? '',
};

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', menu: true },
  { label: 'Roofing', href: '/roofing' },
  { label: 'Construction', href: '/construction' },
  { label: 'Storm Damage', href: '/storm-damage' },
  { label: 'Projects', href: '/projects' },
  { label: 'Inspections', href: '/inspections' },
  { label: 'Contact', href: '/contact' },
];

export const QUOTE_SERVICES = [
  'Roofing',
  'Roof Repair',
  'Roof Replacement',
  'Siding',
  'Gutters',
  'Construction',
  'Remodeling',
  'Kitchen Renovation',
  'Bathroom Renovation',
  'Painting',
  'Flooring',
  'Deck',
  'Pole Barn',
  'Concrete',
  'Driveway',
  'Storm Damage',
  'Inspection',
  'Insurance Restoration',
  'Tree Removal',
  'Limbs Off Roof',
  'Land Clearing',
  'Mulching',
  'Skid Steer / Excavator Work',
  'Demolition',
  'Cleanup',
  'Other',
];

export const quoteHref = (service?: string) =>
  service ? `/quote?service=${encodeURIComponent(service)}` : '/quote';
