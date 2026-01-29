import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Scatterplot } from '../components/visualization/Scatterplot';
import { Card } from '../components/common/Card';
import { WhiskeyCard } from '../components/common/WhiskeyCard';
import { CoffeeCard } from '../components/common/CoffeeCard';
import { TeaCard } from '../components/common/TeaCard';
import { CheeseCard } from '../components/common/CheeseCard';
import { BeerCard } from '../components/common/BeerCard';
import { FilterBar } from '../components/common/FilterBar';
import { CategoryGuide } from '../components/common/CategoryGuide';
import { categoryGuides } from '../data/guides';
import wineData from '../data/wine.json';
import whiskeyData from '../data/whiskey.json';
import coffeeData from '../data/coffee.json';
import teaData from '../data/tea.json';
import cheeseData from '../data/cheese.json';
import beerData from '../data/beer.json';
import type { WineEntry, WhiskeyEntry, CoffeeEntry, TeaEntry, CheeseEntry, BeerEntry, FilterState, SortState } from '../types';
import { useUserData } from '../hooks/useUserData';

const wines = wineData as WineEntry[];
const whiskeys = whiskeyData as WhiskeyEntry[];
const coffees = coffeeData as CoffeeEntry[];
const teas = teaData as TeaEntry[];
const cheeses = cheeseData as CheeseEntry[];
const beers = beerData as BeerEntry[];

type ConsumableEntry = WineEntry | WhiskeyEntry | CoffeeEntry | TeaEntry | CheeseEntry | BeerEntry;

const categoryMeta: Record<string, {
  name: string;
  description: string;
  xLabel: string;
  xLabelEnd: string;
  yLabel: string;
  yLabelEnd: string;
  itemName: string;
}> = {
  wine: {
    name: 'Wine',
    description: 'Explore wines from around the world, from bold reds to crisp whites and everything in between.',
    xLabel: 'Light Body',
    xLabelEnd: 'Full Body',
    yLabel: 'Dry',
    yLabelEnd: 'Sweet',
    itemName: 'wines'
  },
  whiskey: {
    name: 'Whiskey',
    description: 'Discover whiskeys from Scotland, America, Japan, Ireland, and beyond.',
    xLabel: 'Light / Clean',
    xLabelEnd: 'Smoky / Peated',
    yLabel: 'Dry / Spicy',
    yLabelEnd: 'Sweet / Rich',
    itemName: 'whiskeys'
  },
  coffee: {
    name: 'Coffee',
    description: 'Explore single origins, blends, and roasts from coffee-growing regions around the world.',
    xLabel: 'Light Roast',
    xLabelEnd: 'Dark Roast',
    yLabel: 'Fruity / Floral',
    yLabelEnd: 'Chocolate / Nutty',
    itemName: 'coffees'
  },
  tea: {
    name: 'Tea',
    description: 'Discover green, black, oolong, white, and herbal teas from ancient tea traditions worldwide.',
    xLabel: 'Delicate / Floral',
    xLabelEnd: 'Robust / Malty',
    yLabel: 'Green / Unoxidized',
    yLabelEnd: 'Black / Fully Oxidized',
    itemName: 'teas'
  },
  cheese: {
    name: 'Cheese',
    description: 'Explore artisanal cheeses from around the world, from creamy bries to aged cheddars and pungent blues.',
    xLabel: 'Mild / Delicate',
    xLabelEnd: 'Strong / Pungent',
    yLabel: 'Soft / Creamy',
    yLabelEnd: 'Hard / Aged',
    itemName: 'cheeses'
  },
  beer: {
    name: 'Beer',
    description: 'Discover craft brews, lagers, ales, stouts, and more from breweries around the world.',
    xLabel: 'Light / Crisp',
    xLabelEnd: 'Full / Heavy',
    yLabel: 'Malty / Sweet',
    yLabelEnd: 'Hoppy / Bitter',
    itemName: 'beers'
  }
};

// Scatterplot colors for whiskey subcategories
const whiskeyColors: Record<string, string> = {
  Scotch: '#C68E17',
  Bourbon: '#DAA520',
  Rye: '#CD853F',
  Japanese: '#B8860B',
  Irish: '#228B22',
  Canadian: '#8B0000'
};

// Scatterplot colors for coffee subcategories
const coffeeColors: Record<string, string> = {
  'Single Origin': '#6F4E37',
  'Blend': '#3C2415',
  'Decaf': '#8B7355'
};

// Scatterplot colors for tea subcategories
const teaColors: Record<string, string> = {
  'Green': '#228B22',
  'Black': '#4A2C1A',
  'Oolong': '#CD853F',
  'White': '#C0B8AC',
  'Pu-erh': '#3D3428',
  'Herbal': '#8B6A88'
};

