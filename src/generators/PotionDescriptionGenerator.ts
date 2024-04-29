import { Roller } from '../utils/Roller';

export class PotionDescriptionGenerator {
  getPotionDescription(): string {
    let smell = this._includeSmell() ? `, but ${this._getSmell()}` : '';
    let result =
      `${this._getConsistency()} ${this._getColor()} ` +
      `that tastes like ${this._getTaste(
        Roller.roll(4)
      )}${smell} in a ${this._getFlask()}.`;
    result = `A ${result.toLowerCase()}`;
    return result;
  }

  private _getColor(): string {
    let colors = data.color;
    let colorRoll = Roller.roll(100);
    let uniqueColors = this._getUniqueItems(colors, 2);

    if (colorRoll <= 85) return `${colors[colorRoll - 1]} colored potion`;
    if (colorRoll >= 86 && colorRoll <= 89)
      return `translucent ${uniqueColors[0]} colored potion`;
    if (colorRoll >= 90 && colorRoll <= 92)
      return `${uniqueColors[0]} potion with ${uniqueColors[1]} splotches interspersed throughout`;
    if (colorRoll >= 93 && colorRoll <= 95)
      return `${uniqueColors[0]} potion with ${uniqueColors[1]} colored drops`;
    if (colorRoll >= 96 && colorRoll <= 99)
      return `potion with a ${uniqueColors[0]} color floating on top of a ${uniqueColors[1]} base color`;

    return `potion that changes from ${uniqueColors[0]} to ${uniqueColors[1]} and back again every minute or so`;
  }

  private _getConsistency(): string {
    let consistencies = data.consistency;
    let consistencyRoll = Roller.roll(10);
    if (consistencyRoll <= 8) return consistencies[consistencyRoll - 1];

    let uniqueConsistencies = this._getUniqueItems(consistencies, 2);
    return `${uniqueConsistencies[0]} and ${uniqueConsistencies[1]}`;
  }

  private _getTaste(count: number = 1): string {
    if (count <= 1) return data.taste[Roller.roll(data.taste.length) - 1];
    let tastes = this._getUniqueItems(data.taste, count);
    if (count === 2) return `${tastes[0]} and ${tastes[1]}`;

    let result = '';

    for (let index = 0; index < tastes.length; index++) {
      // insert the word 'and' before the last item
      if (index === count - 1) {
        result += `and ${tastes[index]}`;
        break;
      }

      result += `${tastes[index]}, `;
    }

    return result.toLowerCase();
  }

  private _includeSmell(): boolean {
    return Roller.roll(6) <= 3;
  }

  private _getSmell(): string {
    // use tastes table for smells
    let smell = data.taste[Roller.roll(data.taste.length) - 1];
    return `smells like ${smell}`;
  }

  private _getFlask(): string {
    let materials = data.flask.material;
    let shapes = data.flask.shape;
    let length = data.flask.getLength();
    let diameter = data.flask.getDiameter();
    let flask = `${materials[Roller.roll(materials.length) - 1]}, ${
      shapes[Roller.roll(shapes.length) - 1]
    }, ${length}, ${diameter}, flask`;
    return flask;
  }

  private _getUniqueItems(data: string[], count: number): string[] {
    let length = data.length;

    let results: string[] = [];

    while (count > 0) {
      let result = data[Roller.roll(length) - 1];
      let isUnique = results.filter((x) => x === result).length === 0;
      if (isUnique) {
        results.push(result);
        count--;
      }
    }

    return results;
  }
}

