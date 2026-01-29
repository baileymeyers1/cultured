import type { CategoryGuideData } from '../../types';

export const wineGuide: CategoryGuideData = {
  category: 'wine',
  overview: {
    introduction:
      'Wine is among the most ancient and culturally significant beverages in human history, a product of the simple yet endlessly complex transformation of grape juice through fermentation. At its core, wine is the expression of a specific place, climate, soil composition, and the decisions of the people who tend the vines and guide the winemaking process. The concept of terroir -- the unique combination of geography, geology, and climate that gives a wine its distinctive character -- lies at the heart of wine appreciation. No two vineyards, even those separated by mere meters, produce identical wines, and this infinite variability is what makes the study of wine so inexhaustibly fascinating.\n\nThe world of wine encompasses an extraordinary diversity of styles, from bone-dry, mineral-driven whites to opulent, deeply concentrated reds; from delicate, effervescent sparkling wines to lusciously sweet dessert wines and robust fortified wines. The grape varieties used, numbering well over a thousand cultivated cultivars worldwide, each contribute their own aromatic and structural signatures. Cabernet Sauvignon brings structure and dark fruit intensity, Pinot Noir offers translucent elegance and complexity, Riesling delivers piercing acidity and aromatic purity, and Chardonnay provides a versatile canvas shaped profoundly by winemaking choices. Understanding these varieties and the regions in which they thrive is the first step toward developing a meaningful appreciation of wine.\n\nWine appreciation is both an intellectual pursuit and a sensory experience. The practice of tasting wine engages all the senses: sight reveals information about age and concentration; the nose detects hundreds of volatile aromatic compounds; the palate assesses structure, balance, and texture; and even hearing plays a role in the satisfying pop of a cork or the effervescence of Champagne. Developing a wine vocabulary and training one\'s palate is a lifelong endeavor, but even the earliest stages of this journey can yield tremendous pleasure and understanding.',

    history:
      'The origins of winemaking stretch back at least eight thousand years to the South Caucasus region, in the area that is now Georgia. Archaeological evidence from the Neolithic period, including residue analysis of clay vessels known as qvevri, confirms that the deliberate fermentation of grapes was practiced as early as 6000 BCE. From this cradle of viticulture, the knowledge and practice of winemaking spread throughout the ancient world -- to Mesopotamia, Egypt, Phoenicia, Greece, and eventually Rome. The ancient Greeks considered wine a gift from Dionysus and established sophisticated viticultural practices, while the Romans systematized wine production on an unprecedented scale, planting vineyards across their vast empire and laying the foundations for many of Europe\'s most celebrated wine regions.\n\nThe medieval period saw the Catholic Church become the primary custodian of viticultural knowledge in Europe. Monastic orders, particularly the Benedictines and Cistercians, meticulously documented the characteristics of individual vineyard plots in Burgundy and along the Rhine, creating the earliest systematic understanding of terroir that persists in modern appellation systems. The development of the glass bottle and cork closure in the seventeenth century revolutionized wine storage and trade, enabling wines to age and develop complexity in ways previously impossible. The eighteenth and nineteenth centuries witnessed the establishment of formal classification systems, most famously the 1855 Classification of Bordeaux, and the global expansion of viticulture to the Americas, South Africa, Australia, and New Zealand.\n\nThe twentieth century brought both devastation and renewal to the wine world. The phylloxera epidemic of the late nineteenth and early twentieth centuries destroyed vast swathes of European vineyards, necessitating the grafting of European Vitis vinifera vines onto resistant American rootstock. The post-war period saw a revolution in winemaking technology, including temperature-controlled fermentation, improved understanding of malolactic conversion, and advances in oak cooperage. The famous Judgment of Paris in 1976, in which California wines triumphed over their French counterparts in a blind tasting, shattered assumptions about Old World supremacy and inaugurated the modern era of global wine competition and innovation.',

    productionMethods: [
      {
        heading: 'Viticulture and the Vineyard Year',
        content:
          'The quality of any wine is fundamentally determined in the vineyard, long before grapes reach the winery. Viticulture -- the science and practice of grape growing -- encompasses decisions about site selection, rootstock and clone choices, vine training and trellising systems, canopy management, soil cultivation, and harvest timing. The concept of terroir holds that the interaction between grape variety, soil, microclimate, and human intervention creates a wine\'s unique identity. Great vineyard sites typically share characteristics such as good drainage, appropriate sun exposure, and sufficient diurnal temperature variation to preserve acidity while achieving phenolic ripeness.\n\nThe vineyard year begins with winter pruning, which determines the number of buds and thus the potential crop load for the coming vintage. Spring brings bud break and the anxious period of frost risk, followed by flowering and fruit set in late spring or early summer. The growing season demands constant vigilance: canopy management ensures adequate sun exposure and air circulation, while decisions about leaf pulling, green harvesting (crop thinning), and irrigation (where permitted) directly impact the concentration and quality of the resulting fruit. Harvest timing is perhaps the most critical decision of all, requiring the winemaker to balance sugar accumulation, acid retention, and phenolic maturity. The choice between hand harvesting and mechanical harvesting carries significant implications for fruit quality and sorting precision.',
        entryLinks: [
          { name: 'Domaine de la Romanee-Conti (Romanee-Conti)', id: 'wine-020' },
          { name: 'Giacomo Conterno Monfortino Barolo Riserva', id: 'wine-036' }
        ]
      },
      {
        heading: 'Fermentation and Winemaking',
        content:
          'Fermentation is the transformative process by which yeast converts grape sugars into alcohol and carbon dioxide, along with hundreds of secondary metabolites that contribute to a wine\'s aromatic complexity. Before fermentation begins, the winemaker must decide how to handle the harvested fruit: white wines are typically pressed before fermentation to separate juice from skins, while red wines are fermented in contact with their skins to extract color, tannin, and phenolic compounds. The choice of fermentation vessel -- stainless steel tanks, oak barrels, concrete eggs, clay amphora, or traditional open-top wooden vats -- profoundly influences the character of the finished wine.\n\nTemperature control during fermentation is one of the most significant advances of modern winemaking. Cool fermentation temperatures (12-16 degrees Celsius) preserve delicate aromatic compounds in white wines, while warmer temperatures (25-30 degrees Celsius) are typical for red wines to facilitate extraction. The winemaker may choose to use indigenous (wild) yeast populations, which can contribute complexity and a stronger sense of place, or selected commercial yeast strains for more predictable results. Maceration techniques for red wines, including cold soaking before fermentation and extended maceration after fermentation, allow the winemaker to modulate the extraction of tannins and color. Malolactic fermentation, a secondary bacterial conversion of sharp malic acid to softer lactic acid, is standard for red wines and optional for whites, where it adds body and a creamy, buttery character.',
        entryLinks: [
          { name: 'Chateau Petrus', id: 'wine-007' },
          { name: 'Ridge Monte Bello', id: 'wine-064' }
        ]
      },
      {
        heading: 'Aging, Oak, and Maturation',
        content:
          'The aging of wine, whether in oak barrels, stainless steel, concrete, or bottle, is a critical phase in which a wine develops complexity, integrates its structural components, and evolves toward its ultimate expression. Oak aging is perhaps the most influential maturation technique, contributing not only flavors such as vanilla, toast, spice, and coconut, but also facilitating micro-oxygenation through the barrel\'s semi-porous staves. The choice between French oak (Quercus petraea or robur, offering more subtle, integrated flavors) and American oak (Quercus alba, contributing more overt vanilla and coconut notes) is a fundamental stylistic decision.\n\nBarrel size matters enormously: the standard 225-liter Bordeaux barrique or 228-liter Burgundy piece provides a higher surface-area-to-volume ratio than larger formats such as demi-muids (600 liters) or foudres (1,000+ liters), resulting in more pronounced oak influence. The proportion of new versus used barrels is another critical variable, with prestigious estates often employing 50-100 percent new oak for their top cuvees, while others deliberately minimize new oak to allow terroir expression to dominate. Beyond oak, extended lees contact (sur lie aging) contributes richness and textural complexity, while bottle aging allows the slow polymerization of tannins, the development of tertiary aromas (leather, earth, truffle, dried flowers), and the gradual harmonization of a wine\'s component parts.',
        entryLinks: [
          { name: 'Chateau Latour', id: 'wine-003' },
          { name: 'Vega Sicilia Unico', id: 'wine-053' },
          { name: 'R. Lopez de Heredia Vina Tondonia Gran Reserva', id: 'wine-056' }
        ]
      },
      {
        heading: 'Blending and Assemblage',
        content:
          'The art of blending, known as assemblage in French winemaking tradition, is one of the winemaker\'s most expressive tools. In regions such as Bordeaux and Champagne, blending is integral to the identity of the wine: multiple grape varieties, vineyard parcels, and sometimes vintages are combined to create a harmonious whole that is greater than the sum of its parts. A Bordeaux blend might combine the structural backbone of Cabernet Sauvignon with the fleshy richness of Merlot, the aromatic lift of Cabernet Franc, and the spicy complexity of Petit Verdot. Champagne houses blend wines from dozens of parcels and multiple reserve vintages to maintain their distinctive house style year after year.\n\nIn contrast, some of the world\'s most celebrated wines are single-variety, single-vineyard expressions that derive their complexity entirely from terroir and winemaking. The Grand Cru Burgundies, made from 100 percent Pinot Noir or Chardonnay, exemplify this philosophy of transparency, where the winemaker\'s role is to reveal rather than construct. The tension between these two approaches -- blending as creative composition versus single-variety purity -- represents one of wine\'s most enduring philosophical debates. Both methods, when executed with skill and intention, can produce wines of extraordinary depth and distinction.',
        entryLinks: [
          { name: 'Opus One', id: 'wine-063' },
          { name: 'Krug Grande Cuvee', id: 'wine-090' },
          { name: 'Domaine Leroy Musigny Grand Cru', id: 'wine-022' }
        ]
      }
    ],

    tastingTips: [
      'Begin by examining the wine visually against a white background. Color intensity and hue reveal information about grape variety, age, and winemaking: young red wines display purple-ruby tones that evolve toward garnet and brick with age, while young whites range from pale straw to golden, deepening over time.',
      'Swirl the glass gently to release volatile aromatic compounds, then nose the wine in two stages: first from a distance to capture the most volatile top notes, then with your nose inside the rim to detect subtler aromas. Allow yourself time; many wines reveal different aromatic layers over several minutes of aeration.',
      'On the palate, assess the wine\'s structural components sequentially: sweetness is detected first on the tip of the tongue, followed by acidity (which causes salivation), then tannin (a drying, astringent sensation on the gums and inner cheeks), and finally alcohol (a warming sensation in the throat).',
      'Pay close attention to the wine\'s texture and body, which range from light and ethereal to rich and viscous. The interplay between fruit concentration, acidity, tannin, and alcohol determines a wine\'s balance -- the single most important quality criterion.',
      'Evaluate the finish or aftertaste: great wines linger on the palate for thirty seconds or more, often revealing new flavors and dimensions that were not apparent on the initial taste. A long, evolving finish is one of the hallmarks of exceptional wine.',
      'Taste wines at the appropriate temperature. Serving a red wine too warm or a white wine too cold can mask its best qualities. Most reds are best between 15-18 degrees Celsius, whites between 8-12 degrees, and sparkling wines between 6-10 degrees.',
      'Take notes consistently, recording your impressions of appearance, aroma, palate, and overall assessment. Over time, your tasting notes become an invaluable personal reference that tracks the development of your palate and preferences.'
    ],

    commonDescriptors: [
      'Tannic',
      'Oaky',
      'Fruity',
      'Floral',
      'Mineral',
      'Herbaceous',
      'Spicy',
      'Earthy',
      'Buttery',
      'Crisp',
      'Velvety',
      'Austere',
      'Jammy',
      'Structured',
      'Elegant',
      'Opulent',
      'Lean',
      'Round',
      'Complex',
      'Balanced'
    ],

    proTips: [
      'When evaluating a wine\'s aging potential, focus on its structural components rather than fruit intensity. High acidity, firm tannins (for reds), residual sugar (for sweet wines), and alcohol all act as preservatives. A wine that tastes excessively tannic or acidic in youth may blossom magnificently after a decade or more of patient cellaring.',
      'Decanting is not just for old wines with sediment. Young, tannic reds often benefit enormously from aggressive aeration -- two to four hours in a decanter can simulate years of bottle development, softening tannins and allowing complex aromatics to emerge.',
      'The shape and quality of your glassware genuinely affects wine perception. A large-bowled glass concentrates aromatics for structured reds, while a narrower glass preserves the delicate bouquet of aged Burgundy or aromatic whites. Invest in quality stems before investing in expensive bottles.',
      'Develop your palate by tasting comparatively. Side-by-side tastings of the same grape from different regions, different vintages of the same wine, or different producers from the same appellation will teach you more about wine than any book or lecture.',
      'Trust your own palate above all external scores and ratings. Wine is fundamentally subjective, and the wine that brings you the greatest pleasure is, by definition, the best wine for you. Professional critics offer useful guidance, but they are not arbiters of personal taste.'
    ],

    crossCategoryPairings: [
      {
        name: 'Cheese',
        category: 'cheese',
        description:
          'Wine and cheese is perhaps the most celebrated pairing in gastronomy. The interaction between the fat and protein in cheese and the acidity and tannin in wine creates synergies that elevate both. Classic combinations include aged Comté with Burgundy, Roquefort with Sauternes, fresh goat cheese with Sancerre, and Parmigiano-Reggiano with Barolo.'
      },
      {
        name: 'Whiskey',
        category: 'whiskey',
        description:
          'Wine and whiskey share a deep connection through oak aging. Many Scotch and bourbon distillers finish their spirits in former wine casks -- sherry butts, port pipes, Sauternes barrels, and Burgundy casks all impart distinctive character. Exploring these crossover products reveals how barrel provenance shapes flavor in both disciplines.'
      },
      {
        name: 'Coffee',
        category: 'coffee',
        description:
          'Wine and coffee share a remarkable overlap in tasting vocabulary and sensory experience. Both feature acidity as a structural backbone, both develop complex aromatic profiles through controlled transformation (fermentation and roasting, respectively), and both express terroir. A high-altitude Ethiopian natural-process coffee can display wine-like berry and floral notes strikingly reminiscent of a fine Beaujolais.'
      },
      {
        name: 'Tea',
        category: 'tea',
        description:
          'Wine and tea share the concept of terroir and the importance of oxidation in shaping flavor. A fine Darjeeling exhibits the muscatel character and tannic structure of a light red wine, while aged Pu-erh tea develops earthy complexity remarkably similar to aged Burgundy. Both beverages reward patient attention and meditative tasting.'
      },
      {
        name: 'Beer',
        category: 'beer',
        description:
          'The worlds of wine and beer increasingly overlap, particularly in the realm of wild and sour ales. Belgian lambics undergo spontaneous fermentation and barrel aging that mirror traditional winemaking, while fruit-forward saisons and farmhouse ales share aromatic affinities with natural wines. Many craft breweries now age beers in wine barrels, creating hybrid flavor profiles.'
      }
    ]
  },

  subcategories: [
    // =====================
    // RED WINE
    // =====================
    {
      name: 'Red',
      intro:
        'Red wine, produced by fermenting grape juice in contact with the skins, seeds, and sometimes stems of dark-skinned grape varieties, is the most widely collected and cellar-worthy category of wine. The skin contact during fermentation extracts anthocyanins (color pigments), tannins (structural polyphenols), and a wealth of flavor compounds that give red wines their characteristic depth, structure, and capacity for aging. From the ethereal transparency of a great Burgundy to the monumental power of a top Barolo or Napa Cabernet, red wines span an extraordinary spectrum of styles, each shaped by grape variety, terroir, climate, and winemaking philosophy.',

      history:
        'Red winemaking has been practiced for millennia, with evidence of red wine production dating to at least 4000 BCE in ancient Armenia and Georgia. The ancient Romans favored dark, concentrated wines and established red grape cultivation across their empire, planting the precursors of modern varieties in Gaul, Hispania, and Italia. The medieval monastic orders of Burgundy and the Rhineland refined viticultural practices for Pinot Noir and other red varieties, while the Dutch-influenced Bordeaux trade of the seventeenth and eighteenth centuries created the commercial framework and classification systems that still define fine red wine today. The phylloxera crisis of the late nineteenth century devastated European red wine production but ultimately led to the modern era of replanting, clonal selection, and the global spread of noble red varieties to the New World.',

      sections: [
        {
          heading: 'Cabernet Sauvignon',
          content:
            'Cabernet Sauvignon is the most widely planted premium red grape variety in the world, a natural cross of Cabernet Franc and Sauvignon Blanc that was first identified in seventeenth-century Bordeaux. It thrives in warm, well-drained sites and produces deeply colored wines with firm tannins, pronounced cassis and blackcurrant fruit, and remarkable aging potential. The thick skins of Cabernet Sauvignon berries contribute high levels of anthocyanins and phenolic compounds, creating wines of substantial structure that reward extended cellaring.\n\nIn its spiritual homeland of Bordeaux\'s Left Bank -- particularly the communes of Pauillac, Margaux, and Saint-Julien -- Cabernet Sauvignon forms the backbone of the region\'s most celebrated blends, partnered with Merlot, Cabernet Franc, and Petit Verdot. The classified growths of the 1855 Medoc classification, including such legendary estates as Chateau Latour, Chateau Mouton Rothschild, and Chateau Margaux, have demonstrated the variety\'s ability to produce wines of extraordinary complexity and longevity. In the Napa Valley, Cabernet Sauvignon has achieved its own apotheosis, producing opulent, richly textured wines that rival the greatest Bordeaux in depth and concentration. Estates like Screaming Eagle, Harlan Estate, and Ridge Monte Bello have elevated California Cabernet to the pinnacle of global fine wine.',
          entryLinks: [
            { name: 'Chateau Margaux', id: 'wine-001' },
            { name: 'Chateau Latour', id: 'wine-003' },
            { name: 'Chateau Mouton Rothschild', id: 'wine-004' },
            { name: 'Screaming Eagle Cabernet Sauvignon', id: 'wine-061' },
            { name: 'Harlan Estate', id: 'wine-062' },
            { name: 'Ridge Monte Bello', id: 'wine-064' }
          ]
        },
        {
          heading: 'Pinot Noir',
          content:
            'Pinot Noir is widely regarded as the most hauntingly beautiful and maddeningly difficult of all red grape varieties. Thin-skinned, early-ripening, and exquisitely sensitive to site and climate, Pinot Noir produces wines of translucent color, silky texture, and extraordinary aromatic complexity. At its best, it offers a perfume of red berries, violets, earth, and spice that evolves with age into a mesmerizing tapestry of truffle, leather, undergrowth, and dried roses. The variety demands cool to moderate climates, well-drained calcareous or limestone soils, and meticulous vineyard management.\n\nBurgundy remains the undisputed reference point for Pinot Noir. The Grand Cru vineyards of the Cote de Nuits -- Romanee-Conti, La Tache, Chambertin, Musigny, Bonnes-Mares -- produce wines of such profound complexity and individuality that they have inspired reverence for centuries. The Domaine de la Romanee-Conti, often considered the world\'s most prestigious wine estate, demonstrates the extraordinary heights Pinot Noir can achieve on the right terroir. Beyond Burgundy, Oregon\'s Willamette Valley, New Zealand\'s Central Otago, Germany\'s Spatburgunder regions, and California\'s Sonoma Coast have emerged as compelling sources of world-class Pinot Noir, each offering distinctive regional interpretations of this noble variety.',
          entryLinks: [
            { name: 'Domaine de la Romanee-Conti (Romanee-Conti)', id: 'wine-020' },
            { name: 'Domaine de la Romanee-Conti La Tache', id: 'wine-021' },
            { name: 'Domaine Leroy Musigny Grand Cru', id: 'wine-022' },
            { name: 'Domaine Armand Rousseau Chambertin Grand Cru', id: 'wine-023' },
            { name: 'Williams Selyem Pinot Noir Rochioli Riverblock', id: 'wine-070' }
          ]
        },
        {
          heading: 'Merlot and Bordeaux Right Bank',
          content:
            'Merlot is the most widely planted red grape variety in Bordeaux and one of the most planted globally, prized for its plump, generous fruit character, supple tannins, and approachable texture. Often unfairly dismissed as a simple or secondary variety, Merlot achieves extraordinary heights on the Right Bank of Bordeaux, particularly in the appellations of Pomerol and Saint-Emilion, where the clay-rich soils amplify its voluptuous, fleshy character. Here, Merlot can produce wines of astonishing concentration, velvety texture, and remarkable longevity.\n\nChateau Petrus, composed almost entirely of Merlot from a tiny four-hectare plot of blue clay in Pomerol, is among the most expensive and sought-after wines in the world, producing wines of extraordinary richness and complexity. Le Pin, another Pomerol micro-estate, and Masseto from Tuscany\'s Bolgheri coast have further demonstrated Merlot\'s capacity for greatness. On the Right Bank, Merlot is frequently blended with Cabernet Franc, which contributes aromatic lift, structural definition, and a distinctive note of violets and graphite. The region\'s classification system, revised most recently in 2022, recognizes the exceptional quality of estates like Chateau Cheval Blanc, Chateau Ausone, and Chateau Angelus.',
          entryLinks: [
            { name: 'Chateau Petrus', id: 'wine-007' },
            { name: 'Le Pin', id: 'wine-011' },
            { name: 'Masseto', id: 'wine-050' },
            { name: 'Chateau Cheval Blanc', id: 'wine-006' },
            { name: 'Chateau Ausone', id: 'wine-008' },
            { name: 'Chateau Angelus', id: 'wine-009' }
          ]
        },
        {
          heading: 'Syrah and Shiraz',
          content:
            'Syrah (known as Shiraz in Australia and South Africa) is a variety of extraordinary versatility, producing wines that range from the peppery, mineral elegance of Northern Rhone to the rich, voluptuous warmth of the Barossa Valley. Genetic research has revealed Syrah to be a natural cross of Dureza and Mondeuse Blanche, two obscure varieties from southeastern France. The variety produces deeply colored wines with firm but fine-grained tannins, dark fruit intensity, and distinctive notes of black pepper, smoked meat, violet, and olive that distinguish it from other dark-skinned varieties.\n\nThe Northern Rhone appellations of Cote-Rotie, Hermitage, and Cornas represent the pinnacle of Syrah expression in the Old World. The legendary single-vineyard wines of E. Guigal -- La Mouline, La Landonne, and La Turque -- and the benchmark Hermitage bottlings of Jean-Louis Chave and Chapoutier demonstrate the variety\'s capacity for profound, age-worthy complexity. In Australia, Syrah reinvented itself as Shiraz, producing a distinctly New World style of generous, warm, and richly fruited wines. Penfolds Grange, first produced by Max Schubert in 1951, remains Australia\'s most iconic wine and one of the most collected wines globally. The Barossa Valley\'s ancient, pre-phylloxera Shiraz vines, some over 150 years old, produce wines of extraordinary concentration and regional identity.',
          entryLinks: [
            { name: 'E. Guigal Cote-Rotie La Mouline', id: 'wine-030' },
            { name: 'E. Guigal Cote-Rotie La Landonne', id: 'wine-031' },
            { name: 'Jean-Louis Chave Hermitage', id: 'wine-034' },
            { name: 'Penfolds Grange', id: 'wine-071' },
            { name: 'Henschke Hill of Grace', id: 'wine-072' }
          ]
        },
        {
          heading: 'Nebbiolo, Sangiovese, and Italian Noble Reds',
          content:
            'Italy\'s contribution to the world of fine red wine is anchored by two noble varieties: Nebbiolo and Sangiovese. Nebbiolo, the grape of Barolo and Barbaresco in Piedmont, produces some of the most structured and long-lived red wines in existence. Despite its pale, garnet-tinged color, Nebbiolo delivers formidable tannins, high acidity, and a hauntingly complex aromatic profile of tar, roses, cherries, truffles, and dried herbs. The wines require extended aging to resolve their youthful austerity, but at maturity they offer an experience of unparalleled depth and intellectual reward. The great traditionalist producers, such as Giacomo Conterno, Bartolo Mascarello, and Bruno Giacosa, craft Barolos of extraordinary longevity and terroir transparency.\n\nSangiovese, the dominant grape of Tuscany, produces wines of a different but equally compelling character. In Brunello di Montalcino, Sangiovese achieves its most concentrated and age-worthy expression, with producers like Biondi-Santi and Soldera crafting wines of remarkable elegance and structure. Chianti Classico showcases Sangiovese\'s brighter, more vibrant side, while the Super Tuscan movement of the 1970s and 1980s -- led by revolutionary wines like Sassicaia and Tignanello -- demonstrated that Italian terroir could produce world-class wines outside the constraints of traditional appellations. The Veneto\'s Amarone della Valpolicella, made from partially dried Corvina and Rondinella grapes, represents yet another dimension of Italian red wine mastery, producing wines of extraordinary richness, concentration, and power.',
          entryLinks: [
            { name: 'Giacomo Conterno Monfortino Barolo Riserva', id: 'wine-036' },
            { name: 'Bruno Giacosa Barolo Falletto Vigna Le Rocche Riserva', id: 'wine-037' },
            { name: 'Gaja Barbaresco', id: 'wine-038' },
            { name: 'Biondi-Santi Brunello di Montalcino Riserva', id: 'wine-045' },
            { name: 'Sassicaia', id: 'wine-047' },
            { name: 'Tignanello', id: 'wine-048' },
            { name: 'Giuseppe Quintarelli Amarone della Valpolicella', id: 'wine-051' }
          ]
        }
      ],

      notableEntries: [
        {
          name: 'Chateau Margaux',
          id: 'wine-001',
          description: 'First Growth Bordeaux producing wines of exceptional elegance, perfume, and silky texture. The epitome of refinement in the Medoc.'
        },
        {
          name: 'Domaine de la Romanee-Conti (Romanee-Conti)',
          id: 'wine-020',
          description: 'The world\'s most prestigious Pinot Noir, from a 1.81-hectare monopole vineyard in Vosne-Romanee. Transcendent complexity and ethereal purity.'
        },
        {
          name: 'Chateau Petrus',
          id: 'wine-007',
          description: 'Pomerol\'s most legendary estate, producing opulent Merlot of extraordinary concentration from unique blue clay soils.'
        },
        {
          name: 'Penfolds Grange',
          id: 'wine-071',
          description: 'Australia\'s most iconic wine. A multi-regional Shiraz blend of extraordinary power and longevity, first produced in 1951.'
        },
        {
          name: 'Giacomo Conterno Monfortino Barolo Riserva',
          id: 'wine-036',
          description: 'The benchmark for traditionally made Barolo, aged for seven or more years before release. Monumental structure and complexity.'
        },
        {
          name: 'Screaming Eagle Cabernet Sauvignon',
          id: 'wine-061',
          description: 'Napa Valley cult wine of extraordinary intensity and scarcity. Perfectly captures the opulence and precision of premium California Cabernet.'
        }
      ],

      pairings: [
        {
          name: 'Aged Cheddar',
          category: 'cheese',
          description: 'The sharp, crystalline richness of a well-aged cheddar complements the tannin structure and dark fruit of Cabernet Sauvignon-based reds.'
        },
        {
          name: 'Comte',
          category: 'cheese',
          description: 'The nutty, caramelized complexity of aged Comte is a classic match for red Burgundy, echoing the wine\'s earthiness and finesse.'
        },
        {
          name: 'Highland Single Malt',
          category: 'whiskey',
          description: 'Sherry-cask-aged Highland malts share aromatic affinities with full-bodied reds: dried fruit, spice, and oak-derived vanilla and toast.'
        },
        {
          name: 'Dark Roast Coffee',
          category: 'coffee',
          description: 'Dark roast coffees share flavor compounds with tannic reds, including chocolate, tobacco, and caramelized sugar notes.'
        }
      ]
    },

    // =====================
    // WHITE WINE
    // =====================
    {
      name: 'White',
      intro:
        'White wine encompasses an extraordinary range of styles, from the crystalline, mineral-driven austerity of Chablis to the lush, golden opulence of barrel-fermented California Chardonnay. Produced primarily from green- or yellow-skinned grapes fermented without skin contact, white wines derive their character from the grape variety, the terroir, and a series of critical winemaking decisions: whether to ferment in steel or oak, whether to permit malolactic conversion, how long to age on the lees, and at what point to bottle. The best white wines achieve a captivating balance between fruit purity, structural acidity, and textural richness that can rival the complexity of any red.',

      history:
        'White winemaking has ancient roots, with evidence of white wine production in the eastern Mediterranean dating back thousands of years. The Greeks and Romans appreciated white wines, and the medieval monasteries of Burgundy, the Rhine, and the Mosel systematically identified and cultivated the finest white wine vineyards. The development of temperature-controlled fermentation in the mid-twentieth century revolutionized white winemaking, allowing producers to preserve the delicate aromatic compounds that distinguish great white wines. The modern renaissance of white Burgundy, the global expansion of Chardonnay and Sauvignon Blanc, and the rediscovery of Riesling as one of the world\'s noblest grape varieties have established white wine as a category of equal prestige and complexity to red.',

      sections: [
        {
          heading: 'Chardonnay',
          content:
            'Chardonnay is the world\'s most popular white grape variety and arguably its most versatile. Originating in Burgundy, where it produces wines of unmatched terroir expression, Chardonnay is a relatively neutral variety that reflects its growing conditions and winemaking treatment with remarkable fidelity. In Chablis, planted on ancient Kimmeridgian limestone, Chardonnay produces wines of steely minerality, citrus precision, and saline tension. On the Cote de Beaune, in the hallowed vineyards of Meursault, Puligny-Montrachet, and Chassagne-Montrachet, it achieves a synthesis of power and finesse that represents the pinnacle of white winemaking.\n\nThe Grand Cru white Burgundies -- Le Montrachet, Batard-Montrachet, Corton-Charlemagne, and the extraordinarily rare DRC Montrachet -- are among the most expensive and sought-after wines in the world. These wines combine rich, concentrated fruit with laser-like acidity, complex mineral undertones, and extraordinary aging potential. Beyond Burgundy, Chardonnay has conquered the globe: California\'s Sonoma Coast and Napa Valley produce opulent, tropical-fruited expressions; Australia\'s Margaret River and Yarra Valley offer elegant, refined versions; and emerging regions from Chile to South Africa continue to raise the quality bar. The variety\'s extraordinary responsiveness to winemaking choices -- oak versus steel, malolactic versus non-malolactic, lees contact duration -- means that Chardonnay can be crafted in virtually any style.',
          entryLinks: [
            { name: 'Domaine de la Romanee-Conti Montrachet Grand Cru', id: 'wine-086' },
            { name: 'Coche-Dury Corton-Charlemagne Grand Cru', id: 'wine-087' },
            { name: 'Domaine Coche-Dury Meursault Les Perrieres', id: 'wine-026' },
            { name: 'Domaine Leflaive Batard-Montrachet Grand Cru', id: 'wine-027' },
            { name: 'Domaine Raveneau Chablis Grand Cru Les Clos', id: 'wine-028' },
            { name: 'Leeuwin Estate Art Series Chardonnay', id: 'wine-078' }
          ]
        },
        {
          heading: 'Riesling',
          content:
            'Riesling is widely regarded by critics and sommeliers as the world\'s greatest white wine grape, a variety of extraordinary versatility that produces wines ranging from bone-dry to intensely sweet, from light-bodied and refreshing to richly concentrated and profoundly complex. Riesling\'s hallmark is its piercing acidity, which provides structure, freshness, and exceptional aging potential regardless of sweetness level. The variety is also prized for its aromatic intensity, offering a distinctive spectrum of citrus, stone fruit, floral, petrol, and mineral notes that evolve dramatically with age.\n\nGermany and Alsace are the twin pillars of Riesling excellence. Germany\'s Mosel, Rheingau, Nahe, and Pfalz regions produce Rieslings of extraordinary purity and precision, from the razor-sharp Grosses Gewachs (Grand Cru dry wines) to the ethereal Trockenbeerenauslese dessert wines that represent the ultimate expression of botrytized Riesling. Egon Muller\'s Scharzhofberger, Joh. Jos. Prum\'s Wehlener Sonnenuhr, and Donnhoff\'s Hermannshohle are benchmarks of the variety. In Alsace, producers like Trimbach (whose Clos Ste Hune is legendary) and Zind-Humbrecht craft Rieslings of greater body and textural richness. Austria\'s Wachau region, with its dramatic terraced vineyards above the Danube, produces some of the world\'s finest dry Rieslings, while Australian Clare Valley and Eden Valley offerings demonstrate the variety\'s global potential.',
          entryLinks: [
            { name: 'Egon Muller Scharzhofberger Riesling Trockenbeerenauslese', id: 'wine-100' },
            { name: 'Joh. Jos. Prum Wehlener Sonnenuhr Riesling Auslese', id: 'wine-101' },
            { name: 'Trimbach Clos Ste Hune Riesling', id: 'wine-098' },
            { name: 'Donnhoff Niederhauser Hermannshohle Riesling Grosses Gewachs', id: 'wine-102' },
            { name: 'F.X. Pichler Kellerberg Riesling Smaragd', id: 'wine-104' }
          ]
        },
        {
          heading: 'Sauvignon Blanc and Loire Whites',
          content:
            'Sauvignon Blanc is one of the world\'s most distinctive and immediately recognizable white grape varieties, characterized by vibrant acidity, herbaceous aromatics, and flavors of gooseberry, grapefruit, green bell pepper, and freshly cut grass. The variety\'s ancestral home is the Loire Valley, where the appellations of Sancerre and Pouilly-Fume produce some of the world\'s most elegant and mineral-driven Sauvignon Blancs. These wines, grown on the chalky and flinty soils of the upper Loire, combine razor-sharp acidity with a distinctive smoky, gunflint minerality that distinguishes them from New World expressions.\n\nBeyond the Loire, Sauvignon Blanc has achieved remarkable success in Bordeaux (where it is often blended with Semillon for both dry whites and the great sweet wines of Sauternes), New Zealand\'s Marlborough region (which has become synonymous with an exuberantly fruity, tropical style), and South Africa\'s Stellenbosch and Constantia districts. The Loire Valley also produces exceptional whites from Chenin Blanc, a variety of extraordinary versatility that produces everything from dry, mineral wines in Savennieres to luscious botrytized dessert wines in Bonnezeaux and Quarts de Chaume. The Chateau d\'Yquem, though classified under Sauternes and made from Semillon and Sauvignon Blanc, stands as a monument to the heights that botrytized white wine can achieve.',
          entryLinks: [
            { name: 'Chateau d\'Yquem', id: 'wine-109' },
            { name: 'Chateau Haut-Brion Blanc', id: 'wine-110' }
          ]
        },
        {
          heading: 'Other Notable White Varieties',
          content:
            'Beyond the major international varieties, the world of white wine harbors an extraordinary diversity of grapes and styles. Pinot Gris (Pinot Grigio in Italy) ranges from the lean, mineral wines of northeastern Italy to the rich, spicy, almost golden expressions of Alsace. Gewurztraminer produces exotically perfumed wines with lychee, rose petal, and Turkish delight aromatics. Viognier, the grape of Condrieu in the Northern Rhone, offers opulent peach, apricot, and honeysuckle notes with a richly textured palate. Gruner Veltliner, Austria\'s signature white grape, produces peppery, herbal wines of remarkable freshness and versatility.\n\nSpain\'s white wine heritage, long overshadowed by its reds, is experiencing a remarkable renaissance. The aged white Riojas of Lopez de Heredia, particularly the legendary Vina Tondonia Gran Reserva Blanco, demonstrate that Viura and Malvasia can achieve extraordinary complexity with extended oxidative aging. Greece\'s Assyrtiko from Santorini, grown on ancient volcanic soils, produces wines of electrifying minerality and saline intensity. These indigenous varieties, rooted in specific places and traditions, represent the most exciting frontier in contemporary white winemaking.',
          entryLinks: [
            { name: 'Zind-Humbrecht Rangen de Thann Grand Cru Pinot Gris', id: 'wine-099' },
            { name: 'Vina Tondonia Gran Reserva Blanco', id: 'wine-059' },
            { name: 'Nikolaihof Vinothek Riesling', id: 'wine-105' }
          ]
        }
      ],

      notableEntries: [
        {
          name: 'Domaine de la Romanee-Conti Montrachet Grand Cru',
          id: 'wine-086',
          description: 'The most prestigious white wine in the world, from a tiny parcel of Le Montrachet. Staggering concentration balanced by crystalline precision.'
        },
        {
          name: 'Trimbach Clos Ste Hune Riesling',
          id: 'wine-098',
          description: 'Alsace\'s most celebrated Riesling, from a plot within the Rosacker Grand Cru. Austere in youth, developing extraordinary complexity over decades.'
        },
        {
          name: 'Domaine Raveneau Chablis Grand Cru Les Clos',
          id: 'wine-028',
          description: 'The benchmark for Chablis, combining steely mineral intensity with remarkable depth and aging potential.'
        },
        {
          name: 'Chateau d\'Yquem',
          id: 'wine-109',
          description: 'The greatest sweet wine in the world, from the Premier Cru Superieur of Sauternes. Botrytized Semillon and Sauvignon Blanc of almost supernatural concentration.'
        },
        {
          name: 'Egon Muller Scharzhofberger Riesling Trockenbeerenauslese',
          id: 'wine-100',
          description: 'Among the rarest and most expensive wines on earth. Botrytized Riesling of infinite complexity from the steep slate slopes of the Saar.'
        }
      ],

      pairings: [
        {
          name: 'Fresh Goat Cheese',
          category: 'cheese',
          description: 'The tangy acidity and creamy texture of fresh chevre is a classic match for crisp Sauvignon Blanc, particularly from the Loire Valley.'
        },
        {
          name: 'Gruyere',
          category: 'cheese',
          description: 'Nutty, complex Gruyere pairs beautifully with oak-aged Chardonnay, each enhancing the other\'s richness and depth.'
        },
        {
          name: 'Green Tea',
          category: 'tea',
          description: 'The vegetal, mineral qualities of fine Japanese green tea echo the herbaceous, mineral character of top Chablis or Sancerre.'
        },
        {
          name: 'Light Roast Coffee',
          category: 'coffee',
          description: 'High-acidity, fruit-forward light roast coffees from Ethiopia or Kenya share aromatic parallels with aromatic white wines like Riesling and Gewurztraminer.'
        }
      ]
    },

    // =====================
    // ROSE
    // =====================
    {
      name: 'Rose',
      intro:
        'Rose wine occupies a unique position in the vinous world, bridging the aromatic freshness of white wine with the subtle structural complexity of red. Produced by limiting the contact time between juice and red grape skins -- typically from just a few hours to two days -- rose wines acquire their characteristic pale salmon, copper, or pink hues along with a delicate extraction of flavor and tannin. Once dismissed as a simple summer quaffer, rose has undergone a dramatic renaissance in recent decades, with top examples from Provence, Tavel, and emerging regions demonstrating that the category can achieve genuine complexity, gastronomic versatility, and even age-worthiness.',

      history:
        'Rose is arguably the oldest style of wine, predating the deeply extracted reds we know today. Ancient winemaking methods, which involved limited maceration and often mixed red and white grapes together, naturally produced wines closer to modern rose than to deeply pigmented reds. The wines of ancient Greece and Rome were frequently pale in color. Provence has been producing rose for over 2,600 years, since the Phocaeans founded Massalia (modern Marseille). In the twentieth century, rose suffered a period of declining reputation, associated with cheap, sweet blush wines. The Provencal quality revolution of the late twentieth and early twenty-first centuries, led by estates like Domaines Ott and Chateau d\'Esclans, restored rose to its rightful place as a serious category deserving of critical attention and fine dining tables.',

      sections: [
        {
          heading: 'Provence Rose',
          content:
            'Provence is the spiritual homeland and qualitative benchmark for dry rose wine. The region\'s Mediterranean climate, with abundant sunshine, mistral winds, and limestone-rich soils, produces rose of exceptional pale color, delicate aromatics, and refreshing acidity. The classic Provence rose is a blend of Grenache, Cinsault, Syrah, and Mourvedre, pressed quickly to achieve the coveted "oeil de perdrix" (eye of the partridge) pale copper-pink hue. The best examples offer aromas of white peach, wild strawberry, garrigue herbs, and a distinctive saline minerality that reflects the region\'s proximity to the Mediterranean.\n\nDomaines Ott, founded in 1912, is widely credited with establishing the modern template for premium Provence rose. Their Chateau de Selle bottling remains a reference point for elegance and complexity. Chateau d\'Esclans, under the direction of Sacha Lichine, has pushed the boundaries of rose further with its Garrus cuvee, a barrel-fermented wine of remarkable depth and texture that commands prices comparable to fine white Burgundy. The success of Provence rose has inspired producers worldwide to elevate their rose programs, but the combination of terroir, tradition, and expertise that Provence offers remains difficult to replicate.',
          entryLinks: [
            { name: 'Domaines Ott Chateau de Selle Rose', id: 'wine-113' },
            { name: 'Chateau d\'Esclans Garrus', id: 'wine-114' }
          ]
        },
        {
          heading: 'Rose Styles Around the World',
          content:
            'While Provence dominates the premium rose market, compelling rose wines are produced in virtually every wine-growing region. Tavel, in the Southern Rhone, produces France\'s only exclusively rose appellation, crafting wines of greater body, color, and structure than Provencal examples -- these are roses built for the table rather than the terrace. Spain\'s Navarra region has a long tradition of Garnacha-based rosado, offering exuberant fruit and accessible charm. In Italy, Cerasuolo d\'Abruzzo and Chiaretto from Lake Garda represent distinctive Italian interpretations of the style.\n\nThe New World has embraced rose with enthusiasm. California produces elegant examples from Pinot Noir, Grenache, and Mourvedre, while South Africa and Australia offer vibrant, fruit-forward styles. The methods of rose production also vary: direct pressing (the Provencal method) produces the palest, most delicate wines; the saignee method (bleeding off juice from a red wine fermentation) yields richer, more deeply colored roses; and the rare practice of blending red and white wines (permitted only in Champagne rose) creates wines of unique aromatic complexity. Each method produces a fundamentally different style of rose, offering the curious taster a broad spectrum of expressions to explore.',
          entryLinks: [
            { name: 'Domaines Ott Chateau de Selle Rose', id: 'wine-113' }
          ]
        },
        {
          heading: 'Serving and Enjoying Rose',
          content:
            'Rose wine is best served chilled, between 8 and 12 degrees Celsius, depending on the style. Lighter Provencal roses benefit from cooler temperatures that emphasize their crispness and delicacy, while fuller-bodied examples from Tavel or barrel-fermented cuvees can be served slightly warmer to reveal their aromatic complexity and textural richness. Contrary to popular belief, many quality roses benefit from modest cellaring: top Provence roses can develop beautifully over two to four years, gaining complexity and nuance, while Tavel can age for a decade or more.\n\nThe gastronomic versatility of rose is often underappreciated. Its combination of fruit, acidity, and subtle phenolic structure makes it one of the most food-friendly wine styles in existence, pairing effortlessly with Mediterranean cuisine, grilled seafood, charcuterie, sushi, Thai and Vietnamese dishes, and even lightly spiced Middle Eastern fare. Rose serves as an ideal bridge wine when a table features diverse dishes that would challenge a single red or white selection. For this reason, many sommeliers consider rose an indispensable tool in their pairing repertoire.',
          entryLinks: [
            { name: 'Chateau d\'Esclans Garrus', id: 'wine-114' }
          ]
        }
      ],

      notableEntries: [
        {
          name: 'Domaines Ott Chateau de Selle Rose',
          id: 'wine-113',
          description: 'A benchmark Provence rose of elegant restraint and mineral purity. The estate that established the template for modern premium rose.'
        },
        {
          name: 'Chateau d\'Esclans Garrus',
          id: 'wine-114',
          description: 'A revolutionary barrel-fermented Provence rose that demonstrated the category\'s potential for complexity, depth, and age-worthiness.'
        }
      ],

      pairings: [
        {
          name: 'Fresh Mozzarella',
          category: 'cheese',
          description: 'The milky delicacy of fresh mozzarella is beautifully complemented by the subtle fruit and crisp acidity of Provencal rose.'
        },
        {
          name: 'Wheat Beer',
          category: 'beer',
          description: 'Wheat beers and dry roses share a similar weight, refreshing acidity, and fruit-forward character that makes them natural companions for summer dining.'
        },
        {
          name: 'Oolong Tea',
          category: 'tea',
          description: 'Lightly oxidized oolong teas share rose\'s delicate floral aromatics and balanced structure, making them complementary tasting experiences.'
        }
      ]
    },

    // =====================
    // SPARKLING
    // =====================
    {
      name: 'Sparkling',
      intro:
        'Sparkling wine, distinguished by its characteristic effervescence produced through a secondary fermentation that generates dissolved carbon dioxide, represents some of the most technically demanding and celebratory wines in the world. From the iconic prestige cuvees of Champagne to the refreshing simplicity of Prosecco and the complex traditional-method sparklers of England, Spain, and the New World, sparkling wines span a remarkable range of styles, quality levels, and price points. The finest examples achieve an extraordinary synthesis of power and delicacy, combining persistent mousse, complex aromatics, and structural precision in wines that can age for decades.',

      history:
        'The history of sparkling wine is inextricably linked to the Champagne region of northeastern France, though the development of effervescent wines was a gradual process rather than a single invention. Contrary to popular myth, Dom Perignon did not "invent" Champagne; rather, the sparkling character was initially an unwanted byproduct of the region\'s cold climate, which interrupted fermentation in autumn only for it to resume in spring, generating carbon dioxide in sealed bottles. English scientist Christopher Merret documented the deliberate addition of sugar to induce secondary fermentation as early as 1662, predating French developments. The perfection of the methode champenoise over the eighteenth and nineteenth centuries -- including the innovations of the Widow Clicquot, who developed riddling (remuage) to clarify the wine -- transformed Champagne from a regional curiosity into the world\'s most prestigious sparkling wine.',

      sections: [
        {
          heading: 'Champagne',
          content:
            'Champagne stands alone at the summit of the sparkling wine world, a product of a specific terroir, a specific method, and centuries of accumulated expertise. The region\'s chalk subsoil, cool continental climate, and northerly latitude create growing conditions that produce base wines of high acidity and modest alcohol -- ideal raw materials for the methode champenoise. The three permitted grape varieties -- Chardonnay (providing elegance and citrus precision), Pinot Noir (contributing body and red fruit depth), and Pinot Meunier (offering roundness and early accessibility) -- are blended with extraordinary skill by the region\'s houses, growers, and cooperatives.\n\nThe prestige cuvees of the great Champagne houses represent the pinnacle of the sparkling winemaker\'s art. Louis Roederer Cristal, originally created for Tsar Alexander II of Russia, combines power and finesse in a wine of remarkable purity. Dom Perignon, the flagship of Moet & Chandon, undergoes extended lees aging that develops extraordinary autolytic complexity. Krug Grande Cuvee, blended from over 120 wines spanning more than a decade of vintages, achieves a richness and depth that few sparkling wines can match. Among the blanc de blancs specialists, Salon (which produces wine only in exceptional vintages) and Krug Clos du Mesnil (from a single walled vineyard in Le Mesnil-sur-Oger) represent the ultimate expression of Chardonnay-based Champagne.',
          entryLinks: [
            { name: 'Louis Roederer Cristal', id: 'wine-088' },
            { name: 'Dom Perignon', id: 'wine-089' },
            { name: 'Krug Grande Cuvee', id: 'wine-090' },
            { name: 'Krug Clos du Mesnil', id: 'wine-091' },
            { name: 'Salon Blanc de Blancs', id: 'wine-092' },
            { name: 'Pol Roger Cuvee Sir Winston Churchill', id: 'wine-093' }
          ]
        },
        {
          heading: 'Traditional Method Sparkling Wines Beyond Champagne',
          content:
            'The methode traditionnelle (or methode champenoise, a term legally restricted to wines produced in Champagne) has been adopted by quality-focused producers around the world. Spain\'s Cava, produced primarily in Penedes from indigenous varieties Macabeo, Xarel-lo, and Parellada, offers exceptional value and is increasingly producing age-worthy prestige bottlings. Italy\'s Franciacorta, made from Chardonnay, Pinot Noir, and Pinot Blanc in Lombardy, has established itself as Italy\'s finest traditional-method sparkling wine, with top producers rivaling mid-range Champagne in quality.\n\nEngland has emerged as one of the most exciting sparkling wine regions in the world, thanks to chalk soils remarkably similar to those of Champagne and a climate that, due to warming trends, now closely mirrors Champagne\'s conditions of a generation ago. Producers like Nyetimber, Ridgeview, and Wiston Estate have won blind tastings against established Champagne houses. In the Southern Hemisphere, Tasmania (Australia), Marlborough (New Zealand), and the cooler regions of South Africa are producing traditional-method sparkling wines of increasing refinement. The global expansion of quality sparkling wine production represents one of the most dynamic trends in contemporary winemaking.',
          entryLinks: [
            { name: 'Bollinger La Grande Annee', id: 'wine-096' },
            { name: 'Taittinger Comtes de Champagne Blanc de Blancs', id: 'wine-094' }
          ]
        },
        {
          heading: 'Other Sparkling Styles',
          content:
            'Beyond the traditional method, several other techniques produce sparkling wines of distinct character. The Charmat (or tank) method, in which secondary fermentation occurs in large pressurized tanks rather than individual bottles, is used for Prosecco and Asti, producing wines that emphasize fresh, primary fruit character rather than the autolytic complexity of bottle-fermented wines. Prosecco, from the Glera grape in the Veneto and Friuli regions of northeastern Italy, has become the world\'s best-selling sparkling wine category, offering accessible, fruit-forward effervescence at approachable prices.\n\nThe ancestral method (methode ancestrale or petillant naturel, often abbreviated as pet-nat) is the oldest sparkling winemaking technique, in which still-fermenting wine is bottled to complete its primary fermentation in the vessel, producing gentle, often slightly cloudy effervescence. This technique has experienced a revival among natural wine producers worldwide. Asti and Moscato d\'Asti from Piedmont use a variation of the Charmat method to produce delicately sweet, aromatically intense sparkling wines from the Moscato Bianco grape. German Sekt, traditionally made from Riesling, ranges from simple tank-method wines to ambitious traditional-method bottlings that showcase the variety\'s aromatic brilliance in effervescent form.',
          entryLinks: [
            { name: 'Ruinart Dom Ruinart Blanc de Blancs', id: 'wine-097' },
            { name: 'Billecart-Salmon Cuvee Nicolas Francois', id: 'wine-095' }
          ]
        }
      ],

      notableEntries: [
        {
          name: 'Krug Grande Cuvee',
          id: 'wine-090',
          description: 'The benchmark for multi-vintage Champagne, blended from over 120 wines across 10+ years. Extraordinary depth, richness, and complexity.'
        },
        {
          name: 'Dom Perignon',
          id: 'wine-089',
          description: 'The world\'s most recognized prestige Champagne. Extended lees aging produces a wine of autolytic complexity and remarkable finesse.'
        },
        {
          name: 'Salon Blanc de Blancs',
          id: 'wine-092',
          description: 'Produced only in exceptional vintages from a single village (Le Mesnil-sur-Oger). Among the most age-worthy and intellectually demanding Champagnes.'
        },
        {
          name: 'Louis Roederer Cristal',
          id: 'wine-088',
          description: 'Created for Russian royalty in 1876. Combines power, purity, and precision in one of Champagne\'s most iconic prestige cuvees.'
        },
        {
          name: 'Pol Roger Cuvee Sir Winston Churchill',
          id: 'wine-093',
          description: 'Named after Churchill, who famously adored Pol Roger. A Pinot Noir-dominant cuvee of authoritative structure and vinous depth.'
        }
      ],

      pairings: [
        {
          name: 'Brie de Meaux',
          category: 'cheese',
          description: 'The rich, buttery creaminess of ripe Brie is a classic match for the toasty, autolytic character of aged Champagne.'
        },
        {
          name: 'Pilsner',
          category: 'beer',
          description: 'Both pilsner and brut sparkling wines share a crisp, clean, refreshing profile that makes them natural aperitifs and companions for light fare.'
        },
        {
          name: 'Japanese Whisky',
          category: 'whiskey',
          description: 'The delicate precision of Japanese whisky echoes the finesse of fine Champagne. Both reward patient, attentive tasting.'
        }
      ]
    },

    // =====================
    // DESSERT
    // =====================
    {
      name: 'Dessert',
      intro:
        'Dessert wines represent some of the most labor-intensive, low-yielding, and potentially transcendent wines in existence. Whether produced through noble rot (botrytis cinerea), late harvest, grape drying (passito or appassimento), or freezing (ice wine), these wines achieve extraordinary concentrations of sugar, acidity, and flavor that create a sensory experience unlike any other category of wine. The finest dessert wines balance their luscious sweetness with bracing acidity, producing wines that are not cloying but rather vibrant, complex, and remarkably long-lived, with some examples capable of aging for a century or more.',

      history:
        'Sweet wines have been prized since antiquity. The ancient Greeks treasured sun-dried grape wines, and the Romans documented the exceptional quality of wines from Tokaj in present-day Hungary, where noble rot was first deliberately harnessed to produce concentrated sweet wines. The Tokaji Aszu classification system, formalized in 1730, predates all other wine classification systems. In Bordeaux, the Sauternes and Barsac appellations developed their reputation for botrytized wines during the eighteenth and nineteenth centuries, culminating in the singular classification of Chateau d\'Yquem as Premier Cru Superieur in 1855. German winemakers perfected the Pradikat system of classifying wines by must weight, from Kabinett through the vanishingly rare Trockenbeerenauslese (TBA), while Italian producers continued the ancient tradition of drying grapes to produce Vin Santo and Passito.',

      sections: [
        {
          heading: 'Botrytized Wines: Sauternes, Tokaji, and TBA',
          content:
            'Noble rot, caused by the fungus Botrytis cinerea under specific climatic conditions of morning mist followed by afternoon sunshine, is responsible for the world\'s most extraordinary sweet wines. The fungus perforates grape skins, causing water evaporation and an extreme concentration of sugars, acids, and glycerol, while contributing distinctive honey, apricot, and marmalade flavors. The production of botrytized wines is inherently risky and labor-intensive, requiring multiple passes through the vineyard to select individual berries at the optimal stage of infection. Yields are minuscule -- Chateau d\'Yquem famously produces only one glass of wine per vine.\n\nChateau d\'Yquem stands as the undisputed pinnacle of botrytized winemaking, producing wines of almost supernatural concentration, complexity, and longevity from Semillon and Sauvignon Blanc. The wines can age for over a century, developing layers of caramel, saffron, crème brulee, and exotic spices. Hungary\'s Tokaji Aszu, made from the indigenous Furmint grape, offers a different but equally compelling expression of noble rot, with flavors of orange zest, dried apricot, smoky minerality, and remarkable acidity. The German Trockenbeerenauslese (TBA) wines, particularly those from the Mosel and Nahe regions, represent perhaps the rarest and most expensive expression of botrytized Riesling, with Egon Muller\'s Scharzhofberger TBA regularly achieving record prices at auction.',
          entryLinks: [
            { name: 'Chateau d\'Yquem', id: 'wine-109' },
            { name: 'Chateau Climens', id: 'wine-111' },
            { name: 'Chateau Suduiraut', id: 'wine-112' },
            { name: 'Royal Tokaji Essencia', id: 'wine-126' },
            { name: 'Egon Muller Scharzhofberger Riesling Trockenbeerenauslese', id: 'wine-100' },
            { name: 'Kracher Trockenbeerenauslese', id: 'wine-127' }
          ]
        },
        {
          heading: 'Late Harvest and Ice Wine',
          content:
            'Late harvest wines are produced by leaving grapes on the vine well beyond the normal harvest date, allowing them to dehydrate and concentrate their sugars naturally. This technique, practiced across many wine regions, produces wines that range from off-dry to lusciously sweet depending on the degree of dehydration achieved. German Auslese and Beerenauslese wines represent refined examples of late harvest winemaking, with the Riesling grape\'s high natural acidity providing essential balance to the residual sweetness.\n\nIce wine (Eiswein in German, icewine in Canadian English) is produced from grapes that freeze naturally on the vine, typically at temperatures of minus seven to minus eight degrees Celsius. When pressed in their frozen state, the water content remains as ice crystals while an intensely concentrated, sugar-rich juice is extracted. Canada, particularly Ontario\'s Niagara Peninsula and British Columbia\'s Okanagan Valley, has become the world\'s largest and most reliable producer of ice wine, as its continental climate provides consistently cold winters. German and Austrian Eiswein, though produced in smaller quantities due to less predictable freezing conditions, often achieves even greater concentration and complexity, particularly from the Riesling grape.',
          entryLinks: [
            { name: 'Joh. Jos. Prum Wehlener Sonnenuhr Riesling Auslese', id: 'wine-101' }
          ]
        },
        {
          heading: 'Passito and Dried Grape Wines',
          content:
            'The passito or appassimento method, in which harvested grapes are dried on straw mats, racks, or in well-ventilated drying rooms before pressing, is one of the oldest winemaking techniques in the Mediterranean world. Controlled dehydration concentrates sugars, acids, and flavors while developing distinctive dried fruit, caramel, and oxidative nuances. Italy is the spiritual home of passito wines, with a tradition stretching back to Roman antiquity. Vin Santo, produced primarily in Tuscany from Trebbiano and Malvasia grapes dried for several months, offers amber-hued wines of nutty, caramelized complexity.\n\nAmarone della Valpolicella, while technically a dry wine, employs the appassimento method to produce red wines of extraordinary concentration, richness, and power. The Corvina, Rondinella, and Molinara grapes are dried for three to four months, losing up to 40 percent of their weight before pressing and fermentation. The resulting wines, with alcohol levels often exceeding 15 percent, combine ripe fruit intensity with dried fig, chocolate, and spice complexity. Greece\'s Vinsanto from Santorini, made from sun-dried Assyrtiko grapes, and the various Passito di Pantelleria wines from Sicily\'s volcanic island demonstrate the global reach and diversity of this ancient tradition.',
          entryLinks: [
            { name: 'Giuseppe Quintarelli Amarone della Valpolicella', id: 'wine-051' },
            { name: 'Dal Forno Romano Amarone della Valpolicella', id: 'wine-052' }
          ]
        }
      ],

      notableEntries: [
        {
          name: 'Chateau d\'Yquem',
          id: 'wine-109',
          description: 'The world\'s greatest sweet wine and only Premier Cru Superieur of Sauternes. Capable of aging over a century, achieving extraordinary complexity.'
        },
        {
          name: 'Royal Tokaji Essencia',
          id: 'wine-126',
          description: 'The rarest expression of Tokaji, made from the free-run juice of botrytized Furmint berries. Can take years to ferment and centuries to age.'
        },
        {
          name: 'Egon Muller Scharzhofberger Riesling Trockenbeerenauslese',
          id: 'wine-100',
          description: 'One of the rarest and most expensive wines in the world. Botrytized Riesling of infinite complexity from Germany\'s Saar Valley.'
        },
        {
          name: 'Chateau Climens',
          id: 'wine-111',
          description: 'The leading estate of Barsac, producing botrytized Semillon of exceptional purity, precision, and freshness.'
        }
      ],

      pairings: [
        {
          name: 'Roquefort',
          category: 'cheese',
          description: 'The classic pairing of salty, pungent Roquefort blue cheese with lusciously sweet Sauternes is one of gastronomy\'s most electrifying combinations.'
        },
        {
          name: 'Bourbon',
          category: 'whiskey',
          description: 'Rich bourbon and dessert wines share caramel, vanilla, and dried fruit notes. Both benefit from being savored slowly as after-dinner indulgences.'
        },
        {
          name: 'Dark Roast Coffee',
          category: 'coffee',
          description: 'The bitter-sweet complexity of an espresso or dark roast coffee provides an excellent counterpoint to the sweetness of a fine dessert wine.'
        }
      ]
    },

    // =====================
    // FORTIFIED
    // =====================
    {
      name: 'Fortified',
      intro:
        'Fortified wines are produced by the addition of grape spirit (brandy) during or after fermentation, raising the alcohol level to between 15 and 22 percent. This fortification technique, originally developed to preserve wines during long sea voyages, creates a distinctive category of wines that combine the complexity of wine with the strength and stability of spirits. The timing of spirit addition determines the style: fortification during fermentation (as in Port) preserves residual grape sugar, producing sweet wines, while fortification after fermentation (as in dry Sherry) produces wines that are fully fermented and dry. The world\'s great fortified wine traditions -- Port, Sherry, Madeira, and Marsala -- each represent centuries of accumulated knowledge and unique regional identity.',

      history:
        'The fortification of wine emerged in the seventeenth century as a practical solution to the challenges of maritime trade. English merchants trading with Portugal found that adding brandy to Douro Valley wines stabilized them for the long Atlantic voyage to England, and the Port trade was born. Similarly, the British demand for stable wines suitable for tropical climates drove the development of Madeira, Sherry, and Marsala. Over centuries, what began as a preservation technique evolved into a refined art, with each region developing unique production methods: Port\'s foot-treading in granite lagares, Sherry\'s biological aging under flor, and Madeira\'s estufagem heat-treatment process. These fortified wines became cornerstones of international trade and developed some of the most complex aging and classification systems in the wine world.',

      sections: [
        {
          heading: 'Port Wine',
          content:
            'Port, produced in the Douro Valley of northern Portugal and traditionally aged in the lodges of Vila Nova de Gaia, is the world\'s most celebrated fortified wine. The Douro Valley\'s extreme terroir -- steep, schist-terraced hillsides baking under intense summer heat -- produces grapes of extraordinary concentration from a complex blend of indigenous varieties including Touriga Nacional, Touriga Franca, Tinta Roriz, Tinto Cao, and Tinta Barroca. Fortification with aguardente (grape spirit) at 77 percent alcohol occurs during fermentation, arresting the conversion of sugar to alcohol and preserving the wine\'s natural sweetness.\n\nVintage Port, declared only in exceptional years (typically three or four times per decade), represents the pinnacle of the Port tradition. These wines, bottled after two years in barrel, are built for decades of bottle aging, during which they develop extraordinary complexity -- dried fruit, chocolate, exotic spices, leather, and an almost ethereal finesse that belies their power. Taylor\'s, Fonseca, Graham\'s, and Dow\'s are among the most respected houses, while Quinta do Noval Nacional, produced from ungrafted, pre-phylloxera vines, is considered among the rarest and most exceptional Ports ever produced. Other styles include the elegant, long-aged Tawny Ports (classified by average age: 10, 20, 30, and 40 years), the intense Colheita (single-vintage Tawny), and the fresh, everyday Ruby and Late Bottled Vintage (LBV) categories.',
          entryLinks: [
            { name: 'Taylor\'s Vintage Port', id: 'wine-115' },
            { name: 'Fonseca Vintage Port', id: 'wine-116' },
            { name: 'Graham\'s Vintage Port', id: 'wine-117' },
            { name: 'Quinta do Noval Nacional', id: 'wine-118' },
            { name: 'Dow\'s Vintage Port', id: 'wine-119' }
          ]
        },
        {
          heading: 'Sherry',
          content:
            'Sherry, produced exclusively in the Jerez-Xeres-Sherry DO of southwestern Spain from the Palomino Fino, Pedro Ximenez, and Moscatel grapes, is one of the wine world\'s most underappreciated treasures. The unique solera system of fractional blending, in which younger wines are progressively blended with older wines through a series of barrel tiers (criaderas), creates wines of remarkable consistency and complexity. The biological aging process, in which a film of indigenous yeast called flor forms on the wine\'s surface, protects it from oxidation while contributing distinctive almond, bread dough, and saline flavors.\n\nThe spectrum of Sherry styles is extraordinarily wide. Fino and Manzanilla, aged entirely under flor, are pale, bone-dry, and bracingly saline -- among the most food-friendly wines in existence. Amontillado begins its life under flor before the yeast film breaks down, allowing oxidative aging that develops nutty, amber complexity. Oloroso, aged without flor from the beginning, develops rich, walnut, and caramel character through oxidative aging. Palo Cortado, the rarest style, combines the aromatic finesse of Amontillado with the body and richness of Oloroso. Pedro Ximenez, from sun-dried grapes, produces an unctuous, inky-black dessert wine of extraordinary sweetness and concentration. The finest aged Sherries, some blended from solera systems established in the nineteenth century, represent extraordinary value relative to their complexity and age.',
          entryLinks: [
            { name: 'Tio Pepe Fino Sherry', id: 'wine-120' },
            { name: 'Lustau Almacenista Oloroso Sherry', id: 'wine-121' },
            { name: 'El Maestro Sierra Amontillado', id: 'wine-122' }
          ]
        },
        {
          heading: 'Madeira',
          content:
            'Madeira, produced on the volcanic Portuguese island of the same name in the Atlantic Ocean, is arguably the most indestructible wine ever made. The unique estufagem process, in which wines are heated in warm rooms or tanks for extended periods, simulates the conditions that the wines historically endured during long tropical sea voyages -- conditions that were discovered to dramatically improve rather than damage the wine. This heating, combined with high acidity and fortification, produces wines of virtually limitless aging potential. Bottles from the eighteenth century remain perfectly drinkable, making Madeira the longest-lived wine in existence.\n\nThe four noble grape varieties of Madeira, arranged from driest to sweetest, are Sercial (bone-dry, high acidity, citrus and almond character), Verdelho (medium-dry, smoke, honey, and tropical fruit), Bual (medium-sweet, caramel, coffee, and dried fruit), and Malmsey (Malvasia, the richest and sweetest, with flavors of toffee, dark chocolate, and burnt orange). The classification system progresses from three-year-old Finest through five, ten, fifteen, and twenty-year-old categories to the exceptional Vintage and Frasqueira (single-vintage) bottlings that represent the summit of Madeira quality. Producers like Barbeito, Blandy\'s, and Henriques & Henriques continue to produce wines of extraordinary quality and distinction.',
          entryLinks: [
            { name: 'Barbeito Single Cask Madeira', id: 'wine-123' },
            { name: 'Blandy\'s Vintage Malmsey Madeira', id: 'wine-124' },
            { name: 'Henriques & Henriques 20 Year Old Verdelho', id: 'wine-125' }
          ]
        },
        {
          heading: 'Other Fortified Traditions',
          content:
            'Beyond the three great pillars of Port, Sherry, and Madeira, the fortified wine world encompasses several other distinguished traditions. Marsala, from western Sicily, was once a wine of comparable prestige to Sherry and Madeira, and its finest expressions -- Vergine and Soleras aged for decades -- remain wines of remarkable complexity. The Vin Doux Naturel (VDN) tradition of southern France produces Muscat-based fortified wines in Beaumes-de-Venise and Rivesaltes, as well as the age-worthy Grenache-based Banyuls and Maury from Roussillon, which offer a French counterpart to Port.\n\nAustralia\'s Rutherglen region in Victoria produces extraordinary fortified Muscats and Topaques (formerly Tokays) that rank among the most complex and concentrated sweet wines in the world. These wines, classified by an ascending quality scale of Rutherglen, Classic, Grand, and Rare, are aged in solera-like systems for decades, developing extraordinary viscosity and layers of raisin, toffee, tea, and spice complexity. South Africa\'s Vin de Constance, a naturally sweet Muscat de Frontignan wine from the historic Constantia estate, was the most celebrated dessert wine of the eighteenth and nineteenth centuries, favored by Napoleon, Frederick the Great, and Jane Austen\'s characters alike.',
          entryLinks: [
            { name: 'Barca Velha', id: 'wine-060' }
          ]
        }
      ],

      notableEntries: [
        {
          name: 'Taylor\'s Vintage Port',
          id: 'wine-115',
          description: 'Among the most consistently outstanding Vintage Ports, combining power, structure, and extraordinary aging potential from the finest Douro quintas.'
        },
        {
          name: 'Quinta do Noval Nacional',
          id: 'wine-118',
          description: 'Produced from ungrafted, pre-phylloxera vines. One of the rarest and most extraordinary Ports, with a concentration that transcends the category.'
        },
        {
          name: 'Tio Pepe Fino Sherry',
          id: 'wine-120',
          description: 'The world\'s best-known Fino Sherry and the benchmark for the style. Bone-dry, saline, and bracingly fresh from biological aging under flor.'
        },
        {
          name: 'Blandy\'s Vintage Malmsey Madeira',
          id: 'wine-124',
          description: 'A rich, sweet Malmsey demonstrating Madeira\'s extraordinary aging potential. Flavors of toffee, dark chocolate, and burnt orange with virtually infinite cellaring ability.'
        },
        {
          name: 'El Maestro Sierra Amontillado',
          id: 'wine-122',
          description: 'A benchmark Amontillado showcasing the magical transition from biological to oxidative aging. Nutty, complex, and hauntingly persistent.'
        }
      ],

      pairings: [
        {
          name: 'Stilton',
          category: 'cheese',
          description: 'The legendary pairing of Vintage Port and Stilton blue cheese. The wine\'s sweetness and the cheese\'s salty pungency create a perfectly balanced counterpoint.'
        },
        {
          name: 'Scotch Whisky',
          category: 'whiskey',
          description: 'Many fine Scotch whiskies are finished in ex-Sherry or ex-Port casks, creating a natural bridge between these two traditions. Tasting them side by side reveals shared caramel, dried fruit, and spice notes.'
        },
        {
          name: 'Espresso',
          category: 'coffee',
          description: 'The intensity and bittersweet complexity of espresso pairs beautifully with the concentrated sweetness and nutty depth of aged Tawny Port or Oloroso Sherry.'
        },
        {
          name: 'Black Tea',
          category: 'tea',
          description: 'Full-bodied black teas, particularly malty Assams, share structural similarities with Madeira and Oloroso Sherry -- rich body, warming character, and complex dried fruit and spice notes.'
        }
      ]
    }
  ]
};
