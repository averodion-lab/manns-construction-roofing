import type { ImageKey } from './images';

export const PROJECT_CATEGORIES = [
  { id: 'roofing', label: 'Roofing' },
  { id: 'siding', label: 'Siding' },
  { id: 'gutters', label: 'Gutters' },
  { id: 'construction', label: 'Construction' },
  { id: 'decks', label: 'Decks' },
  { id: 'pole-barns', label: 'Pole Barns' },
  { id: 'concrete', label: 'Concrete' },
  { id: 'storm-damage', label: 'Storm Damage' },
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number]['id'];

export type Project = {
  title: string;
  category: ProjectCategory;
  description: string;
  images: ImageKey[]; // first image is the cover
  before?: ImageKey; // optional before/after pair (after = images[0])
};

// TODO: replace with real Manns Construction & Roofing projects. These entries use
// representative stock photos and generic descriptions — no invented locations or claims.
export const PROJECTS: Project[] = [
  { title: 'Shingle Roof Replacement', category: 'roofing', description: 'Full tear-off and new architectural shingle roof.', images: ['roofer', 'roofTearOff'] },
  { title: 'Roof Repair & Re-Flash', category: 'roofing', description: 'Damaged shingles replaced and flashing resealed.', images: ['roofTearOff', 'roofer'] },
  { title: 'New Roof — Two-Story Home', category: 'roofing', description: 'Complete roof system with new ventilation.', images: ['houseBlueRoof', 'houseDusk'] },
  { title: 'Exterior Siding Replacement', category: 'siding', description: 'Old siding removed and new siding installed.', images: ['sidingCrew', 'housePorch'] },
  { title: 'Siding & Trim Refresh', category: 'siding', description: 'Siding, trim, and porch details updated.', images: ['housePorch', 'houseWhite'] },
  { title: 'Seamless Gutter Installation', category: 'gutters', description: 'New gutters and downspouts around the full home.', images: ['houseWhite', 'houseBrick'] },
  { title: 'Home Addition Framing', category: 'construction', description: 'New addition framed and tied into the existing roofline.', images: ['framing', 'framingBuilding'] },
  { title: 'Interior Remodel', category: 'construction', description: 'Kitchen and living space remodel.', images: ['kitchen', 'interiorLoft'] },
  { title: 'Raised Wood Deck', category: 'decks', description: 'New raised deck with stairs and railings.', images: ['houseDeck', 'carpenter'] },
  { title: 'Pole Barn with Metal Roof', category: 'pole-barns', description: 'Outbuilding with metal roofing for storage.', images: ['redBarn', 'field'] },
  { title: 'Concrete Driveway', category: 'concrete', description: 'Old driveway removed and new concrete poured.', images: ['houseStone', 'houseBrick'] },
  { title: 'Slab Pour', category: 'concrete', description: 'Reinforced slab poured for a new structure.', images: ['rebar', 'siteCrew'] },
  { title: 'Storm Damage Restoration', category: 'storm-damage', description: 'Wind-damaged roof inspected, documented, and restored.', images: ['roofTearOff', 'roofOld'] },
];
