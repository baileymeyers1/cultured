# Cultured - Product Requirements Document

## Overview

**Cultured** is a personal learning and exploration static web application for discovering and cataloging refined experiences across 12 cultural categories. It serves as a personal journal, reference database, and discovery tool for whiskey, coffee, wine, tea, cheese, beer, music, art, fashion, literature, film, and theater.

---

## Tech Stack & Infrastructure

| Component | Technology |
|-----------|------------|
| Framework | React + Vite |
| Hosting | Vercel |
| Data Storage | JSON files (committed to repo) |
| Styling | CSS Modules or Tailwind CSS |
| Charts | D3.js or Recharts (scatterplots) |
| Timeline | vis-timeline or custom React component |
| Routing | React Router |

---

## Categories

### Consumables (Scatterplot Visualization)
1. **Whiskey**
2. **Coffee**
3. **Wine**
4. **Tea**
5. **Cheese**
6. **Beer**

### Cultural (Timeline Visualization)
7. **Music**
8. **Art**
9. **Fashion**
10. **Literature**
11. **Film**
12. **Theater**

---

## Design System

### Color Palette: Cream & Espresso

| Token | Color | Usage |
|-------|-------|-------|
| `--bg-primary` | `#FFFDF7` | Ivory/cream page background |
| `--bg-secondary` | `#F5F0E8` | Card backgrounds, subtle sections |
| `--text-primary` | `#2C1810` | Deep espresso brown for body text |
| `--text-secondary` | `#5C4033` | Medium brown for secondary text |
| `--accent-gold` | `#C9A962` | Gold highlights, interactive elements |
| `--accent-copper` | `#B87333` | Hover states, links |
| `--border` | `#E0D5C5` | Subtle warm borders |

### Typography: Elegant Humanist

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Headings | EB Garamond | 500-600 | 1.5-3rem |
| Body | Lora | 400 | 1rem |
| Labels/UI | Lora | 500 | 0.875rem |
| Data/Numbers | Lora | 400 | 0.875rem |

### Design Principles
- Refined, editorial aesthetic
- Generous whitespace
- Subtle shadows and borders
- Smooth transitions and micro-interactions
- Warm, inviting atmosphere

---

## Data Architecture

### Base Schema (All Entries)

```json
{
  "id": "string (unique)",
  "name": "string",
  "category": "string",
  "subcategory": "string",
  "image": "string (path to image)",
  "description": "string",
  "price": "string (price range or specific)",
  "userRating": "number (1-5, nullable)",
  "userNotes": "string (nullable)",
  "status": "enum: 'wishlist' | 'tried' | null",
  "createdAt": "ISO date",
  "updatedAt": "ISO date"
}
```

### Consumable Entry Schema (Whiskey, Coffee, Wine, Tea, Cheese, Beer)

Based on Wine_Database.xlsx structure:

```json
{
  // ...base fields
  "type": "string (e.g., 'Red - Bordeaux Blend')",
  "origin": "string (location/region)",
  "about": "string (producer/brand description)",
  "producer": "string",

  // Flavor Profile (for scatterplot positioning)
  "flavorProfile": {
    "axis1Value": "number (0-100)",
    "axis2Value": "number (0-100)",
    "attributes": ["string array of flavor notes"]
  },

  // Category-specific fields
  "specifications": {
    // Wine: body, tannins, acidity, alcohol, agingPotential
    // Whiskey: abv, age, caskType, region
    // Coffee: roast, origin, altitude, process
    // Tea: oxidation, caffeine, brewTemp, steepTime
    // Cheese: milk, texture, rind, aged
    // Beer: abv, ibu, style, brewery
  },

  "tastingNotes": "string",
  "pairings": ["string array"],
  "history": "string",
  "servingRecommendation": "string",
  "productionMethod": "string",
  "similarItems": ["string array of IDs"],
  "whereToBuy": ["string array of retailers/links"]
}
```

### Cultural Entry Schema (Music, Art, Fashion, Literature, Film, Theater)

