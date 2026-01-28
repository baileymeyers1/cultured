import { useParams, Link } from 'react-router-dom';
import { RatingStars } from '../components/common/RatingStars';
import { WinePlaceholder } from '../components/common/WinePlaceholder';
import { WhiskeyPlaceholder } from '../components/common/WhiskeyPlaceholder';
import { CoffeePlaceholder } from '../components/common/CoffeePlaceholder';
import { TeaPlaceholder } from '../components/common/TeaPlaceholder';
import { CheesePlaceholder } from '../components/common/CheesePlaceholder';
import { BeerPlaceholder } from '../components/common/BeerPlaceholder';
import { useUserData } from '../hooks/useUserData';
import wineData from '../data/wine.json';
import whiskeyData from '../data/whiskey.json';
import coffeeData from '../data/coffee.json';
import teaData from '../data/tea.json';
import cheeseData from '../data/cheese.json';
import beerData from '../data/beer.json';
import type { WineEntry, WhiskeyEntry, CoffeeEntry, TeaEntry, CheeseEntry, BeerEntry } from '../types';

const wines = wineData as WineEntry[];
const whiskeys = whiskeyData as WhiskeyEntry[];
const coffees = coffeeData as CoffeeEntry[];
const teas = teaData as TeaEntry[];
const cheeses = cheeseData as CheeseEntry[];
const beers = beerData as BeerEntry[];

type ConsumableEntry = WineEntry | WhiskeyEntry | CoffeeEntry | TeaEntry | CheeseEntry | BeerEntry;

