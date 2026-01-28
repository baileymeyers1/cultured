// Category types
export type ConsumableCategory = 'whiskey' | 'coffee' | 'wine' | 'tea' | 'cheese' | 'beer' | 'cigars';
export type CulturalCategory = 'music' | 'art' | 'fashion' | 'literature' | 'film' | 'theater';
export type Category = ConsumableCategory | CulturalCategory;

// Universal coordinates for cross-category taste map
export interface UniversalCoords {
  x: number;  // 0=light/clean, 100=dark/heavy
  y: number;  // 0=bright/crisp, 100=deep/savory
}

// Base entry interface
export interface BaseEntry {
  id: string;
  name: string;
  category: Category;
  subcategory: string;
  image: string;
  description: string;
  price: string;
}

// Wine-specific entry
export interface WineEntry extends BaseEntry {
  category: 'wine';
  type: string;
  origin: string;
  about: string;
  flavorProfile: {
    body: number;      // 0-100 (light to full)
    sweetness: number; // 0-100 (dry to sweet)
  };
  specifications: {
    body: string;
    tannins: string;
    acidity: string;
    alcohol: string;
    agingPotential: string;
  };
  tastingNotes: string;
  pairings: string[];
  history: string;
  servingRecommendation: string;
  universalCoords: UniversalCoords;
}

// Whiskey-specific entry
export interface WhiskeyEntry extends BaseEntry {
  category: 'whiskey';
  type: string;
  origin: string;
  about: string;
  flavorProfile: {
    smoke: number;      // 0-100 (light/clean to heavily peated/smoky)
    sweetness: number;  // 0-100 (dry/spicy to sweet/rich)
  };
  specifications: {
    abv: string;
    age: string;
    caskType: string;
    region: string;
  };
  tastingNotes: string;
  pairings: string[];
  history: string;
  servingRecommendation: string;
  universalCoords: UniversalCoords;
}

// Coffee-specific entry
export interface CoffeeEntry extends BaseEntry {
  category: 'coffee';
  type: string;
  origin: string;
  about: string;
  flavorProfile: {
    roast: number;           // 0-100 (light roast to dark roast)
    acidity: number;         // 0-100 (bright/acidic to smooth/low acid)
    flavorCharacter: number; // 0-100 (0=fruity/floral, 100=chocolate/nutty)
  };
  specifications: {
    roastLevel: string;
    altitude: string;
    process: string;
    variety: string;
  };
  tastingNotes: string;
  pairings: string[];
  history: string;
  servingRecommendation: string;
  universalCoords: UniversalCoords;
}

// Tea-specific entry
export interface TeaEntry extends BaseEntry {
  category: 'tea';
  type: string;
  origin: string;
  about: string;
  flavorProfile: {
    body: number;       // 0-100 (delicate/floral to robust/malty)
    oxidation: number;  // 0-100 (green/unoxidized to black/fully oxidized)
  };
  specifications: {
    oxidationLevel: string;
    caffeineLevel: string;
    brewTemp: string;
    steepTime: string;
  };
  tastingNotes: string;
  pairings: string[];
  history: string;
  servingRecommendation: string;
  universalCoords: UniversalCoords;
}

// Cheese-specific entry
export interface CheeseEntry extends BaseEntry {
  category: 'cheese';
  type: string;
  origin: string;
  about: string;
  flavorProfile: {
    intensity: number;  // 0-100 (mild/delicate to strong/pungent)
    texture: number;    // 0-100 (soft/creamy to hard/aged)
  };
  specifications: {
    milkType: string;
    rind: string;
    aging: string;
    region: string;
  };
  tastingNotes: string;
  pairings: string[];
  history: string;
  servingRecommendation: string;
  universalCoords: UniversalCoords;
}

// Beer-specific entry
export interface BeerEntry extends BaseEntry {
  category: 'beer';
  type: string;
  origin: string;
  about: string;
  flavorProfile: {
    bitterness: number;  // 0-100 (low IBU/malty to high IBU/hoppy)
    body: number;        // 0-100 (light/crisp to full/heavy)
  };
  specifications: {
    abv: string;
    ibu: string;
    style: string;
    brewery: string;
  };
  tastingNotes: string;
  pairings: string[];
  history: string;
  servingRecommendation: string;
  universalCoords: UniversalCoords;
}

// User data for ratings, notes, and collections
export interface UserEntryData {
  rating?: number;         // 1-5
  notes?: string;
  status?: 'wishlist' | 'tried' | null;
  updatedAt: string;
}

export interface UserData {
  [entryId: string]: UserEntryData;
}

// Category metadata
export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
  icon: string;
  entryCount: number;
  isActive: boolean;
  scatterplotAxes?: {
    xLabel: string;
    yLabel: string;
  };
}

// Filter state
export interface FilterState {
  subcategories: string[];
  priceRange: [number, number] | null;
  rating: number | null;
  status: 'wishlist' | 'tried' | null;
  searchQuery: string;
}

// Sort options
export type SortOption = 'name' | 'rating' | 'price' | 'subcategory';
export type SortDirection = 'asc' | 'desc';

export interface SortState {
  by: SortOption;
  direction: SortDirection;
}
