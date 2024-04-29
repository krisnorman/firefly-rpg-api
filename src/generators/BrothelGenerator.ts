import { Roller } from '../utils/Roller';

class Brothel {
    constructor(
      public Name: string,
      public Location: string,
      public Entertainment: string,
      public Boss: string,
      public Food: string,
      public Drink: string,
      public Reputation: string,
      public Rumors: string,
      public RoomFurnishings: string,
      public Features: string
    ) {}
  
    public toString = (): string => {
      let result =
        `A brothel named The ${
          this.Name
        } is located ${this.Location.toLowerCase()}. ` +
        `In addition to the 'usual' amusements, here you can procure ${this.Entertainment} ` +
        `This place is run by ${this.Boss.toLowerCase()} ` +
        `To eat, the place serves ${this.Food.toLowerCase()} ` +
        `To drink, the place serves ${this.Drink.toLowerCase()} ` +
        `People talk; they say ${this.Reputation.toLowerCase()} ` +
        `People talk about this place; they suggest that recently ${this.Rumors.toLowerCase()} ` +
        `This room has ${this.RoomFurnishings.toLowerCase()} ` +
        `You notice ${this.Features.toLowerCase()} `;
      return result;
    };
  }
  
  export class BrothelGenerator {
    static Description: string = "Random Brothels:  What'll it be, sailor?";
  
    static generate(): Brothel {
      let brothel = this._data;
  
      let result = new Brothel(
        `${
          brothel.name.first_word[Roller.roll(brothel.name.first_word.length) - 1]
        } ${
          brothel.name.second_word[
            Roller.roll(brothel.name.second_word.length) - 1
          ]
        }`,
        brothel.location[Roller.roll(brothel.location.length) - 1],
        brothel.entertainment[Roller.roll(brothel.entertainment.length) - 1],
        brothel.boss[Roller.roll(brothel.boss.length) - 1],
        brothel.food[Roller.roll(brothel.food.length) - 1],
        brothel.drink[Roller.roll(brothel.drink.length) - 1],
        brothel.reputation[Roller.roll(brothel.reputation.length) - 1],
        brothel.rumors[Roller.roll(brothel.rumors.length) - 1],
        brothel.room_furnishings[
          Roller.roll(brothel.room_furnishings.length) - 1
        ],
        brothel.features[Roller.roll(brothel.features.length) - 1]
      );
  
      return result;
    }
  
    private static readonly _data = {
      name: {
        first_word: [
          'Cozy',
          "Dancer's",
          'Golden',
          "Maiden's",
          'Lacy',
          "Lady's",
          'Lighted',
          "Lover's",
          "Night's",
          'Pink',
          'Porcelain',
          'Red',
          'Satin',
          'Shining',
          'Silky',
          'Silver',
          'Softest',
          'Sweetest',
          'Warmest',
          'Welcoming',
        ],
        second_word: [
          'Candle',
          'Cherry',
          'Curtain',
          'Doll',
          'Door',
          'Embrace',
          'Glove',
          'Heart',
          'House',
          'Lamp',
          'Kiss',
          'Peach',
          'Purse',
          'Room',
          'Slipper',
          'Shoe',
          'Skirt',
          'Stocking',
          'Veil',
          'Window',
        ],
      },
      location: [
        'In the slums',
        'In a shantytown',
        'In a well-to-do residential neighborhood',
        'In the docks district',
        'In the riverfront district',
        'In the barracks district',
        'In an alley off a foreign bazaar',
        'In an alley off the main market square',
        'In the shadow of a temple',
        'Above a boisterous tavern',
        'Behind a tavern teeming with criminals',
        'Adjacent to a tavern full of gamblers',
        'Underground',
        `${
          ['Outside the walls of the city', 'On the outskirts of a town'][
            Roller.roll(2) - 1
          ]
        }`,
        "At the base of a wizards' tower",
        "In cave that had been a monster's lair",
        'Above an inn on a busy trading route',
        'In the basement of a tavern',
        'On a street with many other brothels',
        `In a house in a ${['park', 'garden', 'forest'][Roller.roll(3) - 1]}`,
      ],
      entertainment: [
        'Really weird stuff, for those with the most interesting fetishes.',
        'Illegal stuff. If this is found out, the place would be burnt down, and the owners hung. It is clearly kept in great secret.',
        'Performances involving food.',
        'An outlet to live out violent fantasies.',
        'Exotic races.',
        "The most beautiful women and men. Not just a claim, it's the gods' honest truth.",
        'An all-inclusive lump-sum deal—all the harlots, food, and drink you can handle!',
        'The sale of mind-altering drugs.',
        'Stuff with exotic/magical ingredients, potions, etc.',
        'Magical delights.',
      ],
      boss: [
        'A collective of the inmates themselves.',
        'A mean old madam.',
        'A large madam with a no-nonsense attitude.',
        'A warm motherly figure.',
        'A surly brute.',
        'A tyrannical and cruel fellow.',
        'A sultry seductress.',
        'A charming witch.',
      ],
      food: [
        'Simple snacks.',
        'Banquets.',
        'Peasant food.',
        'Food hand-fed to you by a harlot.',
        'Exotic delights.',
        'Spicy treats.',
        'Simple food.',
        'Sweets and delicacies.',
        'Grubby, poorly made meals.',
        'All you can eat buffets.',
        'Simple stew and bread.',
        'Nothing; it satisfies other appetites.',
      ],
      drink: [
        'Ales.',
        'Cocktails.',
        'Grog, and nothing but grog.',
        'Cheap wines.',
        'Mead.',
        'The finest wines and champagnes.',
        'Lagers.',
        'Nothing; inebriation is not tolerated.',
      ],
      reputation: [
        'The girls are underpaid and poorly treated.',
        "Nothing really; it's a neighborhood brothel.",
        `A prominent ${['noble', 'merchant'][Roller.roll(2) - 1]} is a regular.`,
        'The goddess of love and fertility blessed this place and all her followers must visit.',
        'The usual stuff; a new girl is making a stir.',
        'Once a month it offers discounted services.',
        'It is secretly the home to a dark cult.',
        'All the inmates there are related.',
        'Nothing much, a popular girl is with child.',
        `You can pay for services with things other than coin like ${
          [
            'contract work',
            'criminal favors',
            'goods',
            'religious services',
            'secrets',
            'stock',
          ][Roller.roll(6) - 1]
        }`,
      ],
      rumors: [
        'A nobleman got one of the girls with child but refuses to acknowledge her or the baby.',
        'Someone slaughtered half of the workers and clients in the night.',
        'A client was stabbed with a letter opener.',
        `A ${
          ['man', 'woman'][Roller.roll(2) - 1]
        } claiming to be a paragon of the god of law visited the place.`,
        'A group of outraged townsfolk has started protesting outside of the brothel, disgusted with what it does.',
        'The oldest patron, who visited the brothel every day for the last fifty years has died. A day of mourning and celebration, along with a lavish funeral is being held for him.',
        'One of the inmates was strangled.',
        `One of the inmates has fallen madly in love with a client, but ${
          ['he', 'she'][Roller.roll(2) - 1]
        } is married.`,
        'A sinkhole has appeared in the basement. No one can see the bottom, and the boss worries it might grow and do more damage.',
        'Several clients have caught a disease.',
      ],
      room_furnishings: [
        'A four-poster bed with velvet curtains.',
        'A four-poster bed with lacy curtains.',
        'A soft, leather chaise lounge.',
        'A plush, pink chaise lounge.',
        'A large pile of pillows with soft tassels.',
        'A large pile of pillows with frilly edges.',
        'A table with fruit and wine set upon it.',
        'A table with perfumes and oils set upon it.',
        'A large mirror against one wall.',
        'A large mirror on the ceiling over the bed.',
      ],
      features: [
        'The scent of lavender.',
        'The scent of lilac perfume.',
        'The scent of ginger and cinnamon.',
        'The scent of roses.',
        'Scented candles.',
        'The soft red glow from a shaded lamp.',
        'A lamp burning dimly.',
        'A statue of two figures kissing.',
        'A statue of two figures coupling.',
        'A statue of a nude woman bathing.',
        'A painting of several nudes bathing.',
        'A painting of a pair of lovers.',
        'A curtain of beads.',
        'A silky curtain.',
        'A plush carpet beneath your feet.',
        'A thick fur carpet beneath your feet.',
        'The sound of distant, soft music.',
        'The sound of furniture creaking nearby.',
        'A lengthy, shrill scream.',
        'A long moan.',
      ],
    };
  }