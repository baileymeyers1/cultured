import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BottomSheet } from './BottomSheet';
import type { CategoryGuideData } from '../../types';

interface CategoryGuideProps {
  isOpen: boolean;
  onClose: () => void;
  guide: CategoryGuideData;
}

export function CategoryGuide({ isOpen, onClose, guide }: CategoryGuideProps) {
  const [activeTab, setActiveTab] = useState(0); // 0 = overview, 1+ = subcategories

  const tabs = ['Overview', ...guide.subcategories.map(s => s.name)];

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose} title={`${guide.category.charAt(0).toUpperCase() + guide.category.slice(1)} Guide`}>
      {/* Tab bar */}
      <div
        style={{
          display: 'flex',
          gap: '4px',
          overflowX: 'auto',
          paddingBottom: '16px',
          marginBottom: '16px',
          borderBottom: '1px solid var(--border)',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
        }}
      >
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            style={{
              padding: '6px 14px',
              fontSize: '0.8125rem',
              fontFamily: 'var(--font-body)',
              fontWeight: activeTab === i ? 600 : 400,
              color: activeTab === i ? 'white' : 'var(--text-secondary)',
              backgroundColor: activeTab === i ? 'var(--text-primary)' : 'var(--bg-secondary)',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s',
              flexShrink: 0,
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 0 ? (
        <OverviewTab guide={guide} onClose={onClose} />
      ) : (
        <SubcategoryTab
          subcategory={guide.subcategories[activeTab - 1]}
          category={guide.category}
          onClose={onClose}
        />
      )}
    </BottomSheet>
  );
}

function OverviewTab({ guide, onClose }: { guide: CategoryGuideData; onClose: () => void }) {
  const { overview } = guide;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Introduction */}
      <ContentSection title="Introduction">
        <Prose text={overview.introduction} />
      </ContentSection>

      {/* History */}
      <ContentSection title="History">
        <Prose text={overview.history} />
      </ContentSection>

      {/* Production Methods */}
      {overview.productionMethods.length > 0 && (
        <ContentSection title="Production Methods">
          {overview.productionMethods.map((section, i) => (
            <div key={i} style={{ marginBottom: i < overview.productionMethods.length - 1 ? '16px' : 0 }}>
              <h4 style={{
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '6px',
              }}>
                {section.heading}
              </h4>
              <Prose text={section.content} />
              {section.entryLinks && section.entryLinks.length > 0 && (
                <EntryLinks links={section.entryLinks} category={guide.category} onClose={onClose} />
              )}
            </div>
          ))}
        </ContentSection>
      )}

      {/* Tasting Tips */}
      <ContentSection title="Tasting Tips">
        <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {overview.tastingTips.map((tip, i) => (
            <li key={i} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {tip}
            </li>
          ))}
        </ul>
      </ContentSection>

      {/* Common Descriptors */}
      <ContentSection title="Common Descriptors">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {overview.commonDescriptors.map((desc) => (
            <span
              key={desc}
              style={{
                padding: '4px 12px',
                fontSize: '0.8125rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '16px',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border)',
              }}
            >
              {desc}
            </span>
          ))}
        </div>
      </ContentSection>

      {/* Pro Tips */}
      <ContentSection title="Pro Tips">
        <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {overview.proTips.map((tip, i) => (
            <li key={i} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {tip}
            </li>
          ))}
        </ul>
      </ContentSection>

      {/* Cross-Category Pairings */}
      {overview.crossCategoryPairings.length > 0 && (
        <ContentSection title="Cross-Category Pairings">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {overview.crossCategoryPairings.map((pairing, i) => (
              <Link
                key={i}
                to={`/${pairing.category}`}
                onClick={onClose}
                style={{
                  display: 'block',
                  padding: '12px',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border)',
                }}
              >
                <div style={{ fontWeight: 500, fontSize: '0.875rem', marginBottom: '2px' }}>
                  {pairing.name}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {pairing.description}
                </div>
              </Link>
            ))}
          </div>
        </ContentSection>
      )}
    </div>
  );
}

