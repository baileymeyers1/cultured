import type { FilterState, SortState, SortOption } from '../../types';

interface FilterBarProps {
  subcategories: string[];
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  sort: SortState;
  onSortChange: (sort: SortState) => void;
  searchPlaceholder?: string;
}

export function FilterBar({
  subcategories,
  filters,
  onFilterChange,
  sort,
  onSortChange,
  searchPlaceholder = 'Search...'
}: FilterBarProps) {
  const handleSubcategoryToggle = (subcategory: string) => {
    const newSubcategories = filters.subcategories.includes(subcategory)
      ? filters.subcategories.filter(s => s !== subcategory)
      : [...filters.subcategories, subcategory];
    onFilterChange({ ...filters, subcategories: newSubcategories });
  };

  const handleSearchChange = (query: string) => {
    onFilterChange({ ...filters, searchQuery: query });
  };

  const handleStatusChange = (status: 'wishlist' | 'tried' | null) => {
    onFilterChange({ ...filters, status: filters.status === status ? null : status });
  };

  const handleRatingChange = (rating: number | null) => {
    onFilterChange({ ...filters, rating: filters.rating === rating ? null : rating });
  };

  const handleSortChange = (by: SortOption) => {
    // Type sort doesn't have direction toggle
    if (by === 'subcategory') {
      onSortChange({ by, direction: 'asc' });
    } else if (sort.by === by) {
      onSortChange({ by, direction: sort.direction === 'asc' ? 'desc' : 'asc' });
    } else {
      onSortChange({ by, direction: 'asc' });
    }
  };

  const hasActiveFilters =
    filters.subcategories.length > 0 ||
    filters.rating !== null ||
    filters.status !== null ||
    filters.searchQuery !== '';

  return (
    <div
      style={{
        backgroundColor: 'white',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '1rem 1.5rem'
      }}
    >
      {/* Search */}
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder={searchPlaceholder}
          value={filters.searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '400px'
          }}
        />
      </div>

      {/* Filter Rows */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'flex-start'
        }}
      >
        {/* Subcategory Filters */}
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.75rem',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            Type
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {subcategories.map((subcategory) => (
              <button
                key={subcategory}
                onClick={() => handleSubcategoryToggle(subcategory)}
                style={{
                  padding: '0.375rem 0.75rem',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  borderRadius: '999px',
                  border: '1px solid',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  backgroundColor: filters.subcategories.includes(subcategory)
                    ? 'var(--accent-gold)'
                    : 'white',
                  borderColor: filters.subcategories.includes(subcategory)
                    ? 'var(--accent-gold)'
                    : 'var(--border)',
                  color: filters.subcategories.includes(subcategory)
                    ? 'white'
                    : 'var(--text-primary)'
                }}
              >
                {subcategory}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filters */}
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.75rem',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            Collection
          </label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => handleStatusChange('wishlist')}
              style={{
                padding: '0.375rem 0.75rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                borderRadius: '999px',
                border: '1px solid',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                backgroundColor: filters.status === 'wishlist'
                  ? 'var(--accent-copper)'
                  : 'white',
                borderColor: filters.status === 'wishlist'
                  ? 'var(--accent-copper)'
                  : 'var(--border)',
                color: filters.status === 'wishlist'
                  ? 'white'
                  : 'var(--text-primary)'
              }}
            >
              Wishlist
            </button>
            <button
              onClick={() => handleStatusChange('tried')}
              style={{
                padding: '0.375rem 0.75rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                borderRadius: '999px',
                border: '1px solid',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                backgroundColor: filters.status === 'tried'
                  ? 'var(--accent-gold)'
                  : 'white',
                borderColor: filters.status === 'tried'
                  ? 'var(--accent-gold)'
                  : 'var(--border)',
                color: filters.status === 'tried'
                  ? 'white'
                  : 'var(--text-primary)'
              }}
            >
              Tried
            </button>
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.75rem',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            Min Rating
          </label>
          <div style={{ display: 'flex', gap: '0.375rem' }}>
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => handleRatingChange(rating)}
                style={{
                  width: '32px',
                  height: '32px',
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  borderRadius: '6px',
                  border: '1px solid',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  backgroundColor: filters.rating === rating
                    ? 'var(--accent-gold)'
                    : 'white',
                  borderColor: filters.rating === rating
                    ? 'var(--accent-gold)'
                    : 'var(--border)',
                  color: filters.rating === rating
                    ? 'white'
                    : 'var(--text-primary)'
                }}
              >
                {rating}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sort & Clear */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '1rem',
          paddingTop: '1rem',
          borderTop: '1px solid var(--border)'
        }}
      >
        {/* Sort */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            Sort by
          </span>
          <div style={{ display: 'flex', gap: '0.375rem' }}>
            {[
              { key: 'name', label: 'Name' },
              { key: 'subcategory', label: 'Type' },
              { key: 'rating', label: 'Rating' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => handleSortChange(key as SortOption)}
                style={{
                  padding: '0.375rem 0.75rem',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  borderRadius: '6px',
                  border: '1px solid',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  backgroundColor: sort.by === key
                    ? 'var(--text-primary)'
                    : 'white',
                  borderColor: sort.by === key
                    ? 'var(--text-primary)'
                    : 'var(--border)',
                  color: sort.by === key
                    ? 'white'
                    : 'var(--text-primary)'
                }}
              >
                {label}
                {sort.by === key && key !== 'subcategory' && (
                  <span style={{ marginLeft: '0.25rem' }}>
                    {sort.direction === 'asc' ? '\u2191' : '\u2193'}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={() =>
              onFilterChange({
                subcategories: [],
                priceRange: null,
                rating: null,
                status: null,
                searchQuery: ''
              })
            }
            style={{
              padding: '0.375rem 0.75rem',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: 'transparent',
              color: 'var(--accent-copper)'
            }}
          >
            Clear all filters
          </button>
        )}
      </div>
    </div>
  );
}
