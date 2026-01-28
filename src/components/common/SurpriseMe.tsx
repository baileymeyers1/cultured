import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserData } from '../../hooks/useUserData';
import wineData from '../../data/wine.json';
import whiskeyData from '../../data/whiskey.json';
import coffeeData from '../../data/coffee.json';
import teaData from '../../data/tea.json';
import cheeseData from '../../data/cheese.json';
import beerData from '../../data/beer.json';

interface Entry {
  id: string;
  name: string;
  category: string;
}

const allEntries: Entry[] = [
  ...wineData.map((e: any) => ({ id: e.id, name: e.name, category: 'wine' })),
  ...whiskeyData.map((e: any) => ({ id: e.id, name: e.name, category: 'whiskey' })),
  ...coffeeData.map((e: any) => ({ id: e.id, name: e.name, category: 'coffee' })),
  ...teaData.map((e: any) => ({ id: e.id, name: e.name, category: 'tea' })),
  ...cheeseData.map((e: any) => ({ id: e.id, name: e.name, category: 'cheese' })),
  ...beerData.map((e: any) => ({ id: e.id, name: e.name, category: 'beer' })),
];

const categories = [
  { id: 'all', label: 'Any' },
  { id: 'wine', label: 'Wine' },
  { id: 'whiskey', label: 'Whiskey' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'tea', label: 'Tea' },
  { id: 'cheese', label: 'Cheese' },
  { id: 'beer', label: 'Beer' },
];

const filters = [
  { id: 'any', label: 'Any' },
  { id: 'wishlist', label: 'Wishlist' },
  { id: 'not-tried', label: 'Not tried' },
  { id: 'tried', label: 'Tried' },
];

interface SurpriseMeProps {
  onNavigate?: () => void;
}

export function SurpriseMe({ onNavigate }: SurpriseMeProps) {
  const [category, setCategory] = useState('all');
  const [filter, setFilter] = useState('any');
  const navigate = useNavigate();
  const { getEntryData } = useUserData();

  const handleDiscover = () => {
    let filtered = allEntries;

    // Filter by category
    if (category !== 'all') {
      filtered = filtered.filter(e => e.category === category);
    }

    // Filter by status
    if (filter === 'wishlist') {
      filtered = filtered.filter(e => getEntryData(e.id)?.status === 'wishlist');
    } else if (filter === 'not-tried') {
      filtered = filtered.filter(e => getEntryData(e.id)?.status !== 'tried');
    } else if (filter === 'tried') {
      filtered = filtered.filter(e => getEntryData(e.id)?.status === 'tried');
    }

    if (filtered.length === 0) {
      alert('No entries match your criteria. Try adjusting your filters!');
      return;
    }

    // Pick random
    const random = filtered[Math.floor(Math.random() * filtered.length)];
    navigate(`/${random.category}/${random.id}`);
    onNavigate?.();
  };

  const selectStyle: React.CSSProperties = {
    padding: '6px 8px',
    fontSize: '0.8125rem',
    fontFamily: 'var(--font-body)',
    border: '1px solid var(--border)',
    borderRadius: '6px',
    backgroundColor: 'var(--bg-secondary)',
    color: 'var(--text-primary)',
    cursor: 'pointer',
    minWidth: '80px'
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '100%'
      }}
    >
      {/* Discover button - full width on top */}
      <button
        onClick={handleDiscover}
        style={{
          padding: '10px 20px',
          fontSize: '0.9375rem',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          color: 'white',
          backgroundColor: 'var(--accent-gold)',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          transition: 'background-color 0.2s',
          whiteSpace: 'nowrap',
          width: '100%'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-copper)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-gold)'}
      >
        <span>&#x2728;</span>
        Discover
      </button>

      {/* Dropdowns side by side underneath */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ ...selectStyle, flex: 1 }}
        >
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.label}</option>
          ))}
        </select>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ ...selectStyle, flex: 1 }}
        >
          {filters.map(f => (
            <option key={f.id} value={f.id}>{f.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
