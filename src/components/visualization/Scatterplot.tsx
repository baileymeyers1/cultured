import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';

interface DataPoint {
  id: string;
  name: string;
  x: number;
  y: number;
  subcategory: string;
  rating?: number;
  notes?: string;
  status?: 'wishlist' | 'tried' | null;
}

interface ScatterplotProps {
  data: DataPoint[];
  xLabel: string;
  xLabelEnd: string;
  yLabel: string;
  yLabelEnd: string;
  onPointClick?: (id: string) => void;
  colorMap?: Record<string, string>;
}

// Default color palette for wine subcategories
const defaultColors: Record<string, string> = {
  Red: '#722F37',
  White: '#C9A962',
  Rose: '#E8B4B8',
  Sparkling: '#D4AF37',
  Dessert: '#8B4513'
};

// Custom dot component for different statuses
function CustomDot({
  cx,
  cy,
  fill,
  status,
  rating
}: {
  cx: number;
  cy: number;
  fill: string;
  status?: 'wishlist' | 'tried' | null;
  rating?: number;
}) {
  const isWishlist = status === 'wishlist';
  const isTried = status === 'tried';
  const isRated = rating && rating > 0;

  if (isWishlist) {
    // Hollow dot for wishlist
    return (
      <circle
        cx={cx}
        cy={cy}
        r={6}
        fill="white"
        stroke={fill}
        strokeWidth={2}
        style={{ cursor: 'pointer' }}
      />
    );
  } else if (isTried || isRated) {
    // Dot with outer ring for tried/rated
    return (
      <g style={{ cursor: 'pointer' }}>
        <circle
          cx={cx}
          cy={cy}
          r={8}
          fill="none"
          stroke={fill}
          strokeWidth={2}
          opacity={0.5}
        />
        <circle
          cx={cx}
          cy={cy}
          r={6}
          fill={fill}
          stroke="white"
          strokeWidth={2}
        />
      </g>
    );
  } else {
    // Default solid dot
    return (
      <circle
        cx={cx}
        cy={cy}
        r={7}
        fill={fill}
        stroke="white"
        strokeWidth={2}
        style={{ cursor: 'pointer' }}
      />
    );
  }
}

export function Scatterplot({
  data,
  xLabel,
  xLabelEnd,
  yLabel,
  yLabelEnd,
  onPointClick,
  colorMap
}: ScatterplotProps) {
  const subcategoryColors = colorMap || defaultColors;
  const handleClick = (point: DataPoint) => {
    if (onPointClick) {
      onPointClick(point.id);
    }
  };

  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ payload: DataPoint }> }) => {
    if (active && payload && payload.length) {
      const point = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: 'white',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '0.75rem 1rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            maxWidth: '220px'
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.875rem',
              fontWeight: 500,
              marginBottom: '0.25rem',
              margin: 0
            }}
          >
            {point.name}
          </p>
          <p
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
              margin: '0.25rem 0 0 0'
            }}
          >
            {point.subcategory}
          </p>

          {/* Rating */}
          {point.rating && point.rating > 0 && (
            <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--accent-gold)' }}>
                {'★'.repeat(point.rating)}{'☆'.repeat(5 - point.rating)}
              </span>
            </div>
          )}

          {/* Notes preview */}
          {point.notes && (
            <p
              style={{
                fontSize: '0.6875rem',
                color: 'var(--text-secondary)',
                fontStyle: 'italic',
                margin: '0.5rem 0 0 0',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical'
              }}
            >
              "{point.notes}"
            </p>
          )}

          {/* Status badge */}
          {point.status && (
            <span
              style={{
                display: 'inline-block',
                marginTop: '0.5rem',
                fontSize: '0.625rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '0.125rem 0.375rem',
                borderRadius: '4px',
                backgroundColor: point.status === 'tried'
                  ? 'rgba(201, 169, 98, 0.15)'
                  : 'rgba(184, 115, 51, 0.15)',
                color: point.status === 'tried'
                  ? 'var(--accent-gold)'
                  : 'var(--accent-copper)'
              }}
            >
              {point.status === 'tried' ? 'Tried' : 'Wishlist'}
            </span>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      {/* Legend - at top */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '1rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--border)'
        }}
      >
        {Object.entries(subcategoryColors).map(([name, color]) => (
          <div
            key={name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: color,
                border: '2px solid white',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
              }}
            />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              {name}
            </span>
          </div>
        ))}
      </div>

      {/* Status legend */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '1rem',
          fontSize: '0.6875rem',
          color: 'var(--text-secondary)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            border: '2px solid var(--text-secondary)',
            backgroundColor: 'white'
          }} />
          <span>Wishlist</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <div style={{ position: 'relative', width: '14px', height: '14px' }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              border: '1.5px solid var(--text-secondary)',
              opacity: 0.5
            }} />
            <div style={{
              position: 'absolute',
              top: '3px',
              left: '3px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--text-secondary)'
            }} />
          </div>
          <span>Tried/Rated</span>
        </div>
      </div>

      {/* Chart container with Y-axis label */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Y-axis labels */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '350px',
            paddingRight: '0.5rem',
            marginRight: '0.25rem'
          }}
        >
          <span style={{
            fontSize: '0.7rem',
            color: 'var(--text-secondary)',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            textAlign: 'center'
          }}>
            {yLabelEnd}
          </span>
          <span style={{
            fontSize: '0.7rem',
            color: 'var(--text-secondary)',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            textAlign: 'center'
          }}>
            {yLabel}
          </span>
        </div>

        {/* Chart */}
        <div style={{ flex: 1, height: '350px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart
              margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
            >
              {/* Grid lines */}
              <ReferenceLine x={50} stroke="var(--border)" strokeDasharray="3 3" />
              <ReferenceLine y={50} stroke="var(--border)" strokeDasharray="3 3" />

              <XAxis
                type="number"
                dataKey="x"
                domain={[0, 100]}
                tick={false}
                tickLine={false}
                axisLine={{ stroke: 'var(--border)', strokeWidth: 1 }}
              />
              <YAxis
                type="number"
                dataKey="y"
                domain={[0, 100]}
                tick={false}
                tickLine={false}
                axisLine={{ stroke: 'var(--border)', strokeWidth: 1 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Scatter
                data={data}
                onClick={(_, index) => {
                  if (typeof index === 'number' && data[index]) {
                    handleClick(data[index]);
                  }
                }}
                shape={(props: any) => {
                  const point = data[props.index];
                  const fill = subcategoryColors[point?.subcategory] || 'var(--accent-gold)';
                  return (
                    <CustomDot
                      cx={props.cx}
                      cy={props.cy}
                      fill={fill}
                      status={point?.status}
                      rating={point?.rating}
                    />
                  );
                }}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={subcategoryColors[entry.subcategory] || 'var(--accent-gold)'}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* X-axis labels */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingLeft: '2rem',
          paddingRight: '1.25rem',
          marginTop: '0.5rem'
        }}
      >
        <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
          {xLabel}
        </span>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
          {xLabelEnd}
        </span>
      </div>
    </div>
  );
}
