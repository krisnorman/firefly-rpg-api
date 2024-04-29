import { Roller } from '../utils/Roller';

export class ArenaGamesGenerator {
  static Description: string = 'Random Arena Games: Spectacles of Combat and Blood';

  static generateArena(): string {
    let arena = this._data.arena;

    let result = `The arena is ${arena.structure[Roller.roll(arena.structure.length) - 1].toLowerCase()}. ` +
      `The games are being held ${arena.reason_for_games[Roller.roll(arena.reason_for_games.length) - 1].toLowerCase()}. ` +
      `The games are being hosted by ${arena.hosted_by[Roller.roll(arena.hosted_by.length) - 1].toLowerCase()}. ` +
      `The main event is ${arena.main_event[Roller.roll(arena.main_event.length) - 1].toLowerCase()}. ` +
      `The day's champion wins ${arena.prize[Roller.roll(arena.prize.length) - 1].toLowerCase()}. ` +
      `The crowd is made up of mostly ${arena.the_crowd[Roller.roll(arena.the_crowd.length) - 1].toLowerCase()}. ` +
      `The crowd's attitude is ${arena.the_crowds_attitude[Roller.roll(arena.the_crowds_attitude.length) - 1].toLowerCase()}. ` +
      `The greatest champion ever to fight in this arena was ${arena.best_ever[Roller.roll(arena.best_ever.length) - 1].toLowerCase()}. `;

    return result;
  }

  static generateGladiator(): string {
    let gladiators = this._data.gladiators;

    let pronoun = ['He', 'She'][Roller.roll(2) - 1];

    let result = `The gladiator is ${gladiators.background[Roller.roll(gladiators.background.length) - 1].toLowerCase()}. ` +
      `${pronoun} is clad in ${gladiators.armor[Roller.roll(gladiators.armor.length) - 1].toLowerCase()}. ` +
      `${pronoun} is wielding ${gladiators.weapon[Roller.roll(gladiators.weapon.length) - 1].toLowerCase()}. ` +
      `${pronoun} fights with ${gladiators.tactics[Roller.roll(gladiators.tactics.length) - 1].toLowerCase()}. ` +
      `${pronoun} is known for ${gladiators.known_for[Roller.roll(gladiators.known_for.length) - 1].toLowerCase()}. ` +
      `${pronoun} fights for ${gladiators.fights_for[Roller.roll(gladiators.fights_for.length) - 1].toLowerCase()}. ` +
      `${pronoun} has endured the tragedy of ${gladiators.personal_tragedy[Roller.roll(gladiators.personal_tragedy.length) - 1].toLowerCase()}. ` +
      `${pronoun} has ${gladiators.facial_feature[Roller.roll(gladiators.facial_feature.length) - 1].toLowerCase()}. ` +
      `On the gladiator's body is ${gladiators.body_feature[Roller.roll(gladiators.body_feature.length) - 1].toLowerCase()}.`;

    return result;
  }

