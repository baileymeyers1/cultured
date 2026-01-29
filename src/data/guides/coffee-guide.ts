import type { CategoryGuideData } from '../../types';

export const coffeeGuide: CategoryGuideData = {
  category: 'coffee',
  overview: {
    introduction:
      'Coffee is one of the most consumed beverages on Earth, cherished for its complex flavors, stimulating properties, and the rituals that surround its preparation and enjoyment. From a humble cherry growing on trees in tropical highlands to the carefully extracted cup in your hands, coffee undergoes one of the most intricate journeys of any food product. The seed of the Coffea plant, primarily the Arabica and Robusta species, is transformed through processing, roasting, and brewing into a drink of astonishing diversity, capable of expressing flavors ranging from bright citrus and delicate jasmine to deep chocolate and earthy spice.\n\nThe world of specialty coffee has exploded in recent decades, driven by a growing appreciation for terroir, processing innovation, and precision brewing. Much like wine, coffee reflects its origin: the altitude, soil composition, climate, and varietal all leave fingerprints on the final cup. A washed Ethiopian Yirgacheffe tastes nothing like a natural-processed Brazilian Cerrado, and a light Nordic roast reveals a completely different character than a dark Italian espresso blend. Understanding these variables is the key to unlocking coffee as a sensory experience rather than a mere caffeine delivery system.\n\nWhether you are a newcomer drawn by curiosity or a seasoned enthusiast refining your palate, the journey through coffee is endlessly rewarding. Each origin, process, roast level, and brew method opens new doors of flavor. This guide is designed to walk you through the history, production, tasting, and categorization of coffee so that every cup becomes an opportunity for discovery.',

    history:
      'The story of coffee begins in the ancient highlands of Ethiopia, where legend holds that a goat herder named Kaldi noticed his flock becoming unusually energetic after eating the bright red cherries of a certain shrub. Whether or not the tale is literally true, the coffee plant (Coffea arabica) is indeed indigenous to the forests of southwestern Ethiopia and neighboring South Sudan. By the fifteenth century, Sufi monks in Yemen were cultivating coffee and using it as an aid for nighttime devotions. The port city of Mocha became the first great hub of the coffee trade, giving its name to a style of coffee still recognized today. From Yemen, coffee spread across the Arabian Peninsula, and coffeehouses, known as qahveh khaneh, became centers of intellectual life, music, and political discourse.\n\nThe Ottoman Empire played a pivotal role in popularizing coffee throughout the Middle East and into Europe. By the early seventeenth century, Venetian traders had brought coffee beans to Italy, and within decades coffeehouses appeared in London, Paris, Vienna, and Amsterdam. These establishments became known as "penny universities" in England, where the price of a cup bought entry to vigorous debate. European colonial powers then transplanted coffee cultivation to their territories: the Dutch brought it to Java and Suriname, the French to Martinique and Reunion, and the Portuguese to Brazil, which would eventually become the world\'s largest producer. The Bourbon and Typica varietals that descend from those early transplants remain foundational to specialty coffee today.\n\nThe twentieth century saw coffee become a truly global commodity, but also one subject to cycles of boom and bust that often exploited producing countries. The "first wave" of coffee treated it as a generic commodity, prioritizing volume and convenience. The "second wave," led by companies like Peet\'s and Starbucks beginning in the 1960s and 1970s, introduced consumers to darker roasts, espresso drinks, and the idea of origin. The "third wave," emerging around the turn of the millennium, reframed coffee as an artisanal product akin to craft wine or single-malt whisky. Third-wave roasters champion traceability, direct trade, lighter roasts that preserve origin character, and precise brewing parameters. Today, a "fourth wave" is arguably emerging, marked by scientific rigor in fermentation and processing, experimental varietals, and an even deeper focus on sustainability and equity throughout the supply chain.',

    productionMethods: [
      {
        heading: 'Growing and Harvesting',
        content:
          'Coffee is grown in a band around the equator known as the "Bean Belt," roughly between the Tropics of Cancer and Capricorn. The two primary commercial species are Coffea arabica, which accounts for approximately 60-70% of global production and is prized for its nuanced flavors, and Coffea canephora (Robusta), which is hardier, higher in caffeine, and often used in instant coffee and espresso blends for its body and crema. Within Arabica, there are dozens of important varietals including Typica, Bourbon, Caturra, Catuai, SL-28, SL-34, Gesha (Geisha), and many more, each contributing distinct flavor characteristics.\n\nCoffee trees thrive at altitudes between 1,000 and 2,200 meters above sea level, where cooler temperatures slow cherry maturation and allow more complex sugars and acids to develop. Volcanic soils rich in minerals are especially prized, as found in regions like Guatemala\'s Antigua Valley, Kenya\'s central highlands, and Ethiopia\'s Sidamo zone. Trees take three to five years to produce their first harvest and can remain productive for several decades. The fruit, called a cherry, typically ripens from green to bright red (or sometimes yellow or orange, depending on the varietal).\n\nHarvesting methods vary significantly and affect quality. Selective hand-picking, where only ripe cherries are gathered in multiple passes over several weeks, produces the highest-quality lots but is labor-intensive and costly. Strip picking, where all cherries are removed from a branch at once, is faster but includes unripe and overripe fruit. Mechanical harvesting, used primarily in Brazil\'s flat, large-scale plantations, is the most efficient but least selective. The choice of harvesting method is one of the first quality-determining decisions in the long chain from farm to cup.',
        entryLinks: [
          { name: 'Ethiopian Yirgacheffe', id: 'coffee-001' },
          { name: 'Colombian Supremo', id: 'coffee-005' },
          { name: 'Kenyan AA', id: 'coffee-010' },
          { name: 'Panama Geisha', id: 'coffee-015' }
        ]
      },
      {
        heading: 'Processing Methods',
        content:
          'After harvesting, the coffee cherry must be processed to extract the seed (bean) from the surrounding fruit. The processing method has a profound impact on the final flavor of the coffee, arguably rivaling the influence of origin and varietal. There are three primary processing methods, along with numerous hybrid and experimental approaches.\n\nThe washed (wet) process involves removing the outer skin and most of the fruit mucilage before fermentation in water tanks, followed by thorough washing and drying. This method tends to produce coffees with bright acidity, clean flavors, and a transparent expression of terroir. It is the dominant method in East Africa, Central America, and Colombia. The natural (dry) process, the oldest method, involves drying the entire cherry intact on raised beds or patios for two to four weeks, allowing the fruit sugars to ferment and impart flavors to the bean. Natural-processed coffees are often characterized by pronounced fruitiness, heavy body, and wine-like or berry notes. This method is traditional in Ethiopia and Brazil and has seen a major revival in specialty coffee.\n\nThe honey (pulped natural) process is a hybrid approach, particularly associated with Costa Rica and Central America. The skin is removed but varying amounts of mucilage are left on the bean during drying. The amount of mucilage retained defines sub-categories: white honey (least mucilage, closest to washed), yellow honey, red honey, and black honey (most mucilage, closest to natural). Each level produces a different balance of sweetness, body, and acidity. Beyond these core methods, experimental processing techniques are increasingly common in specialty coffee, including anaerobic fermentation, carbonic maceration (borrowed from winemaking), lactic acid fermentation, and even koji-inoculated processing. These innovations are pushing the boundaries of what coffee can taste like, producing cups with intense fruit, floral, and even savory characteristics.',
        entryLinks: [
          { name: 'Ethiopia Guji Natural', id: 'coffee-003' },
          { name: 'Costa Rica Honey Process', id: 'coffee-020' },
          { name: 'Brazil Cerrado Natural', id: 'coffee-025' }
        ]
      },
      {
        heading: 'Roasting',
        content:
          'Roasting is the transformative step that converts green, grassy-smelling coffee beans into the aromatic, complex product we recognize. During roasting, beans are subjected to temperatures typically between 180 and 230 degrees Celsius (356-446 degrees Fahrenheit), triggering hundreds of chemical reactions including the Maillard reaction (responsible for browning and flavor development), caramelization of sugars, and Strecker degradation (which produces many aromatic compounds). The roaster\'s craft lies in manipulating time and temperature to develop desirable flavors while minimizing defects.\n\nLight roasts (often ending shortly after "first crack," an audible popping sound as steam escapes the bean) preserve the most origin character, acidity, and floral or fruity notes. They are favored in specialty coffee for single-origin offerings because they allow the unique terroir to shine. Medium roasts develop more body and sweetness, balancing origin character with roast-derived flavors like caramel and milk chocolate. This is the most versatile roast level, working well for both filter and espresso brewing. Dark roasts (taken to or beyond "second crack") emphasize smoky, bittersweet, and roast-forward flavors like dark chocolate, toasted nuts, and charcoal. Much of the origin character is subsumed by roast character at this level, which is why dark roasts are common for blends and traditional espresso.\n\nModern specialty roasters often use sophisticated profiling software to track the rate of temperature rise, development time ratio (the percentage of total roast time spent after first crack), and other variables. Even subtle adjustments, such as modulating airflow or the timing of gas reduction, can significantly alter the cup profile. The gap between roasting date and consumption also matters: most specialty coffee is best consumed between 7 and 30 days post-roast, after degassing but before staling.',
        entryLinks: [
          { name: 'Light Roast Blend', id: 'coffee-050' },
          { name: 'Medium Roast House Blend', id: 'coffee-051' },
          { name: 'Dark Roast Espresso', id: 'coffee-055' }
        ]
      },
      {
        heading: 'Brewing Methods',
        content:
          'The final stage in coffee\'s journey is brewing, the extraction of soluble compounds from ground coffee using water. Brewing method, grind size, water temperature, contact time, and ratio all influence the resulting cup, and each method highlights different aspects of a coffee\'s character.\n\nPour-over methods (such as the Hario V60, Kalita Wave, and Chemex) use gravity to draw water through a bed of ground coffee held in a filter. These methods offer clarity and brightness, making them ideal for showcasing single-origin coffees with complex acidity and delicate aromatics. Immersion methods (such as the French press, AeroPress, and cupping bowls) steep grounds in water for a set time before separation. These tend to produce fuller body and a more rounded mouthfeel, as more oils and fine particles remain in the cup. Espresso, which forces hot water through finely ground, compacted coffee at 8-10 bars of pressure, produces a concentrated shot with intense flavor, syrupy body, and crema. It forms the base for lattes, cappuccinos, flat whites, and other milk-based drinks.\n\nCold brew involves steeping coarsely ground coffee in cold or room-temperature water for 12-24 hours, producing a smooth, low-acid concentrate. Japanese iced coffee (flash brew) brews hot coffee directly over ice, preserving the acidity and aromatics that cold brew lacks. Other notable methods include the siphon (vacuum) brewer, the Moka pot (stovetop espresso), and Turkish/Arabic coffee, where very finely ground coffee is simmered in a cezve with water and sometimes sugar and cardamom. Each method brings out different facets of the same bean, and experimenting across methods is one of the great pleasures of the coffee hobby.\n\nRegardless of method, the Specialty Coffee Association recommends a brewing ratio of approximately 1:15 to 1:18 (coffee to water by weight), water temperature of 90-96 degrees Celsius (195-205 degrees Fahrenheit), and a total dissolved solids (TDS) target of 1.15-1.45% for an extraction yield of 18-22%. These guidelines provide a starting point, but personal taste should always be the final arbiter.',
        entryLinks: [
          { name: 'Pour-Over Single Origin Flight', id: 'coffee-060' },
          { name: 'Espresso Roast Classico', id: 'coffee-055' },
          { name: 'Cold Brew Blend', id: 'coffee-065' }
        ]
      }
    ],

    tastingTips: [
      'Begin by evaluating the dry fragrance of freshly ground coffee before adding water. Inhale deeply and note your first impressions: does it smell fruity, floral, nutty, chocolatey, or spicy? Dry fragrance often foreshadows what you will taste in the cup.',
      'When cupping (the professional tasting method), use a standardized ratio of 8.25 grams of coarsely ground coffee per 150 milliliters of water at 93 degrees Celsius. After steeping for four minutes, break the crust of grounds that forms on the surface by pushing it aside with a spoon while inhaling the wet aroma. This "break" releases an intense burst of aromatic compounds.',
      'Slurp the coffee vigorously from a spoon to aerate it across your entire palate. This technique, while noisy, sprays the coffee over all taste receptor zones and vaporizes volatile compounds into your retronasal passage, greatly enhancing your ability to perceive nuance.',
      'Evaluate the coffee across multiple dimensions: acidity (brightness, liveliness, or tartness), body (weight and texture on the palate), sweetness (perceived sugar-like quality), flavor (the specific taste notes), aftertaste (how flavors linger), and balance (how harmoniously these elements interact).',
      'Taste the coffee at multiple temperatures as it cools. Many coffees reveal their most interesting characteristics between 50 and 65 degrees Celsius, as very hot liquid can mask subtlety. A coffee that improves as it cools is generally considered high quality.',
      'Compare coffees side by side whenever possible. Tasting a washed Kenyan next to a natural Ethiopian, or a light roast next to a dark roast of the same origin, dramatically sharpens your ability to identify differences and build a flavor vocabulary.',
      'Keep a tasting journal. Record the coffee name, origin, process, roast level, brewing method, and your sensory impressions. Over time, patterns will emerge that help you identify your preferences and recognize regional characteristics.'
    ],

    commonDescriptors: [
      'Bright',
      'Fruity',
      'Chocolatey',
      'Nutty',
      'Floral',
      'Earthy',
      'Citric',
      'Berry-like',
      'Caramel',
      'Honey-sweet',
      'Wine-like',
      'Smoky',
      'Spicy',
      'Herbal',
      'Tropical',
      'Stone Fruit',
      'Clean',
      'Syrupy',
      'Winey',
      'Buttery'
    ],

    proTips: [
      'Invest in a burr grinder before upgrading any other equipment. Consistent grind size is the single most impactful variable in brewing quality. Even an inexpensive hand burr grinder will outperform an expensive blade grinder.',
      'Use filtered water with a mineral content of 75-150 parts per million (ppm) total dissolved solids. Water that is too soft produces flat, under-extracted coffee; water that is too hard can cause scaling and over-extraction of bitter compounds. The Specialty Coffee Association publishes a detailed water quality standard.',
      'Store whole-bean coffee in an opaque, airtight container at room temperature, away from heat, light, and moisture. Avoid refrigerating or freezing coffee unless you are storing it for more than a month, in which case freeze in single-dose portions in vacuum-sealed bags and grind directly from frozen.',
      'When dialing in espresso, adjust one variable at a time. If your shot is sour and thin (under-extracted), try grinding finer or increasing brew time. If it is bitter and astringent (over-extracted), try grinding coarser or decreasing brew time. A kitchen scale and timer are essential tools for consistency.',
      'Seek out coffees with transparent sourcing information. Roasters who list the farm name, varietal, altitude, and processing method on the bag are usually committed to quality and equitable trade. This transparency also helps you learn which variables correlate with flavors you enjoy.'
    ],

    crossCategoryPairings: [
      {
        name: 'Cheese',
        category: 'cheese',
        description:
          'Coffee and cheese share a surprising affinity. A bright, fruity Ethiopian Yirgacheffe pairs beautifully with a creamy chevre or fresh burrata, where the acidity cuts through the richness. A full-bodied, chocolatey Brazilian pairs well with aged Gouda or Gruyere, where the nutty, caramelized flavors in both create harmony. Espresso alongside a wedge of Parmigiano-Reggiano is a classic Italian combination.'
      },
      {
        name: 'Whiskey',
        category: 'whiskey',
        description:
          'Coffee and whiskey have a long, intertwined history, from the Irish Coffee to modern craft cocktails. A rich, dark-roasted coffee with chocolate and caramel notes complements the vanilla and oak of a bourbon. A smoky, full-bodied Sumatran coffee stands up to the peat of an Islay Scotch. For a non-alcoholic pairing, try sipping a dram of whiskey alongside a cup of coffee and notice how shared flavor compounds like vanillin and furfural create bridges between the two.'
      },
      {
        name: 'Chocolate and Beer',
        category: 'beer',
        description:
          'Coffee is a natural partner for both chocolate and beer, and all three often come together in coffee stouts and porters. A light-roasted, fruity coffee pairs with milk chocolate or a Belgian witbier. A dark-roasted espresso blend mirrors the roasted barley and bitter chocolate notes of an imperial stout. Coffee-infused beers have become a beloved craft beer style, and comparing a coffee stout with the coffee used to brew it is a revelatory tasting exercise.'
      },
      {
        name: 'Tea',
        category: 'tea',
        description:
          'While coffee and tea are often seen as rivals, comparing them side by side is a wonderful way to calibrate your palate. A light-roasted, floral Kenyan coffee shares surprising similarities with a first-flush Darjeeling. A dark-roasted Sumatran and a smoky Lapsang Souchong both occupy the earthy, bold end of the spectrum. Tasting across both categories deepens your understanding of concepts like body, acidity, and finish.'
      }
    ]
  },

  subcategories: [
    {
      name: 'Single Origin',
      intro:
        'Single-origin coffee comes from a single country, region, farm, or even a specific lot within a farm. The term emphasizes traceability and the unique characteristics imparted by a particular growing environment, or terroir. In specialty coffee, single origins are celebrated for their distinctiveness: the bright, wine-like acidity of a Kenyan, the blueberry intensity of a natural Ethiopian, the syrupy sweetness of a Guatemalan Antigua. Drinking single-origin coffee is an exercise in geography and agriculture, a way to taste the soil, altitude, climate, and human care that shaped a particular harvest.',
      history:
        'The concept of single-origin coffee is ancient in one sense, since all coffee was once consumed near where it was grown, but modern in another, as the specialty coffee movement formalized the idea in the late twentieth century. For centuries, coffees were blended and sold under generic regional names. The shift toward farm-level traceability began in the 1990s and accelerated in the 2000s, driven by direct trade relationships between roasters and producers, the Cup of Excellence competition (launched in 1999), and growing consumer demand for transparency. Today, the most sought-after single origins command prices rivaling fine wine, with auction lots of Panamanian Geisha, Ethiopian heirloom, and Kenyan SL-28 fetching hundreds of dollars per kilogram.',
      sections: [
        {
          heading: 'Ethiopian Origins',
          content:
            'Ethiopia is the birthplace of Coffea arabica and remains the most genetically diverse coffee-growing country on Earth. The forests of southwestern Ethiopia harbor thousands of wild and semi-wild coffee varieties, many of which have never been formally cataloged. This genetic wealth translates into an extraordinary range of cup profiles. Ethiopian coffees are broadly divided by region, with the most celebrated growing areas being Yirgacheffe, Sidamo (Sidama), Guji, Harrar, and Limu.\n\nYirgacheffe, a small district within Sidamo, is perhaps the most famous coffee origin in the world. Washed Yirgacheffe coffees are renowned for their floral aromatics (jasmine, bergamot), tea-like body, and vibrant citrus acidity. Natural-processed Yirgacheffe and Guji coffees explode with berry fruit, often described as blueberry, strawberry, or tropical fruit, with a winey fermented quality that can be polarizing but is deeply loved by many enthusiasts. Harrar, in eastern Ethiopia, produces exclusively natural-processed coffees known for their wild, fruity, and sometimes gamey character.\n\nEthiopian coffee culture is the oldest in the world. The traditional Ethiopian coffee ceremony, a ritual involving roasting green beans over charcoal, grinding them in a mortar, and brewing in a jebena (clay pot), is a daily social and spiritual practice that can last over an hour. It is a reminder that coffee is not merely a commodity but a cultural cornerstone with deep roots in community and hospitality.',
          entryLinks: [
            { name: 'Ethiopian Yirgacheffe', id: 'coffee-001' },
            { name: 'Ethiopian Sidamo', id: 'coffee-002' },
            { name: 'Ethiopia Guji Natural', id: 'coffee-003' },
            { name: 'Ethiopian Harrar', id: 'coffee-004' }
          ],
          crossCategoryLinks: [
            { name: 'Darjeeling First Flush', category: 'tea' },
            { name: 'Sauvignon Blanc', category: 'wine' }
          ]
        },
        {
          heading: 'Colombian Origins',
          content:
            'Colombia is the world\'s third-largest coffee producer and arguably the most recognized origin among general consumers, thanks in part to the iconic Juan Valdez marketing campaign launched in 1958 by the Colombian Coffee Growers Federation. However, specialty Colombian coffee has moved far beyond the smooth, balanced, and mildly acidic profile traditionally associated with the country. Today, Colombia is one of the most exciting origins in specialty coffee, producing an enormous diversity of cup profiles across its many growing regions.\n\nThe major coffee-growing departments include Huila, Nariño, Cauca, Tolima, Antioquia, and Santander, each with distinct microclimates and elevation profiles. Huila, in southern Colombia, has emerged as the country\'s premier specialty region, producing coffees with bright acidity, caramel sweetness, and stone fruit or red apple notes. Nariño, near the Ecuadorian border, grows coffee at extreme altitudes (up to 2,300 meters) that produces intense sweetness and sparkling acidity. Colombian producers have also been at the forefront of processing innovation, with many farms experimenting with extended fermentation, anaerobic processing, and exotic varietals like Geisha, Pink Bourbon, and Tabi.\n\nColombia benefits from its equatorial position and mountainous terrain, which allow for two main harvest seasons (mitaca and principal) and year-round availability of relatively fresh coffee. The country\'s well-organized smallholder farming system, where most coffee is grown on farms of less than five hectares, supports both volume and quality.',
          entryLinks: [
            { name: 'Colombian Supremo', id: 'coffee-005' },
            { name: 'Colombia Huila', id: 'coffee-006' },
            { name: 'Colombia Nariño', id: 'coffee-007' },
            { name: 'Colombia Pink Bourbon', id: 'coffee-008' }
          ]
        },
        {
          heading: 'Kenyan Origins',
          content:
            'Kenyan coffee is revered among specialty coffee professionals for its bold, complex, and intensely flavored cup profile. The hallmark of great Kenyan coffee is its juicy, almost savory acidity, often described as blackcurrant (cassis), grapefruit, or tomato-like, paired with a full body and a long, wine-like finish. These distinctive characteristics are largely attributable to three factors: the SL-28 and SL-34 varietals developed by Scott Laboratories in the 1930s, the rich volcanic soils around Mount Kenya and the Aberdare Range, and the meticulous washed processing that is standard in the country.\n\nKenya\'s coffee grading system is based on bean size, with AA being the largest (screen size 17-18) and generally commanding the highest prices, though size does not always correlate perfectly with cup quality. Other grades include AB, PB (peaberry, where only one seed develops inside the cherry, producing a small, round bean with concentrated flavor), and lower grades. The country\'s auction system, run through the Nairobi Coffee Exchange, has historically set prices and provided quality benchmarks, though an increasing amount of specialty coffee is now sold through direct trade channels.\n\nThe main growing regions include Nyeri, Kirinyaga, Embu, Murang\'a, and Kiambu in the central highlands, as well as Kisii and Bungoma in western Kenya. Nyeri and Kirinyaga consistently produce some of the country\'s most celebrated lots. Kenyan smallholders typically deliver their cherries to cooperative washing stations (called factories), where processing is carried out collectively. The best factories are known by name among specialty buyers and command a devoted following.',
          entryLinks: [
            { name: 'Kenyan AA', id: 'coffee-010' },
            { name: 'Kenya Nyeri Peaberry', id: 'coffee-011' },
            { name: 'Kenya Kirinyaga', id: 'coffee-012' }
          ],
          crossCategoryLinks: [
            { name: 'Cabernet Sauvignon', category: 'wine' }
          ]
        },
        {
          heading: 'Guatemalan Origins',
          content:
            'Guatemala is one of the most distinguished coffee origins in Central America, producing coffees prized for their full body, rich sweetness, and complex acidity. The country\'s remarkable geographic diversity, from volcanic highlands to tropical lowlands, creates a wide range of microclimates that support eight officially designated coffee-growing regions, each with its own character.\n\nAntigua, situated in a valley surrounded by three volcanoes (Agua, Fuego, and Acatenango), is Guatemala\'s most famous region. Antigua coffees are known for their full body, spicy chocolate notes, and a refined acidity often described as apple-like or citric. The volcanic pumice soil retains moisture well, which is critical because Antigua receives less rainfall than other growing regions. Huehuetenango, in the remote northwestern highlands, produces some of the country\'s most complex and fruit-forward coffees. At altitudes reaching 2,000 meters, the dry, hot winds from Mexico\'s Tehuantepec plain protect the region from frost and allow coffee to grow at elevations where it might otherwise be impossible. Atitlán, near the shores of Lake Atitlán, and Cobán, in the cloud forests of Alta Verapaz, offer still more diversity, with Atitlán known for citric brightness and Cobán for its distinctively spicy and wine-like qualities.\n\nGuatemala has a long tradition of estate-based coffee production, with many farms (fincas) that have been family-owned for generations. This stability has fostered a culture of quality and innovation, and Guatemalan lots regularly score highly in the Cup of Excellence and other quality competitions.',
          entryLinks: [
            { name: 'Guatemala Antigua', id: 'coffee-030' },
            { name: 'Guatemala Huehuetenango', id: 'coffee-031' },
            { name: 'Guatemala Atitlán', id: 'coffee-032' }
          ]
        },
        {
          heading: 'Sumatran and Indonesian Origins',
          content:
            'Indonesia is the world\'s fourth-largest coffee producer, with cultivation spread across the islands of Sumatra, Java, Sulawesi, Bali, Flores, and Papua. Sumatran coffees, in particular, are among the most recognizable and polarizing in the specialty world. They are famous for their heavy body, low acidity, and earthy, herbal, and sometimes funky flavor profile, with notes often described as cedar, tobacco, dark chocolate, mushroom, and tropical fruit.\n\nThe distinctive character of Sumatran coffee is largely attributable to the Giling Basah (wet-hulling) process unique to the region. In this method, the parchment is removed from the bean while it still has a high moisture content (around 30-35%, compared to 10-12% for conventional dry milling). This accelerated processing is a practical adaptation to Sumatra\'s humid climate, where drying coffee to low moisture levels on patios is extremely difficult. The result is a bean with a distinctive blue-green color and a cup profile that is fundamentally different from washed or natural coffees from other origins.\n\nThe major Sumatran growing regions are Mandheling (named after the Mandailing people of North Sumatra, though the coffee grows throughout the Batak Highlands), Lintong (from the area around Lake Toba), and the Gayo Highlands of Aceh province. Sulawesi (Toraja) coffees share some characteristics with Sumatran but tend to be cleaner and more balanced. Java, the island that gave coffee its most famous slang name, produces both Arabica and Robusta, with Arabica estate coffees from Java displaying a refined, tea-like quality quite different from their Sumatran neighbors. The famous "Aged Java" style, where green beans are stored in warehouses for one to three years, develops a mellow, low-acid, and uniquely smooth cup.',
          entryLinks: [
            { name: 'Sumatra Mandheling', id: 'coffee-035' },
            { name: 'Sulawesi Toraja', id: 'coffee-036' },
            { name: 'Java Estate', id: 'coffee-037' },
            { name: 'Sumatra Gayo Highlands', id: 'coffee-038' }
          ],
          crossCategoryLinks: [
            { name: 'Aged Gouda', category: 'cheese' },
            { name: 'Islay Scotch', category: 'whiskey' }
          ]
        }
      ],
      notableEntries: [
        {
          name: 'Ethiopian Yirgacheffe',
          id: 'coffee-001',
          description:
            'The archetypal floral and citrus coffee from the birthplace of Arabica. Washed lots display jasmine, bergamot, and lemon; natural lots explode with blueberry and strawberry. A must-try for any coffee enthusiast.'
        },
        {
          name: 'Panama Geisha',
          id: 'coffee-015',
          description:
            'Originally from the forests of Gesha, Ethiopia, and made famous by Hacienda La Esmeralda in Panama, this varietal produces an extraordinarily aromatic cup with intense jasmine, peach, and tropical fruit notes. It is one of the most expensive and sought-after coffees in the world.'
        },
        {
          name: 'Kenyan AA',
          id: 'coffee-010',
          description:
            'Bold, juicy, and complex, top-grade Kenyan AA delivers blackcurrant, grapefruit, and tomato acidity with a full body and long finish. The SL-28 varietal and pristine washed processing set this origin apart.'
        },
        {
          name: 'Sumatra Mandheling',
          id: 'coffee-035',
          description:
            'A polarizing but beloved origin known for its heavy body, low acidity, and earthy, herbal flavor profile. The wet-hulled processing creates a character unlike any other coffee origin.'
        },
        {
          name: 'Colombia Huila',
          id: 'coffee-006',
          description:
            'Southern Colombia\'s flagship region produces coffees with bright acidity, caramel sweetness, and notes of stone fruit and red apple. Increasingly a hub for processing experimentation.'
        }
      ],
      pairings: [
        {
          name: 'Fresh Chevre',
          category: 'cheese',
          description:
            'The tangy, creamy quality of fresh goat cheese is a perfect canvas for a bright, fruity Ethiopian or Kenyan single origin. The acidity in both creates a lively, refreshing pairing.'
        },
        {
          name: 'Bourbon Whiskey',
          category: 'whiskey',
          description:
            'The vanilla, caramel, and toasted oak notes of bourbon complement the sweetness and nuttiness of a medium-roasted Colombian or Guatemalan single origin.'
        },
        {
          name: 'Dark Chocolate',
          category: 'cheese',
          description:
            'A high-cacao dark chocolate (70%+) alongside a fruity, lightly roasted single origin creates a study in bittersweet complexity, with shared fruit and floral notes bridging the pairing.'
        }
      ]
    },
    {
      name: 'Blend',
      intro:
        'Coffee blends combine beans from multiple origins, farms, or processing methods to create a cup profile that is consistent, balanced, and often greater than the sum of its parts. While single origins celebrate uniqueness, blends celebrate the art of composition. A skilled blender is like a perfumer or a composer, selecting components for their complementary characteristics and assembling them into a harmonious whole. Great blends deliver complexity and balance that is reliably reproducible, batch after batch and season after season, even as individual crop years and harvests vary.',
      history:
        'Blending is arguably the oldest tradition in commercial coffee. For most of coffee\'s history, beans from different regions and harvests were mixed together out of necessity, as supply chains were not organized around single-farm traceability. The Mocha-Java blend, combining coffees from Yemen (Mocha) and Indonesia (Java), is one of the oldest known named blends and dates back to at least the seventeenth century. Italian espresso culture, which emerged in the early twentieth century, elevated blending to a fine art: Italian roasters like Illy, Lavazza, and Segafredo developed proprietary blends designed to produce a balanced, sweet, full-bodied espresso with a thick crema.\n\nIn the specialty coffee era, blends initially fell out of fashion as the emphasis shifted to single-origin transparency. However, thoughtful blending has experienced a renaissance, with many specialty roasters now offering carefully crafted seasonal and year-round blends. These modern blends differ from commodity blends in their intentionality: each component is selected for a specific role (such as providing acidity, sweetness, body, or complexity), and the blend recipe is refined through extensive cupping. Some roasters blend before roasting (pre-blend), while others roast each component separately and combine them afterward (post-blend) for maximum control over each element\'s development.',
      sections: [
        {
          heading: 'Espresso Blends',
          content:
            'Espresso blends are the most common and arguably the most important category of coffee blends. Because espresso is a concentrated extraction method that amplifies every characteristic of the coffee, blending for espresso requires particular skill. The goal is typically a shot that is sweet, balanced, full-bodied, and free of harsh or unpleasant flavors, with enough complexity to be satisfying on its own and enough structure to shine through milk in lattes and cappuccinos.\n\nA classic espresso blend might combine a Brazilian natural for body and sweetness, a Colombian washed for clean acidity and caramel sweetness, and a smaller proportion of an Ethiopian or Kenyan for complexity and aromatic lift. Many traditional Italian-style espresso blends include a percentage of Robusta (10-30%) for added body, crema, and a distinctive bite, though most specialty roasters use only Arabica. The ratio of components, roast profile, and intended brewing parameters are all part of the blend design.\n\nSeasonal espresso blends rotate components as different origins come in and out of harvest, maintaining a consistent cup profile despite changing ingredients. This is the true test of a blender\'s skill: delivering the same experience to the customer even when the underlying coffees change. Some roasters publish their blend components and ratios, while others guard them as proprietary recipes.',
          entryLinks: [
            { name: 'Espresso Roast Classico', id: 'coffee-055' },
            { name: 'Dark Roast Espresso Blend', id: 'coffee-056' },
            { name: 'Seasonal Espresso Blend', id: 'coffee-057' }
          ]
        },
        {
          heading: 'Breakfast and House Blends',
          content:
            'Breakfast and house blends are designed for everyday drinking, typically brewed as filter (drip) coffee. They aim for a balanced, approachable cup that appeals to a wide range of palates, with medium body, moderate acidity, and comforting flavors like chocolate, caramel, and nuts. These blends are the backbone of many roasters\' businesses, often representing their largest volume product and serving as an introduction to their style.\n\nA typical breakfast blend might combine Central American coffees (Guatemala, Honduras, or Costa Rica) for sweetness and balance with a South American base (Brazil or Colombia) for body and smoothness. Some breakfast blends include a small proportion of an African coffee for brightness and complexity. The roast level is usually medium, landing in the sweet spot where origin character and roast-derived sweetness are both present.\n\nThe terms "breakfast blend" and "house blend" are marketing labels without strict definitions, and their meaning varies between roasters. Generally, a breakfast blend connotes a lighter, brighter cup suitable for morning drinking, while a house blend suggests the roaster\'s signature all-day offering. Some roasters use the term "daily blend" or "everyday blend" to signal the same idea. The best examples of these blends are far from boring; they are carefully calibrated to deliver a satisfying cup that rewards regular drinking without palate fatigue.',
          entryLinks: [
            { name: 'Medium Roast House Blend', id: 'coffee-051' },
            { name: 'Breakfast Blend', id: 'coffee-052' },
            { name: 'Everyday Blend', id: 'coffee-053' }
          ]
        },
        {
          heading: 'Signature and Specialty Blends',
          content:
            'Beyond espresso and breakfast blends, many roasters create signature blends that showcase their creative vision or highlight unusual flavor combinations. These might include a "fruit bomb" blend designed to maximize berry and tropical notes, a "chocolate lover\'s" blend emphasizing cocoa and caramel, or a seasonal blend celebrating a particular harvest or holiday.\n\nSome specialty blends are designed for specific brewing methods: a blend optimized for cold brew might emphasize chocolate and sweetness while minimizing bright acidity, since cold extraction naturally produces a smoother, less acidic cup. An AeroPress blend might be calibrated for a slightly different balance than a pour-over blend. The proliferation of brewing methods in the specialty coffee world has created new opportunities for blend design.\n\nCollaboration blends, where two or more roasters jointly develop a blend, have become popular in the specialty coffee community. These collaborations often bring together different sourcing networks and roasting philosophies, resulting in unique products that neither roaster could create alone. Limited-edition and competition blends, sometimes blending exotic components like Geisha, rare heirloom varietals, or experimentally processed lots, push the boundaries of what a blend can be and can command premium prices.',
          entryLinks: [
            { name: 'Cold Brew Blend', id: 'coffee-065' },
            { name: 'Fruit Forward Blend', id: 'coffee-066' },
            { name: 'Holiday Spice Blend', id: 'coffee-067' }
          ]
        },
        {
          heading: 'The Art and Science of Blending',
          content:
            'Creating a great blend is both an art and a science. The process typically begins with cupping individual components to understand their characteristics in isolation. The blender then hypothesizes which combinations might work and tests them at various ratios, cupping each iteration and making adjustments. This process can take weeks or months for a new blend and involves tasting dozens or even hundreds of variations.\n\nKey principles of blending include complementarity (combining components that supply what the others lack), synergy (components that create new flavors in combination that are not present in isolation), and consistency (selecting components that are available reliably and in sufficient quantity). A blend that tastes incredible but cannot be reproduced is a failure in commercial terms.\n\nModern blending is informed by data: cupping scores, chemical analysis, and even machine learning algorithms can assist in identifying promising combinations. However, the human palate remains the ultimate arbiter. The best blenders develop an intuitive understanding of how different origins, processes, and roast levels interact, built through years of tasting and experimentation. This expertise is one of the most valuable skills in the coffee industry.',
          entryLinks: [
            { name: 'Light Roast Blend', id: 'coffee-050' },
            { name: 'Master Blend Reserve', id: 'coffee-070' }
          ]
        }
      ],
      notableEntries: [
        {
          name: 'Espresso Roast Classico',
          id: 'coffee-055',
          description:
            'A traditional Italian-style espresso blend combining Brazilian, Colombian, and Ethiopian coffees for a sweet, full-bodied shot with notes of dark chocolate, caramel, and a hint of dried fruit. Excellent with or without milk.'
        },
        {
          name: 'Medium Roast House Blend',
          id: 'coffee-051',
          description:
            'A versatile, everyday blend designed for filter brewing. Central American and South American coffees combine for a balanced cup with milk chocolate, brown sugar, and almond notes.'
        },
        {
          name: 'Cold Brew Blend',
          id: 'coffee-065',
          description:
            'Optimized for cold extraction, this blend emphasizes low acidity, rich body, and flavors of chocolate, toffee, and vanilla. Smooth and refreshing served over ice or cut with milk.'
        },
        {
          name: 'Mocha-Java Blend',
          id: 'coffee-071',
          description:
            'A modern interpretation of the world\'s oldest known coffee blend, combining a fruity, wine-like Ethiopian (standing in for Yemen\'s Mocha) with an earthy, full-bodied Indonesian Java. A study in contrast and harmony.'
        }
      ],
      pairings: [
        {
          name: 'Aged Cheddar',
          category: 'cheese',
          description:
            'The sharp, savory depth of aged cheddar complements the balanced sweetness and body of a well-crafted espresso blend. The fat in the cheese rounds out any bitterness in the coffee.'
        },
        {
          name: 'Imperial Stout',
          category: 'beer',
          description:
            'Coffee blends and imperial stouts share roasted, chocolatey, and caramel flavors. Tasting them side by side reveals shared flavor compounds derived from the Maillard reaction in both roasting and brewing processes.'
        },
        {
          name: 'Irish Whiskey',
          category: 'whiskey',
          description:
            'The smooth, slightly sweet character of Irish whiskey is a natural companion for a medium-roasted house blend, especially in the classic Irish Coffee preparation with brown sugar and cream.'
        }
      ]
    },
    {
      name: 'Decaf',
      intro:
        'Decaffeinated coffee has long been dismissed by enthusiasts as a pale imitation of the real thing, but modern decaffeination methods have dramatically narrowed the quality gap. Today, the best decaf coffees retain much of the complexity and character of their caffeinated counterparts, offering a satisfying cup for those who are caffeine-sensitive, prefer to drink coffee later in the day, or simply want to enjoy more cups without the jitters. The specialty coffee world has increasingly embraced decaf, applying the same attention to sourcing, processing, and roasting that defines high-quality caffeinated coffee.',
      history:
        'The first commercial decaffeination process was developed in 1903 by Ludwig Roselius, a German merchant who believed that excessive coffee drinking had contributed to his father\'s death. Roselius\'s method involved steaming beans with various acids and then using benzene as a solvent to extract the caffeine, a process that was effective but produced a somewhat flat-tasting coffee and, as later understood, involved a carcinogenic solvent. The brand he created, Kaffee HAG (and its international variants Sanka and Hag), became synonymous with decaf for decades.\n\nThroughout the twentieth century, decaffeination technology evolved significantly. Methylene chloride and ethyl acetate replaced benzene as solvents, offering improved safety and flavor retention. The Swiss Water Process, developed in Switzerland in 1933 and commercialized in Canada in the 1980s, offered the first widely available solvent-free method. The supercritical CO2 process, patented by Kurt Zosel in 1967 and refined in subsequent decades, provided another chemical-free option with excellent selectivity for caffeine removal. Most recently, producers have begun exploring naturally low-caffeine coffee varietals, such as Coffea laurina (Bourbon Pointu) and certain wild Ethiopian varieties, which could eventually eliminate the need for post-harvest decaffeination entirely.\n\nThe stigma surrounding decaf has been slow to fade, but it is undeniably diminishing. Specialty roasters increasingly source high-quality green coffee specifically for decaffeination, and some even offer single-origin decaf options. The growing understanding that decaf drinkers deserve the same quality experience as caffeinated coffee drinkers represents a significant cultural shift in the coffee world.',
      sections: [
        {
          heading: 'Swiss Water Process',
          content:
            'The Swiss Water Process (SWP) is the best-known solvent-free decaffeination method and is widely regarded as producing some of the best-tasting decaf coffee. The process works by exploiting the principles of solubility and osmosis. Green coffee beans are soaked in hot water, which dissolves caffeine along with many other flavor compounds. This initial batch of water is then passed through activated charcoal filters that are sized to capture caffeine molecules while allowing smaller flavor compounds to pass through. The resulting liquid, called Green Coffee Extract (GCE), is now saturated with flavor compounds but free of caffeine.\n\nNew batches of green coffee are then soaked in this GCE. Because the GCE is already saturated with flavor compounds, only caffeine (driven by the concentration gradient) migrates out of the beans into the liquid. The result is coffee that retains approximately 99.9% of its original flavor compounds while having 99.9% of its caffeine removed. The process takes approximately 8-10 hours per batch.\n\nSwiss Water Process decaf tends to preserve the origin character of the coffee better than solvent-based methods, making it the preferred choice for specialty single-origin decaf. The Swiss Water Decaffeinated Coffee Company, based in Burnaby, British Columbia, is the primary commercial operator of this process and is certified organic and Kosher. SWP decaf is identifiable by the Swiss Water trademark on packaging.',
          entryLinks: [
            { name: 'Swiss Water Decaf Colombia', id: 'coffee-080' },
            { name: 'Swiss Water Decaf Ethiopia', id: 'coffee-081' },
            { name: 'Swiss Water Decaf Blend', id: 'coffee-082' }
          ]
        },
        {
          heading: 'CO2 (Supercritical Carbon Dioxide) Process',
          content:
            'The supercritical CO2 process uses carbon dioxide in a supercritical state (where it exhibits properties of both a liquid and a gas, achieved at temperatures above 31.1 degrees Celsius and pressures above 73.8 atmospheres) as a selective solvent for caffeine extraction. Green coffee beans are placed in a high-pressure vessel, and supercritical CO2 is circulated through them. The CO2 selectively dissolves caffeine while leaving most other flavor compounds intact. The caffeine-laden CO2 is then transferred to a separate chamber where pressure is released, allowing the CO2 to return to a gaseous state and the caffeine to precipitate out. The CO2 is then recaptured and reused.\n\nThis method is prized for its selectivity: because supercritical CO2 is particularly effective at dissolving caffeine compared to other compounds, it tends to produce decaf coffee with excellent flavor preservation. It is also entirely chemical-free, as CO2 is a natural, non-toxic substance that dissipates completely. The primary drawback is cost, as the high-pressure equipment required is expensive to build and operate. For this reason, the CO2 process is more commonly used for large commercial batches and is the predominant method for decaffeinating commodity-grade coffee.\n\nSome specialty roasters specifically seek out CO2-processed decaf for its clean flavor profile. The method is particularly well-suited to coffees where a clean, transparent cup is desired, as it introduces minimal processing artifacts.',
          entryLinks: [
            { name: 'CO2 Decaf Brazil', id: 'coffee-085' },
            { name: 'CO2 Decaf House Blend', id: 'coffee-086' }
          ]
        },
        {
          heading: 'Solvent-Based Processes',
          content:
            'Solvent-based decaffeination methods use chemical solvents, primarily methylene chloride (MC) or ethyl acetate (EA), to selectively dissolve and remove caffeine from green coffee beans. Despite the negative connotations of the word "chemical," these methods are FDA-approved, safe, and widely used. Any trace solvent residues are far below regulatory limits and are further reduced by the high temperatures of roasting.\n\nIn the direct solvent method, green beans are steamed to open their pores and then repeatedly rinsed with the solvent, which bonds with caffeine molecules and carries them away. The beans are then steamed again to remove any residual solvent. In the indirect solvent method, beans are soaked in hot water (which extracts both caffeine and flavor compounds), and the solvent is applied to the water rather than directly to the beans. The caffeine-solvent bond is separated, the water (still containing flavor compounds) is returned to the beans, and the cycle repeats.\n\nEthyl acetate is sometimes marketed as "natural" decaf because it occurs naturally in fruits, though the ethyl acetate used commercially is typically synthesized. The Sugarcane Process, popular with Colombian producers, uses ethyl acetate derived from fermented sugarcane, lending both a natural provenance and a subtle sweetness to the finished coffee. This method has gained traction in specialty coffee for producing decaf with good body and a pleasant, slightly sweet character.\n\nMethylene chloride is the most efficient caffeine solvent and is the standard method in European decaf production. MC-process decaf can be very clean-tasting when well-executed, and many European specialty roasters prefer it. The choice of decaffeination method is often a matter of philosophy and branding as much as flavor, with some consumers preferring solvent-free methods on principle.',
          entryLinks: [
            { name: 'Sugarcane Process Decaf Colombia', id: 'coffee-090' },
            { name: 'EA Decaf Espresso Blend', id: 'coffee-091' },
            { name: 'MC Process Decaf Guatemala', id: 'coffee-092' }
          ]
        },
        {
          heading: 'Naturally Low-Caffeine Varieties',
          content:
            'One of the most exciting frontiers in coffee is the development and cultivation of naturally low-caffeine coffee varieties that could offer a "decaf" experience without any post-harvest processing. Several naturally occurring low-caffeine species and varieties have been identified, though none has yet achieved widespread commercial viability.\n\nCoffea laurina, also known as Bourbon Pointu or Laurina, is a natural mutation of the Bourbon variety that contains approximately half the caffeine of standard Arabica (about 0.6% versus 1.2%). It was nearly extinct by the mid-twentieth century but has been revived through cultivation efforts in Reunion, Brazil, and other origins. Laurina produces a delicate, sweet, and tea-like cup that is prized for its quality, though yields are low and the plant is susceptible to disease.\n\nResearchers have also identified wild Ethiopian coffee varieties with very low caffeine content, some containing as little as 0.07% caffeine (compared to 1.0-1.5% in standard Arabica and 2.0-2.7% in Robusta). However, breeding these traits into commercially viable, good-tasting varieties is a long-term project that could take decades. Genetic research into the caffeine biosynthesis pathway may eventually enable the development of caffeine-free Arabica through conventional breeding or biotechnology, though this remains a future prospect rather than a present reality.\n\nFor now, post-harvest decaffeination remains the only practical way to enjoy low-caffeine coffee, but the existence of natural low-caffeine varieties is a reminder that nature itself may eventually provide the best solution.',
          entryLinks: [
            { name: 'Bourbon Pointu (Laurina)', id: 'coffee-095' },
            { name: 'Experimental Low-Caffeine Lot', id: 'coffee-096' }
          ]
        }
      ],
      notableEntries: [
        {
          name: 'Swiss Water Decaf Colombia',
          id: 'coffee-080',
          description:
            'A washed Colombian decaf processed using the Swiss Water method. Retains the caramel sweetness, balanced acidity, and nutty notes typical of Colombian coffee, with a clean and satisfying cup that belies its decaf status.'
        },
        {
          name: 'Sugarcane Process Decaf Colombia',
          id: 'coffee-090',
          description:
            'Decaffeinated using ethyl acetate derived from fermented Colombian sugarcane, this coffee has a subtle sweetness and full body that make it a favorite among specialty decaf drinkers. Notes of panela, milk chocolate, and citrus.'
        },
        {
          name: 'Swiss Water Decaf Ethiopia',
          id: 'coffee-081',
          description:
            'A natural-processed Ethiopian decaf that manages to retain the berry fruit and floral character of its caffeinated counterpart. A testament to how far decaf quality has come.'
        },
        {
          name: 'Bourbon Pointu (Laurina)',
          id: 'coffee-095',
          description:
            'A naturally low-caffeine variety producing a delicate, sweet, and tea-like cup. Rare and expensive, but a fascinating glimpse into coffee\'s future beyond post-harvest decaffeination.'
        }
      ],
      pairings: [
        {
          name: 'Comté',
          category: 'cheese',
          description:
            'The nutty, caramelized sweetness of aged Comté is a gentle complement to a Swiss Water decaf Colombian, creating a soothing evening pairing without the stimulant effects of caffeine.'
        },
        {
          name: 'Milk Stout',
          category: 'beer',
          description:
            'A smooth, sweet milk stout alongside a decaf espresso blend creates a dessert-like pairing with shared chocolate, vanilla, and cream flavors. Perfect for an after-dinner tasting.'
        },
        {
          name: 'Japanese Whisky',
          category: 'whiskey',
          description:
            'The refined, delicate character of Japanese whisky pairs beautifully with a clean, Swiss Water Process decaf. Both prize subtlety and balance, making for a contemplative late-evening combination.'
        }
      ]
    }
  ]
};