```json
{
  // ...base fields
  "title": "string",
  "creator": "string (artist, author, director, etc.)",
  "year": "number",
  "era": "string (movement/period)",
  "medium": "string (category-specific)",

  // Timeline positioning
  "timelineData": {
    "startYear": "number",
    "endYear": "number (nullable, for periods)",
    "eraId": "string (links to era definition)"
  },

  "historicalContext": "string",
  "influences": ["string array"],
  "keyThemes": ["string array"],
  "relatedWorks": ["string array of IDs"],
  "whereToExperience": ["string array"],
  "criticalReception": "string",

  // Category-specific
  "specifications": {
    // Music: genre, album, label, runtime
    // Art: medium, dimensions, currentLocation
    // Fashion: designer, collection, materials
    // Literature: genre, pages, publisher
    // Film: runtime, director, studio, cast
    // Theater: playwright, premiere, venue
  }
}
```

### Era/Movement Schema (for Timeline backgrounds)

```json
{
  "id": "string",
  "name": "string",
  "category": "string",
  "startYear": "number",
  "endYear": "number",
  "color": "string (hex)",
  "description": "string"
}
```

### Glossary Term Schema

```json
{
  "id": "string",
  "term": "string",
  "pronunciation": "string (optional, e.g., 'tah-NIN')",
  "definition": "string",
  "category": "string",
  "relatedTerms": ["string array of term IDs"],
  "seeAlso": ["string array of entry IDs"]
}
```

---

## Scatterplot Axes (Research-Based)

### Whiskey
- **X-Axis**: Smoky/Peaty ←→ Light/Clean
- **Y-Axis**: Sweet/Rich ←→ Dry/Spicy

### Wine
- **X-Axis**: Light Body ←→ Full Body
- **Y-Axis**: Dry ←→ Sweet

### Coffee
- **X-Axis**: Light Roast ←→ Dark Roast
- **Y-Axis**: Bright/Acidic ←→ Smooth/Low Acid

### Tea
- **X-Axis**: Delicate/Floral ←→ Robust/Malty
- **Y-Axis**: Oxidation Level (Green ←→ Black)

### Cheese
- **X-Axis**: Mild ←→ Strong/Pungent
- **Y-Axis**: Soft ←→ Hard

### Beer
- **X-Axis**: Light/Crisp ←→ Heavy/Malty
- **Y-Axis**: Bitter (IBU) ←→ Sweet

---

## Features & Functionality

### Navigation

**Homepage Grid Layout**
- 12 category cards in a responsive grid (4x3 desktop, 2x6 tablet, 1x12 mobile)
- Each card shows category icon, name, and entry count
- Hover effect reveals sample image carousel
- Click navigates to category page

### Category Page Layout

