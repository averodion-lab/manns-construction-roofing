// Central image map. Stock photos (Unsplash) are placeholders — swap `src` for real
// Manns project photos (e.g. '/images/roof-01.jpg' in /public) without touching pages.
export type ImageKey = keyof typeof IMAGES;

type Img = { src: string; alt: string };

const unsplash = (id: string, alt: string): Img => ({
  src: `https://images.unsplash.com/photo-${id}`,
  alt,
});

export const IMAGES = {
  roofer: unsplash('1635424710928-0544e8512eae', 'Roofer in a safety harness working on an asphalt shingle roof'),
  roofTearOff: unsplash('1632759145351-1d592919f522', 'Roofer standing on a roof during a shingle tear-off'),
  roofOld: unsplash('1572120360610-d971b9d7767c', 'Older home with a weathered shingle roof'),
  houseBlueRoof: unsplash('1449844908441-8829872d2607', 'Two-story home with a blue-gray roof in morning light'),
  houseDusk: unsplash('1568605114967-8130f3a36994', 'Craftsman-style home with a steep roof at dusk'),
  housePorch: unsplash('1625602812206-5ec545ca1231', 'Newly finished home with a covered front porch and siding'),
  houseWhite: unsplash('1570129477492-45c003edd2be', 'White farmhouse with wraparound porch and gutters'),
  houseBrick: unsplash('1592595896551-12b371d546d5', 'Brick home with a manicured lawn and walkway'),
  houseStone: unsplash('1605276374104-dee2a0ed3cd6', 'Stone home with a wide concrete driveway'),
  houseDeck: unsplash('1558036117-15d82a90b9b1', 'Wood home with a large raised deck at sunset'),
  redBarn: unsplash('1518780664697-55e3ad937233', 'Small red-roofed outbuilding in an open field'),
  field: unsplash('1500382017468-9049fed747ef', 'Open rural field at sunrise'),
  sidingCrew: unsplash('1574359411659-15573a27fd0c', 'Crew on ladders working on exterior siding'),
  framing: unsplash('1587582423116-ec07293f0395', 'Carpenter working on wood wall framing'),
  framingBuilding: unsplash('1508450859948-4e04fabaa4ea', 'Building under construction with exposed framing'),
  carpenter: unsplash('1589939705384-5185137a7f0f', 'Carpenter measuring lumber on a job site'),
  blueprints: unsplash('1503387762-592deb58ef4e', 'Contractor reviewing construction plans'),
  siteInspection: unsplash('1591588582259-e675bd2e6088', 'Two contractors in hard hats inspecting a job site'),
  siteCrew: unsplash('1541888946425-d81bb19240f5', 'Construction crew on a large concrete slab'),
  rebar: unsplash('1504307651254-35680f356dfd', 'Workers placing rebar before a concrete pour'),
  hardHats: unsplash('1626885930974-4b69aa21bbf9', 'Two workers in hard hats reviewing a site'),
  excavators: unsplash('1517089596392-fb9a9033e05b', 'Excavators and loaders doing site work'),
  kitchen: unsplash('1484154218962-a197022b5858', 'Remodeled kitchen with white cabinets'),
  interiorLoft: unsplash('1590725140246-20acdee442be', 'Open interior with exposed wood beams'),
  insulation: unsplash('1607400201889-565b1ee75f8e', 'Installer fitting insulation between wall studs'),
  storm: unsplash('1527482797697-8795b05a13fe', 'Severe storm with a funnel cloud over open land'),
  tools: unsplash('1426927308491-6380b6a9936f', 'Wall of hand tools in a workshop'),
  excavatorClose: unsplash('1580901368919-7738efb0f87e', 'Excavator working on a rocky site'),
  excavatorSite: unsplash('1626249893774-e1e0b3a49f4c', 'Excavator and loader on a cleared work site'),
  siteMachines: unsplash('1503708928676-1cb796a0891e', 'Excavator and loader grading land'),
  forest: unsplash('1448375240586-882707db888b', 'Dense wooded land with heavy undergrowth'),
  bigTree: unsplash('1502082553048-f009c37129b9', 'Large mature tree in an open field'),
  demoInterior: unsplash('1517581177682-a085bb7ffb15', 'Interior room stripped down to the studs during demolition'),
  paintRoller: unsplash('1562259949-e8e7689d7828', 'Paint roller applying fresh paint to a wall'),
  paintedRoom: unsplash('1615873968403-89e068629265', 'Living room with a freshly painted deep green accent wall'),
  floorRoom: unsplash('1581858726788-75bc0f6a952d', 'Bright room with new light wood flooring'),
  floorDining: unsplash('1560185007-cde436f6a4d0', 'Dining area with hardwood floors'),
  bathroom: unsplash('1584622650111-993a426fbf0a', 'Renovated bathroom with glass shower and new vanity'),
  bathroomTub: unsplash('1620626011761-996317b8d101', 'Modern bathroom with a freestanding tub'),
  vanity: unsplash('1595514535415-dae8580c416c', 'Custom wood vanity with double vessel sinks'),
  kitchenWhite: unsplash('1507089947368-19c1da9775ae', 'Custom white kitchen with island and pendant lights'),
  kitchenDark: unsplash('1588854337236-6889d631faa8', 'Custom kitchen with dark cabinets and stone countertops'),
} satisfies Record<string, Img>;

const WIDTHS = [480, 800, 1200, 1800, 2400];

export function imgSrc(key: ImageKey, w = 1200, h?: number) {
  const { src } = IMAGES[key];
  if (!src.startsWith('https://images.unsplash.com')) return src;
  return `${src}?auto=format&fit=crop&q=70&w=${w}${h ? `&h=${h}` : ''}`;
}

export function imgSrcset(key: ImageKey, max = 2400) {
  const { src } = IMAGES[key];
  if (!src.startsWith('https://images.unsplash.com')) return undefined;
  return WIDTHS.filter((w) => w <= max)
    .map((w) => `${imgSrc(key, w)} ${w}w`)
    .join(', ');
}
