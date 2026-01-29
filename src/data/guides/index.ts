import type { CategoryGuideData } from '../../types';
import { wineGuide } from './wine-guide';
import { whiskeyGuide } from './whiskey-guide';
import { coffeeGuide } from './coffee-guide';
import { teaGuide } from './tea-guide';
import { cheeseGuide } from './cheese-guide';
import { beerGuide } from './beer-guide';

export const categoryGuides: Record<string, CategoryGuideData> = {
  wine: wineGuide,
  whiskey: whiskeyGuide,
  coffee: coffeeGuide,
  tea: teaGuide,
  cheese: cheeseGuide,
  beer: beerGuide,
};
