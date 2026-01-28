import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useUserData } from '../hooks/useUserData';
import wineData from '../data/wine.json';
import whiskeyData from '../data/whiskey.json';
import coffeeData from '../data/coffee.json';
import teaData from '../data/tea.json';
import cheeseData from '../data/cheese.json';
import beerData from '../data/beer.json';
import { RatingStars } from '../components/common/RatingStars';
import { UniversalTasteMap } from '../components/visualization/UniversalTasteMap';

interface Entry {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  type: string;
  origin: string;
  price: string;
  universalCoords?: { x: number; y: number };
}

const allEntries: Entry[] = [
  ...wineData.map((e: any) => ({ ...e, category: 'wine' })),
  ...whiskeyData.map((e: any) => ({ ...e, category: 'whiskey' })),
  ...coffeeData.map((e: any) => ({ ...e, category: 'coffee' })),
  ...teaData.map((e: any) => ({ ...e, category: 'tea' })),
  ...cheeseData.map((e: any) => ({ ...e, category: 'cheese' })),
  ...beerData.map((e: any) => ({ ...e, category: 'beer' })),
];

const categoryMeta: Record<string, { name: string; icon: string }> = {
  wine: { name: 'Wine', icon: '\uD83C\uDF77' },
  whiskey: { name: 'Whiskey', icon: '\uD83E\uDD43' },
  coffee: { name: 'Coffee', icon: '\u2615' },
  tea: { name: 'Tea', icon: '\uD83C\uDF75' },
  cheese: { name: 'Cheese', icon: '\uD83E\uDDC0' },
  beer: { name: 'Beer', icon: '\uD83C\uDF7A' },
};

type TabType = 'wishlist' | 'tried' | 'rated';
type MapViewType = 'all' | 'tried' | 'wishlist';

const tabs: { id: TabType; label: string; icon: string }[] = [
  { id: 'wishlist', label: 'Wishlist', icon: '\u2661' },
  { id: 'tried', label: 'Tried', icon: '\u2713' },
  { id: 'rated', label: 'Rated', icon: '\u2605' },
];

const mapViewOptions: { id: MapViewType; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'tried', label: 'Tried' },
  { id: 'wishlist', label: 'Wishlist' },
];

const ratingOptions = [
  { value: 0, label: 'Any' },
  { value: 1, label: '1+' },
  { value: 2, label: '2+' },
  { value: 3, label: '3+' },
  { value: 4, label: '4+' },
  { value: 5, label: '5' },
];

