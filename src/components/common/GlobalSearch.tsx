import { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import wineData from '../../data/wine.json';
import whiskeyData from '../../data/whiskey.json';
import coffeeData from '../../data/coffee.json';
import teaData from '../../data/tea.json';
import cheeseData from '../../data/cheese.json';
import beerData from '../../data/beer.json';

interface SearchResult {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  type: string;
}

// Combine all data
const allEntries: SearchResult[] = [
  ...wineData.map((e: any) => ({ id: e.id, name: e.name, category: 'wine', subcategory: e.subcategory, type: e.type })),
  ...whiskeyData.map((e: any) => ({ id: e.id, name: e.name, category: 'whiskey', subcategory: e.subcategory, type: e.type })),
  ...coffeeData.map((e: any) => ({ id: e.id, name: e.name, category: 'coffee', subcategory: e.subcategory, type: e.type })),
  ...teaData.map((e: any) => ({ id: e.id, name: e.name, category: 'tea', subcategory: e.subcategory, type: e.type })),
  ...cheeseData.map((e: any) => ({ id: e.id, name: e.name, category: 'cheese', subcategory: e.subcategory, type: e.type })),
  ...beerData.map((e: any) => ({ id: e.id, name: e.name, category: 'beer', subcategory: e.subcategory, type: e.type })),
];

const categoryIcons: Record<string, string> = {
  wine: '\uD83C\uDF77',
  whiskey: '\uD83E\uDD43',
  coffee: '\u2615',
  tea: '\uD83C\uDF75',
  cheese: '\uD83E\uDDC0',
  beer: '\uD83C\uDF7A',
};

interface GlobalSearchProps {
  onNavigate?: () => void;
}

export function GlobalSearch({ onNavigate }: GlobalSearchProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const lowerQuery = query.toLowerCase();
    return allEntries
      .filter(entry =>
        entry.name.toLowerCase().includes(lowerQuery) ||
        entry.type.toLowerCase().includes(lowerQuery) ||
        entry.subcategory.toLowerCase().includes(lowerQuery)
      )
      .slice(0, 8);
  }, [query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  const handleSelect = (result: SearchResult) => {
    navigate(`/${result.category}/${result.id}`);
    setQuery('');
    setIsOpen(false);
    onNavigate?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(i => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      handleSelect(results[selectedIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Search Input */}
      <div style={{ position: 'relative' }}>
        <svg
          style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '18px',
            height: '18px',
            color: 'var(--text-secondary)'
          }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 150)}
          onKeyDown={handleKeyDown}
          placeholder="Search all categories..."
          style={{
            width: '100%',
            padding: '12px 12px 12px 42px',
            fontSize: '1rem',
            fontFamily: 'var(--font-body)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            outline: 'none',
            transition: 'border-color 0.2s'
          }}
        />
      </div>

      {/* Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            marginTop: '4px',
            backgroundColor: 'var(--bg-primary)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            zIndex: 10,
            maxHeight: '300px',
            overflowY: 'auto'
          }}
        >
          {results.map((result, index) => (
            <div
              key={result.id}
              onClick={() => handleSelect(result)}
              style={{
                padding: '10px 14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: index === selectedIndex ? 'var(--bg-secondary)' : 'transparent',
                borderBottom: index < results.length - 1 ? '1px solid var(--border)' : 'none'
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>
                {categoryIcons[result.category]}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {result.name}
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textTransform: 'capitalize'
                  }}
                >
                  {result.category} &middot; {result.subcategory}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No results message */}
      {isOpen && query.length >= 2 && results.length === 0 && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            marginTop: '4px',
            padding: '16px',
            backgroundColor: 'var(--bg-primary)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '0.875rem'
          }}
        >
          No results found for "{query}"
        </div>
      )}
    </div>
  );
}