  private static readonly _data = {
    arena: {
      structure: [
        'An ancient stone structure used forcenturies',
        'An old stone structure used for generations',
        'A wondrous construction with grand stands, trap doors, and elevators',
        'A sturdy wooden structure, recently built',
        'A crisp stone structure, recently built',
        'A set of rickety wooden stands around a dirt ring',
        'A circle of rope surrounded by spectators and a few cages',
        'An underground pit with spectators leaning over a railing above',
      ],
      reason_for_games: [
        "In honor of the sovereign's birthday",
        'In honor of a historical anniversary',
        'In honor of a recent military victory',
        'To turn a profit off admission sales',
        'To turn a profit off a gambling book',
        'To dispose of prisoners',
        'Strictly to entertain the masses',
        `To determine a champion for a ${['dangerous quest', 'traditional ceremony'][Roller.roll(2) - 1]}`,
      ],
      hosted_by: [
        'A tyrannical sovereign',
        'A benevolent sovereign',
        'A close ally of the sovereign',
        `A wealthy ${['merchant', 'lord'][Roller.roll(2) - 1]}`,
        'A council of wealthy merchants',
        `A mysterious ${['high priest', 'mage'][Roller.roll(2) - 1]}`,
      ],
      main_event: [
        `A ${['battle royale', 'grand melee'][Roller.roll(2) - 1]}`,
        'A reenactment of a historical battle',
        'A duel between two arena champions',
        'A duel between a champion and a severe underdog',
        'Feeding prisoners to beasts',
        `A battle of man versus ${[
          'bears',
          'chimeras',
          'dragons',
          'giant spiders',
          'lions',
          'owlbears',
          'tigers',
          'wolves',
        ][Roller.roll(8) - 1]}`,
        `A ${['chariot', 'foot'][Roller.roll(2) - 1]} race`,
        'Feats of strength',
      ],
      prize: [
        'A heavy purse of silver',
        'A sizable purse of gold',
        'An expensive and ornate weapon',
        'An expensive and ornate suit of armor',
        'A floral crown and a fine silver chain',
        'A floral crown and bejeweled gold belt',
        'A fine silk cloak and bejeweled silver chain',
        'A petition of the sovereign',
        'A position of honor in the army and a purse of silver',
        "A position of honor in the sovereign's guard",
        'A week of pampering and pleasure and a purse of silver',
        "A night with one of the nobles' wives and a purse of gold",
      ],
      the_crowd: [
        'Merchants, nobles, and the well-to-do',
        'Soldiers and camp-followers',
        'Local artisans and shopkeepers',
        'Local peasants and unskilled workers',
        'Foreigners and travelers',
        'Slave, servants, and laborers',
        'Sailors, pirates, and knaves',
        'People of all social strata',
      ],
      the_crowds_attitude: [
        'Rowdy and festive',
        'Eager and excited',
        'Relaxed and easy-going',
        'Hostile and tense',
        'Disappointed and angry',
        'Rowdy and rebellious',
      ],
      best_ever: [
        'A masterful swordsman, with a slow mind',
        'A masterful swordsman, with a quick wit',
        'A hulking brute, with a gentle soul',
        'A hulking brute, with a nasty edge',
        'The survivor of a terrible disaster',
        'The survivor of a famous shipwreck',
        'The survivor of a wartime massacre',
        'The bastard son of a noble house',
        `A conquered ${['prince', 'lord'][Roller.roll(2) - 1]} who was too proud to bend the knee`,
        'Horribly disfigured and scarred',
        'Half-giant, and completely insane',
        'Half-fiend, and insanely cruel',
      ],
    },
    gladiators: {
      background: [
        'A well-trained slave',
        'A poorly-trained slave',
        'A seasoned veteran of the arena',
        'A veteran of warfare',
        'A prisoner of war',
        'A political prisoner',
        'The son of a poor man',
        'A drunk',
        'A captured criminal',
        'A former pirate',
        'A de-frocked priest',
        'A favorite among the ladies',
      ],
      armor: [
        'Nothing',
        `${['leather scraps', 'exotic beast hides'][Roller.roll(2) - 1]}`,
        `A ${['leather baldric', 'jerkin'][Roller.roll(2) - 1]}`,
        `A ${['bronze', 'iron'][Roller.roll(2) - 1]} helm (and no more)`,
        'A breastplate and a helm',
        'Chainmail',
      ],
      weapon: [
        'Two shortswords',
        'A shortsword and shield',
        'A spear and shield',
        `${['A net and trident', 'An exotic bladeiron'][Roller.roll(2) - 1]}`,
        `A  ${['heavy flail', 'greataxe'][Roller.roll(2) - 1]}`,
        'A scimitar and whip',
      ],
      tactics: [
        'Hit-and-run tactics',
        'Making a direct assault',
        'Making a mad charge',
        'Fancy footwork',
        'Unpredictable lurches',
        'Masterful combat maneuvers',
        'Kicking and stomping',
        'Lots of taunts and jeers',
        'Lots of screaming and shouting',
        'Lots of head-butting',
      ],
      known_for: [
        'Dancing atop fallen foes',
        'Making rude gestures',
        'Insulting spectators',
        'Gifting a lady spectator with a flower',
        'Kneeling to pray after making a kill',
        'Never speaking a word',
      ],
      fights_for: [
        'The love of the sport',
        'The love of someone they cannot have',
        'Pure bloodlust',
        'A chance to deal out sadistic torment',
        'A chance at freedom',
        'A chance at vengeance',
        'A chance to escape from life imprisonment',
        'A chance to escape from execution',
        'A chance at redemption',
        'God and country',
        'Fortune and glory',
        'Strength and honor',
      ],
      personal_tragedy: [
        'A doomed love affair',
        'The death of a spouse',
        'The death of a child',
        'Being wrongfully accused of a crime',
        'Surviving as a desperate criminal',
        'Being taken as a prisoner of war',
      ],
      facial_feature: [
        `A ${['nose ring', 'garish earring'][Roller.roll(2) - 1]}`,
        `A ${['missing eye', 'grisly facial scar'][Roller.roll(2) - 1]}`,
        `A look of ${['panic', 'sadness'][Roller.roll(2) - 1]}`,
        `A ${['haughty', 'eager'][Roller.roll(2) - 1]} grin`,
        `${['Long, beautiful hair', 'An unruly beard'][Roller.roll(2) - 1]}`,
        `${['Wild sideburns', 'A long mustache'][Roller.roll(2) - 1]}`,
      ],
      body_feature: [
        `A maritime tattoo of ${['a fish', 'a ship', 'a kraken', 'a mermaid', 'an otopus', 'a skull'][Roller.roll(6) - 1]}`,
        `A slave tattoo of a ${['date', 'place', 'slave name', "master's name", 'job', 'number'][Roller.roll(6) - 1]}`,
        `A beast tattoo of ${['a bear', 'a boar', 'a dragon', 'an eagle', 'a lion', 'a wolf'][Roller.roll(6) - 1]}`,
        `A ${['brand of a slave', 'brand of a soldier', 'brand of a sailor'][Roller.roll(3) - 1]}`,
        `A ${['festering wound', 'frightening scar'][Roller.roll(2) - 1]}`,
        `An ${['obscene amount of oil', 'intimidating amount of hair'][Roller.roll(2) - 1]}`,
      ],
    },
  };
}