```
┌─────────────────────────────────────────────────────────────┐
│  Category Header (Title, Description, Stats)                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Scatterplot / Timeline Visualization               │   │
│  │  (Interactive, clickable data points)               │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Filter Bar: [Subcategory ▼] [Price ▼] [Rating ▼] [Search] │
├─────────────────────────────────────────────────────────────┤
│  Sort: [A-Z] [Rating] [Price] [Subcategory]                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─── Subcategory 1 ─────────────────────────────────────┐ │
│  │ [Entry Card] [Entry Card] [Entry Card] [Entry Card]   │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌─── Subcategory 2 ─────────────────────────────────────┐ │
│  │ [Entry Card] [Entry Card] [Entry Card]                │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Scatterplot Interaction
- **Hover**: Tooltip preview with image, name, price, rating
- **Click**: Navigate to full entry page
- **Visual Filtering**: Click and drag to select region, filters list below
- **Zoom/Pan**: Support for dense data exploration

### Timeline Interaction
- **Background Bands**: Era/movements as colored horizontal bands
- **Data Points**: Individual works plotted on timeline
- **Hover**: Tooltip with work details
- **Click Era**: Filter list to show only items from that era
- **Click Point**: Navigate to entry page
- **Zoom**: Scroll to zoom in/out on timeline

### Entry Page Layout

```
┌─────────────────────────────────────────────────────────────┐
│  ← Back to [Category]                                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐  ┌─────────────────────────────────────┐ │
│  │              │  │  Name / Title                        │ │
│  │    IMAGE     │  │  Subcategory • Origin/Year          │ │
│  │              │  │  ★★★★☆ (Your Rating)                │ │
│  │              │  │  $$ Price Range                      │ │
│  └──────────────┘  │                                     │ │
│                    │  [♡ Wishlist] [✓ Tried] [Compare]   │ │
│                    └─────────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  About                                                      │
│  Lorem ipsum dolor sit amet...                              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Specifications              │  Flavor Profile / Position   │
│  • Body: Full                │  [Mini scatterplot showing   │
│  • Tannins: High             │   this item's position]      │
│  • Acidity: Medium           │                              │
│  • ABV: 14%                  │                              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Tasting Notes                                              │
│  Blackcurrant, cedar, tobacco...                            │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Pairings                    │  History                     │
│  • Lamb                      │  Established in 1855...      │
│  • Aged cheese               │                              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Your Notes                                                 │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Personal notes textarea...                          │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Similar Items                                              │
│  [Card] [Card] [Card]                                       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  Where to Buy / Experience                                  │
│  • Retailer 1                                               │
│  • Retailer 2                                               │
└─────────────────────────────────────────────────────────────┘
```

### Filtering & Search

**Advanced Filters**
- Subcategory (multi-select)
- Price range (slider)
- Rating (stars)
- Flavor attributes (for consumables)
- Origin/region
- Era/movement (for cultural)

**Visual Filtering**
- Click on scatterplot region to filter list
- Click on timeline era to filter list
- Clear selection to show all

**Full-Text Search**
- Search across name, description, notes, and all text fields
- Highlight matching terms in results

### Collections: Wishlist + Tried

- **Wishlist**: Items you want to try
- **Tried**: Items you've experienced
- Toggle buttons on entry pages and list cards
- Dedicated views to see all wishlist/tried items
- Filter by collection status

### Personal Data

**Ratings**
- 1-5 star rating on each entry
- Click to rate, click again to change
- Optional - can leave unrated

**Notes**
- Free-form text area on each entry page
- Auto-saves as you type
- Visible only to you

**Persistence**
- All personal data (ratings, notes, collections) stored in localStorage
- Export function: Download as JSON file
- Import function: Upload JSON to restore data
- Data includes timestamp for merge conflict resolution

### Additional Features

**Random Discovery ("Surprise Me")**
- Button on homepage and category pages
- Opens random entry from current category (or any category from home)
- Optional filters (e.g., "Surprise me with something from my wishlist")

**Comparison View**
- Select 2-3 items to compare
- Side-by-side layout showing:
  - Images
  - Key specifications
  - Flavor profiles (mini scatterplot overlay)
  - Prices
  - Your ratings
- Access via checkbox selection in list view or "Compare" button on entry pages

**Print-Friendly Styles**
- Clean print stylesheet
- Option to print:
  - Single entry as reference card
  - Category list as checklist
  - Comparison as side-by-side reference
- Hide navigation, buttons, and interactive elements in print

**Glossary**
- Each category has its own glossary of terms
- Accessible from category page header
- Terms include definition, pronunciation (where applicable), and related terms
- Terms in entry descriptions can be clickable to show definition tooltip

**Share Link**
- Copy link button on entry pages
- Generates clean URL for sharing
- Shared links work without personal data (ratings, notes, collections)

---

## File Structure

```
cultured/
├── public/
│   └── images/
│       ├── whiskey/
│       ├── coffee/
│       ├── wine/
│       ├── tea/
│       ├── cheese/
│       ├── beer/
│       ├── music/
│       ├── art/
│       ├── fashion/
│       ├── literature/
│       ├── film/
│       └── theater/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Card.tsx
│   │   │   ├── FilterBar.tsx
│   │   │   ├── RatingStars.tsx
│   │   │   ├── Tooltip.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── visualization/
│   │   │   ├── Scatterplot.tsx
│   │   │   ├── Timeline.tsx
│   │   │   └── MiniScatterplot.tsx
│   │   └── features/
│   │       ├── ComparisonView.tsx
│   │       ├── RandomDiscovery.tsx
│   │       └── ExportImport.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Category.tsx
│   │   ├── Entry.tsx
│   │   ├── Collections.tsx
│   │   └── Compare.tsx
│   ├── data/
│   │   ├── whiskey.json
│   │   ├── coffee.json
│   │   ├── wine.json
│   │   ├── tea.json
│   │   ├── cheese.json
│   │   ├── beer.json
│   │   ├── music.json
│   │   ├── art.json
│   │   ├── fashion.json
│   │   ├── literature.json
│   │   ├── film.json
│   │   ├── theater.json
│   │   ├── eras/
│   │   │   ├── music-eras.json
│   │   │   ├── art-eras.json
│   │   │   └── ...
│   │   └── glossaries/
│   │       ├── whiskey-glossary.json
│   │       ├── coffee-glossary.json
│   │       ├── wine-glossary.json
│   │       └── ...
│   ├── hooks/
│   │   ├── useLocalStorage.ts
│   │   ├── useFilters.ts
│   │   └── useUserData.ts
│   ├── utils/
│   │   ├── dataTransform.ts
│   │   ├── exportImport.ts
│   │   └── search.ts
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   ├── print.css
│   │   └── components/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## Data Scale

**Initial Scope**: 50-100 entries per category

| Category | Target Entries | Subcategories |
|----------|---------------|---------------|
| Whiskey | 75 | Scotch, Bourbon, Irish, Japanese, Rye, Canadian |
| Coffee | 60 | Single Origin, Blends, by Region, by Roast |
| Wine | 80 | Red, White, Rosé, Sparkling, Dessert (by region) |
| Tea | 50 | Green, Black, Oolong, White, Herbal, Pu-erh |
| Cheese | 60 | Soft, Semi-soft, Hard, Blue, Fresh (by country) |
| Beer | 70 | Ale, Lager, Stout, IPA, Wheat, Sour, Belgian |
| Music | 80 | By era/movement, by genre |
| Art | 70 | By movement (Renaissance, Impressionism, Modern, etc.) |
| Fashion | 50 | By era, by designer |
| Literature | 80 | By era, by genre |
| Film | 80 | By era, by genre, by country |
| Theater | 50 | By era, by type (drama, musical, etc.) |

**Total**: ~800-900 entries at launch

---

## Content Research & Sourcing

### Approach
All databases will be populated with canonical, well-researched entries from authoritative sources. The focus is on classics, award-winners, and critically acclaimed entries across all categories.

### Consumable Category Sources

| Category | Primary Sources |
|----------|-----------------|
| **Wine** | Wine_Database.xlsx (existing) + Wine Spectator Top 100, Robert Parker ratings, Decanter World Wine Awards, regional appellation guides, sommelier recommendations |
| **Whiskey** | Whisky Advocate ratings, Jim Murray's Whisky Bible, distillery archives, regional guides (Scotch, Bourbon, Japanese, Irish) |
| **Coffee** | Specialty Coffee Association, Coffee Review, Cup of Excellence winners, origin guides |
| **Tea** | World Tea Awards, tea master recommendations, regional guides (Darjeeling, Uji, Taiwan, China) |
| **Cheese** | World Cheese Awards, ACS winners, PDO/DOP protected cheeses, affineur recommendations |
| **Beer** | RateBeer, BeerAdvocate, GABF winners, BJCP style guides, historic breweries |

### Cultural Category Sources

| Category | Primary Sources |
|----------|-----------------|
| **Music** | Rolling Stone lists, Grammy archives, AllMusic guides, genre-specific canons |
| **Art** | Major museum collections, art history canons, auction records, critic consensus |
| **Fashion** | Vogue archives, CFDA/BFC records, costume museum collections, decade retrospectives |
| **Literature** | Nobel/Pulitzer/Booker archives, Modern Library lists, genre-specific canons |
| **Film** | AFI lists, Sight & Sound polls, Oscar archives, Criterion Collection |
| **Theater** | Tony archives, Olivier Awards, RSC/National Theatre repertoire, Broadway/West End history |

### Wine Research Priority
The existing Wine_Database.xlsx will be expanded with additional research to reach 80+ entries covering:
- All major wine regions (Bordeaux, Burgundy, Napa, Barossa, Rioja, Tuscany, etc.)
- Key grape varieties (Cabernet, Pinot Noir, Chardonnay, Riesling, etc.)
- Price range diversity ($20-$500+)
- Mix of investment-grade and accessible everyday wines

---

## Implementation Phases

### Phase 1: Foundation
- [ ] Project setup (Vite, React, TypeScript, routing)
- [ ] Design system implementation (colors, typography, components)
- [ ] Layout components (header, footer, grid)
- [ ] Homepage with category grid
- [ ] Global search component

### Phase 2: Core Data & Pages
- [ ] JSON data structure finalization
- [ ] Wine category fully built as template (using existing Wine_Database.xlsx)
- [ ] Category page layout with list view
- [ ] Entry page layout
- [ ] Subcategory grouping and sorting
- [ ] Copy link sharing

### Phase 3: Visualizations
- [ ] Scatterplot component for consumables
- [ ] Timeline component for cultural categories
- [ ] Tooltip interactions
- [ ] Visual filtering (click to filter)

### Phase 4: Personal Features
- [ ] localStorage integration
- [ ] Rating system
- [ ] Notes functionality
- [ ] Wishlist/Tried collections
- [ ] Export/Import JSON

### Phase 5: Advanced Features
- [ ] Advanced filtering system
- [ ] Full-text search (global + category)
- [ ] Comparison view (same category only)
- [ ] Random discovery
- [ ] Print styles
- [ ] Glossary system

### Phase 6A: Consumables Content (MVP Launch)
- [ ] Wine database (expand existing xlsx with research) + glossary
- [ ] Whiskey database + glossary **(priority after wine)**
- [ ] Coffee database + glossary
- [ ] Tea database + glossary
- [ ] Cheese database + glossary
- [ ] Beer database + glossary
- [ ] All consumable images
- [ ] **Deploy consumables-only version**

**Content Sourcing Strategy:**
- Use canonical lists (award winners, critics' picks, iconic producers)
- Wine: Conduct additional research beyond existing Wine_Database.xlsx
- All categories: Include well-known classics and highly-rated examples
- Sources: Wine Spectator, Whisky Advocate, James Beard, industry publications

### Phase 6B: Cultural Content
- [ ] Music database + eras + glossary
- [ ] Art database + eras + glossary
- [ ] Fashion database + eras + glossary
- [ ] Literature database + eras + glossary
- [ ] Film database + eras + glossary
- [ ] Theater database + eras + glossary
- [ ] All cultural images
- [ ] Similar items relationships

### Phase 7: Polish & Full Launch
- [ ] Performance optimization
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Cross-browser testing
- [ ] Final Vercel deployment
- [ ] Documentation

---

## Success Criteria

1. **Functional**: All 12 categories navigable with working visualizations
2. **Data**: 50+ entries per category with required images
3. **Personal**: Ratings, notes, and collections persist correctly
4. **Performance**: Page load under 2 seconds, smooth interactions
5. **Responsive**: Works on desktop, tablet, and mobile
6. **Accessible**: Keyboard navigable, WCAG 2.1 AA compliant

---

## Decisions Made

| Question | Decision |
|----------|----------|
| Global search | Yes - both homepage global search AND category-specific search |
| Dark mode | No - light-only to preserve refined cream/espresso aesthetic |
| Comparison scope | Same category only |
| Offline/PWA | No - online only, keep it simple |
| Images | Single hero image per entry |
| Sharing | Copy link only (simple URL sharing) |
| Content strategy | Phased by type - consumables first, then cultural |
| Learning features | Include a glossary of terms per category |

---

## Appendix: Wine_Database.xlsx Reference

Current columns to replicate across consumable categories (with Price added):

| Column | Description |
|--------|-------------|
| Name | Entry name |
| Type | Subcategory/variety |
| Location | Origin/region |
| About | Producer/brand description |
| Body | Flavor dimension |
| Tannins | Flavor dimension |
| Acidity | Flavor dimension |
| Alcohol | ABV percentage |
| Aging Potential | Longevity |
| Tasting Notes | Flavor descriptors |
| Pairings | Food pairings |
| History | Background information |
| Serving Recommendation | How to enjoy |
| **Price** | *(To be added)* Price range or specific price |

---

*Document Version: 1.2*
*Created: January 2025*
*Last Updated: January 2025*
*Status: Approved*