// Scatterplot colors for cheese subcategories
const cheeseColors: Record<string, string> = {
  'Fresh': '#F5DEB3',
  'Soft-ripened': '#DEB887',
  'Semi-soft': '#D2B48C',
  'Semi-hard': '#CD853F',
  'Hard': '#8B4513',
  'Blue': '#4682B4',
  'Washed-rind': '#FF8C00'
};

// Scatterplot colors for beer subcategories
const beerColors: Record<string, string> = {
  'Stout': '#1C1008',
  'IPA': '#9ACD32',
  'Pilsner': '#FFD700',
  'Lager': '#DAA520',
  'Wheat': '#F4A460',
  'Belgian': '#DDA0DD',
  'Porter': '#3D2314',
  'Sour': '#FF69B4',
  'Pale Ale': '#7CFC00',
  'Amber': '#CD853F'
};

export function Category() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { getEntryData } = useUserData();

  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const [filters, setFilters] = useState<FilterState>({
    subcategories: [],
    priceRange: null,
    rating: null,
    status: null,
    searchQuery: ''
  });

  const [sort, setSort] = useState<SortState>({
    by: 'name',
    direction: 'asc'
  });

  // Check if category is active
  if (category !== 'wine' && category !== 'whiskey' && category !== 'coffee' && category !== 'tea' && category !== 'cheese' && category !== 'beer') {
    return (
      <div className="container" style={{ paddingTop: '3rem', textAlign: 'center' }}>
        <h1 className="heading-1">Coming Soon</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
          This category is not yet available. Check back soon!
        </p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
          Back to Home
        </Link>
      </div>
    );
  }

  const meta = categoryMeta[category];
  const isWine = category === 'wine';
  const isWhiskey = category === 'whiskey';
  const isCoffee = category === 'coffee';
  const isTea = category === 'tea';
  const isCheese = category === 'cheese';
  const isBeer = category === 'beer';

  const data: ConsumableEntry[] = isWine ? wines : isWhiskey ? whiskeys : isCoffee ? coffees : isTea ? teas : isCheese ? cheeses : beers;

  // Get color map for scatterplot
  const getColorMap = () => {
    if (isWhiskey) return whiskeyColors;
    if (isCoffee) return coffeeColors;
    if (isTea) return teaColors;
    if (isCheese) return cheeseColors;
    if (isBeer) return beerColors;
    return undefined; // Wine uses default colors
  };

  // Get unique subcategories
  const subcategories = useMemo(() => {
    return [...new Set(data.map((item) => item.subcategory))].sort();
  }, [data]);

  // Filter and sort data
  const filteredData = useMemo(() => {
    let result = [...data];

    // Apply search filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.origin.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query) ||
        item.tastingNotes.toLowerCase().includes(query)
      );
    }

    // Apply subcategory filter
    if (filters.subcategories.length > 0) {
      result = result.filter(item => filters.subcategories.includes(item.subcategory));
    }

    // Apply rating filter
    if (filters.rating) {
      result = result.filter(item => {
        const userData = getEntryData(item.id);
        return userData?.rating && userData.rating >= filters.rating!;
      });
    }

    // Apply status filter
    if (filters.status) {
      result = result.filter(item => {
        const userData = getEntryData(item.id);
        return userData?.status === filters.status;
      });
    }

    // Apply sorting
    result.sort((a, b) => {
      let comparison = 0;
      switch (sort.by) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'subcategory':
          comparison = a.subcategory.localeCompare(b.subcategory);
          break;
        case 'rating':
          const ratingA = getEntryData(a.id)?.rating || 0;
          const ratingB = getEntryData(b.id)?.rating || 0;
          comparison = ratingB - ratingA;
          break;
        case 'price':
          comparison = a.price.length - b.price.length;
          break;
      }
      return sort.direction === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [data, filters, sort, getEntryData]);

  // Group by subcategory
  const groupedData = useMemo(() => {
    const groups: Record<string, ConsumableEntry[]> = {};
    filteredData.forEach(item => {
      if (!groups[item.subcategory]) {
        groups[item.subcategory] = [];
      }
      groups[item.subcategory].push(item);
    });
    return groups;
  }, [filteredData]);

  // Scatterplot data with user data for tooltips and dot styles
  const scatterData = useMemo(() => {
    return filteredData.map(item => {
      const userData = getEntryData(item.id);
      const baseData = {
        rating: userData?.rating,
        notes: userData?.notes,
        status: userData?.status
      };

      if (isWine) {
        const wine = item as WineEntry;
        return {
          id: wine.id,
          name: wine.name,
          x: wine.flavorProfile.body,
          y: wine.flavorProfile.sweetness,
          subcategory: wine.subcategory,
          ...baseData
        };
      } else if (isWhiskey) {
        const whiskey = item as WhiskeyEntry;
        return {
          id: whiskey.id,
          name: whiskey.name,
          x: whiskey.flavorProfile.smoke,
          y: whiskey.flavorProfile.sweetness,
          subcategory: whiskey.subcategory,
          ...baseData
        };
      } else if (isCoffee) {
        const coffee = item as CoffeeEntry;
        return {
          id: coffee.id,
          name: coffee.name,
          x: coffee.flavorProfile.roast,
          y: coffee.flavorProfile.flavorCharacter,
          subcategory: coffee.subcategory,
          ...baseData
        };
      } else if (isTea) {
        const tea = item as TeaEntry;
        return {
          id: tea.id,
          name: tea.name,
          x: tea.flavorProfile.body,
          y: tea.flavorProfile.oxidation,
          subcategory: tea.subcategory,
          ...baseData
        };
      } else if (isCheese) {
        const cheese = item as CheeseEntry;
        return {
          id: cheese.id,
          name: cheese.name,
          x: cheese.flavorProfile.intensity,
          y: cheese.flavorProfile.texture,
          subcategory: cheese.subcategory,
          ...baseData
        };
      } else {
        const beer = item as BeerEntry;
        return {
          id: beer.id,
          name: beer.name,
          x: beer.flavorProfile.body,
          y: beer.flavorProfile.bitterness,
          subcategory: beer.subcategory,
          ...baseData
        };
      }
    });
  }, [filteredData, isWine, isWhiskey, isCoffee, isTea, isCheese, isBeer, getEntryData]);

  const handlePointClick = (id: string) => {
    navigate(`/${category}/${id}`);
  };

  // Render card based on category
  const renderCard = (item: ConsumableEntry) => {
    if (isWine) {
      return <Card key={item.id} entry={item as WineEntry} />;
    } else if (isWhiskey) {
      return <WhiskeyCard key={item.id} entry={item as WhiskeyEntry} />;
    } else if (isCoffee) {
      return <CoffeeCard key={item.id} entry={item as CoffeeEntry} />;
    } else if (isTea) {
      return <TeaCard key={item.id} entry={item as TeaEntry} />;
    } else if (isCheese) {
      return <CheeseCard key={item.id} entry={item as CheeseEntry} />;
    } else {
      return <BeerCard key={item.id} entry={item as BeerEntry} />;
    }
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      {/* Back Link */}
      <Link
        to="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          marginBottom: '1.5rem'
        }}
      >
        ← Back to Categories
      </Link>

      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.5rem' }}>
          <h1 className="heading-1" style={{ margin: 0 }}>{meta.name}</h1>
          {categoryGuides[category] && (
            <button
              onClick={() => setIsGuideOpen(true)}
              aria-label={`Open ${meta.name} guide`}
              title={`${meta.name} Guide`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--bg-secondary)',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                flexShrink: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </button>
          )}
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
          {meta.description}
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
          {filteredData.length} of {data.length} {meta.itemName}
        </p>
      </div>

      {/* Scatterplot */}
      <div
        style={{
          backgroundColor: 'white',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}
      >
        <h2 className="heading-3" style={{ marginBottom: '1rem' }}>Flavor Profile Map</h2>
        <Scatterplot
          data={scatterData}
          xLabel={meta.xLabel}
          xLabelEnd={meta.xLabelEnd}
          yLabel={meta.yLabel}
          yLabelEnd={meta.yLabelEnd}
          onPointClick={handlePointClick}
          colorMap={getColorMap()}
        />
      </div>

      {/* Filters */}
      <FilterBar
        subcategories={subcategories}
        filters={filters}
        onFilterChange={setFilters}
        sort={sort}
        onSortChange={setSort}
        searchPlaceholder={`Search ${meta.itemName}...`}
      />

      {/* List - grouped by type or flat depending on sort */}
      <div style={{ marginTop: '2rem' }}>
        {sort.by === 'subcategory' ? (
          // Grouped by subcategory
          Object.entries(groupedData).map(([subcategory, items]) => (
            <div key={subcategory} style={{ marginBottom: '2.5rem' }}>
              <h2 className="heading-2" style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                {subcategory}
                <span
                  style={{
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-secondary)',
                    fontWeight: 400,
                    marginLeft: '0.75rem'
                  }}
                >
                  ({items.length})
                </span>
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '1rem'
                }}
              >
                {items.map(item => renderCard(item))}
              </div>
            </div>
          ))
        ) : (
          // Flat list for name or rating sort
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1rem'
            }}
          >
            {filteredData.map(item => renderCard(item))}
          </div>
        )}

        {filteredData.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
            <p>No {meta.itemName} match your filters. Try adjusting your criteria.</p>
            <button
              className="btn btn-secondary"
              onClick={() => setFilters({
                subcategories: [],
                priceRange: null,
                rating: null,
                status: null,
                searchQuery: ''
              })}
              style={{ marginTop: '1rem' }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Category Guide */}
      {categoryGuides[category] && (
        <CategoryGuide
          isOpen={isGuideOpen}
          onClose={() => setIsGuideOpen(false)}
          guide={categoryGuides[category]}
        />
      )}
    </div>
  );
}
