import { Roller } from '../utils/Roller';

export class CastleGenerator {
  static generate(): string {
    let result =
      `The castle sits ${this._data.location[
        Roller.roll(this._data.location.length) - 1
      ].toLowerCase()}. ` +
      `It was built ${this._data.built_when[
        Roller.roll(this._data.built_when.length) - 1
      ].toLowerCase()} by ${this._data.built_by[
        Roller.roll(this._data.built_by.length) - 1
      ].toLowerCase()}. ` +
      `Currently, the castle's condition is ${this._data.current_condition[
        Roller.roll(this._data.current_condition.length) - 1
      ].toLowerCase()}. ` +
      `Presently, the castle is occupied by ${this._data.current_occupant[
        Roller.roll(this._data.current_occupant.length) - 1
      ].toLowerCase()}. ` +
      `The position or territory is worth defending because ${this._data.territory_defense_reason[
        Roller.roll(this._data.territory_defense_reason.length) - 1
      ].toLowerCase()}. ` +
      `The castle's outer defenses include ${this._data.outer_defenses[
        Roller.roll(this._data.outer_defenses.length) - 1
      ].toLowerCase()}. ` +
      `The inner keep's defenses include ${this._data.inner_defenses[
        Roller.roll(this._data.inner_defenses.length) - 1
      ].toLowerCase()}. ` +
      `The castle can be held effectively by as few as ${this._data.minimum_defenders[
        Roller.roll(this._data.minimum_defenders.length) - 1
      ].toLowerCase()}. ` +
      `In addition to its garrison, the castle can hold foodstores to withstand a three-month siege for up to ${this._data.foodstores_capacity[
        Roller.roll(this._data.foodstores_capacity.length) - 1
      ].toLowerCase()}. ` +
      `The castle is known for ${this._data.known_for[
        Roller.roll(this._data.known_for.length) - 1
      ].toLowerCase()}. ` +
      `The castle is rumored to hide ${this._data.rumored_to_hide[
        Roller.roll(this._data.rumored_to_hide.length) - 1
      ].toLowerCase()}. ` +
      `The chamber you are currently in is ${this._data.rooms[
        Roller.roll(this._data.rooms.length) - 1
      ].toLowerCase()}. ` +
      `You notice ${this._data.room_feature_noticed[
        Roller.roll(this._data.room_feature_noticed.length) - 1
      ].toLowerCase()}. ` +
      `${
        this._data.encounters[Roller.roll(this._data.encounters.length) - 1]
      }. `;

    return result;
  }