const data = {
  color: [
    'Almond',
    'Apricot',
    'Aquamarine',
    'Asparagus',
    'Asparagus',
    'Banana',
    'Beaver',
    'Beaver',
    'Black',
    'Blue',
    'Blue',
    'Blue Gray',
    'Blue Gray',
    'Blue Violet',
    'Blush',
    'Brick Red',
    'Brown',
    'Brown',
    'Burnt Orange',
    'Burnt Orange',
    'Canary',
    'Carnation Pink',
    'Chestnut',
    'Dandelion',
    'Desert Sand',
    'Eggplant',
    'Eggplant',
    'Fern',
    'Fern',
    'Fuchsia',
    'Gold',
    'Goldenrod',
    'Gray',
    'Gray',
    'Green',
    'Green Yellow',
    'Green Yellow',
    'Inchworm',
    'Indigo',
    'Jungle Green',
    'Lavender',
    'Lemon',
    'Mahogany',
    'Mahogany',
    'Maize',
    'Mango',
    'Maroon',
    'Midnight Blue',
    'Mulberry',
    'Olive Green',
    'Olive Green',
    'Orange',
    'Orange Red',
    'Orange Red',
    'Orange Yellow',
    'Orchid',
    'Peach',
    'Periwinkle',
    'Pine Green',
    'Plum',
    'Raw Umber',
    'Raw Umber',
    'Red',
    'Red Orange',
    'Red Violet',
    "Robin's Egg Blue",
    'Salmon',
    'Scarlet',
    'Scarlet',
    'Sea Green',
    'Silver',
    'Sky Blue',
    'Sunset Orange',
    'Tan',
    'Teal Blue',
    'Tumbleweed',
    'Turquoise Blue',
    'Violet (Purple)',
    'Violet Blue',
    'Violet Red',
    'White',
    'White',
    'Yellow',
    'Yellow Orange',
    'Clear',
  ],
  consistency: [
    'Bubbly',
    'Clumpy',
    'Fizzy',
    'Gassy',
    'Runny',
    'Thin',
    'Thick',
    'Watery',
  ],
  taste: [
    'Apples',
    'Bananas',
    'Green Beans',
    'Lima Beans',
    'Beef',
    'Beef',
    'Beef',
    'Blueberry',
    'Cabbage',
    'Chicken',
    'Chives',
    'Chives',
    'Chives',
    'Chives',
    'Chutney',
    'Chutney',
    'Chutney',
    'Cinnamon',
    'Cinnamon',
    'Cinnamon',
    'Cinnamon',
    'Coffee',
    'Coffee',
    'Coffee',
    'Corn',
    'Cucumber',
    'Fish',
    'Fish',
    'Fish',
    'Ginger',
    'Ginger',
    'Ginger',
    'Garlic',
    'Garlic',
    'Garlic',
    'Garlic',
    'Garlic',
    'Grapes',
    'Ham',
    'Ham',
    'Honey',
    'Honey',
    'Jasmine',
    'Jasmine',
    'Kiwi',
    'Lettuce',
    'Lemons',
    'Lemons',
    'Lemons',
    'Licorice',
    'Licorice',
    'Licorice',
    'Licorice',
    'Licorice',
    'Mushroom',
    'Mushroom',
    'Mushroom',
    'Mushroom',
    'Mushroom',
    'Mustard',
    'Mustard',
    'Mustard',
    'Nuts',
    'Nuts',
    'Olives',
    'Onion',
    'Onion',
    'Onion',
    'Oranges',
    'Oranges',
    'Peach',
    'Peas',
    'Black Pepper',
    'Black Pepper',
    'Black Pepper',
    'Black Pepper',
    'Black Pepper',
    'Hot Pepper',
    'Hot Pepper',
    'Hot Pepper',
    'Hot Pepper',
    'Pickles',
    'Pickles',
    'Pine',
    'Pork',
    'Pork',
    'Pumpkin',
    'Rabbit',
    'Rabbit',
    'Radish',
    'Raspberry',
    'Salt',
    'Salt',
    'Snake',
    'Snake',
    'Snake',
    'Squash',
    'Tomato',
    'Venison',
    'Venison',
  ],
  flask: {
    material: ['glass', 'clay', 'steel'],
    shape: ['conical', 'round-bottom', 'pear-shaped', 'volumetric', 'tubular'],
    getLength: function () {
      return `${Roller.roll(3, 3)}" long`;
    },
    getDiameter: function () {
      return `${Roller.roll(2, 2)}" diameter`;
    },
  },
};