export function Entry() {
  const { category, id } = useParams<{ category: string; id: string }>();
  const { getEntryData, setRating, setNotes, toggleWishlist, toggleTried, setStatus } = useUserData();

  const isWine = category === 'wine';
  const isWhiskey = category === 'whiskey';
  const isCoffee = category === 'coffee';
  const isTea = category === 'tea';
  const isCheese = category === 'cheese';
  const isBeer = category === 'beer';

  // Find the entry
  const entry: ConsumableEntry | undefined = isWine
    ? wines.find(w => w.id === id)
    : isWhiskey
      ? whiskeys.find(w => w.id === id)
      : isCoffee
        ? coffees.find(c => c.id === id)
        : isTea
          ? teas.find(t => t.id === id)
          : isCheese
            ? cheeses.find(c => c.id === id)
            : isBeer
              ? beers.find(b => b.id === id)
              : undefined;

  const userData = id ? getEntryData(id) : undefined;

  if (!entry) {
    return (
      <div className="container" style={{ paddingTop: '3rem', textAlign: 'center' }}>
        <h1 className="heading-1">Not Found</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
          This entry could not be found.
        </p>
        <Link to={`/${category}`} className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
          Back to {category}
        </Link>
      </div>
    );
  }

  // Handle rating with auto-tried
  const handleRating = (rating: number) => {
    setRating(entry.id, rating);
    // Automatically mark as tried when rating
    if (rating > 0) {
      setStatus(entry.id, 'tried');
    }
  };

  // Find similar items (same subcategory)
  const similarItems = isWine
    ? wines.filter(w => w.subcategory === entry.subcategory && w.id !== entry.id).slice(0, 4)
    : isWhiskey
      ? whiskeys.filter(w => w.subcategory === entry.subcategory && w.id !== entry.id).slice(0, 4)
      : isCoffee
        ? coffees.filter(c => c.subcategory === entry.subcategory && c.id !== entry.id).slice(0, 4)
        : isTea
          ? teas.filter(t => t.subcategory === entry.subcategory && t.id !== entry.id).slice(0, 4)
          : isCheese
            ? cheeses.filter(c => c.subcategory === entry.subcategory && c.id !== entry.id).slice(0, 4)
            : beers.filter(b => b.subcategory === entry.subcategory && b.id !== entry.id).slice(0, 4);

  const categoryName = isWine ? 'Wine' : isWhiskey ? 'Whiskey' : isCoffee ? 'Coffee' : isTea ? 'Tea' : isCheese ? 'Cheese' : 'Beer';
  const categoryNamePlural = isWine ? 'Wines' : isWhiskey ? 'Whiskeys' : isCoffee ? 'Coffees' : isTea ? 'Teas' : isCheese ? 'Cheeses' : 'Beers';
  const categoryLabel = isWine ? `${entry.subcategory} Wine` : isCheese ? `${entry.subcategory} Cheese` : isBeer ? `${entry.subcategory} Beer` : `${entry.subcategory} ${categoryName}`;

  // Flavor profile labels
  const flavorLabels = isWine
    ? { x: { start: 'Light', name: 'Body', end: 'Full' }, y: { start: 'Dry', name: 'Sweetness', end: 'Sweet' } }
    : isWhiskey
      ? { x: { start: 'Light / Clean', name: 'Smoke', end: 'Smoky / Peated' }, y: { start: 'Dry / Spicy', name: 'Sweetness', end: 'Sweet / Rich' } }
      : isCoffee
        ? { x: { start: 'Light Roast', name: 'Roast Level', end: 'Dark Roast' }, y: { start: 'Bright / Acidic', name: 'Acidity', end: 'Smooth / Low Acid' } }
        : isTea
          ? { x: { start: 'Delicate / Floral', name: 'Body', end: 'Robust / Malty' }, y: { start: 'Green / Unoxidized', name: 'Oxidation', end: 'Black / Fully Oxidized' } }
          : isCheese
            ? { x: { start: 'Mild / Delicate', name: 'Intensity', end: 'Strong / Pungent' }, y: { start: 'Soft / Creamy', name: 'Texture', end: 'Hard / Aged' } }
            : { x: { start: 'Light / Crisp', name: 'Body', end: 'Full / Heavy' }, y: { start: 'Malty / Sweet', name: 'Bitterness', end: 'Hoppy / Bitter' } };

  // Get flavor profile values
  const getFlavorX = () => {
    if (isWine) return (entry as WineEntry).flavorProfile.body;
    if (isWhiskey) return (entry as WhiskeyEntry).flavorProfile.smoke;
    if (isCoffee) return (entry as CoffeeEntry).flavorProfile.roast;
    if (isTea) return (entry as TeaEntry).flavorProfile.body;
    if (isCheese) return (entry as CheeseEntry).flavorProfile.intensity;
    return (entry as BeerEntry).flavorProfile.body;
  };

  const getFlavorY = () => {
    if (isWine) return (entry as WineEntry).flavorProfile.sweetness;
    if (isWhiskey) return (entry as WhiskeyEntry).flavorProfile.sweetness;
    if (isCoffee) return (entry as CoffeeEntry).flavorProfile.acidity;
    if (isTea) return (entry as TeaEntry).flavorProfile.oxidation;
    if (isCheese) return (entry as CheeseEntry).flavorProfile.texture;
    return (entry as BeerEntry).flavorProfile.bitterness;
  };

  const flavorX = getFlavorX();
  const flavorY = getFlavorY();

  // Render placeholder based on category
  const renderPlaceholder = () => {
    if (isWine) {
      return <WinePlaceholder subcategory={entry.subcategory} size="large" />;
    } else if (isWhiskey) {
      return <WhiskeyPlaceholder subcategory={entry.subcategory} size="large" />;
    } else if (isCoffee) {
      return <CoffeePlaceholder subcategory={entry.subcategory} size="large" />;
    } else if (isTea) {
      return <TeaPlaceholder subcategory={entry.subcategory} size="large" />;
    } else if (isCheese) {
      return <CheesePlaceholder subcategory={entry.subcategory} size="large" />;
    } else {
      return <BeerPlaceholder subcategory={entry.subcategory} size="large" />;
    }
  };

  // Render specifications based on category
  const renderSpecifications = () => {
    if (isWine) {
      const wineEntry = entry as WineEntry;
      return [
        { label: 'Body', value: wineEntry.specifications.body },
        { label: 'Tannins', value: wineEntry.specifications.tannins },
        { label: 'Acidity', value: wineEntry.specifications.acidity },
        { label: 'Alcohol', value: wineEntry.specifications.alcohol },
        { label: 'Aging Potential', value: wineEntry.specifications.agingPotential }
      ];
    } else if (isWhiskey) {
      const whiskeyEntry = entry as WhiskeyEntry;
      return [
        { label: 'ABV', value: whiskeyEntry.specifications.abv },
        { label: 'Age', value: whiskeyEntry.specifications.age },
        { label: 'Cask Type', value: whiskeyEntry.specifications.caskType },
        { label: 'Region', value: whiskeyEntry.specifications.region }
      ];
    } else if (isCoffee) {
      const coffeeEntry = entry as CoffeeEntry;
      return [
        { label: 'Roast Level', value: coffeeEntry.specifications.roastLevel },
        { label: 'Altitude', value: coffeeEntry.specifications.altitude },
        { label: 'Process', value: coffeeEntry.specifications.process },
        { label: 'Variety', value: coffeeEntry.specifications.variety }
      ];
    } else if (isTea) {
      const teaEntry = entry as TeaEntry;
      return [
        { label: 'Oxidation Level', value: teaEntry.specifications.oxidationLevel },
        { label: 'Caffeine Level', value: teaEntry.specifications.caffeineLevel },
        { label: 'Brew Temperature', value: teaEntry.specifications.brewTemp },
        { label: 'Steep Time', value: teaEntry.specifications.steepTime }
      ];
    } else if (isCheese) {
      const cheeseEntry = entry as CheeseEntry;
      return [
        { label: 'Milk Type', value: cheeseEntry.specifications.milkType },
        { label: 'Rind', value: cheeseEntry.specifications.rind },
        { label: 'Aging', value: cheeseEntry.specifications.aging },
        { label: 'Region', value: cheeseEntry.specifications.region }
      ];
    } else {
      const beerEntry = entry as BeerEntry;
      return [
        { label: 'ABV', value: beerEntry.specifications.abv },
        { label: 'IBU', value: beerEntry.specifications.ibu },
        { label: 'Style', value: beerEntry.specifications.style },
        { label: 'Brewery', value: beerEntry.specifications.brewery }
      ];
    }
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      {/* Back Link */}
      <Link
        to={`/${category}`}
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
        ← Back to {categoryName}
      </Link>

      {/* Main Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        {/* Header Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(200px, 300px) 1fr',
            gap: '2rem',
            alignItems: 'start'
          }}
        >
          {/* Image Placeholder */}
          <div
            style={{
              aspectRatio: '3/4',
              borderRadius: '12px',
              overflow: 'hidden'
            }}
          >
            {renderPlaceholder()}
          </div>

          {/* Details */}
          <div>
            <div style={{ marginBottom: '0.5rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: 'var(--accent-copper)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {categoryLabel}
              </span>
            </div>

            <h1 className="heading-1" style={{ marginBottom: '0.5rem' }}>{entry.name}</h1>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              {entry.type} from {entry.origin}
            </p>

            {/* Price */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  color: 'var(--accent-gold)'
                }}
              >
                {entry.price}
              </span>
            </div>

            {/* Rating */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Your Rating
              </label>
              <RatingStars
                rating={userData?.rating || 0}
                onRate={handleRating}
                size="large"
              />
            </div>

            {/* Status Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <button
                className={`btn ${userData?.status === 'wishlist' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => toggleWishlist(entry.id)}
              >
                {userData?.status === 'wishlist' ? 'On Wishlist' : 'Add to Wishlist'}
              </button>
              <button
                className={`btn ${userData?.status === 'tried' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => toggleTried(entry.id)}
              >
                {userData?.status === 'tried' ? 'Tried' : 'Mark as Tried'}
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section
          style={{
            backgroundColor: 'white',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '1.5rem'
          }}
        >
          <h2 className="heading-3" style={{ marginBottom: '1rem' }}>About</h2>
          <p style={{ color: 'var(--text-primary)', lineHeight: 1.7 }}>
            {entry.about}
          </p>
        </section>

        {/* Specifications & Flavor Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {/* Specifications */}
          <section
            style={{
              backgroundColor: 'white',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '1.5rem'
            }}
          >
            <h2 className="heading-3" style={{ marginBottom: '1rem' }}>Specifications</h2>
            <dl style={{ margin: 0 }}>
              {renderSpecifications().map(({ label, value }) => value && (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.75rem 0',
                    borderBottom: '1px solid var(--border)'
                  }}
                >
                  <dt style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{label}</dt>
                  <dd style={{ margin: 0, fontWeight: 500, textAlign: 'right' }}>{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Flavor Profile Mini */}
          <section
            style={{
              backgroundColor: 'white',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '1.5rem'
            }}
          >
            <h2 className="heading-3" style={{ marginBottom: '1rem' }}>Flavor Profile</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{flavorLabels.x.start}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>{flavorLabels.x.name}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{flavorLabels.x.end}</span>
                </div>
                <div
                  style={{
                    height: '8px',
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: '4px',
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: `${flavorX}%`,
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '16px',
                      height: '16px',
                      backgroundColor: 'var(--accent-gold)',
                      borderRadius: '50%',
                      border: '2px solid white',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  />
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{flavorLabels.y.start}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>{flavorLabels.y.name}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{flavorLabels.y.end}</span>
                </div>
                <div
                  style={{
                    height: '8px',
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: '4px',
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: `${flavorY}%`,
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '16px',
                      height: '16px',
                      backgroundColor: 'var(--accent-gold)',
                      borderRadius: '50%',
                      border: '2px solid white',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Tasting Notes */}
        <section
          style={{
            backgroundColor: 'white',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '1.5rem'
          }}
        >
          <h2 className="heading-3" style={{ marginBottom: '1rem' }}>Tasting Notes</h2>
          <p style={{ color: 'var(--text-primary)', lineHeight: 1.7, fontStyle: 'italic' }}>
            {entry.tastingNotes}
          </p>
        </section>

        {/* Pairings & History Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {/* Pairings */}
          {entry.pairings.length > 0 && (
            <section
              style={{
                backgroundColor: 'white',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1.5rem'
              }}
            >
              <h2 className="heading-3" style={{ marginBottom: '1rem' }}>{isWine ? 'Food Pairings' : 'Pairings'}</h2>
              <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                {entry.pairings.map((pairing, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    {pairing}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* History */}
          {entry.history && (
            <section
              style={{
                backgroundColor: 'white',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '1.5rem'
              }}
            >
              <h2 className="heading-3" style={{ marginBottom: '1rem' }}>History</h2>
              <p style={{ color: 'var(--text-primary)', lineHeight: 1.7 }}>
                {entry.history}
              </p>
            </section>
          )}
        </div>

        {/* Serving Recommendation */}
        {entry.servingRecommendation && (
          <section
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '1.5rem'
            }}
          >
            <h2 className="heading-3" style={{ marginBottom: '1rem' }}>{isCoffee || isTea ? 'Brewing Recommendation' : 'Serving Recommendation'}</h2>
            <p style={{ color: 'var(--text-primary)', lineHeight: 1.7 }}>
              {entry.servingRecommendation}
            </p>
          </section>
        )}

        {/* Your Notes */}
        <section
          style={{
            backgroundColor: 'white',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '1.5rem'
          }}
        >
          <h2 className="heading-3" style={{ marginBottom: '1rem' }}>Your Notes</h2>
          <textarea
            value={userData?.notes || ''}
            onChange={(e) => setNotes(entry.id, e.target.value)}
            placeholder={`Add your personal tasting notes, memories, or thoughts about this ${categoryName.toLowerCase()}...`}
            style={{
              width: '100%',
              minHeight: '120px',
              resize: 'vertical'
            }}
          />
        </section>

        {/* Similar Items */}
        {similarItems.length > 0 && (
          <section>
            <h2 className="heading-2" style={{ marginBottom: '1rem' }}>Similar {categoryNamePlural}</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '1rem'
              }}
            >
              {similarItems.map(item => (
                <Link
                  key={item.id}
                  to={`/${category}/${item.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="card" style={{ padding: '1rem' }}>
                    <h3 className="heading-3" style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>
                      {item.name}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                      {item.origin}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
