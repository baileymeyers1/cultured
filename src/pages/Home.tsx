import { Link } from 'react-router-dom';
import { CategoryIcon } from '../components/common/CategoryIcon';
import { GlobalSearch } from '../components/common/GlobalSearch';
import type { CategoryInfo } from '../types';
import wineData from '../data/wine.json';
import whiskeyData from '../data/whiskey.json';
import coffeeData from '../data/coffee.json';
import teaData from '../data/tea.json';
import cheeseData from '../data/cheese.json';
import beerData from '../data/beer.json';

const categories: CategoryInfo[] = [
  {
    id: 'wine',
    name: 'Wine',
    description: 'Explore the world of wine, from bold reds to crisp whites',
    icon: '',
    entryCount: wineData.length,
    isActive: true,
    scatterplotAxes: { xLabel: 'Body', yLabel: 'Sweetness' }
  },
  {
    id: 'whiskey',
    name: 'Whiskey',
    description: 'Discover scotch, bourbon, and whiskeys from around the globe',
    icon: '',
    entryCount: whiskeyData.length,
    isActive: true,
    scatterplotAxes: { xLabel: 'Smoky', yLabel: 'Sweet' }
  },
  {
    id: 'coffee',
    name: 'Coffee',
    description: 'From single origins to artisan blends',
    icon: '',
    entryCount: coffeeData.length,
    isActive: true,
    scatterplotAxes: { xLabel: 'Roast', yLabel: 'Acidity' }
  },
  {
    id: 'tea',
    name: 'Tea',
    description: 'Traditional and modern teas from every tradition',
    icon: '',
    entryCount: teaData.length,
    isActive: true,
    scatterplotAxes: { xLabel: 'Delicate', yLabel: 'Oxidation' }
  },
  {
    id: 'cheese',
    name: 'Cheese',
    description: 'Artisanal cheeses from farms worldwide',
    icon: '',
    entryCount: cheeseData.length,
    isActive: true,
    scatterplotAxes: { xLabel: 'Mild', yLabel: 'Texture' }
  },
  {
    id: 'beer',
    name: 'Beer',
    description: 'Craft brews, lagers, ales, and more',
    icon: '',
    entryCount: beerData.length,
    isActive: true,
    scatterplotAxes: { xLabel: 'Body', yLabel: 'Bitterness' }
  },
  {
    id: 'cigars',
    name: 'Cigars',
    description: 'Premium cigars from around the world',
    icon: '',
    entryCount: 0,
    isActive: false,
    scatterplotAxes: { xLabel: 'Strength', yLabel: 'Body' }
  },
  {
    id: 'music',
    name: 'Music',
    description: 'Iconic albums and artists through the ages',
    icon: '',
    entryCount: 0,
    isActive: false
  },
  {
    id: 'art',
    name: 'Art',
    description: 'Masterpieces from Renaissance to contemporary',
    icon: '',
    entryCount: 0,
    isActive: false
  },
  {
    id: 'fashion',
    name: 'Fashion',
    description: 'Designers and movements that shaped style',
    icon: '',
    entryCount: 0,
    isActive: false
  },
  {
    id: 'literature',
    name: 'Literature',
    description: 'Essential works from classic to modern',
    icon: '',
    entryCount: 0,
    isActive: false
  },
  {
    id: 'film',
    name: 'Film',
    description: 'Cinema classics and modern masterpieces',
    icon: '',
    entryCount: 0,
    isActive: false
  },
  {
    id: 'theater',
    name: 'Theater',
    description: 'Plays and productions that defined the stage',
    icon: '',
    entryCount: 0,
    isActive: false
  }
];


export function Home() {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 className="heading-1" style={{ marginBottom: '1rem' }}>
          Explore the Finer Things
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          Your personal guide to whiskey, wine, coffee, art, music, and more.
          Discover, learn, and track your journey through culture.
        </p>
      </div>

      {/* Search Bar */}
      <div style={{ maxWidth: '500px', margin: '0 auto 2.5rem' }}>
        <GlobalSearch />
      </div>

      {/* Category Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

function CategoryCard({ category }: { category: CategoryInfo }) {
  const CardContent = () => (
    <div
      className="card"
      style={{
        padding: '1.5rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        opacity: category.isActive ? 1 : 0.6,
        cursor: category.isActive ? 'pointer' : 'default'
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          backgroundColor: 'var(--bg-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem'
        }}
      >
        <CategoryIcon category={category.id} size={24} />
      </div>

      {/* Title */}
      <h2
        className="heading-3"
        style={{
          marginBottom: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        {category.name}
        {!category.isActive && (
          <span
            style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              color: 'var(--accent-copper)',
              backgroundColor: 'var(--bg-secondary)',
              padding: '0.125rem 0.5rem',
              borderRadius: '4px'
            }}
          >
            Coming Soon
          </span>
        )}
      </h2>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          marginBottom: '1rem',
          flex: 1
        }}
      >
        {category.description}
      </p>

      {/* Entry Count */}
      {category.isActive && (
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: 'var(--text-secondary)'
          }}
        >
          {category.entryCount} entries
        </div>
      )}
    </div>
  );

  if (category.isActive) {
    return (
      <Link to={`/${category.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