export function Collections() {
  const [activeTab, setActiveTab] = useState<TabType>('wishlist');
  const [mapView, setMapView] = useState<MapViewType>('all');
  const [minRating, setMinRating] = useState<number>(0);
  const { userData, getEntryData } = useUserData();

  // Filter entries for the Universal Taste Map
  const mapData = useMemo(() => {
    return allEntries
      .filter(entry => {
        // Must have universalCoords
        if (!entry.universalCoords) return false;

        const data = getEntryData(entry.id);

        // Apply view filter
        if (mapView === 'tried' && data?.status !== 'tried') return false;
        if (mapView === 'wishlist' && data?.status !== 'wishlist') return false;

        // Apply rating filter
        if (minRating > 0) {
          const rating = data?.rating || 0;
          if (rating < minRating) return false;
        }

        return true;
      })
      .map(entry => {
        const data = getEntryData(entry.id);
        return {
          id: entry.id,
          name: entry.name,
          x: entry.universalCoords!.x,
          y: entry.universalCoords!.y,
          category: entry.category,
          subcategory: entry.subcategory,
          rating: data?.rating,
          notes: data?.notes,
          status: data?.status
        };
      });
  }, [mapView, minRating, userData, getEntryData]);

  const filteredEntries = useMemo(() => {
    return allEntries.filter(entry => {
      const data = getEntryData(entry.id);
      if (activeTab === 'wishlist') {
        return data?.status === 'wishlist';
      } else if (activeTab === 'tried') {
        return data?.status === 'tried';
      } else {
        return data?.rating !== undefined;
      }
    });
  }, [activeTab, userData, getEntryData]);

  // Group by category and sort by rating if on rated tab
  const groupedEntries = useMemo(() => {
    const groups: Record<string, Entry[]> = {};
    filteredEntries.forEach(entry => {
      if (!groups[entry.category]) {
        groups[entry.category] = [];
      }
      groups[entry.category].push(entry);
    });

    // Sort by rating within each category if on rated tab
    if (activeTab === 'rated') {
      Object.keys(groups).forEach(category => {
        groups[category].sort((a, b) => {
          const ratingA = getEntryData(a.id)?.rating || 0;
          const ratingB = getEntryData(b.id)?.rating || 0;
          return ratingB - ratingA; // Higher ratings first
        });
      });
    }

    return groups;
  }, [filteredEntries, activeTab, getEntryData]);

  const getCounts = () => {
    let wishlist = 0, tried = 0, rated = 0;
    Object.values(userData).forEach(data => {
      if (data.status === 'wishlist') wishlist++;
      if (data.status === 'tried') tried++;
      if (data.rating !== undefined) rated++;
    });
    return { wishlist, tried, rated };
  };

  const counts = getCounts();

  const selectStyle: React.CSSProperties = {
    padding: '6px 12px',
    fontSize: '0.8125rem',
    fontFamily: 'var(--font-body)',
    border: '1px solid var(--border)',
    borderRadius: '6px',
    backgroundColor: 'var(--bg-secondary)',
    color: 'var(--text-primary)',
    cursor: 'pointer'
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
          marginBottom: '1.5rem',
          textDecoration: 'none'
        }}
      >
        &#x2190; Back to Categories
      </Link>

      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="heading-1" style={{ marginBottom: '0.5rem' }}>My Collections</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
          Track your journey through the finer things
        </p>
      </div>

      {/* Universal Taste Map */}
      <div
        style={{
          backgroundColor: 'white',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 className="heading-3" style={{ margin: 0 }}>Universal Taste Map</h2>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* View Toggle */}
            <div style={{ display: 'flex', gap: '4px', padding: '2px', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px' }}>
              {mapViewOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => setMapView(option.id)}
                  style={{
                    padding: '4px 10px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    color: mapView === option.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                    backgroundColor: mapView === option.id ? 'var(--bg-primary)' : 'transparent',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Rating Filter */}
            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              style={selectStyle}
            >
              {ratingOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.value === 0 ? 'Any rating' : `${option.label} stars`}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8125rem', marginBottom: '1rem' }}>
          {mapData.length} of {allEntries.filter(e => e.universalCoords).length} items
        </p>

        <UniversalTasteMap data={mapData} />
      </div>

      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '4px',
          padding: '4px',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '10px',
          marginBottom: '2rem'
        }}
      >
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: '12px 16px',
              fontSize: '0.9375rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              color: activeTab === tab.id ? 'var(--text-primary)' : 'var(--text-secondary)',
              backgroundColor: activeTab === tab.id ? 'var(--bg-primary)' : 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: activeTab === tab.id ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            <span style={{ marginRight: '6px' }}>{tab.icon}</span>
            {tab.label}
            <span
              style={{
                marginLeft: '8px',
                fontSize: '0.75rem',
                opacity: 0.7
              }}
            >
              ({counts[tab.id]})
            </span>
          </button>
        ))}
      </div>

      {/* Content */}
      {filteredEntries.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '12px'
          }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            {activeTab === 'wishlist' ? '\u2661' : activeTab === 'tried' ? '\u2713' : '\u2605'}
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
              color: 'var(--text-primary)'
            }}
          >
            No {activeTab === 'wishlist' ? 'wishlist' : activeTab === 'tried' ? 'tried' : 'rated'} items yet
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
            {activeTab === 'wishlist'
              ? 'Add items to your wishlist to keep track of what you want to try.'
              : activeTab === 'tried'
              ? 'Mark items as tried to track your experiences.'
              : 'Rate items to remember your favorites.'}
          </p>
          <Link
            to="/"
            style={{
              display: 'inline-block',
              marginTop: '1.5rem',
              padding: '12px 24px',
              backgroundColor: 'var(--accent-gold)',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 500
            }}
          >
            Start Exploring
          </Link>
        </div>
      ) : (
        <div>
          {Object.entries(groupedEntries).map(([category, entries]) => (
            <div key={category} style={{ marginBottom: '2.5rem' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>{categoryMeta[category].icon}</span>
                {categoryMeta[category].name}
                <span
                  style={{
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-secondary)',
                    fontWeight: 400
                  }}
                >
                  ({entries.length})
                </span>
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '1rem'
                }}
              >
                {entries.map(entry => (
                  <CollectionCard
                    key={entry.id}
                    entry={entry}
                    userData={getEntryData(entry.id)}
                    showRating={activeTab === 'rated'}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CollectionCard({
  entry,
  userData,
  showRating
}: {
  entry: Entry;
  userData: any;
  showRating: boolean;
}) {
  return (
    <Link
      to={`/${entry.category}/${entry.id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div
        className="card"
        style={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              fontWeight: 500,
              flex: 1,
              marginRight: '0.5rem'
            }}
          >
            {entry.name}
          </h3>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              color: 'var(--accent-gold)'
            }}
          >
            {entry.price}
          </span>
        </div>
        <p
          style={{
            fontSize: '0.75rem',
            color: 'var(--text-secondary)',
            margin: 0
          }}
        >
          {entry.type} &middot; {entry.origin}
        </p>
        {showRating && userData?.rating && (
          <div style={{ marginTop: '0.25rem' }}>
            <RatingStars rating={userData.rating} size="small" showEmpty={false} />
          </div>
        )}
        {userData?.notes && (
          <p
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
              fontStyle: 'italic',
              margin: 0,
              marginTop: '0.25rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            "{userData.notes}"
          </p>
        )}
      </div>
    </Link>
  );
}