function SubcategoryTab({
  subcategory,
  category,
  onClose,
}: {
  subcategory: CategoryGuideData['subcategories'][0];
  category: string;
  onClose: () => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Intro */}
      <ContentSection title="Introduction">
        <Prose text={subcategory.intro} />
      </ContentSection>

      {/* History */}
      <ContentSection title="History">
        <Prose text={subcategory.history} />
      </ContentSection>

      {/* Detailed Sections */}
      {subcategory.sections.map((section, i) => (
        <ContentSection key={i} title={section.heading}>
          <Prose text={section.content} />
          {section.entryLinks && section.entryLinks.length > 0 && (
            <EntryLinks links={section.entryLinks} category={category} onClose={onClose} />
          )}
          {section.crossCategoryLinks && section.crossCategoryLinks.length > 0 && (
            <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {section.crossCategoryLinks.map((link, j) => (
                <Link
                  key={j}
                  to={link.id ? `/${link.category}/${link.id}` : `/${link.category}`}
                  onClick={onClose}
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--accent)',
                    textDecoration: 'none',
                    padding: '2px 8px',
                    backgroundColor: 'rgba(139, 92, 246, 0.08)',
                    borderRadius: '4px',
                  }}
                >
                  {link.name} →
                </Link>
              ))}
            </div>
          )}
        </ContentSection>
      ))}

      {/* Notable Entries */}
      {subcategory.notableEntries.length > 0 && (
        <ContentSection title="Notable Entries">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {subcategory.notableEntries.map((entry) => (
              <Link
                key={entry.id}
                to={`/${category}/${entry.id}`}
                onClick={onClose}
                style={{
                  display: 'block',
                  padding: '10px 12px',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border)',
                }}
              >
                <div style={{ fontWeight: 500, fontSize: '0.875rem' }}>{entry.name}</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '2px', lineHeight: 1.5 }}>
                  {entry.description}
                </div>
              </Link>
            ))}
          </div>
        </ContentSection>
      )}

      {/* Pairings */}
      {subcategory.pairings.length > 0 && (
        <ContentSection title="Suggested Pairings">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {subcategory.pairings.map((pairing, i) => (
              <Link
                key={i}
                to={pairing.id ? `/${pairing.category}/${pairing.id}` : `/${pairing.category}`}
                onClick={onClose}
                style={{
                  display: 'block',
                  padding: '10px 12px',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border)',
                }}
              >
                <div style={{ fontWeight: 500, fontSize: '0.875rem' }}>
                  {pairing.name}
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginLeft: '8px' }}>
                    ({pairing.category})
                  </span>
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '2px', lineHeight: 1.5 }}>
                  {pairing.description}
                </div>
              </Link>
            ))}
          </div>
        </ContentSection>
      )}
    </div>
  );
}

// Shared components

function ContentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 style={{
        fontSize: '1rem',
        fontWeight: 600,
        fontFamily: 'var(--font-heading)',
        color: 'var(--text-primary)',
        marginBottom: '10px',
      }}>
        {title}
      </h3>
      {children}
    </section>
  );
}

function Prose({ text }: { text: string }) {
  const paragraphs = text.split('\n\n').filter(Boolean);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {paragraphs.map((p, i) => (
        <p key={i} style={{
          margin: 0,
          fontSize: '0.875rem',
          lineHeight: 1.7,
          color: 'var(--text-secondary)',
        }}>
          {p}
        </p>
      ))}
    </div>
  );
}

function EntryLinks({
  links,
  category,
  onClose,
}: {
  links: { name: string; id: string }[];
  category: string;
  onClose: () => void;
}) {
  return (
    <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
      {links.map((link) => (
        <Link
          key={link.id}
          to={`/${category}/${link.id}`}
          onClick={onClose}
          style={{
            fontSize: '0.8125rem',
            color: 'var(--accent, #7c3aed)',
            textDecoration: 'none',
            padding: '2px 8px',
            backgroundColor: 'rgba(124, 58, 237, 0.08)',
            borderRadius: '4px',
          }}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
