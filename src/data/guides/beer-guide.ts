import type { CategoryGuideData } from '../../types';

export const beerGuide: CategoryGuideData = {
  category: 'beer',
  overview: {
    introduction:
      'Beer is one of the oldest and most widely consumed alcoholic beverages in the world, with a diversity of styles that rivals any other drink category. At its core, beer is produced by fermenting sugars extracted from cereal grains, most commonly malted barley, with the addition of hops for bitterness, flavor, and preservation. Water and yeast complete the four essential ingredients, though modern brewers employ an enormous range of adjuncts, spices, fruits, and specialty malts to craft beers of extraordinary variety. From the lightest lager to the most robust imperial stout, beer offers a spectrum of flavors, aromas, and textures that can satisfy virtually any palate.\n\nThe appreciation of beer has undergone a dramatic transformation over the past several decades. What was once dismissed in many circles as a simple, working-class beverage has emerged as a subject of serious connoisseurship, with dedicated tasting events, certification programs such as the Cicerone Certification Program, and a global community of passionate enthusiasts. The craft beer revolution, which began in earnest in the United States during the 1980s, has spread to every corner of the globe, inspiring brewers to revive forgotten historical styles, push the boundaries of ingredient innovation, and elevate beer to a position alongside wine and spirits on the finest restaurant menus.\n\nUnderstanding beer begins with understanding its fundamental components and the processes that transform simple grain into a complex, living beverage. The interplay between malt sweetness and hop bitterness forms the backbone of most beer styles, while yeast contributes esters, phenols, and other flavor compounds that can range from subtle to dominant. Water chemistry, often overlooked, plays a critical role in shaping regional beer traditions. The mineral content of Burton-upon-Trent\'s water helped define the character of English pale ales, just as the soft water of Pilsen gave rise to the crisp, clean lagers that now dominate global beer production.',

    history:
      'The history of beer stretches back to the very dawn of civilization. Archaeological evidence suggests that beer production began around 5,000 BCE in ancient Sumer, in the region of modern-day Iraq. The Sumerians left behind the Hymn to Ninkasi, a prayer to the goddess of brewing that also served as a mnemonic recipe for beer. Ancient Egyptian laborers building the pyramids received daily rations of a nutritious, low-alcohol beer, and both cultures considered brewing a divinely inspired art. These early beers bore little resemblance to modern varieties, being thick, unfiltered, and often flavored with dates, honey, and various herbs rather than hops.\n\nThe Middle Ages saw brewing move firmly into the domain of European monasteries, where monks refined techniques and maintained rigorous standards of quality. Trappist and Benedictine monks developed many of the brewing traditions that survive to this day, and monastic breweries in Belgium, Germany, and the British Isles produced ales of remarkable sophistication. The introduction of hops as a bittering and preserving agent, which became widespread by the 13th century, was a pivotal moment in beer history. In 1516, the Bavarian Reinheitsgebot, or Beer Purity Law, mandated that beer could contain only water, barley, and hops (yeast was added to the law later, once its role was understood). This law, one of the oldest food safety regulations in history, shaped the development of German brewing and influenced beer production standards worldwide.\n\nThe Industrial Revolution transformed brewing from a largely artisanal practice into a massive commercial enterprise. Innovations such as the thermometer, hydrometer, steam engine, and mechanical refrigeration allowed brewers to achieve unprecedented consistency and scale. Louis Pasteur\'s research into fermentation in the 1860s led to a scientific understanding of yeast, enabling brewers to isolate pure strains and control the brewing process with far greater precision. The 20th century saw the consolidation of the beer industry into a handful of multinational conglomerates producing predominantly light lagers. However, beginning in the late 1970s and accelerating through the 1980s and 1990s, a craft beer revolution emerged first in the United States and then globally, with small independent breweries rediscovering traditional styles and inventing entirely new ones. Today, the global beer landscape is more diverse than at any point in history, with tens of thousands of craft breweries operating worldwide.',

    productionMethods: [
      {
        heading: 'Malting',
        content:
          'The journey of beer begins with malting, a process that converts raw cereal grains into a form suitable for brewing. Barley is the most commonly used grain, prized for its high enzyme content, favorable husk structure, and the rich flavors it imparts. During malting, barley kernels are steeped in water to initiate germination, which activates enzymes that will later break down starches into fermentable sugars. After controlled germination over several days, the green malt is transferred to a kiln where it is dried and sometimes roasted at varying temperatures. The kilning process is critical in determining the color and flavor of the finished malt. Lightly kilned pale malts produce the base for most beers, while progressively higher temperatures yield Munich malts, Vienna malts, caramel or crystal malts, chocolate malts, and black patent malts. Each variety contributes a distinct character, from biscuity sweetness to deep roasted coffee and chocolate notes. Specialty malts such as smoked malt, acidulated malt, and honey malt further expand the brewer\'s palette. Wheat, rye, oats, and other grains may also be malted or used unmalted as adjuncts to contribute specific flavor, body, and mouthfeel characteristics.',
      },
      {
        heading: 'Mashing and Lautering',
        content:
          'In the mashing process, crushed malt (known as grist) is mixed with hot water in a vessel called a mash tun. This process reactivates the enzymes developed during malting, which convert the grain\'s starches into a mixture of fermentable and unfermentable sugars. The temperature and duration of the mash are carefully controlled, as different enzymes are active at different temperatures. A lower mash temperature (around 63-65 degrees Celsius) favors beta-amylase, producing a thinner, more fermentable wort and a drier finished beer. A higher temperature (around 68-72 degrees Celsius) favors alpha-amylase, yielding more unfermentable sugars and a fuller-bodied beer. Some brewers employ multi-step mashing or decoction mashing, traditional techniques that involve raising the temperature through several rests or boiling portions of the mash and returning them to the vessel. After mashing is complete, the sweet liquid, called wort, must be separated from the spent grain through a process known as lautering. The grain bed itself acts as a natural filter, and the brewer rinses it with additional hot water (sparging) to extract as much sugar as possible. The clarity and efficiency of lautering significantly impact the quality and yield of the final beer.',
      },
      {
        heading: 'Boiling and Hopping',
        content:
          'The collected wort is transferred to a brew kettle and brought to a vigorous boil, typically lasting 60 to 90 minutes. Boiling serves several essential purposes: it sterilizes the wort, halts enzymatic activity, coagulates proteins that could cause haze, and concentrates the wort to the desired strength. Most importantly, the boil is when hops are added. Hops, the cone-shaped flowers of the Humulus lupulus plant, contribute bitterness, flavor, and aroma to beer, and also act as a natural preservative. Hops added early in the boil undergo isomerization, a chemical process that converts alpha acids into iso-alpha acids, the primary source of beer bitterness measured in International Bitterness Units (IBU). Hops added later in the boil, or at flameout, contribute more aromatic and flavor qualities, including floral, citrus, tropical, pine, herbal, and spicy characteristics depending on the variety. Popular hop varieties include Cascade, Centennial, and Citra from America; Saaz and Hallertau from Central Europe; and East Kent Goldings and Fuggles from England. Many modern brewers also employ dry hopping, the addition of hops to beer after fermentation, to maximize hop aroma without adding bitterness. Whirlpool hopping, where hops are added to hot wort during the whirlpool stage, has also become a widely used technique for extracting aromatic hop oils.',
      },
      {
        heading: 'Fermentation and Conditioning',
        content:
          'After boiling, the wort is rapidly cooled to the appropriate fermentation temperature and transferred to a fermentation vessel, where yeast is pitched. Fermentation is the magical transformation at the heart of brewing, in which yeast consumes the sugars in the wort and produces ethanol, carbon dioxide, and a complex array of flavor compounds. The two primary categories of brewing yeast define the two great families of beer: ales and lagers. Ale yeast (Saccharomyces cerevisiae) ferments at warmer temperatures, typically 15-24 degrees Celsius, and tends to produce fruity esters and spicy phenols that contribute complexity and character. Lager yeast (Saccharomyces pastorianus) ferments at cooler temperatures, typically 7-13 degrees Celsius, and produces a cleaner, crisper flavor profile. Wild and mixed fermentation, involving Brettanomyces yeast and bacteria such as Lactobacillus and Pediococcus, creates the tart, funky, and complex flavors found in Belgian lambics and American wild ales. After primary fermentation, beer undergoes conditioning, a period of maturation that allows flavors to meld and unwanted compounds to dissipate. Lagers undergo a cold conditioning phase (lagering) at near-freezing temperatures for weeks or months. Ales may be conditioned at cellar temperatures or undergo secondary fermentation in bottles or casks. The conditioning period is essential for achieving balance, clarity, and the refined character of a well-made beer.',
      },
    ],

    tastingTips: [
      'Pour your beer into a clean glass appropriate for the style. A tulip glass concentrates aromas for Belgian ales, a pint glass suits English bitters, and a tall pilsner glass showcases lager clarity and carbonation. Never drink directly from the bottle or can if you want the full experience.',
      'Examine the beer visually before tasting. Note the color, clarity, and head retention. A persistent, creamy head often indicates good malt protein content and proper carbonation. The color can range from pale straw to opaque jet black and provides clues about the malt bill and style.',
      'Swirl the beer gently and bring it to your nose. Take several short sniffs rather than one deep inhale. Try to identify distinct aromas: malt character (bready, caramel, roasty, chocolate), hop character (citrus, floral, pine, tropical), yeast character (fruity, spicy, barnyard), and any off-aromas that might indicate faults.',
      'Take a moderate sip and let the beer coat your entire palate. Notice the initial impression, the mid-palate development, and the finish. Pay attention to sweetness, bitterness, acidity, and any savory or umami qualities. Consider the body and mouthfeel, including carbonation level, creaminess, and astringency.',
      'Evaluate the balance between malt sweetness and hop bitterness. A well-crafted beer achieves harmony between its components, even in styles that emphasize one element over another. An IPA should have pronounced bitterness but should not be harsh or astringent.',
      'Serve beer at the appropriate temperature for the style. Light lagers and wheat beers are best at 3-7 degrees Celsius, pale ales and IPAs at 7-10 degrees, and strong ales, stouts, and barleywines at 10-14 degrees. Warmer temperatures reveal more complex flavors and aromas.',
      'Cleanse your palate between different beers with plain water and neutral crackers or bread. When tasting multiple beers, progress from lighter to darker and from lower to higher alcohol to avoid palate fatigue.',
    ],

    commonDescriptors: [
      'Hoppy',
      'Malty',
      'Crisp',
      'Bitter',
      'Fruity',
      'Roasty',
      'Toasty',
      'Bready',
      'Caramel',
      'Citrus',
      'Floral',
      'Piney',
      'Tropical',
      'Spicy',
      'Tart',
      'Funky',
      'Dry',
      'Creamy',
      'Smooth',
      'Effervescent',
    ],

    proTips: [
      'Learn to read a beer label beyond the brand name. Look for style designation, ABV, IBU, ingredients, and packaging date. Freshness matters enormously for hop-forward beers like IPAs, which should ideally be consumed within 60-90 days of packaging. Many craft breweries now print "best by" or "canned on" dates.',
      'Develop your palate by tasting beers side by side within the same style. Comparing three different pilsners or IPAs in a single sitting will sharpen your ability to identify subtle differences in malt character, hop selection, yeast profile, and water chemistry.',
      'Explore the world of beer and food pairing. The principles of complement, contrast, and cut provide a framework: match intensity levels, contrast sweet with bitter or rich with acidic, and use carbonation and bitterness to cut through fatty or rich foods. Stouts with chocolate desserts, IPAs with spicy cuisine, and wheat beers with lighter seafood are classic starting points.',
      'Visit local breweries and talk to the brewers. The craft beer community is remarkably open and generous with knowledge. Brewery taprooms often offer special releases, experimental batches, and the freshest possible beer. Many breweries also offer tours that provide invaluable insight into the brewing process.',
      'Keep a tasting journal to track your experiences and preferences. Note the beer name, brewery, style, appearance, aroma, taste, mouthfeel, and overall impression. Over time, this record will reveal your personal preferences and help you make more informed choices.',
    ],

    crossCategoryPairings: [
      {
        name: 'Cheese',
        category: 'cheese',
        description:
          'Beer and cheese share deep roots in fermentation and agricultural tradition, making them natural partners. The carbonation and bitterness of beer cut through the richness of cheese, while the malty sweetness complements savory and salty flavors. Try a Belgian tripel with aged Gouda, a stout with Stilton blue cheese, or a crisp pilsner with a young Gruyere.',
      },
      {
        name: 'Whiskey',
        category: 'whiskey',
        description:
          'Beer and whiskey are grain-based siblings with overlapping flavor profiles. Bourbon barrel-aged stouts bridge both worlds beautifully, and the practice of pairing a whiskey with a beer chaser (a boilermaker) has deep roots in pub culture. Peated Scotch pairs with smoky rauchbier, while bourbon complements malty amber ales and brown ales.',
      },
      {
        name: 'Coffee',
        category: 'coffee',
        description:
          'Coffee and dark beer share many flavor compounds, including those responsible for chocolate, caramel, and roasted notes. Coffee stouts and porters have become a beloved style in craft brewing. When pairing the two beverages separately, consider serving a bright, fruity pour-over coffee alongside a Belgian witbier, or a rich espresso as a complement to an imperial stout.',
      },
      {
        name: 'Cigars',
        category: 'cigars',
        description:
          'Full-bodied beers with malty richness and moderate sweetness make excellent companions for cigars. Imperial stouts, barleywines, Belgian dubbels, and doppelbocks possess the depth and intensity to stand up to a fine cigar without being overwhelmed. The roasted and caramel malt notes harmonize with the tobacco leaf flavors.',
      },
    ],
  },

  subcategories: [
    // ─── STOUT ──────────────────────────────────────────────────────────────
    {
      name: 'Stout',
      intro:
        'Stout is among the most iconic and emotionally evocative beer styles, conjuring images of dark, creamy pints pulled in cozy pubs. Defined by the use of roasted barley and dark malts, stouts range from the sessionable dry stouts of Ireland to the massive, complex imperial stouts that have become prized collectibles in the craft beer world. The style\'s hallmark is its deep color, typically opaque black, and its rich, roasty flavor profile that can encompass notes of coffee, dark chocolate, caramel, and even smoke.',
      history:
        'The term "stout" originally meant simply "strong" and was first used in the 17th century to describe any robust beer. By the 18th century, it became specifically associated with dark porters of higher strength, with "stout porter" eventually being shortened to just "stout." Arthur Guinness began brewing a dark beer at his St. James\'s Gate Brewery in Dublin in 1759, and by the early 19th century, Guinness had become synonymous with dry Irish stout. The style diverged into numerous sub-styles over the centuries, including milk stout (sweetened with lactose), oatmeal stout (brewed with oats for a silky mouthfeel), and Russian imperial stout, which was originally brewed in England at high strength for export to the court of Catherine the Great. The craft beer movement has further expanded the stout universe with pastry stouts, barrel-aged variants, and imaginative adjunct additions.',
      sections: [
        {
          heading: 'Dry Stout',
          content:
            'Dry stout, epitomized by Guinness, is the most widely recognized stout sub-style and the definitive beer of Ireland. Characterized by a moderate alcohol content (typically 4-5% ABV), firm roasted barley bitterness, and a dry, coffee-like finish, dry stout achieves remarkable flavor complexity at sessionable strength. The use of unmalted roasted barley is a defining feature, contributing a sharp, acrid bitterness distinct from hop bitterness, along with deep black color and aromas of espresso and dark toast. A portion of flaked barley is often included to enhance body and head retention, and the relatively low carbonation, especially when served on nitrogen, produces the famous creamy, cascading pour. Despite its dark appearance, dry stout is actually one of the lower-calorie beer styles, a fact that surprises many newcomers.',
          entryLinks: [
            { name: 'Guinness Draught', id: 'beer-001' },
            { name: 'Murphy\'s Irish Stout', id: 'beer-002' },
            { name: 'Beamish Irish Stout', id: 'beer-003' },
          ],
        },
        {
          heading: 'Imperial Stout',
          content:
            'Imperial stout, also known as Russian imperial stout, is the heavyweight champion of the stout family. Brewed to high strength (typically 8-12% ABV or more), this style originated in 18th-century London, where breweries such as Barclay Perkins and Courage produced intensely robust dark ales for export to the Russian Empire. The high alcohol and generous hopping acted as preservatives for the long sea journey. Modern imperial stouts are characterized by an opaque black appearance, a massive body, and a symphony of complex flavors including dark chocolate, espresso, dried fruit, molasses, and licorice. Barrel-aged versions, matured in bourbon, rye, or other spirit barrels, have become highly coveted releases from top craft breweries. Pastry imperial stouts, brewed with adjuncts such as vanilla, maple syrup, coconut, and cacao nibs, represent one of the most popular trends in contemporary craft brewing.',
          entryLinks: [
            { name: 'Founders KBS', id: 'beer-004' },
            { name: 'Bell\'s Expedition Stout', id: 'beer-005' },
            { name: 'North Coast Old Rasputin', id: 'beer-006' },
          ],
        },
        {
          heading: 'Milk Stout',
          content:
            'Milk stout, also called sweet stout or cream stout, is brewed with the addition of lactose, a sugar derived from milk that brewing yeast cannot ferment. The residual lactose contributes a smooth, creamy sweetness and fuller body that softens the roasted bitterness typical of other stout styles. Milk stout was historically marketed as a nutritious, restorative beverage in Britain, and advertisements once touted its health benefits, though such claims are no longer permitted. The style fell out of favor during the mid-20th century but has experienced a significant revival in the craft beer era. Modern milk stouts often feature ABVs of 4-6%, making them approachable and sessionable. Some brewers enhance the style with additions of vanilla, chocolate, coffee, or fruit, creating dessert-like beers that appeal to a broad audience. The sweetness of milk stout also makes it an excellent base for nitrogen-dispensed pours.',
          entryLinks: [
            { name: 'Left Hand Milk Stout Nitro', id: 'beer-007' },
            { name: 'Lancaster Milk Stout', id: 'beer-008' },
            { name: 'Mackeson Triple Stout', id: 'beer-009' },
          ],
        },
        {
          heading: 'Oatmeal Stout',
          content:
            'Oatmeal stout incorporates a proportion of oats (typically 5-30% of the grain bill) to produce a notably silky, smooth mouthfeel and a gentle, rounded body. The oats contribute proteins and lipids that enhance head retention and create a velvety texture without adding significant fermentable sugar, keeping the beer balanced between sweetness and roast character. The style originated in medieval England when oats were a common brewing grain, but it was revived in the 20th century and has since become a beloved category among craft brewers. Oatmeal stouts typically feature moderate alcohol (4-6% ABV), subdued roast bitterness compared to dry stouts, and flavors of milk chocolate, toasted oats, and a hint of nuttiness. The style is exceptionally food-friendly, pairing well with roasted meats, chocolate desserts, and sharp cheeses. Samuel Smith\'s Oatmeal Stout, a benchmark of the style, helped introduce the category to a new generation of beer drinkers.',
          entryLinks: [
            { name: 'Samuel Smith Oatmeal Stout', id: 'beer-010' },
            { name: 'Firestone Walker Velvet Merlin', id: 'beer-011' },
            { name: 'Anderson Valley Barney Flats', id: 'beer-012' },
          ],
        },
      ],
      notableEntries: [
        { name: 'Guinness Draught', id: 'beer-001', description: 'The world\'s most iconic dry stout, with its signature creamy nitrogen pour, roasted barley bitterness, and smooth, dry finish. A cornerstone of Irish brewing tradition since 1759.' },
        { name: 'Founders KBS', id: 'beer-004', description: 'Kentucky Breakfast Stout, an imperial stout brewed with coffee and chocolate then aged in bourbon barrels. A highly sought-after annual release embodying the best of barrel-aged craft brewing.' },
        { name: 'Left Hand Milk Stout Nitro', id: 'beer-007', description: 'A benchmark American milk stout with velvety nitrogen carbonation, flavors of dark chocolate, roasted coffee, and a smooth, sweet finish balanced by gentle roast bitterness.' },
        { name: 'Samuel Smith Oatmeal Stout', id: 'beer-010', description: 'A classic English oatmeal stout from Yorkshire\'s oldest brewery, offering silky texture, mild roast character, chocolate notes, and a gentle, rounded finish.' },
        { name: 'North Coast Old Rasputin', id: 'beer-006', description: 'A robust Russian imperial stout with intense flavors of dark chocolate, espresso, and dried fruit, brewed in the tradition of 18th-century exports to the Russian court.' },
      ],
      pairings: [
        { name: 'Stilton', category: 'cheese', description: 'The bold roast character of stout complements the salty, tangy complexity of Stilton blue cheese, with the beer\'s carbonation cutting through the cheese\'s richness.' },
        { name: 'Dark Chocolate', category: 'cheese', description: 'Stouts and dark chocolate share many flavor compounds from the roasting process, creating a harmonious pairing especially with imperial and milk stout varieties.' },
        { name: 'Bourbon', category: 'whiskey', description: 'Bourbon barrel-aged stouts bridge these two worlds, and the caramel, vanilla, and oak notes of bourbon beautifully complement the malt richness of a robust stout.' },
      ],
    },

    // ─── IPA ────────────────────────────────────────────────────────────────
    {
      name: 'IPA',
      intro:
        'India Pale Ale, universally known as IPA, has become the defining style of the modern craft beer movement. Characterized by assertive hop bitterness, bold hop aroma and flavor, and a generally pale to amber color, IPAs showcase the extraordinary diversity of hops as a brewing ingredient. From the resinous, piney West Coast IPA to the juicy, hazy New England IPA, and from the balanced English original to the intensely hopped double and triple IPAs, this style family offers something for every hop enthusiast.',
      history:
        'The origin story of IPA is one of the most debated topics in beer history. The traditional narrative holds that heavily hopped pale ales were brewed in England during the late 18th and early 19th centuries for export to British troops and colonists in India, with the extra hops acting as a preservative during the long sea voyage around the Cape of Good Hope. While this story contains elements of truth, modern beer historians have shown that the reality is more nuanced. George Hodgson of the Bow Brewery in London is often credited as a pioneer, but brewers in Burton-upon-Trent, particularly Bass, Allsopp, and Salt, soon dominated the India trade thanks to their hard, mineral-rich water, which was ideally suited to producing bitter, pale ales. The style declined in popularity during the 20th century but was spectacularly revived by American craft brewers beginning in the 1970s and 1980s. Anchor Liberty Ale (1975) and Sierra Nevada Celebration Ale (1981) are considered early milestones, and the explosive growth of American IPA from the 1990s onward has reshaped the entire beer landscape.',
      sections: [
        {
          heading: 'West Coast IPA',
          content:
            'West Coast IPA is the aggressive, unapologetically bitter style that put American craft beer on the map. Originating in California, Oregon, and Washington during the 1990s and 2000s, West Coast IPA is characterized by a clean, dry malt profile that serves as a platform for showcasing American hop varieties. The bitterness is assertive, typically 50-80+ IBU, and the hop flavors and aromas run the gamut from grapefruit and orange peel to pine resin, tropical fruit, and white wine. The malt character is deliberately restrained, usually providing just enough biscuity or lightly caramel backbone to support the hops without competing for attention. A clean, attenuated finish and moderate to high carbonation contribute to the style\'s drinkability despite its intensity. Benchmark examples include Russian River Blind Pig IPA, Stone IPA, and Bear Republic Racer 5, each demonstrating the West Coast philosophy of hop-forward brewing with clarity and precision.',
          entryLinks: [
            { name: 'Stone IPA', id: 'beer-013' },
            { name: 'Bear Republic Racer 5', id: 'beer-014' },
            { name: 'Lagunitas IPA', id: 'beer-015' },
          ],
        },
        {
          heading: 'New England IPA (Hazy IPA)',
          content:
            'New England IPA, also called hazy IPA or juicy IPA, represents the most significant stylistic development in craft beer since the emergence of West Coast IPA. Originating at breweries like The Alchemist (Heady Topper, 2003) and Hill Farmstead in Vermont, this style prioritizes hop aroma and flavor over bitterness, producing beers that are intensely aromatic, pillowy soft in mouthfeel, and remarkably low in perceived bitterness despite generous hop additions. The signature haze comes from a combination of factors: biotransformation of hop oils during active fermentation (dry hopping during or immediately after primary fermentation), the use of protein-rich grains like wheat and oats, and deliberate avoidance of the fining and filtration steps that would clarify the beer. The resulting flavor profile is dominated by tropical fruits, stone fruits, and citrus, often described as tasting like fresh-squeezed juice. Water chemistry is adjusted to enhance the soft, round character, with elevated chloride-to-sulfate ratios. The style has become enormously popular and commercially dominant in the craft beer market.',
          entryLinks: [
            { name: 'The Alchemist Heady Topper', id: 'beer-016' },
            { name: 'Tree House Julius', id: 'beer-017' },
            { name: 'Trillium Congress Street', id: 'beer-018' },
          ],
        },
        {
          heading: 'Double (Imperial) IPA',
          content:
            'Double IPA, also known as Imperial IPA or DIPA, amplifies every element of the IPA concept to its extreme. With ABVs typically ranging from 7.5-10% and IBUs often exceeding 80 or even 100, double IPAs deliver an intense, concentrated hop experience underpinned by a more substantial malt backbone. The style was pioneered on the American West Coast, with Vinnie Cilurzo of Russian River Brewing credited with producing one of the earliest examples, Pliny the Elder, which remains a benchmark of the style. Brewing a great double IPA is an exercise in balance at extreme intensity: the elevated alcohol must be well-integrated, the malt sweetness must support but not overwhelm the hops, and the bitterness must be firm but not harsh or astringent. Modern double IPAs come in both West Coast (dry, clear, bitter) and New England (hazy, juicy, soft) interpretations. The style has pushed brewers to innovate with hop products, including cryo hops (lupulin powder), hop extracts, and novel hopping techniques to maximize aroma and flavor while minimizing astringent vegetal character.',
          entryLinks: [
            { name: 'Russian River Pliny the Elder', id: 'beer-019' },
            { name: 'Bell\'s Hopslam', id: 'beer-020' },
            { name: 'Dogfish Head 90 Minute IPA', id: 'beer-021' },
          ],
        },
        {
          heading: 'English IPA and Session IPA',
          content:
            'English IPA, the progenitor of the entire IPA family, presents a markedly different character from its American descendants. Emphasizing balance and drinkability over raw hop intensity, English IPA features earthy, floral, and herbal English hop varieties such as East Kent Goldings, Fuggles, and Challenger, supported by a more prominent biscuity, toasty malt backbone. The bitterness is firm but measured, typically 40-60 IBU, and the overall impression is one of refined harmony rather than aggressive impact. Classic examples include Worthington White Shield and Meantime IPA. At the other end of the spectrum, Session IPA emerged as a response to the high ABVs of American IPAs, delivering full hop flavor and aroma at a more sessionable strength, typically 3.5-5% ABV. The challenge for brewers is to maintain hop intensity and body without the malt foundation that higher-gravity beers provide. Founders All Day IPA became a commercial sensation by successfully solving this equation, proving that hop-forward beer need not be strong to be satisfying.',
          entryLinks: [
            { name: 'Founders All Day IPA', id: 'beer-022' },
            { name: 'Worthington White Shield', id: 'beer-023' },
            { name: 'Goose Island IPA', id: 'beer-024' },
          ],
        },
      ],
      notableEntries: [
        { name: 'Stone IPA', id: 'beer-013', description: 'A West Coast IPA icon known for its bold citrus and pine hop character, clean malt profile, and assertive bitterness that helped define the American IPA style.' },
        { name: 'The Alchemist Heady Topper', id: 'beer-016', description: 'The beer that launched the hazy IPA revolution. An unfiltered double IPA from Vermont with explosive tropical hop aroma, soft mouthfeel, and deceptively smooth drinkability.' },
        { name: 'Russian River Pliny the Elder', id: 'beer-019', description: 'Widely regarded as one of the greatest double IPAs ever brewed, with layers of floral, citrus, and pine hop complexity balanced by a clean, dry finish.' },
        { name: 'Bell\'s Two Hearted Ale', id: 'beer-025', description: 'A benchmark American IPA brewed entirely with Centennial hops, delivering grapefruit, pine, and floral notes with impeccable balance. Frequently voted America\'s best beer.' },
        { name: 'Founders All Day IPA', id: 'beer-022', description: 'A session IPA that proved lower-alcohol hop-forward beer could be commercially successful, with bright hop character and a clean, balanced finish at just 4.7% ABV.' },
      ],
      pairings: [
        { name: 'Cheddar', category: 'cheese', description: 'The assertive bitterness of IPA cuts through the rich, sharp flavors of aged cheddar, while the hop fruitiness provides a complementary contrast to the cheese\'s savory depth.' },
        { name: 'Thai Cuisine', category: 'cheese', description: 'Spicy Thai dishes and IPAs are a celebrated pairing, with the hop bitterness and carbonation refreshing the palate against chili heat, and the tropical hop notes echoing flavors of lemongrass and lime.' },
        { name: 'Coffee', category: 'coffee', description: 'A bright, citrusy single-origin pour-over coffee can mirror the fruit-forward character of a hazy IPA, creating an intriguing parallel tasting experience across the two beverages.' },
      ],
    },

    // ─── PILSNER ────────────────────────────────────────────────────────────
    {
      name: 'Pilsner',
      intro:
        'Pilsner is arguably the most influential beer style in history, serving as the template for the vast majority of beer consumed around the world today. Born in the Bohemian city of Pilsen in 1842, this pale, golden, crisply bitter lager represented a revolutionary departure from the dark, often cloudy beers that preceded it. The style\'s brilliantly clear appearance, refreshing carbonation, and elegant balance of Saaz hop bitterness with pale malt sweetness set a new standard for brewing excellence.',
      history:
        'The creation of pilsner is one of beer history\'s most dramatic tales. By the 1830s, the citizens of Pilsen, in the Kingdom of Bohemia (now the Czech Republic), had grown so dissatisfied with the quality of their local beer that, according to legend, 36 barrels were poured into the streets in protest. The town council hired Bavarian brewer Josef Groll to create a new beer using the latest brewing science, including bottom-fermenting lager yeast, English-style pale malt kilned with a new technique, and the prized Saaz hops from the nearby Zatec region. The remarkably soft water of Pilsen proved ideal for producing a delicate, refined beer. On November 11, 1842, Groll\'s new beer was served for the first time, and its brilliant golden color, unprecedented in an era of dark and amber beers, caused a sensation. The beer quickly gained fame across Europe, aided by the expansion of rail transport and the spread of glass drinking vessels that allowed drinkers to admire its clarity. German brewers in cities like Dortmund and Munich created their own variations, giving rise to the German pilsner tradition. By the 20th century, pilsner-style lagers had conquered the world, though many mass-market interpretations bear only a superficial resemblance to the original.',
      sections: [
        {
          heading: 'Czech (Bohemian) Pilsner',
          content:
            'Czech pilsner, the original and still considered by many to be the definitive expression of the style, is a beer of extraordinary subtlety and depth. Brewed with floor-malted Bohemian barley, Saaz hops (prized for their delicate spiciness and floral aroma), and the exceptionally soft water of Pilsen, Czech pilsner achieves a balance that is deceptively difficult to replicate. The malt character is more prominent than in German versions, offering a rich, bready, slightly honeyed sweetness that provides a lush foundation for the bitter finish. Decoction mashing, a traditional Czech technique in which portions of the mash are boiled and returned, contributes depth and complexity. Saaz hops impart a refined bitterness with herbal and floral qualities quite different from the assertive bitterness of American or even German hop varieties. The beer is typically lagered for extended periods, resulting in a smooth, rounded character. Pilsner Urquell, produced in Pilsen since 1842, remains the essential reference point and is best experienced unfiltered from the cellars of the brewery itself.',
          entryLinks: [
            { name: 'Pilsner Urquell', id: 'beer-026' },
            { name: 'Budweiser Budvar', id: 'beer-027' },
            { name: 'Staropramen', id: 'beer-028' },
          ],
        },
        {
          heading: 'German Pilsner',
          content:
            'German pilsner, or Pils, represents a drier, more assertively bitter interpretation of the Bohemian original. Developed in the mid-to-late 19th century, particularly in northern Germany, this style emphasizes hop bitterness and a crisp, clean finish over malt richness. The malt character is restrained, providing a light crackery or grainy base, while noble German hop varieties such as Hallertau, Tettnang, and Spalt contribute firm bitterness and a subtle floral, herbal aroma. German pilsner is typically more highly attenuated than its Czech counterpart, resulting in a thinner body and a snappier, more refreshing finish. The water in many German brewing cities is harder than Pilsen\'s, which accentuates the perceived bitterness and crispness. Bitburger, Jever (famously the bitterest of the German pilsners), and Warsteiner are among the best-known examples. The style remains the dominant beer type in Germany today and has influenced countless lager traditions worldwide.',
          entryLinks: [
            { name: 'Bitburger Premium Pils', id: 'beer-029' },
            { name: 'Jever Pilsener', id: 'beer-030' },
            { name: 'Warsteiner Premium Verum', id: 'beer-031' },
          ],
        },
        {
          heading: 'Italian Pilsner and Modern Craft Pilsner',
          content:
            'In recent years, craft brewers worldwide have embraced pilsner as a canvas for showcasing brewing skill and creativity. The Italian pilsner, pioneered by Birrificio Italiano\'s Tipopils in 1996, adds the technique of dry hopping to the traditional pilsner framework, introducing more pronounced hop aroma while maintaining the style\'s essential crispness and drinkability. This innovation has been widely adopted by American craft brewers, who produce dry-hopped pilsners and hop-forward lagers using both European noble hops and aromatic New World varieties. The broader craft pilsner movement reflects a growing appreciation for restrained, technically demanding brewing after years dominated by bold IPAs and heavy stouts. Producing an excellent pilsner is considered one of the most challenging feats in brewing because the clean, delicate style leaves no room to hide flaws. Every aspect of the process, from malt quality and mashing technique to fermentation temperature control and lagering duration, must be executed with precision.',
          entryLinks: [
            { name: 'Birrificio Italiano Tipopils', id: 'beer-032' },
            { name: 'Firestone Walker Pivo Pils', id: 'beer-033' },
            { name: 'Victory Prima Pils', id: 'beer-034' },
          ],
        },
      ],
      notableEntries: [
        { name: 'Pilsner Urquell', id: 'beer-026', description: 'The original pilsner, brewed in Pilsen since 1842. Rich Bohemian malt, delicate Saaz hop bitterness, and a rounded, lightly sweet finish that defined a global beer style.' },
        { name: 'Bitburger Premium Pils', id: 'beer-029', description: 'A benchmark German pilsner with a crisp, dry character, firm noble hop bitterness, and a clean, refreshing finish that exemplifies the northern German pils tradition.' },
        { name: 'Firestone Walker Pivo Pils', id: 'beer-033', description: 'An award-winning craft pilsner that blends Bohemian tradition with New World technique, dry-hopped with German Saphir hops for a fragrant, modern expression of the style.' },
        { name: 'Victory Prima Pils', id: 'beer-034', description: 'A full-flavored American craft pilsner brewed with German malts and whole-flower European hops, delivering a robust, floral hop character with impeccable lager crispness.' },
      ],
      pairings: [
        { name: 'Gruyere', category: 'cheese', description: 'The nutty, slightly sweet character of Gruyere is beautifully complemented by the bready malt and crisp bitterness of a Czech pilsner.' },
        { name: 'Japanese Whisky', category: 'whiskey', description: 'A clean, delicate pilsner serves as an elegant chaser to the refined, subtle character of Japanese whisky, with both beverages sharing a focus on precision and balance.' },
      ],
    },

    // ─── LAGER ──────────────────────────────────────────────────────────────
    {
      name: 'Lager',
      intro:
        'Lager is both a broad category and a specific family of beer styles defined by the use of bottom-fermenting yeast at cold temperatures, followed by extended cold conditioning (lagering). While pilsner is technically a type of lager, the broader lager family encompasses an enormous range of styles from pale to dark, delicate to robust. Lagers represent the vast majority of global beer production and include some of the world\'s most celebrated and traditional beer styles.',
      history:
        'The development of lager brewing is closely tied to the caves and cellars of Bavaria, where medieval brewers discovered that storing beer in cool alpine caves over winter produced a smoother, cleaner-tasting product. The yeast responsible, Saccharomyces pastorianus (a hybrid of S. cerevisiae and S. eubayanus), thrives at cooler temperatures and settles to the bottom of the fermentation vessel. The isolation of pure lager yeast cultures by Emil Christian Hansen at the Carlsberg Laboratory in Copenhagen in 1883 was a watershed moment, enabling brewers worldwide to produce consistent lagers. The Munich breweries developed amber and dark lager styles, including Marzen, Dunkel, and Bock, while Vienna contributed its own amber lager tradition. The invention of mechanical refrigeration in the 19th century freed lager brewing from its dependence on natural cold and enabled its global spread.',
      sections: [
        {
          heading: 'Munich Dunkel and Schwarzbier',
          content:
            'Munich Dunkel (dark lager) is the original lager style of Munich, predating the city\'s adoption of pale lagers by several centuries. Brewed with Munich malt as its base, Dunkel offers rich flavors of toasted bread, caramel, toffee, and sometimes chocolate, all delivered with the clean, smooth character that defines lager brewing. The color ranges from deep copper to dark brown, and the bitterness is moderate, allowing the malt character to shine. Dunkel pairs beautifully with roasted meats, pretzels, and Bavarian cuisine. Schwarzbier (black beer), from the Thuringia and Saxony regions of Germany, pushes the color to near-black while maintaining a surprisingly light body and delicate roast character. Where stouts are bold and assertive, schwarzbier is subtle and refined, with gentle notes of dark chocolate and coffee that never overwhelm.',
          entryLinks: [
            { name: 'Ayinger Altbairisch Dunkel', id: 'beer-035' },
            { name: 'Kostritzer Schwarzbier', id: 'beer-036' },
            { name: 'Hofbrau Dunkel', id: 'beer-037' },
          ],
        },
        {
          heading: 'Bock and Doppelbock',
          content:
            'Bock is a strong lager style originating in the city of Einbeck in Lower Saxony, later adopted and refined by Munich brewers. Traditional bock is a malt-forward beer of 6-7% ABV with rich caramel, bread crust, and light toffee flavors, minimal hop character, and a smooth, warming finish. The color ranges from deep gold to dark amber. Maibock, or Helles Bock, is a paler, more hoppy spring seasonal version. Doppelbock, meaning "double bock," takes the style to even greater heights of strength and richness (typically 7-10% ABV). Developed by Paulaner monks in Munich as liquid sustenance during Lenten fasting, doppelbock is intensely malty with flavors of dark fruit, caramel, toffee, and bread crust. The Paulaner Salvator, first brewed in the 17th century, established the tradition of doppelbock names ending in "-ator." Eisbock, the most extreme member of the family, is produced by partially freezing a doppelbock and removing ice crystals to concentrate the flavor and alcohol.',
          entryLinks: [
            { name: 'Paulaner Salvator', id: 'beer-038' },
            { name: 'Ayinger Celebrator', id: 'beer-039' },
            { name: 'Spaten Optimator', id: 'beer-040' },
          ],
        },
        {
          heading: 'Helles and Munich-Style Pale Lager',
          content:
            'Munich Helles (meaning "bright" or "pale") was developed in the late 19th century as the Bavarian response to the rising popularity of Bohemian pilsner. First brewed by Spaten in 1894, Helles is a malt-accented pale lager that emphasizes a soft, bready malt sweetness with only restrained noble hop bitterness in the background. The result is an extraordinarily drinkable, balanced beer that has become the everyday choice in Bavarian beer halls and gardens. The malt character recalls fresh bread and light honey without any caramel sweetness, and the finish is clean and gently dry. Helles represents a fundamentally different philosophy from pilsner: where pilsner showcases hops against a clean malt backdrop, Helles celebrates malt with hops playing a supporting role. The style has become enormously popular in craft brewing circles, valued for its technical demands and refined simplicity.',
          entryLinks: [
            { name: 'Augustiner Lagerbier Hell', id: 'beer-041' },
            { name: 'Weihenstephaner Original', id: 'beer-042' },
            { name: 'Spaten Premium Lager', id: 'beer-043' },
          ],
        },
        {
          heading: 'Vienna Lager and Marzen',
          content:
            'Vienna lager, created by Anton Dreher in 1841, is one of the foundational lager styles and was among the first pale beers in continental Europe. Brewed with the amber-colored Vienna malt that Dreher developed, this style features a toasty, lightly caramelized malt character with a clean lager finish and moderate bitterness. The color ranges from deep gold to light amber. While the style largely disappeared from Austria itself, it survived in Mexico, where Austrian immigrants brought the recipe in the 19th century; Dos Equis Ambar and Negra Modelo are descended from this tradition. Marzen, closely related to Vienna lager, was traditionally brewed in March (hence the name) and lagered through the summer months for consumption at Munich\'s Oktoberfest in autumn. Historically amber-colored and richly malty, modern Oktoberfest beers served in Munich have actually trended toward paler, Helles-like interpretations, though many craft and export versions retain the classic amber character with toasty, bready malt flavors and a smooth, moderately sweet finish.',
          entryLinks: [
            { name: 'Negra Modelo', id: 'beer-044' },
            { name: 'Spaten Oktoberfestbier', id: 'beer-045' },
            { name: 'Sam Adams Boston Lager', id: 'beer-046' },
          ],
        },
      ],
      notableEntries: [
        { name: 'Augustiner Lagerbier Hell', id: 'beer-041', description: 'Munich\'s most beloved Helles, cherished for its soft, bready malt sweetness, gentle hop balance, and endlessly drinkable character. A beer of deceptive simplicity and quiet perfection.' },
        { name: 'Paulaner Salvator', id: 'beer-038', description: 'The original doppelbock, brewed by Munich monks since the 17th century. Rich caramel, dark bread, and dried fruit flavors with warming strength and remarkable smoothness.' },
        { name: 'Kostritzer Schwarzbier', id: 'beer-036', description: 'Germany\'s most renowned black lager, offering delicate chocolate and coffee notes with a surprisingly light body and clean, dry finish.' },
        { name: 'Sam Adams Boston Lager', id: 'beer-046', description: 'The beer that helped launch America\'s craft brewing revolution. A Vienna-style lager with noble hop aroma, toasty malt, and a clean, balanced profile.' },
      ],
      pairings: [
        { name: 'Emmental', category: 'cheese', description: 'The nutty, mild sweetness of Emmental cheese harmonizes with the bready malt character of Munich Helles and Vienna lager.' },
        { name: 'Irish Whiskey', category: 'whiskey', description: 'The smooth, clean character of a well-lagered beer complements the approachable, lightly sweet qualities of Irish whiskey in a classic boilermaker pairing.' },
      ],
    },

    // ─── WHEAT ──────────────────────────────────────────────────────────────
    {
      name: 'Wheat',
      intro:
        'Wheat beers form a diverse and ancient family of styles that use a substantial proportion of wheat in addition to or in place of barley. The inclusion of wheat contributes a lighter color, a hazy appearance (due to wheat proteins), a creamy mouthfeel, and a distinctively tangy, bready character. From the clove-and-banana exuberance of Bavarian Hefeweizen to the subtle citrus refreshment of Belgian Witbier, wheat beers are among the most approachable and refreshing styles in the beer world.',
      history:
        'Wheat has been used in brewing for as long as beer itself has existed, but wheat beer as a distinct style family has its strongest roots in Germany and Belgium. In Bavaria, wheat beer (Weissbier or Weizenbier) was so valued that its production was for centuries a royal monopoly, reserved exclusively for the Bavarian ducal house. The Degenberg family and later the Wittelsbachs controlled wheat beer production from the 16th century, and the style became a significant source of royal revenue. When the monopoly expired, wheat beer\'s popularity waxed and waned over the centuries before experiencing a dramatic revival in the mid-20th century, led by the Schneider brewery. In Belgium, the white beer (witbier or biere blanche) tradition of the town of Hoegaarden had completely died out by the 1950s, only to be revived single-handedly by Pierre Celis in 1966. The style uses unmalted wheat and is flavored with coriander and orange peel rather than relying solely on hops for flavor.',
      sections: [
        {
          heading: 'Hefeweizen',
          content:
            'Bavarian Hefeweizen is one of the most distinctive and immediately recognizable beer styles in the world. Brewed with at least 50% wheat malt, Hefeweizen owes its character primarily to its unique yeast strain, which produces generous amounts of isoamyl acetate (banana) and 4-vinyl guaiacol (clove). These two signature flavors, in varying proportions depending on the specific yeast strain and fermentation conditions, define the Hefeweizen experience. The beer pours a hazy golden-orange with a massive, billowy white head, and the aroma bursts with banana, clove, vanilla, and bubblegum notes. The palate is refreshingly effervescent with a creamy wheat mouthfeel, moderate sweetness, and virtually no hop character. Fermentation temperature is a key variable: warmer fermentation (around 20 degrees Celsius) emphasizes banana esters, while cooler temperatures bring out more clove phenol. Weihenstephaner Hefeweissbier and Schneider Weisse are benchmark examples.',
          entryLinks: [
            { name: 'Weihenstephaner Hefeweissbier', id: 'beer-047' },
            { name: 'Schneider Weisse Tap 7', id: 'beer-048' },
            { name: 'Paulaner Hefe-Weissbier', id: 'beer-049' },
          ],
        },
        {
          heading: 'Belgian Witbier',
          content:
            'Belgian Witbier (white beer) is a refreshing, spiced wheat ale that nearly vanished from existence before being resurrected by Pierre Celis in the 1960s. Brewed with a blend of barley malt and unmalted wheat (sometimes up to 50%), witbier is traditionally spiced with coriander seeds and dried Curacao orange peel, which lend a subtle citrusy, herbal complexity. The beer is pale, hazy, and effervescent, with a light body and gentle tartness. Unlike Hefeweizen, witbier yeast strains produce milder, less pronounced flavor compounds, allowing the spice and grain character to take center stage. Some examples may also include additional spices like chamomile, grains of paradise, or cumin. Hoegaarden, the beer Celis created, remains the best-known example, while craft brewers worldwide have embraced and expanded the style, sometimes adding fruit or extra spice combinations.',
          entryLinks: [
            { name: 'Hoegaarden', id: 'beer-050' },
            { name: 'Allagash White', id: 'beer-051' },
            { name: 'Blue Moon Belgian White', id: 'beer-052' },
          ],
        },
        {
          heading: 'Berliner Weisse and American Wheat',
          content:
            'Berliner Weisse is a tart, low-alcohol (2.5-3.5% ABV) wheat beer that was once the most popular beer in Berlin, famously described by Napoleon\'s troops as the "Champagne of the North." Brewed with a blend of wheat and barley and soured with Lactobacillus bacteria, Berliner Weisse has a bracingly tart, refreshing character that is traditionally tempered by the addition of flavored syrups: raspberry (Himbeersirup) or woodruff (Waldmeistersirup). The style had nearly disappeared from Berlin itself by the late 20th century but has been enthusiastically adopted by craft brewers worldwide, who produce fruited and unfruited versions. American wheat ale, by contrast, is a cleaner, unsoured style that uses American ale yeast (without the distinctive Bavarian yeast character) and a significant proportion of wheat. Light, refreshing, and approachable, American wheat ales often feature subtle citrus hop notes and serve as excellent gateway beers for those new to craft beer.',
          entryLinks: [
            { name: 'Bayerischer Bahnhof Berliner Weisse', id: 'beer-053' },
            { name: 'Boulevard Unfiltered Wheat', id: 'beer-054' },
            { name: 'Bell\'s Oberon', id: 'beer-055' },
          ],
        },
      ],
      notableEntries: [
        { name: 'Weihenstephaner Hefeweissbier', id: 'beer-047', description: 'From the world\'s oldest continuously operating brewery, this Hefeweizen is a masterclass in banana-clove balance with creamy wheat texture and effervescent refreshment.' },
        { name: 'Hoegaarden', id: 'beer-050', description: 'The beer that revived the Belgian witbier style, with gentle coriander and orange peel spicing, cloudy pale appearance, and a refreshing, lightly tart finish.' },
        { name: 'Allagash White', id: 'beer-051', description: 'An American craft interpretation of Belgian witbier that has become a modern classic, with beautifully integrated spice, wheat softness, and a clean, dry finish.' },
        { name: 'Bell\'s Oberon', id: 'beer-055', description: 'A beloved seasonal American wheat ale from Michigan, with a spicy hop note, soft wheat character, and bright, sunny drinkability that signals the arrival of summer.' },
      ],
      pairings: [
        { name: 'Goat Cheese', category: 'cheese', description: 'The tangy freshness of chevre pairs wonderfully with the bright, citrusy character of witbier and the effervescent lightness of Hefeweizen.' },
        { name: 'Green Tea', category: 'tea', description: 'The light, refreshing qualities of wheat beer share a kinship with the delicate vegetal character of Japanese green tea, making them interesting parallel tasting partners.' },
      ],
    },

    // ─── BELGIAN ────────────────────────────────────────────────────────────
    {
      name: 'Belgian',
      intro:
        'Belgian ales represent the pinnacle of brewing artistry, a tradition in which yeast is the star ingredient and complexity is the ultimate goal. Belgium, a country smaller than the state of Maryland, produces the most diverse array of beer styles on Earth. From austere Trappist ales brewed within monastery walls to wild-fermented lambics that harness the ambient microflora of the Senne Valley, Belgian brewing defies easy categorization and rewards exploration with seemingly infinite depth.',
      history:
        'Belgian brewing tradition stretches back over a millennium, with monastic breweries playing a central role. Six Trappist monasteries in Belgium (Chimay, Orval, Rochefort, Westmalle, Westvleteren, and Achel) continue to brew within their walls under strict monastic oversight, with proceeds supporting the monastery and charitable works. The Abbey ale tradition extends beyond the Trappists to include beers brewed under license or inspiration from other religious houses. Belgium\'s unique brewing culture was shaped by its position at the crossroads of European trade, its diverse microclimates, and a brewing tradition that valued individuality and experimentation over rigid style guidelines. The Belgian brewing tradition nearly perished in the 20th century due to world wars and shifting consumer preferences, but a concerted revival effort, combined with growing international appreciation for Belgian ales, has restored the country\'s position as the spiritual homeland of artisan brewing.',
      sections: [
        {
          heading: 'Belgian Dubbel and Tripel',
          content:
            'The Belgian Dubbel is a rich, malty Trappist-style ale traditionally brewed with dark candi sugar, which contributes complexity and a deep reddish-brown color while keeping the body from becoming overly heavy. Dubbels typically range from 6-8% ABV and feature flavors of dark fruit (plum, raisin, fig), caramel, chocolate, and a subtle spiciness from the Belgian yeast. Westmalle Dubbel, first brewed in 1926, is the foundational example. The Belgian Tripel, by contrast, is pale golden, stronger (typically 7.5-9.5% ABV), and deceptively drinkable despite its potency. Light candi sugar and high attenuation create a dry body that masks the elevated alcohol, while Belgian yeast contributes fruity esters (pear, orange, banana) and spicy phenols (white pepper, clove). Westmalle Tripel (1934) is again the archetypal reference. Both styles showcase the Belgian philosophy of using candi sugar to boost gravity while maintaining elegance and drinkability.',
          entryLinks: [
            { name: 'Westmalle Dubbel', id: 'beer-056' },
            { name: 'Westmalle Tripel', id: 'beer-057' },
            { name: 'Chimay Red (Premiere)', id: 'beer-058' },
          ],
        },
        {
          heading: 'Belgian Strong Dark and Golden Strong',
          content:
            'Belgian Strong Dark Ale is one of the most revered styles in the world, exemplified by the legendary Westvleteren XII and Rochefort 10. These complex, powerful ales (typically 8-12% ABV) feature deep brown to black coloring and an intricate tapestry of flavors including dark fruit, caramel, toffee, chocolate, spice, and a subtle warmth from the alcohol. Despite their strength, the best examples are remarkably smooth and well-integrated. Belgian Golden Strong Ale, epitomized by Duvel, takes the opposite approach to appearance while delivering comparable complexity and strength. Pale gold and brilliantly clear, these ales are effervescent and dangerously drinkable, hiding 8-10% ABV behind a crisp, dry body and a complex interplay of fruity yeast esters, peppery phenols, and a honeyed malt character. Duvel, whose name means "Devil" in Flemish dialect, earned its name because early tasters declared it was devilishly good.',
          entryLinks: [
            { name: 'Duvel', id: 'beer-059' },
            { name: 'Rochefort 10', id: 'beer-060' },
            { name: 'St. Bernardus Abt 12', id: 'beer-061' },
          ],
        },
        {
          heading: 'Belgian Saison',
          content:
            'Saison, meaning "season" in French, originated as a farmhouse ale brewed in the French-speaking Wallonia region of Belgium during cooler months for consumption by seasonal agricultural workers (saisonniers) during summer harvest. These rustic ales were brewed to be refreshing, thirst-quenching, and moderately alcoholic, though modern versions span a wide range of strengths from session-level to 8% ABV and beyond. The hallmark of saison is its bone-dry finish, high carbonation, and a complex yeast character that can include peppery spice, citrus, stone fruit, and earthy or hay-like notes. The Dupont brewery\'s Saison Dupont is universally regarded as the benchmark and one of the world\'s great beers. The style has been enthusiastically adopted by craft brewers globally, who appreciate its versatility and the creative freedom it affords. Many modern saisons incorporate additional ingredients such as spices, local grains, or Brett yeast for added complexity.',
          entryLinks: [
            { name: 'Saison Dupont', id: 'beer-062' },
            { name: 'Boulevard Tank 7', id: 'beer-063' },
            { name: 'Ommegang Hennepin', id: 'beer-064' },
          ],
        },
        {
          heading: 'Lambic and Gueuze',
          content:
            'Lambic is the most ancient and singular of all beer styles, produced through spontaneous fermentation by wild yeast and bacteria native to the Senne Valley southwest of Brussels. After brewing, the hot wort is pumped into a large, shallow vessel called a coolship, where it is exposed overnight to the ambient air. Over the following months and years, a succession of wild microorganisms, including Brettanomyces, Lactobacillus, Pediococcus, and Acetobacter, transform the wort into a complex, tart, funky, and deeply fascinating beverage. Young lambics (one year old) are sharp and one-dimensional, while aged lambics (two to three years) develop remarkable depth and wine-like complexity. Gueuze is a blend of young and old lambics, refermented in the bottle to produce effervescent carbonation and a stunning interplay of tart, fruity, funky, and earthy flavors. Fruit lambics, most traditionally Kriek (cherry) and Framboise (raspberry), add another dimension. The traditional lambic producers, including Cantillon, 3 Fonteinen, and Boon, are regarded as some of the most important breweries in the world.',
          entryLinks: [
            { name: 'Cantillon Gueuze', id: 'beer-065' },
            { name: '3 Fonteinen Oude Geuze', id: 'beer-066' },
            { name: 'Lindemans Cuvee Rene Gueuze', id: 'beer-067' },
          ],
        },
      ],
      notableEntries: [
        { name: 'Duvel', id: 'beer-059', description: 'Belgium\'s iconic golden strong ale. Brilliant, effervescent, and deceptively potent at 8.5% ABV, with complex yeast character, peppery spice, and a bone-dry finish.' },
        { name: 'Rochefort 10', id: 'beer-060', description: 'A profound Belgian strong dark ale from a Trappist monastery, with opulent dark fruit, fig, chocolate, and spice complexity that ranks among the world\'s greatest beers.' },
        { name: 'Saison Dupont', id: 'beer-062', description: 'The definitive farmhouse ale: bone-dry, vigorously effervescent, with peppery yeast character, citrus notes, and a rustic complexity that rewards repeated attention.' },
        { name: 'Cantillon Gueuze', id: 'beer-065', description: 'A masterwork of spontaneous fermentation, blending young and old lambics into a bracingly tart, complex, and profoundly earthy expression of Belgian wild ale tradition.' },
        { name: 'Chimay Blue (Grande Reserve)', id: 'beer-068', description: 'A Trappist strong dark ale with rich dark fruit, caramel, and spice that develops beautifully with cellaring, gaining sherry-like complexity over years.' },
      ],
      pairings: [
        { name: 'Aged Gouda', category: 'cheese', description: 'The caramel and butterscotch notes of aged Gouda are a natural match for the dark fruit and malt richness of Belgian dubbels and strong dark ales.' },
        { name: 'Darjeeling Tea', category: 'tea', description: 'The complex, fruity, and slightly astringent character of Darjeeling shares surprising parallels with Belgian golden strong ales, making for an illuminating comparative tasting.' },
      ],
    },

    // ─── PORTER ──────────────────────────────────────────────────────────────
    {
      name: 'Porter',
      intro:
        'Porter is the great ancestor of modern dark beer, a style that dominated English brewing for over two centuries and gave birth to stout as an offshoot. Characterized by dark brown to black coloring, moderate strength, and a complex malt character encompassing chocolate, caramel, toffee, and sometimes roasted coffee notes, porter occupies a slightly lighter, more approachable space than its stout descendants while offering substantial depth and character.',
      history:
        'Porter emerged in London in the early 18th century, becoming the first beer style to be produced on an industrial scale. The name is traditionally attributed to its popularity among London\'s street and river porters, the laborers who carried goods around the city. Early porters were likely blends of different aged beers, and the style evolved significantly over the centuries. At its peak in the 18th and 19th centuries, porter was brewed by enormous London breweries including Barclay Perkins, Whitbread, and Truman\'s, and was exported throughout the British Empire. The style declined through the 20th century, nearly disappearing entirely in Britain, before being revived by both British real ale enthusiasts and American craft brewers in the 1970s and 1980s. The distinction between porter and stout remains a subject of ongoing debate, but porters are generally characterized by a lighter body, more prominent chocolate and caramel malt character, and less roasted barley astringency than stouts.',
      sections: [
        {
          heading: 'English Porter',
          content:
            'English porter, also called robust or brown porter, is the style closest in character to the historic London original. Brewed with a blend of pale malt, brown malt, chocolate malt, and sometimes black malt, English porter typically ranges from 4-5.5% ABV and features a balanced interplay of chocolate, caramel, toffee, and biscuit malt flavors with moderate English hop bitterness. The roast character is gentler than in stout, lending notes of milk chocolate and toasted bread rather than dark espresso. English hops contribute earthy, herbal bitterness that supports the malt without dominating. The body is medium, the carbonation moderate, and the finish dry but not acrid. Fuller\'s London Porter, revived in 1996, is an outstanding benchmark that captures the style\'s history and character with remarkable authenticity. The Samuel Smith Taddy Porter offers another exceptional example from Yorkshire.',
          entryLinks: [
            { name: 'Fuller\'s London Porter', id: 'beer-069' },
            { name: 'Samuel Smith Taddy Porter', id: 'beer-070' },
            { name: 'Meantime London Porter', id: 'beer-071' },
          ],
        },
        {
          heading: 'American Porter',
          content:
            'American porter takes the English template and applies the American craft brewing ethos of bolder flavors and more assertive hopping. While maintaining the core chocolate-and-caramel malt character of the style, American porters often feature more aggressive American hop additions, contributing citrusy, piney, or floral notes that provide a counterpoint to the malt richness. The roast character may be slightly more pronounced, and the overall flavor profile tends to be more intense and complex. ABVs typically range from 4.5-6.5%, though some versions push higher. Anchor Porter, one of the earliest craft porter revivals in America, remains an excellent example, while Founders Porter and Deschutes Black Butte Porter represent the best of the modern American interpretation. The style serves as an excellent bridge between the more approachable amber ales and the more intense stout styles.',
          entryLinks: [
            { name: 'Anchor Porter', id: 'beer-072' },
            { name: 'Founders Porter', id: 'beer-073' },
            { name: 'Deschutes Black Butte Porter', id: 'beer-074' },
          ],
        },
        {
          heading: 'Baltic Porter and Smoked Porter',
          content:
            'Baltic porter is a strong (typically 6.5-9.5% ABV), smooth, complex lager that developed in the countries bordering the Baltic Sea as a local interpretation of English porter, rebrewed using cold-fermenting lager yeast. The result is a remarkably clean, smooth beer with rich flavors of dark fruit, chocolate, licorice, caramel, and a subtle warming alcohol presence. Baltic porters often display a vinous or sherry-like quality that develops during extended cold lagering. The style is especially popular in Poland, where brands like Zywiec Porter and Okocim Porter are national treasures. Smoked porter, or Rauchporter, incorporates smoked malt (traditionally beechwood-smoked, as in Bamberg\'s Rauchbier tradition) to add a layer of campfire or bacon-like smokiness. The smoke character melds with the dark malt flavors, creating a complex and distinctive beer. Alaskan Smoked Porter, smoked over alder wood, is an acclaimed American example that develops beautifully with extended cellaring.',
          entryLinks: [
            { name: 'Zywiec Porter', id: 'beer-075' },
            { name: 'Alaskan Smoked Porter', id: 'beer-076' },
            { name: 'Sinebrychoff Porter', id: 'beer-077' },
          ],
        },
      ],
      notableEntries: [
        { name: 'Fuller\'s London Porter', id: 'beer-069', description: 'A faithful revival of the historic London style, with elegant chocolate, caramel, and toffee malt character, earthy English hops, and a smooth, dry finish.' },
        { name: 'Founders Porter', id: 'beer-073', description: 'A robust American porter with rich dark chocolate and coffee flavors, balanced hop bitterness, and a creamy, full-bodied mouthfeel that has won multiple awards.' },
        { name: 'Zywiec Porter', id: 'beer-075', description: 'A magnificent Baltic porter from Poland with rich dark fruit, chocolate, and licorice complexity, brewed in a tradition dating to the 19th century.' },
        { name: 'Alaskan Smoked Porter', id: 'beer-076', description: 'An award-winning smoked porter made with alder-smoked malt, offering layers of smoky complexity alongside chocolate and dark fruit that improves with years of cellaring.' },
      ],
      pairings: [
        { name: 'Sharp Cheddar', category: 'cheese', description: 'The chocolate and caramel malt character of porter complements the tangy sharpness of aged cheddar, with the beer\'s moderate body providing a perfect textural match.' },
        { name: 'Bourbon', category: 'whiskey', description: 'Porter\'s toffee, chocolate, and caramel notes echo the vanilla and oak flavors of bourbon, creating a warm, harmonious pairing especially suited to cooler weather.' },
      ],
    },

    // ─── SOUR ────────────────────────────────────────────────────────────────
    {
      name: 'Sour',
      intro:
        'Sour beers constitute an ancient and increasingly popular family of styles defined by deliberate acidity. While most modern beers are brewed with great care to prevent any sourness, sour beer traditions embrace tartness as a central flavor element, achieved through the action of acid-producing bacteria and wild yeast. From the spontaneously fermented lambics of Belgium to the sharp Berliner Weisse of Germany and the creative fruited sours of the modern craft movement, sour beers offer some of the most complex and wine-like experiences in the entire beer world.',
      history:
        'For most of human history, all beer was at least somewhat sour, as brewers lacked the scientific understanding and technology to prevent bacterial contamination. What we now consider "sour beer styles" are essentially beers that preserved and refined ancient fermentation practices rather than adopting the clean, controlled techniques of modern brewing. Belgian lambic is the most venerable sour tradition, with documented production dating back centuries in the Pajottenland region. German sour wheat beers, including Berliner Weisse and Gose, developed their own distinct traditions. Flanders red ale and Oud Bruin represent sour ales aged in large oak vessels, developing complex, vinous character. The American craft sour beer movement, beginning in the early 2000s, has massively expanded the category with innovative techniques including kettle souring (a faster, more controlled method of acidification), fruited sours, and mixed-fermentation farmhouse ales.',
      sections: [
        {
          heading: 'Flanders Red Ale and Oud Bruin',
          content:
            'Flanders red ale is one of the most wine-like of all beer styles, aged for extended periods (typically one to three years) in large oak vessels called foeders, where a complex ecosystem of yeast and bacteria slowly transforms the beer. The result is a deep red-brown ale with a sophisticated blend of cherry, plum, balsamic vinegar, and oak flavors, balanced by residual malt sweetness. The acidity is firm but not aggressive, more reminiscent of a fine wine than a sharp sour. Rodenbach Grand Cru, a blend of young and two-year-aged ales, is the definitive example. Duchesse de Bourgogne, sweeter and more accessible, is another popular representative. Oud Bruin (old brown), from the East Flanders region, is a related but distinct style that emphasizes malt complexity over acidity. Brown sugar, dark fruit, chocolate, and a gentler sourness characterize Oud Bruin, with Liefmans Goudenband serving as the benchmark example.',
          entryLinks: [
            { name: 'Rodenbach Grand Cru', id: 'beer-078' },
            { name: 'Duchesse de Bourgogne', id: 'beer-079' },
            { name: 'Liefmans Goudenband', id: 'beer-080' },
          ],
        },
        {
          heading: 'Gose',
          content:
            'Gose is a tart, salty wheat beer originating in the German town of Goslar (and later associated primarily with Leipzig) that has experienced a remarkable revival in the craft beer era. Brewed with a significant proportion of wheat, soured with Lactobacillus, and seasoned with coriander and salt, Gose is a uniquely refreshing and complex style. The salt content, derived historically from the mineral-rich water of the Gose River, enhances the beer\'s refreshing quality and brightens its flavors, much as salt enhances food. The coriander contributes a subtle citrusy, herbal note that complements the lactic tartness. Modern craft interpretations often incorporate fruit additions, with watermelon, blood orange, passion fruit, and mango being popular choices. The style had completely disappeared from Leipzig by 1966 but was revived by Lothar Goldhahn in 1986, and the subsequent adoption by American craft brewers has made fruited gose one of the most accessible and commercially successful sour beer styles.',
          entryLinks: [
            { name: 'Westbrook Gose', id: 'beer-081' },
            { name: 'Anderson Valley The Kimmie, The Yink and The Holy Gose', id: 'beer-082' },
            { name: 'Bayerischer Bahnhof Original Leipziger Gose', id: 'beer-083' },
          ],
        },
        {
          heading: 'American Wild Ale and Kettle Sour',
          content:
            'American wild ales represent the creative frontier of sour beer, drawing inspiration from Belgian traditions while incorporating American innovation and a spirit of experimentation. Breweries such as Jester King (Texas), Cascade Brewing (Oregon), and The Rare Barrel (California) have developed their own house cultures of wild yeast and bacteria, aging beers in barrels for months or years to develop complex, terroir-driven flavors. These beers often incorporate local fruits, honey, and other ingredients, resulting in unique expressions tied to their place of origin. Kettle souring, a technique in which wort is inoculated with Lactobacillus in the brew kettle before boiling (which kills the bacteria and prevents further souring), has made sour beer production more accessible, efficient, and predictable. While purists sometimes dismiss kettle sours as lacking the complexity of traditional methods, the technique has introduced sour beer to millions of new consumers and enabled an explosion of creative fruited sour ales.',
          entryLinks: [
            { name: 'Jester King Atrial Rubicite', id: 'beer-084' },
            { name: 'Cascade Apricot', id: 'beer-085' },
            { name: 'The Bruery Terreux Rueuze', id: 'beer-086' },
          ],
        },
      ],
      notableEntries: [
        { name: 'Rodenbach Grand Cru', id: 'beer-078', description: 'A Flanders red masterpiece blending young and oak-aged ales, with cherry, balsamic, and complex fruit character that represents one of the world\'s great sour beers.' },
        { name: 'Westbrook Gose', id: 'beer-081', description: 'A benchmark American-made gose with bright lactic tartness, a touch of salinity, and subtle coriander, demonstrating the refreshing potential of this revived German style.' },
        { name: 'Jester King Atrial Rubicite', id: 'beer-084', description: 'A wild ale refermented with raspberries from a Texas farmhouse brewery, showcasing the potential of American terroir-driven sour beer.' },
        { name: 'Duchesse de Bourgogne', id: 'beer-079', description: 'An accessible Flemish red-brown ale with sweet and sour cherry character, malt richness, and oak complexity that serves as many drinkers\' gateway to sour beer.' },
      ],
      pairings: [
        { name: 'Brie', category: 'cheese', description: 'The rich creaminess of Brie is cut beautifully by the acidity of Flanders red and gose, while the earthy rind character complements the funky complexity of wild ales.' },
        { name: 'Wine', category: 'wine', description: 'Sour beers, especially Flanders reds and traditional lambics, share much with the wine world in terms of acidity, complexity, and food-pairing versatility, making them natural bridges between beer and wine appreciation.' },
      ],
    },

    // ─── PALE ALE ────────────────────────────────────────────────────────────
    {
      name: 'Pale Ale',
      intro:
        'Pale ale is the foundational style from which much of modern craft brewing has grown. More restrained than IPA but more flavorful than standard lagers, pale ale occupies a sweet spot of approachable hop character, balanced malt backbone, and moderate alcohol. The style bridges the gap between everyday drinking beer and the more assertive hop-forward styles, making it one of the most versatile and widely enjoyed categories in the beer world.',
      history:
        'The term "pale ale" dates to the early 18th century, when advances in malt kilning technology allowed English brewers to produce lighter-colored malts than the brown and amber varieties that had previously dominated. The pale ales of Burton-upon-Trent, brewed with the town\'s uniquely mineral-rich water (high in calcium sulfate, or gypsum), became renowned for their clarity, bitterness, and distinctive character. Bass Pale Ale, with its iconic red triangle label (the first registered trademark in the United Kingdom), became one of the most widely exported beers of the Victorian era. In the late 20th century, American craft brewers reimagined pale ale using assertive American hop varieties, creating a bolder, more hop-forward interpretation. Sierra Nevada Pale Ale, first brewed in 1980, became the standard-bearer for American pale ale and one of the most influential beers in craft brewing history.',
      sections: [
        {
          heading: 'English Bitter and Best Bitter',
          content:
            'English bitter, despite its name, is a well-balanced, sessionable pale ale that has been the backbone of British pub culture for generations. Served on cask via handpump at cellar temperature (around 11-13 degrees Celsius) with gentle natural carbonation, cask bitter offers an experience entirely different from most modern craft beer. The flavors are subtle and nuanced: biscuity malt, gentle caramel, earthy and floral English hops, and a dry, slightly bitter finish that invites the next sip. Standard bitter runs 3.2-3.8% ABV, best bitter 3.8-4.6%, and extra special bitter (ESB) 4.6-6.2%. These are beers designed for extended sessions, conversation, and companionship rather than intense sensory analysis. Fuller\'s London Pride is a quintessential best bitter, while Fuller\'s ESB defined the extra special bitter style. Timothy Taylor\'s Landlord is frequently cited as the finest cask ale in Britain, a beer of extraordinary subtlety and complexity at just 4.3% ABV.',
          entryLinks: [
            { name: 'Fuller\'s London Pride', id: 'beer-087' },
            { name: 'Timothy Taylor\'s Landlord', id: 'beer-088' },
            { name: 'Fuller\'s ESB', id: 'beer-089' },
          ],
        },
        {
          heading: 'American Pale Ale',
          content:
            'American pale ale (APA) reinterpreted the English tradition through the lens of bold American ingredients and a more assertive approach to hopping. The defining example is Sierra Nevada Pale Ale, which showcased Cascade hops with their distinctive grapefruit and floral character against a caramelly malt backbone. The style typically ranges from 4.5-6.2% ABV with 30-50 IBU, offering a more pronounced hop character than English pale ales but with less intensity than IPAs. The malt profile often includes a light to moderate caramel sweetness from crystal malts, providing a counterbalance to the hop bitterness. American pale ales use American ale yeast strains that produce a clean, neutral fermentation profile, allowing the hops and malt to express themselves without significant yeast-derived flavors. The style has evolved over the decades, with modern examples often featuring more tropical and citrusy hop varieties and drier, more attenuated bodies, reflecting broader trends in American craft brewing.',
          entryLinks: [
            { name: 'Sierra Nevada Pale Ale', id: 'beer-090' },
            { name: 'Dale\'s Pale Ale', id: 'beer-091' },
            { name: 'Deschutes Mirror Pond', id: 'beer-092' },
          ],
        },
        {
          heading: 'Blonde Ale and Cream Ale',
          content:
            'Blonde ale and cream ale represent the lightest, most approachable end of the pale ale spectrum. Blonde ale is a clean, easy-drinking American style with a light golden color, subtle malt sweetness, and minimal hop character. It serves as an excellent bridge beer for those transitioning from mass-market lagers to craft beer, offering more flavor and character without the intensity that can be off-putting to newcomers. Firestone Walker 805 is a commercially successful example. Cream ale is a uniquely American style that blends ale and lager techniques: it may be fermented with ale yeast and then cold-conditioned like a lager, or it may use a blend of ale and lager yeasts. The result is an exceptionally smooth, clean, and refreshing beer with a light body and crisp finish. Adjuncts like corn or rice are traditional and contribute to the style\'s lightness without the negative connotations these ingredients carry in mass-market brewing.',
          entryLinks: [
            { name: 'Firestone Walker 805', id: 'beer-093' },
            { name: 'Kona Big Wave', id: 'beer-094' },
            { name: 'Genesee Cream Ale', id: 'beer-095' },
          ],
        },
      ],
      notableEntries: [
        { name: 'Sierra Nevada Pale Ale', id: 'beer-090', description: 'The beer that launched American craft brewing into the mainstream. Cascade hop grapefruit and pine, caramel malt balance, and a clean, dry finish that remains a benchmark after four decades.' },
        { name: 'Fuller\'s London Pride', id: 'beer-087', description: 'London\'s signature best bitter, with biscuity malt, gentle marmalade fruitiness, and earthy English hop character that exemplifies the understated brilliance of cask ale.' },
        { name: 'Timothy Taylor\'s Landlord', id: 'beer-088', description: 'Consistently voted Britain\'s best cask ale, Landlord delivers extraordinary complexity at session strength, with floral hops, citrus zest, and a perfectly dry finish.' },
        { name: 'Dale\'s Pale Ale', id: 'beer-091', description: 'Oskar Blues\' pioneering canned craft pale ale, with bold American hop character, balanced malt, and the freshness that canning preserves.' },
      ],
      pairings: [
        { name: 'Monterey Jack', category: 'cheese', description: 'The mild, buttery character of Monterey Jack complements the balanced malt-hop profile of pale ale without overpowering its subtle flavors.' },
        { name: 'Light Roast Coffee', category: 'coffee', description: 'A fruity, bright light roast coffee shares the citrus and floral notes found in American pale ales, creating an interesting flavor parallel between morning and evening beverages.' },
      ],
    },

    // ─── AMBER ──────────────────────────────────────────────────────────────
    {
      name: 'Amber',
      intro:
        'Amber ales and red ales occupy the rich middle ground of the beer spectrum, bridging the gap between pale ales and brown ales with a malt-forward character defined by caramel, toffee, and toasted bread flavors. These copper-to-reddish-brown beers offer a satisfying maltiness balanced by moderate hop bitterness, making them among the most food-friendly and approachable beer styles. The amber family includes both ale and lager interpretations from various brewing traditions.',
      history:
        'The amber ale category has roots in multiple brewing traditions. English amber ales evolved from the mild and bitter ale traditions, while American amber ale emerged as a distinct style in the early days of the craft beer movement. The term "amber" was popularized in the American market partly because it sounded more appealing to consumers unfamiliar with traditional style names. Mendocino Brewing\'s Red Tail Ale (1983) and New Belgium\'s Fat Tire (1991) were influential early American ambers. Irish red ale, a closely related style, has its own history centered on the malt traditions of Ireland, where beers tend to emphasize a caramel sweetness derived from a small proportion of roasted barley. Altbier, the copper-colored ale of Dusseldorf, Germany, represents another branch of the amber family, distinguished by its use of old-style top-fermentation followed by cold lagering.',
      sections: [
        {
          heading: 'American Amber Ale',
          content:
            'American amber ale is a malt-accented style that showcases caramel malt character with a supporting cast of American hops. The color ranges from light copper to deep reddish-brown, derived primarily from the use of medium to dark crystal (caramel) malts. Flavor-wise, American ambers deliver toffee, caramel, and toasted bread malt notes in the foreground, with American hop varieties contributing moderate bitterness and citrusy, piney, or floral flavor and aroma in the background. ABVs typically range from 4.5-6.2%, making these accessible, everyday beers. The balance tilts toward malt but is not overtly sweet, with the hop bitterness providing enough counterpoint to keep the beer refreshing. Fat Tire from New Belgium Brewing became one of the most commercially successful American ambers, helping to introduce countless drinkers to craft beer. Bell\'s Amber Ale and Troller\'s Amber from Full Sail are other well-regarded examples.',
          entryLinks: [
            { name: 'New Belgium Fat Tire', id: 'beer-096' },
            { name: 'Bell\'s Amber Ale', id: 'beer-097' },
            { name: 'Troller\'s Amber', id: 'beer-098' },
          ],
        },
        {
          heading: 'Irish Red Ale',
          content:
            'Irish red ale is a gentle, malt-focused style defined by a distinctive amber-red color and a smooth, slightly sweet character derived from a restrained use of roasted barley. Unlike the roasted barley used in stout, which is heavily roasted to produce black color and sharp bitterness, the roasted barley in Irish red is used in very small quantities to contribute color and a subtle dryness without harsh roast flavors. The result is a soft, approachable beer with flavors of buttered toast, light toffee, and a touch of caramel, with gentle earthy English or Irish hop bitterness in the background. ABVs are typically moderate, ranging from 3.8-5%, making Irish red a session-friendly style. Smithwick\'s is the best-known example in Ireland, while Killian\'s Irish Red became widely recognized in the American market, though the latter is actually a lager brewed by Coors. George Killian Lett licensed the recipe from his family\'s defunct Enniscorthy brewery in the 1980s.',
          entryLinks: [
            { name: 'Smithwick\'s Red Ale', id: 'beer-099' },
            { name: 'Kilkenny Irish Cream Ale', id: 'beer-100' },
            { name: 'O\'Hara\'s Irish Red', id: 'beer-101' },
          ],
        },
        {
          heading: 'Altbier',
          content:
            'Altbier, meaning "old beer" in German, is the traditional ale of Dusseldorf that represents one of the last surviving German ale traditions in a country dominated by lagers. Despite being top-fermented with ale yeast, altbier is cold-conditioned (lagered) after fermentation, producing a clean, crisp character that belies its ale origins. The result is a copper-to-brown beer with a firm, dry malt character, restrained caramel notes, and a pronounced, clean hop bitterness from noble German varieties. The body is medium, the carbonation moderate, and the finish dry and assertive. The four traditional Dusseldorf brewpubs, Uerige, Schumacher, Schluessel, and Fuechschen, each produce their own distinctive interpretation, served fresh in small 200ml cylindrical glasses by servers called Kobes. Uerige\'s "Sticke" and "Doppelsticke," stronger, more intensely flavored special versions, are legendary among beer aficionados. The style has been adopted by some American craft brewers, with Long Trail Ale serving as a notable example.',
          entryLinks: [
            { name: 'Uerige Alt', id: 'beer-102' },
            { name: 'Schumacher Alt', id: 'beer-103' },
            { name: 'Long Trail Ale', id: 'beer-104' },
          ],
        },
        {
          heading: 'Red IPA and Imperial Red',
          content:
            'Red IPA and Imperial Red Ale represent the more aggressive end of the amber spectrum, combining the caramel malt backbone of amber ales with the hop intensity of American IPAs. Red IPA bridges the gap between amber ale and IPA, featuring prominent caramel and toffee malt character alongside assertive American hop bitterness, flavor, and aroma. The interplay between sweet caramel malt and bold citrusy, piney, or tropical hops creates a complex and satisfying beer with more body and malt presence than a standard IPA. ABVs typically range from 6-7.5%. Imperial red ales push these elements even further, with ABVs of 7.5-10% and intensified malt and hop character. Bear Republic Red Rocket Ale and Tröegs Nugget Nectar are excellent examples of this style space, demonstrating how malt richness and hop intensity can coexist in delicious harmony.',
          entryLinks: [
            { name: 'Bear Republic Red Rocket Ale', id: 'beer-105' },
            { name: 'Tröegs Nugget Nectar', id: 'beer-106' },
            { name: 'Lagunitas Lucky 13', id: 'beer-107' },
          ],
        },
      ],
      notableEntries: [
        { name: 'New Belgium Fat Tire', id: 'beer-096', description: 'One of the most iconic American amber ales, with balanced caramel malt sweetness, biscuity character, and gentle hop bitterness that helped define the style and launched New Belgium\'s success.' },
        { name: 'Smithwick\'s Red Ale', id: 'beer-099', description: 'Ireland\'s classic red ale, smooth and malty with a light caramel character, subtle roasted barley dryness, and gentle hop bitterness. A cornerstone of Irish pub culture.' },
        { name: 'Uerige Alt', id: 'beer-102', description: 'The definitive Dusseldorf altbier, with a firm, dry malt character, assertive hop bitterness, and the clean conditioning that makes this ale taste almost like a lager.' },
        { name: 'Tröegs Nugget Nectar', id: 'beer-106', description: 'A cult-favorite imperial amber ale loaded with hop character and supported by a rich caramel and honey malt backbone, released annually to great anticipation.' },
      ],
      pairings: [
        { name: 'Smoked Gouda', category: 'cheese', description: 'The caramel and toffee notes of amber ales harmonize with the smoky sweetness of smoked Gouda, creating a rich, satisfying pairing.' },
        { name: 'Rye Whiskey', category: 'whiskey', description: 'The spicy, caramel character of rye whiskey mirrors and complements the toasty, malt-forward profile of amber ales and altbier.' },
      ],
    },
  ],
};
