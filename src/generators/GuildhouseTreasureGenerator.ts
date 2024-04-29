import { Roller } from '../utils/Roller';

export class GuildhouseTreasureGenerator {
  getMinorTreasure(quantity: number = 1): string[] {
    let result: string[] = [];    
    for (let index = 0; index < quantity; index++) {
        let item = this._getTreasure(data.minor_treasure.items);
      result.push(item);
    }

    return result;
  }

  getMediumTreasure(quantity: number = 1): string[] {
    let result: string[] = [];
    for (let index = 0; index < quantity; index++) {
        let item = this._getTreasure(data.medium_treasure.items);
      result.push(item);
    }

    return result;
  }

  getMajorTreasure(quantity: number = 1): string[] {
    let result: string[] = [];    
    for (let index = 0; index < quantity; index++) {
      let item = this._getTreasure(data.major_treasure.items);
      result.push(item);
    }

    return result;
  }

  private _getTreasure(data: string[]): string {
    let items = data;
    let count = items.length;
    let item = items[Roller.roll(count) - 1];
    return item;
  }
}

const data = {
  minor_treasure: {
    max_value_gp: 50,
    items: [
      'A small bone statue of a pair of hunters on horseback (50 gp, unique)',
      'Green velvet bed linens (45 gp)',
      'A silver holy symbol (25 gp)',
      'A leather belt made of wyvern skin (30 gp)',
      'A silk half-mask covered in red and gold sequins (24 gp)',
      '50 square yards of cotton (50 gp)',
      'An oak and granite end table (15 gp)',
      'A chestnut serving platter with a swan burned into it (10 gp, unique)',
      'An ivory hair comb (20 gp)',
      'Brass and silver candelabra (10 gp)',
      'Green velvet curtains (50 gp)',
      'Exotic riding saddle embroidered with an image of a hydra (40 gp, unique)',
      'A blue satin shirt (20 gp)',
      'Embroidered black leather boots for a Small creature (18 gp)',
      'An unlabeled potion (50 gp)',
      'A stylized silverware set, slightly tarnished (25 gp)',
      '1d2 scrolls from the 1st-level arcane spell list',
      '1d2 scrolls from the 1st-level divine spell list',
      "A beautiful pearl-handled dagger. Inscribed on the blade is 'Love may conquer all, but carry the dagger when you go out anyway.' (35 gp, unique)",
      '50 gp worth of supplies for scribing scrolls',
    ],
  },
  medium_treasure: {
    max_value_gp: 400,
    items: [
      'An oil painting of a wizard battling a hydra (220 gp, unique)',
      'An eight-inch tall crystal statue of a fertility goddess (75 gp, unique)',
      "A wool wimple (woman's head covering) edged with rubies and emeralds (300 gp, unique)",
      'A mink fur tabard (250 gp)',
      'Mithril braided ring (320 gp)',
      'Polished oak and maple end table (100 gp)',
      'Mithril braided necklace (400 gp)',
      "A maple urn painted with religious symbols (100 gp, unique if it still contains someone's ashes)",
      'Gold locket with no pictures inside (90 gp)',
      'Masterwork flute (100 gp)',
      'A one-foot tall teak and glass display case holding eight carved wooden buggies of exquisite craftsmanship (80 gp for the case, 40 gp per carving, unique)',
      'Ceramic vase (60 gp)',
      'Mahogany and ivory chess board (no pieces, 100 gp)',
      '1d2 scrolls from the 3rd-level divine spell list',
      '1d2 scrolls from the 3rd-level arcane spell list',
      'An unlabeled potion (300 gp)',
      'Masterwork greatsword',
      'Masterwork breastplate',
      'Elixir of hiding',
      'Coins (2d20 x 10 gp; average is 210 gp)',
    ],
  },
  major_treasure: {
    max_value_gp: 1000,
    items: [
      'Spyglass (1,000 gp)',
      'Cloth of gold eye patch studded with diamonds in the shape of an eye (500 gp)',
      'Silver oil lamp and perfumed lamp oil (450 gp)',
      'Unlabeled potion (750 gp)',
      '1d3 scrolls from the 4th-level arcane spell list',
      '1d3 scrolls from the 4th-level divine spell list',
      'An oil painting on a basilisk hide canvas. The painting depicts a floating castle under siege by demons (500 gp, unique)',
      'Green leather and chestnut library chair (640 gp)',
      'Ruby pendant on a gold chain (725 gp)',
      'Three-foot-tall obsidian statue of a female centaur (1,000 gp, unique)',
      "+1 warhammer. Carved into the haft in Dwarven is the phrase: 'Handle is a little warped. Tends to swing left.' (unique)",
      'Ring of sustenance (unique)',
      '2 fifty-square yard rolls of satin cloth (300 gp each)',
      'Set of six gilded ceramic teacups on silver saucers (75 gp per cup; 35 gp per saucer)',
      'Polished teak armoire (700 gp, unique)',
      'Glass box bound with gold and platinum (800 gp)',
      'A sweet-smelling perfume made from a rare plant found only on another plane (600 gp)',
      'Stack of 5 rare books on the ecology and mating habits of hydras (500 gp, unique)',
      'Amulet of natural armor +1 (unique)',
      'Coins (2d10 x 5 pp + 2d20 x 10 gp + 3d20 x 10 sp; average is 55 pp, 210 gp, and 310 sp)',
    ],
  },
};
