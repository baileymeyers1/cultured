import { useMemo } from 'react';
import { useUserData } from '../../hooks/useUserData';
import wineData from '../../data/wine.json';
import whiskeyData from '../../data/whiskey.json';
import coffeeData from '../../data/coffee.json';
import teaData from '../../data/tea.json';
import cheeseData from '../../data/cheese.json';
import beerData from '../../data/beer.json';

const categoryData: Record<string, { name: string; count: number; icon: string }> = {
  wine: { name: 'Wine', count: wineData.length, icon: '\uD83C\uDF77' },
  whiskey: { name: 'Whiskey', count: whiskeyData.length, icon: '\uD83E\uDD43' },
  coffee: { name: 'Coffee', count: coffeeData.length, icon: '\u2615' },
  tea: { name: 'Tea', count: teaData.length, icon: '\uD83C\uDF75' },
  cheese: { name: 'Cheese', count: cheeseData.length, icon: '\uD83E\uDDC0' },
  beer: { name: 'Beer', count: beerData.length, icon: '\uD83C\uDF7A' },
};

const allIds = [
  ...wineData.map((e: any) => ({ id: e.id, category: 'wine' })),
  ...whiskeyData.map((e: any) => ({ id: e.id, category: 'whiskey' })),
  ...coffeeData.map((e: any) => ({ id: e.id, category: 'coffee' })),
  ...teaData.map((e: any) => ({ id: e.id, category: 'tea' })),
  ...cheeseData.map((e: any) => ({ id: e.id, category: 'cheese' })),
  ...beerData.map((e: any) => ({ id: e.id, category: 'beer' })),
];

export function Statistics() {
  const { userData } = useUserData();

  const stats = useMemo(() => {
    let totalTried = 0;
    let totalWishlist = 0;
    let totalRated = 0;
    const byCategory: Record<string, { tried: number; wishlist: number; rated: number }> = {};

    // Initialize categories
    Object.keys(categoryData).forEach(cat => {
      byCategory[cat] = { tried: 0, wishlist: 0, rated: 0 };
    });

    // Count from all entries
    allIds.forEach(({ id, category }) => {
      const data = userData[id];
      if (data?.status === 'tried') {
        totalTried++;
        byCategory[category].tried++;
      }
      if (data?.status === 'wishlist') {
        totalWishlist++;
        byCategory[category].wishlist++;
      }
      if (data?.rating) {
        totalRated++;
        byCategory[category].rated++;
      }
    });

    return { totalTried, totalWishlist, totalRated, byCategory };
  }, [userData]);

  return (
    <div>
      {/* Overall Stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          marginBottom: '24px'
        }}
      >
        <StatCard
          label="Tried"
          value={stats.totalTried}
          color="var(--accent-gold)"
        />
        <StatCard
          label="Wishlist"
          value={stats.totalWishlist}
          color="var(--accent-copper)"
        />
        <StatCard
          label="Rated"
          value={stats.totalRated}
          color="#6B8E23"
        />
      </div>

      {/* Category Breakdown */}
      <div>
        <h4
          style={{
            fontSize: '0.75rem',
            fontWeight: 500,
            color: 'var(--text-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '12px'
          }}
        >
          Progress by Category
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {Object.entries(categoryData).map(([key, cat]) => {
            const catStats = stats.byCategory[key];
            const percentage = Math.round((catStats.tried / cat.count) * 100);
            return (
              <div key={key}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '4px'
                  }}
                >
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                    {cat.icon} {cat.name}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    {catStats.tried}/{cat.count} tried
                  </span>
                </div>
                <div
                  style={{
                    height: '6px',
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: '3px',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${percentage}%`,
                      backgroundColor: 'var(--accent-gold)',
                      borderRadius: '3px',
                      transition: 'width 0.3s ease'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  color
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: '8px',
        padding: '12px',
        textAlign: 'center'
      }}
    >
      <div
        style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          fontFamily: 'var(--font-heading)',
          color
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: '0.6875rem',
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}
      >
        {label}
      </div>
    </div>
  );
}
