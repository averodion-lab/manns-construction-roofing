import type { ImageKey } from './images';
import type { IconName } from './icons';

export type Faq = { q: string; a: string };
export type Feature = { title: string; text: string; href?: string; icon?: IconName };

export type Service = {
  slug: string;
  name: string; // short name used in cards, menus, breadcrumbs
  title: string; // page h1
  eyebrow: string;
  summary: string; // card / meta description
  image: ImageKey;
  intro: string[];
  includesHeading?: string;
  includes: string[];
  subservices?: Feature[];
  benefitsHeading?: string;
  benefits: Feature[];
  process?: Feature[];
  gallery: ImageKey[];
  faqs: Faq[];
  cta: { heading: string; label: string; service: string; secondary?: { label: string; href: string } };
  projectCategory?: string;
  related: string[];
  notice?: string; // shown above content (e.g. insurance disclaimer)
  pending?: boolean; // content awaiting owner confirmation
};

const INSURANCE_NOTE =
  'Manns Construction & Roofing is a contractor, not an insurance company or public adjuster. Coverage and claim decisions are made by your insurance provider. We can help document damage and guide you through the restoration process.';

export const SERVICES: Service[] = [
  // ───────────────────────── ROOFING ─────────────────────────
  {
    slug: 'roofing',
    name: 'Roofing',
    title: 'Professional Roofing Services',
    eyebrow: 'Roofing',
    summary:
      'Roof installation, replacement, repair, inspections, and maintenance for shingle and metal roofs — done right by a licensed & insured local contractor.',
    image: 'roofer',
    intro: [
      'Your roof is the first line of defense for everything under it. Manns Construction & Roofing provides roofing installation, repairs, replacements, inspections, and maintenance for homes and properties.',
      'Whether you have a small leak, storm damage, or a roof that has simply reached the end of its life, we’ll inspect it, explain what we find in plain language, and recommend the right fix — not the most expensive one.',
    ],
    includesHeading: 'Roofing services we provide',
    includes: [
      'Roof installation',
      'Roof replacement',
      'Roof repair',
      'Roof inspections',
      'Shingle roofing',
      'Metal roofing',
      'Roof maintenance',
      'Leak repair',
    ],
    subservices: [
      { title: 'Roof Repair', text: 'Missing shingles, flashing problems, and wind damage fixed before they turn into bigger issues.', href: '/roof-repair', icon: 'wrench' },
      { title: 'Roof Replacement', text: 'Complete tear-off and replacement when repairs no longer make sense.', href: '/roof-replacement', icon: 'roof' },
      { title: 'New Roof Installation', text: 'Roofing for new construction, additions, and outbuildings.', href: '/roof-replacement', icon: 'home' },
      { title: 'Roof Inspections', text: 'A clear, documented look at your roof’s condition.', href: '/roof-inspections', icon: 'clipboard' },
      { title: 'Leak Repair', text: 'We track down the source of the leak — not just the stain on the ceiling.', href: '/roof-repair', icon: 'droplet' },
      { title: 'Storm Damage', text: 'Hail, wind, and fallen-limb damage inspected and restored.', href: '/storm-damage', icon: 'storm' },
      { title: 'Shingle Roofing', text: 'Durable, attractive asphalt shingle systems for homes of every style.', href: '/roof-replacement', icon: 'layers' },
      { title: 'Metal Roofing', text: 'Long-lasting metal roofing for homes, barns, and outbuildings.', href: '/roof-replacement', icon: 'shield' },
    ],
    benefits: [
      { title: 'Licensed & Insured', text: 'You’re protected while we work on your property.', icon: 'shield' },
      { title: 'Honest Recommendations', text: 'Repair when repair makes sense. Replace when it doesn’t.', icon: 'check' },
      { title: 'Clean Job Sites', text: 'We protect your landscaping and clean up when the job is done.', icon: 'home' },
      { title: 'Free Estimates', text: 'Get a clear, written quote before any work begins.', icon: 'file' },
    ],
    gallery: ['roofTearOff', 'houseBlueRoof', 'houseDusk'],
    faqs: [
      { q: 'How do I know if I need a roof repair or a full replacement?', a: 'It depends on the roof’s age, the extent of the damage, and whether problems are isolated or widespread. We’ll inspect the roof and walk you through the options so you can make an informed decision.' },
      { q: 'Do you work on both shingle and metal roofs?', a: 'Yes. We install, repair, and replace both asphalt shingle and metal roofing systems.' },
      { q: 'How long does a roof replacement take?', a: 'Timing depends on the size and pitch of the roof, the material, and the weather. We’ll give you an estimated schedule with your quote.' },
      { q: 'Are estimates free?', a: 'Yes. Call 912-246-9486 or request a quote online and we’ll schedule a time to look at your roof.' },
    ],
    cta: { heading: 'Need roofing work? Get your free quote.', label: 'Get a Free Quote', service: 'Roofing' },
    projectCategory: 'roofing',
    related: ['roof-repair', 'roof-replacement', 'roof-inspections', 'storm-damage'],
  },
  {
    slug: 'roof-repair',
    name: 'Roof Repair',
    title: 'Roof Repair & Leak Repair',
    eyebrow: 'Roofing',
    summary: 'Fast, reliable roof and leak repairs for shingle and metal roofs — missing shingles, flashing, wind damage, and more.',
    image: 'roofTearOff',
    intro: [
      'A small roof problem rarely stays small. Water finds its way into decking, insulation, and ceilings — and the repair bill grows with it.',
      'We locate the source of the problem, repair it properly, and let you know if we see anything else that needs attention.',
    ],
    includes: [
      'Leak detection and repair',
      'Missing or damaged shingle replacement',
      'Flashing repair around chimneys, vents, and walls',
      'Pipe boot and vent repairs',
      'Wind and storm damage repairs',
      'Metal roof fastener and panel repairs',
      'Emergency repairs and temporary protection',
    ],
    benefits: [
      { title: 'Stop Damage Early', text: 'A timely repair protects your decking, insulation, and interior.', icon: 'shield' },
      { title: 'Root-Cause Fixes', text: 'We fix where the water gets in, not just where it shows up.', icon: 'wrench' },
      { title: 'Straight Answers', text: 'If a repair won’t hold, we’ll tell you.', icon: 'check' },
    ],
    gallery: ['roofer', 'roofOld', 'houseBlueRoof'],
    faqs: [
      { q: 'My ceiling has a water stain. Is it the roof?', a: 'Often, but not always — plumbing, HVAC, and window issues can cause similar stains. An inspection will tell us where the water is coming from.' },
      { q: 'Can you repair just part of my roof?', a: 'In many cases, yes. If damage is isolated, a repair is usually the most cost-effective option.' },
      { q: 'Do you handle emergency repairs?', a: 'Call 912-246-9486. If there’s active water coming in, we’ll do what we can to protect your home until a permanent repair can be made.' },
    ],
    cta: { heading: 'Leak or damaged roof? Let’s fix it.', label: 'Request a Repair Quote', service: 'Roof Repair' },
    projectCategory: 'roofing',
    related: ['roofing', 'roof-inspections', 'storm-damage'],
  },
  {
    slug: 'roof-replacement',
    name: 'Roof Replacement',
    title: 'Roof Replacement & New Roof Installation',
    eyebrow: 'Roofing',
    summary: 'Complete roof replacement and new roof installation with quality shingle and metal roofing systems.',
    image: 'roofer',
    intro: [
      'When a roof is past its service life or too damaged to repair, a replacement is the smart long-term investment.',
      'We handle the full process — tear-off, decking inspection, underlayment, flashing, ventilation, and the new roofing system — and leave your property clean.',
    ],
    includes: [
      'Complete tear-off and disposal',
      'Decking inspection and replacement where needed',
      'Underlayment and ice & water protection',
      'New flashing and drip edge',
      'Ridge and roof ventilation',
      'Asphalt shingle roofing',
      'Metal roofing',
      'Roofing for additions, garages, and outbuildings',
    ],
    benefits: [
      { title: 'Long-Term Protection', text: 'A properly installed system protects your home for years.', icon: 'shield' },
      { title: 'Curb Appeal', text: 'A new roof instantly changes the look of a home.', icon: 'home' },
      { title: 'Property Value', text: 'A newer roof is a major plus for buyers and appraisers.', icon: 'award' },
      { title: 'Energy Efficiency', text: 'Proper ventilation helps manage attic heat.', icon: 'sun' },
    ],
    gallery: ['roofTearOff', 'houseDusk', 'houseBlueRoof'],
    faqs: [
      { q: 'Shingle or metal — which is right for me?', a: 'Both are excellent choices. Shingles are cost-effective and come in many styles; metal offers long life and great performance. We’ll explain the trade-offs for your home and budget.' },
      { q: 'Will you check the decking underneath?', a: 'Yes. Once the old roof is off we inspect the decking and replace any damaged sections before installing the new roof.' },
      { q: 'Do I need to be home during the replacement?', a: 'Not necessarily. We’ll coordinate with you before work begins and keep you updated throughout the job.' },
    ],
    cta: { heading: 'Ready for a new roof? Get your free quote.', label: 'Get a Free Quote', service: 'Roof Replacement' },
    projectCategory: 'roofing',
    related: ['roofing', 'roof-repair', 'roof-inspections'],
  },
  {
    slug: 'roof-inspections',
    name: 'Roof Inspections',
    title: 'Roof Inspections',
    eyebrow: 'Roofing · Inspections',
    summary: 'Thorough roof inspections with photo documentation — after storms, before buying or selling, or for peace of mind.',
    image: 'roofOld',
    intro: [
      'A roof inspection gives you a clear picture of your roof’s condition before small problems become expensive ones.',
      'We check the roofing surface, flashing, vents, gutters, and visible decking, and document what we find with photos so you can see it for yourself.',
    ],
    includes: [
      'Shingle and metal panel condition',
      'Flashing, vents, and pipe boots',
      'Signs of hail, wind, or impact damage',
      'Gutters and drainage',
      'Attic ventilation (where accessible)',
      'Photo documentation of findings',
      'Clear repair or replacement recommendations',
    ],
    benefits: [
      { title: 'Catch Problems Early', text: 'Find issues while they’re still small.', icon: 'search' },
      { title: 'Photo Documentation', text: 'See exactly what we see.', icon: 'camera' },
      { title: 'Plan Ahead', text: 'Budget for repairs or replacement on your timeline.', icon: 'calendar' },
    ],
    gallery: ['roofer', 'siteInspection', 'houseBlueRoof'],
    faqs: [
      { q: 'When should I get my roof inspected?', a: 'After a major storm, before buying or selling a home, if you notice leaks or missing shingles, or periodically as the roof ages.' },
      { q: 'Will I get photos?', a: 'Yes. We document what we find with photos so you can see the condition of your roof.' },
    ],
    cta: { heading: 'Know the condition of your roof.', label: 'Schedule an Inspection', service: 'Inspection' },
    projectCategory: 'roofing',
    related: ['inspections', 'roof-repair', 'storm-damage'],
  },

  // ───────────────────────── EXTERIOR ─────────────────────────
  {
    slug: 'siding',
    name: 'Siding',
    title: 'Siding Installation, Replacement & Repair',
    eyebrow: 'Exterior',
    summary: 'Siding installation, replacement, and repair that improves your home’s appearance, weather protection, and value.',
    image: 'sidingCrew',
    intro: [
      'Siding does more than make a house look good — it’s a key part of the envelope that keeps water, wind, and pests out.',
      'Whether you need a few damaged boards replaced or a complete exterior makeover, we’ll help you choose the right approach for your home.',
    ],
    includes: [
      'Siding installation',
      'Siding replacement',
      'Siding repair',
      'Storm-damaged siding',
      'Trim, soffit, and fascia',
      'Exterior upgrades',
    ],
    benefitsHeading: 'What new siding does for your home',
    benefits: [
      { title: 'Appearance', text: 'Fresh siding transforms the look of your home.', icon: 'home' },
      { title: 'Weather Protection', text: 'Keeps water and wind out of your walls.', icon: 'shield' },
      { title: 'Energy Efficiency', text: 'A tighter envelope helps with comfort and energy use.', icon: 'sun' },
      { title: 'Property Value', text: 'Exterior improvements boost curb appeal and resale value.', icon: 'award' },
    ],
    gallery: ['housePorch', 'houseWhite', 'sidingCrew'],
    faqs: [
      { q: 'Can you match my existing siding for a repair?', a: 'We’ll do our best to source a close match. With older siding an exact match isn’t always possible — we’ll discuss your options before starting.' },
      { q: 'Can siding be damaged by storms?', a: 'Yes. Hail and wind can crack, dent, or loosen siding. We can inspect and document storm damage.' },
    ],
    cta: { heading: 'Upgrade your exterior.', label: 'Get a Siding Quote', service: 'Siding' },
    projectCategory: 'siding',
    related: ['gutters', 'storm-damage', 'roofing'],
  },
  {
    slug: 'gutters',
    name: 'Gutters',
    title: 'Gutter Installation, Repair & Cleaning',
    eyebrow: 'Exterior',
    summary: 'Gutter installation, replacement, repair, cleaning, and downspouts that move water away from your home.',
    image: 'houseWhite',
    intro: [
      'Gutters protect your roof edge, siding, and foundation by carrying water safely away from your home. When they clog, sag, or leak, water ends up where it shouldn’t.',
      'We install new gutter systems, repair and replace damaged sections, clean out clogs, and add downspouts where your property needs them.',
    ],
    includes: [
      'Gutter installation',
      'Gutter replacement',
      'Gutter repairs',
      'Gutter cleaning',
      'Downspout installation',
      'Storm-damaged gutters',
    ],
    benefits: [
      { title: 'Protect Your Foundation', text: 'Direct water away from the base of your home.', icon: 'home' },
      { title: 'Protect Siding & Fascia', text: 'Prevent overflow staining and rot.', icon: 'shield' },
      { title: 'Prevent Erosion', text: 'Keep landscaping and soil in place.', icon: 'droplet' },
    ],
    gallery: ['houseWhite', 'housePorch', 'houseBrick'],
    faqs: [
      { q: 'How often should gutters be cleaned?', a: 'Most homes benefit from cleaning at least once or twice a year — more often if you have overhanging trees.' },
      { q: 'Can you replace just a section of gutter?', a: 'Often, yes. If the system is in good shape overall, we can repair or replace the damaged sections.' },
    ],
    cta: { heading: 'Gutters overflowing or sagging?', label: 'Request Gutter Service', service: 'Gutters' },
    projectCategory: 'gutters',
    related: ['roofing', 'siding', 'storm-damage'],
  },

  // ───────────────────────── CONSTRUCTION ─────────────────────────
  {
    slug: 'construction',
    name: 'Construction',
    title: 'Construction Services',
    eyebrow: 'Construction',
    summary: 'Home additions, remodeling, decks, pole barns, exterior construction, and property improvements.',
    image: 'framing',
    intro: [
      'Manns Construction & Roofing is more than a roofing company. We build additions, remodel homes, construct decks and pole barns, and handle a wide range of exterior construction and property improvements.',
      'Tell us what you have in mind. We’ll talk through the scope, the budget, and the schedule, and give you a clear quote before any work begins.',
    ],
    includesHeading: 'What we build',
    includes: [
      'Home additions',
      'Remodeling',
      'Deck construction and repair',
      'Pole barns',
      'Exterior construction',
      'Structural improvements',
      'Property improvements',
    ],
    subservices: [
      { title: 'Home Additions', text: 'Additional rooms, expansions, and exterior additions.', href: '/home-additions', icon: 'home' },
      { title: 'Remodeling', text: 'Interior and exterior remodeling projects.', href: '/remodeling', icon: 'hammer' },
      { title: 'Decks', text: 'New deck construction and deck improvements.', href: '/decks', icon: 'layers' },
      { title: 'Pole Barns', text: 'Construction of pole barns and similar structures.', href: '/pole-barns', icon: 'barn' },
      { title: 'Exterior Construction', text: 'General exterior improvements and construction.', href: '/contact', icon: 'ruler' },
      { title: 'Property Improvements', text: 'Various improvements based on your needs.', href: '/contact', icon: 'wrench' },
    ],
    benefits: [
      { title: 'One Contractor', text: 'Roofing, siding, concrete, and construction under one roof.', icon: 'check' },
      { title: 'Licensed & Insured', text: 'Professional, protected work on your property.', icon: 'shield' },
      { title: 'Clear Communication', text: 'You’ll know the plan, the price, and the schedule.', icon: 'phone' },
    ],
    gallery: ['framingBuilding', 'carpenter', 'houseDeck'],
    faqs: [
      { q: 'What size projects do you take on?', a: 'Everything from deck repairs to home additions and pole barns. Call us to talk through your project.' },
      { q: 'Can you handle the roof on an addition, too?', a: 'Yes — that’s one of the advantages of working with a construction and roofing company.' },
    ],
    cta: { heading: 'Talk to us about your project.', label: 'Start Your Project', service: 'Construction' },
    projectCategory: 'construction',
    related: ['home-additions', 'remodeling', 'decks', 'pole-barns'],
  },
  {
    slug: 'home-additions',
    name: 'Home Additions',
    title: 'Home Additions',
    eyebrow: 'Construction',
    summary: 'Room additions, expansions, and exterior additions built to blend with your existing home.',
    image: 'framingBuilding',
    intro: [
      'Need more space but love where you live? An addition lets you grow your home without moving.',
      'We build additional rooms, expansions, and exterior additions — and because we’re also roofers, we can tie the new roofline into the existing one properly.',
    ],
    includes: [
      'Room additions',
      'Home expansions',
      'Exterior additions',
      'Framing and structural work',
      'Roofing tie-ins',
      'Siding to match the existing home',
    ],
    benefits: [
      { title: 'More Living Space', text: 'Add the room your family needs.', icon: 'home' },
      { title: 'Seamless Roofline', text: 'Roof tie-ins handled by roofing pros.', icon: 'roof' },
      { title: 'Added Value', text: 'Well-built square footage adds value to your property.', icon: 'award' },
    ],
    gallery: ['framing', 'carpenter', 'housePorch'],
    faqs: [
      { q: 'Can you match the addition to my existing home?', a: 'We aim to match rooflines, siding, and trim so the addition looks like it was always there.' },
      { q: 'Where do I start?', a: 'Call us or request a quote. We’ll visit the property, talk through your goals, and outline next steps.' },
    ],
    cta: { heading: 'Planning an addition?', label: 'Talk to Us About Your Project', service: 'Construction' },
    projectCategory: 'construction',
    related: ['construction', 'remodeling', 'roofing'],
  },
  {
    slug: 'remodeling',
    name: 'Remodeling',
    title: 'Interior & Exterior Remodeling',
    eyebrow: 'Construction',
    summary: 'Interior and exterior remodeling that updates your home’s look, function, and value.',
    image: 'kitchen',
    intro: [
      'Whether it’s an outdated room, a layout that doesn’t work, or an exterior that needs a refresh, remodeling makes your home work better for you.',
      'We handle interior and exterior remodeling projects and coordinate the details so you don’t have to.',
    ],
    includes: [
      'Interior remodeling',
      'Exterior remodeling',
      'Layout changes and framing',
      'Repairs after damage',
      'Exterior upgrades',
    ],
    benefits: [
      { title: 'Better Function', text: 'Spaces that fit the way you live.', icon: 'home' },
      { title: 'Updated Look', text: 'Modern finishes inside and out.', icon: 'award' },
      { title: 'One Team', text: 'Construction and exterior work handled together.', icon: 'check' },
    ],
    gallery: ['kitchen', 'interiorLoft', 'insulation'],
    faqs: [
      { q: 'Do you do interior and exterior work?', a: 'Yes. We take on both interior and exterior remodeling projects.' },
    ],
    cta: { heading: 'Ready to remodel?', label: 'Get a Free Quote', service: 'Remodeling' },
    projectCategory: 'construction',
    related: ['construction', 'home-additions', 'siding'],
  },
  {
    slug: 'decks',
    name: 'Decks',
    title: 'Deck Construction & Repair',
    eyebrow: 'Construction',
    summary: 'New deck construction, deck repair, and deck improvements built for years of outdoor living.',
    image: 'houseDeck',
    intro: [
      'A well-built deck extends your living space outdoors. A neglected one can become a safety hazard.',
      'We build new decks and repair or improve existing ones — from replacing boards and railings to structural repairs.',
    ],
    includes: [
      'New deck construction',
      'Deck repair',
      'Board and railing replacement',
      'Stairs and steps',
      'Structural repairs',
      'Deck improvements and expansions',
    ],
    benefits: [
      { title: 'Outdoor Living', text: 'More room to relax and entertain.', icon: 'sun' },
      { title: 'Safety', text: 'Solid framing, railings, and stairs.', icon: 'shield' },
      { title: 'Value', text: 'A quality deck is a valuable home feature.', icon: 'award' },
    ],
    gallery: ['houseDeck', 'carpenter', 'framing'],
    faqs: [
      { q: 'Should I repair or replace my deck?', a: 'If the framing is sound, repairs and new decking may be all you need. If the structure is compromised, replacement is safer. We’ll take a look and advise.' },
    ],
    cta: { heading: 'Build or fix your deck.', label: 'Get a Deck Quote', service: 'Deck' },
    projectCategory: 'decks',
    related: ['construction', 'concrete', 'remodeling'],
  },
  {
    slug: 'pole-barns',
    name: 'Pole Barns',
    title: 'Pole Barn Construction',
    eyebrow: 'Construction',
    summary: 'Pole barns and similar structures for storage, equipment, workshops, and agricultural use.',
    image: 'redBarn',
    intro: [
      'Pole barns are a versatile, cost-effective way to add storage, workshop, equipment, or agricultural space to your property.',
      'We build pole barns and similar structures — and we handle the roofing, too.',
    ],
    includes: [
      'Pole barn construction',
      'Equipment and vehicle storage buildings',
      'Workshops and utility buildings',
      'Metal roofing for outbuildings',
      'Site preparation',
    ],
    benefits: [
      { title: 'Versatile Space', text: 'Storage, workshop, equipment, or animals.', icon: 'barn' },
      { title: 'Cost-Effective', text: 'An efficient way to add a lot of covered space.', icon: 'check' },
      { title: 'Roofing In-House', text: 'Metal roofing installed by our own team.', icon: 'roof' },
    ],
    gallery: ['redBarn', 'field', 'framingBuilding'],
    faqs: [
      { q: 'Can you prepare the site, too?', a: 'Site preparation may be available depending on the property — ask us when you request a quote.' },
    ],
    cta: { heading: 'Need a pole barn?', label: 'Get a Pole Barn Quote', service: 'Pole Barn' },
    projectCategory: 'pole-barns',
    related: ['construction', 'equipment-services', 'concrete'],
  },

  // ───────────────────────── CONCRETE ─────────────────────────
  {
    slug: 'concrete',
    name: 'Concrete',
    title: 'Concrete Services',
    eyebrow: 'Concrete & Driveways',
    summary: 'Concrete driveways, walkways, patios, slabs, and concrete repair.',
    image: 'rebar',
    intro: [
      'Good concrete work starts long before the pour — with proper grading, base preparation, and reinforcement.',
      'We pour and repair concrete driveways, walkways, patios, and slabs for homes and outbuildings.',
    ],
    includes: [
      'Concrete driveways',
      'Driveway replacement',
      'Concrete walkways',
      'Patios',
      'Slabs for buildings and outbuildings',
      'Concrete repair',
    ],
    benefits: [
      { title: 'Proper Prep', text: 'Grading, base, and reinforcement done right.', icon: 'ruler' },
      { title: 'Durable', text: 'Concrete built for daily use.', icon: 'shield' },
      { title: 'Curb Appeal', text: 'Clean, crisp hardscape improves any property.', icon: 'home' },
    ],
    gallery: ['siteCrew', 'houseStone', 'rebar'],
    faqs: [
      { q: 'Can you pour a slab for a pole barn or shed?', a: 'Yes — we pour slabs for buildings and outbuildings.' },
      { q: 'Can cracked concrete be repaired?', a: 'Some cracks can be repaired; heavily damaged or sunken sections are usually better replaced. We’ll recommend the right option.' },
    ],
    cta: { heading: 'Planning concrete work?', label: 'Get a Concrete Quote', service: 'Concrete' },
    projectCategory: 'concrete',
    related: ['driveways', 'pole-barns', 'construction'],
  },
  {
    slug: 'driveways',
    name: 'Driveways',
    title: 'Concrete Driveways',
    eyebrow: 'Concrete & Driveways',
    summary: 'New concrete driveways and driveway replacement built on a solid base.',
    image: 'houseStone',
    intro: [
      'Your driveway takes a beating every day. A cracked, sunken, or crumbling driveway is both an eyesore and a tripping hazard.',
      'We remove old driveways, prepare a proper base, and pour new concrete driveways built to last.',
    ],
    includes: [
      'New concrete driveways',
      'Driveway removal and replacement',
      'Driveway extensions',
      'Base preparation and grading',
      'Connecting walkways',
    ],
    benefits: [
      { title: 'Built to Last', text: 'A solid base under every pour.', icon: 'shield' },
      { title: 'First Impressions', text: 'A clean driveway changes how a home looks from the street.', icon: 'home' },
      { title: 'Safety', text: 'Eliminate cracks, heaves, and trip hazards.', icon: 'check' },
    ],
    gallery: ['houseStone', 'houseBrick', 'siteCrew'],
    faqs: [
      { q: 'How soon can I drive on a new concrete driveway?', a: 'Concrete needs time to cure. We’ll give you specific guidance for your driveway when the work is done.' },
    ],
    cta: { heading: 'Time for a new driveway?', label: 'Get a Driveway Quote', service: 'Driveway' },
    projectCategory: 'concrete',
    related: ['concrete', 'construction'],
  },

  // ───────────────────────── STORM & INSURANCE ─────────────────────────
  {
    slug: 'storm-damage',
    name: 'Storm Damage',
    title: 'Storm Damage? We Can Help.',
    eyebrow: 'Storm Damage',
    summary: 'Storm damage inspections, emergency repairs, and restoration for roofs, siding, and gutters.',
    image: 'storm',
    intro: [
      'After a storm, it can be hard to know what’s damaged and what to do first. Wind, hail, and falling limbs can damage roofs, siding, and gutters in ways that aren’t always visible from the ground.',
      'Manns Construction & Roofing inspects the property, documents the damage, explains the recommended repairs, and completes the restoration work.',
    ],
    includesHeading: 'Storm damage we handle',
    includes: [
      'Storm damage inspection',
      'Roof damage',
      'Siding damage',
      'Gutter damage',
      'Emergency repairs',
      'Insurance restoration',
    ],
    process: [
      { title: 'Contact Us', text: 'Call 912-246-9486 or submit the online form.', icon: 'phone' },
      { title: 'Schedule an Inspection', text: 'We evaluate the property.', icon: 'calendar' },
      { title: 'Document the Damage', text: 'Damage is documented with photos and inspection information.', icon: 'camera' },
      { title: 'Discuss Restoration', text: 'We explain the recommended repairs.', icon: 'clipboard' },
      { title: 'Restoration', text: 'Approved repairs and restoration work are completed.', icon: 'hammer' },
    ],
    benefits: [
      { title: 'Fast Response', text: 'We prioritize active leaks and urgent damage.', icon: 'clock' },
      { title: 'Photo Documentation', text: 'Clear records of what was damaged.', icon: 'camera' },
      { title: 'One Contractor', text: 'Roof, siding, and gutters restored by one team.', icon: 'check' },
    ],
    gallery: ['roofTearOff', 'sidingCrew', 'roofer'],
    faqs: [
      { q: 'What should I do right after a storm?', a: 'Make sure everyone is safe, take photos of any visible damage from the ground, and avoid climbing on the roof. Then call us to schedule an inspection.' },
      { q: 'Will my insurance cover the damage?', a: 'Coverage depends on your policy and is decided by your insurance company. We can help document damage and guide you through the restoration process.' },
      { q: 'Can you make temporary repairs?', a: 'If there’s active water intrusion, we’ll do what we can to protect your home until permanent repairs can be made.' },
    ],
    cta: {
      heading: 'Storm damage? Get it inspected.',
      label: 'Request a Storm Inspection',
      service: 'Storm Damage',
    },
    notice: INSURANCE_NOTE,
    projectCategory: 'storm-damage',
    related: ['insurance-restoration', 'roof-repair', 'inspections'],
  },
  {
    slug: 'insurance-restoration',
    name: 'Insurance Restoration',
    title: 'Insurance Restoration',
    eyebrow: 'Storm Damage · Insurance',
    summary: 'Property damage inspection, storm damage documentation, and restoration planning to support your insurance claim.',
    image: 'siteInspection',
    intro: [
      'Dealing with property damage and an insurance claim at the same time can be stressful. We can help document damage and guide you through the restoration process.',
      'We inspect the property, document roof, siding, and gutter damage with photos and inspection notes, and provide the information you need to talk with your insurance company. Once repairs are approved, we complete the restoration work.',
    ],
    includesHeading: 'How we help',
    includes: [
      'Property damage inspection',
      'Storm damage documentation',
      'Roof damage assessment',
      'Siding damage assessment',
      'Gutter damage assessment',
      'Restoration planning',
      'Insurance claim support',
    ],
    benefits: [
      { title: 'Clear Documentation', text: 'Photos and notes you can share with your insurer.', icon: 'camera' },
      { title: 'Plain-Language Guidance', text: 'We explain the restoration process step by step.', icon: 'clipboard' },
      { title: 'Complete Restoration', text: 'Approved work completed by one licensed & insured team.', icon: 'hammer' },
    ],
    gallery: ['roofer', 'houseBlueRoof', 'sidingCrew'],
    faqs: [
      { q: 'Can you guarantee my claim will be approved?', a: 'No contractor can. Claim decisions are made by your insurance company based on your policy. What we can do is document the damage thoroughly and help you understand the restoration process.' },
      { q: 'Do you work with my insurance company?', a: 'We can provide inspection documentation and restoration estimates, and help you understand what’s needed for the repair.' },
      { q: 'Should I call my insurance company or a contractor first?', a: 'Many homeowners find it helpful to have the damage inspected and documented first. Review your policy and contact your insurer about reporting requirements.' },
    ],
    cta: { heading: 'Schedule a damage inspection.', label: 'Schedule an Inspection', service: 'Insurance Restoration' },
    notice: INSURANCE_NOTE,
    projectCategory: 'storm-damage',
    related: ['storm-damage', 'inspections', 'roofing'],
  },
  {
    slug: 'inspections',
    name: 'Inspections',
    title: 'Inspections & Damage Assessments',
    eyebrow: 'Inspections',
    summary: 'Roof inspections, storm damage inspections, exterior inspections, and property damage assessments.',
    image: 'siteInspection',
    intro: [
      'Not sure what condition your roof or exterior is in? An inspection gives you facts instead of guesses.',
      'We inspect roofs, siding, gutters, and exterior components, document what we find with photos, and give you straightforward recommendations.',
    ],
    includesHeading: 'Inspection types',
    includes: ['Roof inspections', 'Storm damage inspections', 'Exterior inspections', 'Property damage assessments', 'Storm damage documentation'],
    subservices: [
      { title: 'Roof Inspections', text: 'Condition of shingles or metal, flashing, vents, and drainage.', href: '/roof-inspections', icon: 'roof' },
      { title: 'Storm Damage Inspections', text: 'Hail, wind, and impact damage after severe weather.', href: '/storm-damage', icon: 'storm' },
      { title: 'Exterior Inspections', text: 'Siding, gutters, trim, and exterior components.', href: '/siding', icon: 'home' },
      { title: 'Property Damage Assessments', text: 'Documented assessments to support restoration planning.', href: '/insurance-restoration', icon: 'clipboard' },
    ],
    benefits: [
      { title: 'Photo Documentation', text: 'See exactly what we see.', icon: 'camera' },
      { title: 'Honest Findings', text: 'No pressure, no scare tactics.', icon: 'check' },
      { title: 'Clear Next Steps', text: 'Know what needs attention now and what can wait.', icon: 'clipboard' },
    ],
    gallery: ['roofer', 'hardHats', 'roofOld'],
    faqs: [
      { q: 'How do I schedule an inspection?', a: 'Call 912-246-9486 or use the online form and choose “Inspection.” We’ll contact you to set a time.' },
    ],
    cta: { heading: 'Schedule an inspection.', label: 'Schedule an Inspection', service: 'Inspection' },
    projectCategory: 'storm-damage',
    related: ['roof-inspections', 'storm-damage', 'insurance-restoration'],
  },

  // ───────────────────────── EQUIPMENT (pending) ─────────────────────────
  // TODO: owner to confirm exact equipment services before publishing specific claims.
  {
    slug: 'equipment-services',
    name: 'Equipment Services',
    title: 'Equipment Services & Site Work',
    eyebrow: 'Equipment Services',
    summary: 'Equipment services, construction equipment support, site work, and property preparation.',
    image: 'excavators',
    intro: [
      'In addition to roofing and construction, Manns Construction & Roofing offers equipment services, construction equipment support, site work, and property preparation.',
      'Every property and project is different. Call us to discuss what you need and we’ll let you know how we can help.',
    ],
    includes: ['Equipment services', 'Construction equipment support', 'Site work', 'Property preparation'],
    benefits: [
      { title: 'One Call', text: 'Site work and construction from the same contractor.', icon: 'phone' },
      { title: 'Licensed & Insured', text: 'Professional work on your property.', icon: 'shield' },
    ],
    gallery: ['excavators', 'hardHats', 'siteCrew'],
    faqs: [
      { q: 'What equipment services do you offer?', a: 'Call 912-246-9486 to talk through your project and we’ll let you know how we can help.' },
    ],
    cta: { heading: 'Need site work or equipment support?', label: 'Contact Us', service: 'Other' },
    projectCategory: 'construction',
    related: ['construction', 'pole-barns', 'concrete'],
    pending: true,
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

// Homepage / services-overview categories, per the PDR.
export type Category = { name: string; href: string; image: ImageKey; text: string; items: { label: string; href?: string }[] };

export const CATEGORIES: Category[] = [
  {
    name: 'Roofing',
    href: '/roofing',
    image: 'roofer',
    text: 'Installation, replacement, repair, and maintenance for shingle and metal roofs.',
    items: [
      { label: 'Roof Installation', href: '/roof-replacement' },
      { label: 'Roof Replacement', href: '/roof-replacement' },
      { label: 'Roof Repair', href: '/roof-repair' },
      { label: 'Roof Inspections', href: '/roof-inspections' },
      { label: 'Shingle Roofing', href: '/roofing' },
      { label: 'Metal Roofing', href: '/roofing' },
      { label: 'Roof Maintenance', href: '/roofing' },
      { label: 'Leak Repair', href: '/roof-repair' },
    ],
  },
  {
    name: 'Siding',
    href: '/siding',
    image: 'sidingCrew',
    text: 'New siding, replacement, and repairs that protect and transform your exterior.',
    items: [{ label: 'Siding Installation' }, { label: 'Siding Replacement' }, { label: 'Siding Repair' }, { label: 'Exterior Upgrades' }],
  },
  {
    name: 'Gutters',
    href: '/gutters',
    image: 'houseWhite',
    text: 'Gutter systems that carry water safely away from your roof, siding, and foundation.',
    items: [{ label: 'Gutter Installation' }, { label: 'Gutter Replacement' }, { label: 'Gutter Cleaning' }, { label: 'Gutter Repairs' }, { label: 'Downspouts' }],
  },
  {
    name: 'Construction',
    href: '/construction',
    image: 'framing',
    text: 'Additions, remodeling, decks, pole barns, and exterior construction.',
    items: [
      { label: 'Home Additions', href: '/home-additions' },
      { label: 'Remodeling', href: '/remodeling' },
      { label: 'Deck Construction', href: '/decks' },
      { label: 'Deck Repair', href: '/decks' },
      { label: 'Pole Barns', href: '/pole-barns' },
      { label: 'Exterior Construction', href: '/construction' },
      { label: 'Structural Improvements', href: '/construction' },
    ],
  },
  {
    name: 'Concrete & Driveways',
    href: '/concrete',
    image: 'houseStone',
    text: 'Driveways, walkways, patios, slabs, and concrete repair.',
    items: [
      { label: 'Concrete Driveways', href: '/driveways' },
      { label: 'Driveway Replacement', href: '/driveways' },
      { label: 'Concrete Walkways' },
      { label: 'Patios' },
      { label: 'Slabs' },
      { label: 'Concrete Repair' },
    ],
  },
  {
    name: 'Storm Damage',
    href: '/storm-damage',
    image: 'storm',
    text: 'Inspections, emergency repairs, and restoration after severe weather.',
    items: [
      { label: 'Storm Damage Inspection' },
      { label: 'Roof Damage' },
      { label: 'Siding Damage' },
      { label: 'Gutter Damage' },
      { label: 'Emergency Repairs' },
      { label: 'Insurance Restoration', href: '/insurance-restoration' },
    ],
  },
  {
    name: 'Inspections & Insurance',
    href: '/inspections',
    image: 'siteInspection',
    text: 'Documented inspections and guidance through the restoration process.',
    items: [
      { label: 'Roof Inspections', href: '/roof-inspections' },
      { label: 'Property Damage Inspections' },
      { label: 'Storm Damage Documentation' },
      { label: 'Insurance Claim Assistance', href: '/insurance-restoration' },
      { label: 'Restoration Services', href: '/insurance-restoration' },
    ],
  },
  {
    name: 'Equipment Services',
    href: '/equipment-services',
    image: 'excavators',
    text: 'Equipment services, site work, and property preparation.',
    items: [{ label: 'Equipment Services' }, { label: 'Construction Equipment Support' }, { label: 'Site Work' }, { label: 'Property Preparation' }],
  },
];