  private static readonly _data = {
    location: [
      'Atop a mountain',
      'On a hill overlooking a wide plain',
      'At the fork of a river',
      'On a narrow, rocky peninsula',
      'Above a seaside cliff',
      'On a hill overlooking a river valley',
      'On a hill rising out of a swamp',
      'On a hill overlooking a forest',
      `Astride a ${['desert oasis', 'natural spring'][Roller.roll(2) - 1]}`,
      'On a ridge overlooking a frozen plain',
    ],
    built_by: [
      `A wise ${['king', 'queen'][Roller.roll(2) - 1]}`,
      `An ambitious ${['lord', 'lady'][Roller.roll(2) - 1]}`,
      'An evil tyrant',
      `A mighty ${['warrior', 'warlord'][Roller.roll(2) - 1]}`,
      'A retired adventurer',
      'A celebrated war hero',
      `An unscrupulous ${['king', 'queen'][Roller.roll(2) - 1]}`,
      `A vain ${['lord', 'lady'][Roller.roll(2) - 1]}`,
      `A powerful ${['witch', 'wizard'][Roller.roll(2) - 1]}`,
      'A beloved sovereign',
      'A prosperous merchant',
      'A member of an ancient noble house',
    ],
    built_when: [
      'In a past age',
      'Hundreds of years ago',
      'A few decades ago',
      'Within the past decade',
    ],
    current_condition: [
      'Perfect; upkeep has been fastidious',
      'Good; it been well-maintained',
      'Decent; there are only a few cracks in the walls, but the place can withstand a siege',
      'Fair; the castle has seen better days',
      'Poor; the walls and towers are in dire need of repairs',
      'Decrepit; the place is practically a ruin',
    ],
    current_occupant: [
      'A member of the royal family',
      `An ambitious ${['lord', 'lady'][Roller.roll(2) - 1]}`,
      'An evil tyrant',
      `An elderly ${['lord', 'lady'][Roller.roll(2) - 1]}`,
      `A brash, young ${['lord', 'lady'][Roller.roll(2) - 1]}`,
      'A mercenary company',
      `A ${['fearsome warlord', 'retired sellsword'][Roller.roll(2) - 1]}`,
      'A wealthy merchant',
      `A retired ${['pirate', 'thief'][Roller.roll(2) - 1]}`,
      'A former adventurer',
      'An absentee noble lord',
      'The crown, but the king or queen rarely stays here',
    ],
    territory_defense_reason: [
      'Grains grow well on the surrounding land',
      `The nearby mines are rich in ${['ore', 'gems'][Roller.roll(2) - 1]}`,
      'The surrounding land is excellent for grazing livestock',
      'Fruit trees grow on the surrounding land',
      'The nearby pass is the easiest way to cross the mountains',
      'The nearby harbor is important for trade',
      'The nearby river is important for trade',
      'The nearby source of freshwater is precious is in this region',
      'The wild lands beyond are full of threats',
      'The surrounding lands are part of a long-standing territorial dispute',
      'The surrounding land is held sacred',
      `The nearby lands are home to a rare ${
        ['herb', 'tree', 'creature'][Roller.roll(3) - 1]
      } that has magical uses`,
    ],
    outer_defenses: [
      'Very high stone walls',
      'Incredibly thick stone walls',
      'A series of curtain walls and gatehouses',
      'A treacherous climb to reach the castle walls',
      'A moat filled with putrescent water',
      'A moat filled with thick, boot-sucking mud',
      'A moat filled with sharp spikes',
      'A moat that is home to one or more dangerous aquatic beasts',
      'An immense barbican',
      'A narrow footbridge to reach the postern',
    ],
    inner_defenses: [
      'Hundreds of arrow slits',
      "One of the world's largest dual-portcullis gates",
      'A winding climb to reach the entrance',
      'Several covered parapets with murder holes under which intruders must pass',
      'A wide courtyard surrounded by flanking towers in the curtain wall',
      'An unusual or hidden means of entry',
    ],
    minimum_defenders: [
      '5 soldiers and 20 archers',
      '20 soldiers, 5 knights, and 20 archers',
      '50 soldiers, 10 knights, and 40 archers',
      '20 knights, 20 archers, and 5 warmages',
      '100 soldiers, 50 archers, and 5 warmages',
      '100 soldiers, 20 knights, and 50 archers',
      '200 soldiers, 50 knights, and 100 archers',
      '200 soldiers, 100 knights, and 200 archers',
    ],
    foodstores_capacity: [
      '50 people',
      '100 people',
      '200 people',
      '500 people',
      '1,000 people',
      '2,000 people',
    ],
    known_for: [
      'Withstanding a grueling, lengthy siege',
      'Suffering an immense conflagration',
      'Changing hands several times over the course of the same war',
      'Bringing ill-fortune to those who hold it',
      'Being haunted by a former occupant',
      'Never falling in a siege',
      'Welcoming travelers seeking refuge',
      'Turning away travelers seeking refuge',
      'Its unusual architectural style',
      'Its beautiful, historic tapestries',
      'Its breathtakingly beautiful chapel',
      'The quality of its meals',
    ],
    rumored_to_hide: [
      'An underground tunnel that can serve as a last-gasp escape route',
      'The weapon of a long-dead hero',
      'The preserved head of an ancient villain',
      'A long-lost religious artifact',
      `A missing ${['lord', 'lady'][Roller.roll(2) - 1]}`,
      'A book of vile curses',
      'A book of dark and ancient secrets',
      'A cursed treasure hoard',
      'The last bottle of famous vintage of wine',
      'A lost work of a celebrated artist',
      'The crypt of an ancient sovereign',
      'An unhatched dragon egg',
    ],
    rooms: [
      `An ${['antechamber', 'waiting room'][Roller.roll(2) - 1]}`,
      'An armory',
      `An ${['aviary', 'dovecote', 'owlery', 'rookery'][Roller.roll(4) - 1]}`,
      'A banquet hall',
      'The barracks',
      `A ${['bath', 'privy'][Roller.roll(2) - 1]}`,
      `A ${['simple', 'comfortable', 'luxurious'][Roller.roll(3) - 1]} bedroom`,
      `A ${['chapel', 'shrine'][Roller.roll(2) - 1]}`,
      'A crypt',
      `An ${['intimate', 'informal'][Roller.roll(2) - 1]} dining room`,
      'A dressing room',
      `A gallery of ${
        [
          'armor and weaponry',
          'paintings',
          'sculptures',
          'tapestries',
          'hunting trophies',
          'trophies of war',
        ][Roller.roll(6) - 1]
      }`,
      'A guardroom',
      `A ${['kennel', 'menagerie', 'stable'][Roller.roll(3) - 1]}`,
      'The kitchen',
      `A ${['library', 'study'][Roller.roll(2) - 1]}`,
      'A pantry',
      `A ${
        ['store room for mundane supplies', 'cistern for drinking water'][
          Roller.roll(2) - 1
        ]
      }`,
      'The throne room',
      'A treasure vault (likely hidden and/or protected by traps)',
    ],
    room_feature_noticed: [
      'An armchair flanked by two sconces',
      'A large armoire or buffet cabinet',
      'A bench with a cusion',
      'A brazier',
      'A candelabrum on a large table',
      'A plain chair beside a window',
      'A heavy wooden chest',
      'A chest of drawers with a blanket on top',
      'A desk with some quills and parchment',
      'A fireplace with a mantle',
      'A fireplace with a small pile of wood',
      'A fresco with a padded chair beneath it',
      'Portrait of a noble',
      'A painting of a landscape or seascape',
      'A bust on a pedestal',
      'A shelf containing books or knick knacks',
      'A low table in front of a small sofa',
      'A large table beneath a chandelier',
      'An ornate tapestry',
      'A small wall basin and font',
    ],
    encounters: [
      `While under siege, you encounter ${[
        'A squad of archers hustling up a stair',
        'A patrol of guards brandishing weapons',
        'A guard shouting instructions',
        'A knight hurrying to the stables',
        'A servant cowering in a hiding place',
        'A curious child peaking out a window',
        'A servant kneeling in prayer',
        'A noble hastily penning a letter',
        'A squire aiding a knight with his armor',
        'A healer checking over his potions',
      ][Roller.roll(10) - 1].toLowerCase()}`,
      `You encounter ${[
        'The huntsman cleaning a recent kill',
        'The kennelmaster leading a leashed dog',
        'The horsemaster instructing a young rider',
        'The armorer scolding an apprentice',
        "A maid fussing over her lady's dress",
        'The tutor or sage lost in a book',
        'The chaplain whispering with a maid',
        'A maid polishing an ornamental shield',
        'A servant carrying a tray of food',
        'Several archers practicing in the yard',
      ][Roller.roll(10) - 1].toLowerCase()}`,
    ],
  };
}

