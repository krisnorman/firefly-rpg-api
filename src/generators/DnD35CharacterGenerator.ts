export class DnD35CharacterGenerator {

    public static get Feats(): Feats { return Feats; }
}

export class Data {
  // define an empty value
  static NONE = 0;

  // define current version
  static current_version = 4.6;

  //notes_win;
  game_notes = '';

  language_points: number = 0;
  max_language_points: number = 0;
  language = new Array(20);
  language_names: string[] = [
    'Abyssal',
    'Aquan',
    'Auran',
    'Celestial',
    'Common',
    'Draconic',
    'Druidic',
    'Dwarven',
    'Elven',
    'Gnome',
    'Goblin',
    'Giant',
    'Gnoll',
    'Halfling',
    'Ignan',
    'Infernal',
    'Orc',
    'Sylvan',
    'Terran',
    'Undercommon',
  ];

  skill_names: string[] = new Array<string>(44);
  populateSkillNames() {
    this.skill_names[0] = 'APPRAISE';
    this.skill_names[1] = 'BALANCE';
    this.skill_names[2] = 'BLUFF';
    this.skill_names[3] = 'CLIMB';
    this.skill_names[4] = 'CONCENTRATION';
    this.skill_names[5] = 'CRAFT';
    this.skill_names[6] = 'DECIPHER_SCRIPT';
    this.skill_names[7] = 'DIPLOMACY';
    this.skill_names[8] = 'DISABLE_DEVICE';
    this.skill_names[9] = 'DISGUISE';
    this.skill_names[10] = 'ESCAPE_ARTIST';
    this.skill_names[11] = 'FORGERY';
    this.skill_names[12] = 'GATHER_INFORMATION';
    this.skill_names[13] = 'HANDLE_ANIMAL';
    this.skill_names[14] = 'HEAL';
    this.skill_names[15] = 'HIDE';
    this.skill_names[16] = 'INTIMIDATE';
    this.skill_names[17] = 'JUMP';
    this.skill_names[18] = 'KNOWLEDGE_ARCANA';
    this.skill_names[19] = 'KNOWLEDGE_ARCHITECTURE';
    this.skill_names[20] = 'KNOWLEDGE_DUNGEONEERING';
    this.skill_names[21] = 'KNOWLEDGE_GEOGRAPHY';
    this.skill_names[22] = 'KNOWLEDGE_HISTORY';
    this.skill_names[23] = 'KNOWLEDGE_LOCAL';
    this.skill_names[24] = 'KNOWLEGE_NATURE';
    this.skill_names[25] = 'KNOWLEGE_NOBILTY';
    this.skill_names[26] = 'KNOWLEDGE_RELIGION';
    this.skill_names[27] = 'KNOWLEDGE_PLANES';
    this.skill_names[28] = 'LISTEN';
    this.skill_names[29] = 'MOVE_SILENTLY';
    this.skill_names[30] = 'OPEN_LOCK';
    this.skill_names[31] = 'PERFORM';
    this.skill_names[32] = 'PROFESSION';
    this.skill_names[33] = 'RIDE';
    this.skill_names[34] = 'SEARCH';
    this.skill_names[35] = 'SENSE_MOTIVE';
    this.skill_names[36] = 'SLEIGHT_OF_HAND';
    this.skill_names[37] = 'SPEAK_LANGUAGE';
    this.skill_names[38] = 'SPELLCRAFT';
    this.skill_names[39] = 'SPOT';
    this.skill_names[40] = 'SURVIVAL';
    this.skill_names[41] = 'SWIM';
    this.skill_names[42] = 'TUMBLE';
    this.skill_names[43] = 'USE_MAGIC_DEVICE';
    this.skill_names[44] = 'USE_ROPE';
  }
}

export class Races {
  // define race values
  static HUMAN = 0;
  static ELF = 1;
  static DWARF = 2;
  static HALFLING = 3;
  static HALF_ELF = 4;
  static HALF_ORC = 5;
  static GNOME = 6;
}

export class Classes {
  // define class values
  static BARBARIAN = 0;
  static BARD = 1;
  static CLERIC = 2;
  static DRUID = 3;
  static FIGHTER = 4;
  static MONK = 5;
  static PALADIN = 6;
  static RANGER = 7;
  static ROGUE = 8;
  static SORCERER = 9;
  static WIZARD = 10;
}

export class Alignments {
  static LAWFUL_GOOD = 0;
  static NEUTRAL_GOOD = 1;
  static CHAOTIC_GOOD = 2;
  static LAWFUL_NEUTRAL = 3;
  static TRUE_NEUTRAL = 4;
  static CHAOTIC_NEUTRAL = 5;
  static LAWFUL_EVIL = 6;
  static NEUTRAL_EVIL = 7;
  static CHAOTIC_EVIL = 8;
}

export class Dieties {
  // gods and religions
  static BACCOB = 1;
  static CORELLON_LARENTHIAN = 2;
  static EHLONNA = 3;
  static ERYTNUL = 4;
  static FARLANGHN = 5;
  static GARL_GLITTERGOLD = 6;
  static GRUUMSH = 7;
  static HEIRONEOUS = 8;
  static HEXTOR = 9;
  static KORD = 10;
  static MORADIN = 11;
  static NERULL = 12;
  static OBAD_HAI = 13; // Obad-Hai
  static OLIDAMMARA = 14;
  static PELOR = 15;
  static ST_CUTHBERT = 16; // St. Cuthbert
  static VECNA = 17;
  static WEE_JAS = 18;
  static YONDALLA = 19;
  static OTHER_GOD = 20;
}

export class Skills {
  // define skills
  static APPRAISE = 0;
  static BALANCE = 1;
  static BLUFF = 2;
  static CLIMB = 3;
  static CONCENTRATION = 4;
  static CRAFT = 5;
  static DECIPHER_SCRIPT = 6;
  static DIPLOMACY = 7;
  static DISABLE_DEVICE = 8;
  static DISGUISE = 9;
  static ESCAPE_ARTIST = 10;
  static FORGERY = 11;
  static GATHER_INFORMATION = 12;
  static HANDLE_ANIMAL = 13;
  static HEAL = 14;
  static HIDE_SKILL = 15;
  static INTIMIDATE = 16;
  static JUMP = 17;
  static KNOWLEDGE_ARCANA = 18;
  static KNOWLEDGE_ARCHITECTURE = 19;
  static KNOWLEDGE_DUNGEONEERING = 20;
  static KNOWLEDGE_GEOGRAPHY = 21;
  static KNOWLEDGE_HISTORY = 22;
  static KNOWLEDGE_LOCAL = 23;
  static KNOWLEDGE_NATURE = 24;
  static KNOWLEDGE_NOBILITY = 25;
  static KNOWLEDGE_RELIGION = 26;
  static KNOWLEDGE_PLANES = 27;
  static LISTEN = 28;
  static MOVE_SILENTLY = 29;
  static OPEN_LOCK = 30;
  static PERFORM = 31;
  static PROFESSION = 32;
  static RIDE = 33;
  static SEARCH = 34;
  static SENSE_MOTIVE = 35;
  static SLEIGHT_OF_HAND = 36;
  static SPEAK_LANGUAGE = 37;
  static SPELLCRAFT = 38;
  static SPOT = 39;
  static SURVIVAL = 40;
  static SWIM = 41;
  static TUMBLE = 42;
  static USE_MAGIC_DEVICE = 43;
  static USE_ROPE = 44;
}

export class Languages {
  // define languages
  static ABYSSAL = 0;
  static AQUAN = 1;
  static AURAN = 2;
  static CELESTIAL = 3;
  static COMMON = 4;
  static DRACONIC = 5;
  static DRUIDIC = 6;
  static DWARVEN = 7;
  static ELVEN = 8;
  static GNOME_LANG = 9;
  static GOBLIN = 10;
  static GIANT = 11;
  static GNOLL = 12;
  static HALFLING_LANG = 13;
  static IGNAN = 14;
  static INFERNAL = 15;
  static ORC = 16;
  static SYLVAN = 17;
  static TERRAN = 18;
  static UNDERCOMMON = 19;
}

export class Feats {
  // define feat values
  static ACROBATIC = 0;
  static AGILE = 1;
  static ALERTNESS = 2;
  static ANIMAL_AFFINITY = 3;
  static ARMOR_PROFICIENCY_LIGHT = 4;
  static ARMOR_PROFICIENCY_MEDIUM = 5;
  static ARMOR_PROFICIENCY_HEAVY = 6;
  static ATHLETIC = 7;
  static AUGMENT_SUMMONING = 8;
  static BLIND_FIGHT = 9;
  static BREW_POTION = 10;
  static CLEAVE = 11;
  static COMBAT_CASTING = 12;
  static COMBAT_EXPERTISE = 13;
  static COMBAT_REFLEXES = 14;
  static CRAFT_MAGIC_ARMS_AND_ARMOR = 15;
  static CRAFT_ROD = 16;
  static CRAFT_STAFF = 17;
  static CRAFT_WAND = 18;
  static CRAFT_WONDEROUS_ITEM = 19;
  static DECEITFUL = 20;
  static DEFLECT_ARROWS = 21;
  static DEFT_HANDS = 22;
  static DIEHARD = 23;
  static DILIGENT = 24;
  static DODGE = 25;
  static EMPOWER_SPELL = 26;
  static ENDURANCE = 27;
  static ENLARGE_SPELL = 28;
  static ESCHEW_MATERIALS = 29;
  static EXOTIC_WEAPON_PROFICIENCY = 30;
  static EXTEND_SPELL = 31;
  static EXTRA_TURNING = 32;
  static FAR_SHOT = 33;
  static FORGE_RING = 34;
  static GREAT_CLEAVE = 35;
  static GREAT_FORTITUDE = 36;
  static GREATER_SPELL_FOCUS = 37;
  static GREATER_SPELL_PENETRATION = 38;
  static GREATER_TWO_WEAPON_FIGHTING = 39;
  static GREATER_WEAPON_FOCUS = 40;
  static GREATER_WEAPON_SPECIALIZATION = 41;
  static HEIGHTEN_SPELL = 42;
  static IMPROVED_BULL_RUSH = 43;
  static IMPROVED_COUNTERSPELL = 44;
  static IMPROVED_CRITICAL = 45;
  static IMPROVED_DISARM = 46;
  static IMPROVED_FEINT = 47;
  static IMPROVED_GRAPPLE = 48;
  static IMPROVED_INITIATIVE = 49;
  static IMPROVED_OVERRUN = 50;
  static IMPROVED_PRECISE_SHOT = 51;
  static IMPROVED_SHIELD_BASH = 52;
  static IMPROVED_SUNDER = 53;
  static IMPROVED_TRIP = 54;
  static IMPROVED_TURNING = 55;
  static IMPROVED_TWO_WEAPON_FIGHTING = 56;
  static IMPROVED_UNARMED_STRIKE = 57;
  static INVESTIGATOR = 58;
  static IRON_WILL = 59;
  static LEADERSHIP = 60;
  static LIGHTNING_REFLEXES = 61;
  static MAGICAL_APTITUDE = 62;
  static MANYSHOT = 63;
  static MARTIAL_WEAPON_PROFICIENCY = 64;
  static MAXIMIZE_SPELL = 65;
  static MOBILITY = 66;
  static MOUNTED_ARCHERY = 67;
  static MOUNTED_COMBAT = 68;
  static NATURAL_SPELL = 69;
  static NEGOTIATOR = 70;
  static NIMBLE_FINGERS = 71;
  static PERSUASIVE = 72;
  static POINT_BLANK_SHOT = 73;
  static POWER_ATTACK = 74;
  static PRECISE_SHOT = 75;
  static QUICK_DRAW = 76;
  static QUICKEN_SPELL = 77;
  static RAPID_RELOAD = 78;
  static RAPID_SHOT = 79;
  static RIDE_BY_ATTACK = 80;
  static RUN = 81;
  static SCRIBE_SCROLL = 82;
  static SELF_SUFFICIENT = 83;
  static SHIELD_PROFICIENCY = 84;
  static SHOT_ON_THE_RUN = 85;
  static SILENT_SPELL = 86;
  static SIMPLE_WEAPON_PROFICIENCY = 87;
  static SKILL_FOCUS = 88;
  static SNATCH_ARROWS = 89;
  static SPELL_FOCUS = 90;
  static SPELL_MASTERY = 91;
  static SPELL_PENETRATION = 92;
  static SPIRITED_CHARGE = 93;
  static SPRING_ATTACK = 94;
  static STEALTHY = 95;
  static STILL_SPELL = 96;
  static STUNNING_FIST = 97;
  static TOUGHNESS = 98;
  static TOWER_SHIELD_PROFICIENCY = 99;
  static TRACK = 100;
  static TRAMPLE = 101;
  static TWO_WEAPON_DEFENCE = 102;
  static TWO_WEAPON_FIGHTING = 103;
  static WEAPON_FINESSE = 104;
  static WEAPON_FOCUS = 105;
  static WEAPON_SPECIALIZATION = 106;
  static WHIRLWIND_ATTACK = 107;
  static WIDEN_SPELL = 108;

  static getFeatInfo(id: number): string {
    // provide a list of descriptions for feats
    let feat_info = new Array(109);
    feat_info[0] = '+2 bonus to Jump and Tumble checks';
    feat_info[1] = '+2 bonus to Balance and Escape Artist checks';
    feat_info[2] = '+2 bonus to Listen and Spot checks';
    feat_info[3] = '+2 bonus to Handle Animal and Ride checks';
    feat_info[4] = 'Able to use Light armor';
    feat_info[5] = 'Able to use Medium armor';
    feat_info[6] = 'Able to use Heavy armor';
    feat_info[7] = '+2 bonus to Climb and Swim checks';
    feat_info[8] = 'Summoned creatures get +4 str and +4 con';
    feat_info[9] = 'Re-roll missed chance against concealed targets';
    feat_info[10] = 'Create potion of 3rd level spell or lower';
    feat_info[11] = 'Attack a second targe after falling a foe';
    feat_info[12] = '+4 bonus to Concentration check in combat';
    feat_info[13] = 'Trade attack bonus for greater armor class (max 5)';
    feat_info[14] = 'Gain attacks of opportunity against foes';
    feat_info[15] = 'Create magic weapons and armor';
    feat_info[16] = 'Create a special rod';
    feat_info[17] = 'Create a special staff';
    feat_info[18] = 'Create a special wand';
    feat_info[19] = 'Create a wonderous item';
    feat_info[20] = '+2 bonus to Disguise and Forgery checks';
    feat_info[21] = 'Deflect a ranged weapon';
    feat_info[22] = '+2 bonus to Sleight of Hand and Use Rope checks';
    feat_info[23] = 'Gain stable health when knocked unconscience';
    feat_info[24] = '+2 bonus to Appraise and Decipher Script checks';
    feat_info[25] = 'Gain +1 to armor class in comabt against one foe';
    feat_info[26] = 'Spell powers increase by 50%';
    feat_info[27] =
      'Gain +4 bonus to most Swim, Consitution and Fortitude checks';
    feat_info[28] = 'Double the range of a spell';
    feat_info[29] = 'Cast spells wihtout cheap materials';
    feat_info[30] = 'No penalty when using exotic weapons'; // not erotic weapons
    feat_info[31] = 'Double the length of time a spell lasts';
    feat_info[32] = 'You can turn undead four more times each day';
    feat_info[33] = 'Gain better abilities with long-ranged weapons';
    feat_info[34] = 'Create a special ring';
    feat_info[35] =
      'After fallign a foe, you get to attack again multiple times';
    feat_info[36] = '+2 bonus to all Fortitude checks';
    feat_info[37] = 'Make it harder to resist your spells';
    feat_info[38] = "+2 bonus when overcoming a creature's spell resistence";
    feat_info[39] =
      'Gain a third attack with your off-hand weapon (-10 penalty)';
    feat_info[40] = 'Gain +1 to all attack rolls with a given weapon';
    feat_info[41] = 'Gain +2 damage to all successful attack rolls';
    feat_info[42] = 'Increase the effective level of a spell';
    feat_info[43] = 'Perform bull rushes without prevoking attacks';
    feat_info[44] = 'When counter-spelling, use a spell of the same school';
    feat_info[45] = 'Increase the threat range of your weapon';
    feat_info[46] = 'Do not pervoke attacks when disarming an opponet';
    feat_info[47] = 'Use a movement turn to Buff a foe';
    feat_info[48] = 'Do not pervoke attacks when grappling';
    feat_info[49] = '+4 bonus to Initiative checks';
    feat_info[50] = 'Gain +4 bonus to Strength checks when over-running';
    feat_info[51] = 'Your ranged attacks  can hit foes who are behind cover';
    feat_info[52] =
      'When bashing with your shield, you can still use the shield defensively';
    feat_info[53] = 'When striking a held object, you do not provoke an attack';
    feat_info[54] = 'Do not pervoke an attack when trying to trip a foe';
    feat_info[55] = 'Turn undead as if you were one level higher';
    feat_info[56] = 'Gain a second attack with your off-hand (-5 penalty)';
    feat_info[57] = 'You are considered armed even when you have no weapon';
    feat_info[58] = '+2 bonus to Gather Information and Search checks';
    feat_info[59] = '+2 bonus to Will checks';
    feat_info[60] = 'You may attract loyal followers'; // *cough* cult *cough*
    feat_info[61] = '+2 bonus to Reflex checks';
    feat_info[62] = '+2 bonus to Spellcraft and Use Magic Device checks';
    feat_info[63] = 'Fire two arrows at one target within 30 feet (-4 penalty)';
    feat_info[64] = 'You can use Martial weapons';
    feat_info[65] = 'Spell features are all maximized';
    feat_info[66] = 'Gain +4 dodge ability when leaving a square in melee';
    feat_info[67] = 'Take only half penlties when shooting while mounted';
    feat_info[68] = 'You can try to stay mounted if you mount is hit';
    feat_info[69] = 'Cast spells while in transformed shape';
    feat_info[70] = '+2 bonus to Diplomacy and Sense Motive checks';
    feat_info[71] = '+2 bonus to Disable Device and Open Lock checks';
    feat_info[72] = '+2 bonus on Bluff and Intimidate checks';
    feat_info[73] =
      '+1 bonus to attack and damage rolls on foes within 30 feet';
    feat_info[74] = 'Trade attack points for damage points in melee';
    feat_info[75] =
      'Use ranged attacks against foes who are in melee without penalty';
    feat_info[76] = 'Draw a weapon as a free action';
    feat_info[77] = 'Cast a quickened spell as a free action';
    feat_info[78] = 'Reduce the time it takes to reload a weapon';
    feat_info[79] = 'Get an extra attack with ranged weapons';
    feat_info[80] = 'Attack while mounted without prevoking attacks';
    feat_info[81] = 'Run at 5 times your normal speed with light load';
    feat_info[82] = 'Create a scroll of a spell you know';
    feat_info[83] = '+2 bonus to Heal and Survival checks';
    feat_info[84] = 'You are able to use a shield properly';
    feat_info[85] = 'You can run and shoot at the same time';
    feat_info[86] = 'Cast spell without speaking';
    feat_info[87] = 'You are able to use simple weapons';
    feat_info[88] = '+3 bonus on selected skill';
    feat_info[89] = 'Catch ranged weapons';
    feat_info[90] = 'It is more difficult to resist your spells';
    feat_info[91] = 'Cast selected spells without a spell book';
    feat_info[92] =
      '+2 bonus to your caster level when overcoming a creatures spell resistance';
    feat_info[93] =
      'Deal double damage with a melee weapon when charging on a mount';
    feat_info[94] = 'Move both before and after a melee attack';
    feat_info[95] = '+2 bonus to Hide and Move Silently checks';
    feat_info[96] = 'Cast spells without moving your hands';
    feat_info[97] = 'Try to stun a foe with your fist';
    feat_info[98] = '+3 hit points';
    feat_info[99] = 'You are able to use a tower shield';
    feat_info[100] = 'You gain the ability to follow creatures';
    feat_info[101] = "You foe is unable to avoid your mount's run-down";
    feat_info[102] =
      'When fighting with two weapons, you gain +1 to armor class';
    feat_info[103] = 'You find it easier to fight with two weapons';
    feat_info[104] =
      'With light weapons, you may use your Dexterity for melee attacks';
    feat_info[105] = '+1 bonus to all attack rolls with a selected weapon';
    feat_info[106] = '+2 bonus to all damage rolls with a selected weapon';
    feat_info[107] =
      'You may make one attack against each foe within reach each round';
    feat_info[108] = 'Double the size of a spell';

    return feat_info[id];
  }

  static getFeatName(id: number): string {
    // array of feat names
    let feat_names = new Array(108);

    feat_names[0] = "ACROBATIC";
    feat_names[1] = "AGILE";
    feat_names[2] = "ALERTNESS";
    feat_names[3] = "ANIMAL_AFFINITY";
    feat_names[4] = "ARMOR_PROFICIENCY_LIGHT";
    feat_names[5] = "ARMOR_PROFICIENCY_MEDIUM";
    feat_names[6] = "ARMOR_PROFICIENCY_HEAVY";
    feat_names[7] = "ATHLETIC";
    feat_names[8] = "AUGMENT_SUMMONING";
    feat_names[9] = "BLIND_FIGHT";
    feat_names[10] = "BREW_POTION";
    feat_names[11] = "CLEAVE";
    feat_names[12] = "COMBAT_CASTING";
    feat_names[13] = "COMBAT_EXPERTISE";
    feat_names[14] = "COMBAT_REFLEXES";
    feat_names[15] = "CRAFT_MAGIC_ARMS_AND_ARMOR";
    feat_names[16] = "CRAFT_ROD";
    feat_names[17] = "CRAFT_STAFF";
    feat_names[18] = "CARFT_WAND";
    feat_names[19] = "CRAFT_WONDEROUS_ITEM";
    feat_names[20] = "DECEITFUL";
    feat_names[21] = "DEFLECT_ARROWS";
    feat_names[22] = "DEFT_HANDS";
    feat_names[23] = "DIEHARD";
    feat_names[24] = "DILIGENT";
    feat_names[25] = "DODGE";
    feat_names[26] = "EMPOWER_SPELL";
    feat_names[27] = "ENDURANCE";
    feat_names[28] = "ENLARGE_SPELL";
    feat_names[29] = "ESCHEW_MATERIALS";
    feat_names[30] = "EXOTIC_WEAPON_PROFICIENCY";
    feat_names[31] = "EXTEND_SPELL";
    feat_names[32] = "EXTRA_TURNING";
    feat_names[33] = "FAR_SHOT";
    feat_names[34] = "FORGE_RING";
    feat_names[35] = "GREAT_CLEAVE";
    feat_names[36] = "GREAT_FORTITUDE";
    feat_names[37] = "GREATER_SPELL_FOCUS";
    feat_names[38] = "GREATER_SPELL_PENETRATION";
    feat_names[39] = "GREATER_TWO_WEAPON_FIGHTING";
    feat_names[40] = "GREATER_WEAPON_FOCUS";
    feat_names[41] = "GREATER_WEAPON_SPECIALIZATION";
    feat_names[42] = "HEIGHTEN_SPELL";
    feat_names[43] = "IMPROVED_BULL_RUSH";
    feat_names[44] = "IMPROVED_COUNTERSPELL";
    feat_names[45] = "IMPROVED_CRITICAL";
    feat_names[46] = "IMPROVED_DISARM";
    feat_names[47] = "IMPROVED_FEINT";
    feat_names[48] = "IMPROVED_GRAPPLE";
    feat_names[49] = "IMPROVED_INITIATIVE";
    feat_names[50] = "IMPROVED_OVERRUN";
    feat_names[51] = "IMPROVED_PRECISE_SHOT";
    feat_names[52] = "IMPROVED_SHIELD_BASH";
    feat_names[53] = "IMPROVED_SUNDER";
    feat_names[54] = "IMPROVED_TRIP";
    feat_names[55] = "IMPROVED_TURNING";
    feat_names[56] = "IMPROVED_TWO_WEAPON_FIGHTING";
    feat_names[57] = "IMPROVED_UNARMED_STRIKE";
    feat_names[58] = "INVESTIGATOR";
    feat_names[59] = "IRON_WILL";
    feat_names[60] = "LEADERSHIP";
    feat_names[61] = "LIGHTNING_REFLEXES";
    feat_names[62] = "MAGICAL_APTITUDE";
    feat_names[63] = "MANYSHOT";
    feat_names[64] = "MARTIAL_WEAPON_PROFICIENCY";
    feat_names[65] = "MAXIMIZE_SPELL";
    feat_names[66] = "MOBILITY";
    feat_names[67] = "MOUNTED_ARCHERY";
    feat_names[68] = "MOUNTED_COMBAT";
    feat_names[69] = "NATURAL_SPELL";
    feat_names[70] = "NEGOTIATOR";
    feat_names[71] = "NIMBLE_FINGERS";
    feat_names[72] = "PERSUASIVE";
    feat_names[73] = "POINT_BLANK_SHOT";
    feat_names[74] = "POWER_ATTACK";
    feat_names[75] = "PRECISE_SHOT";
    feat_names[76] = "QUICK_DRAW";
    feat_names[77] = "QUICKEN_SPELL";
    feat_names[78] = "RAPID_RELOAD";
    feat_names[79] = "RAPID_SHOT";
    feat_names[80] = "RIDE_BY_ATTACK";
    feat_names[81] = "RUN";
    feat_names[82] = "SCRIBE_SCROLL";
    feat_names[83] = "SELF_SUFFICIENT";
    feat_names[84] = "SHIELD_PROFICIENCY";
    feat_names[85] = "SHOT_ON_THE_RUN";
    feat_names[86] = "SILENT_SPELL";
    feat_names[87] = "SIMPLE_WEAPON_PROFICIENCY";
    feat_names[88] = "SKILL_FOCUS";
    feat_names[89] = "SNATCH_ARROWS";
    feat_names[90] = "SPELL_FOCUS";
    feat_names[91] = "SPELL_MASTERY";
    feat_names[92] = "SPELL_PENETRATION";
    feat_names[93] = "SPIRITED_CHARGE";
    feat_names[94] = "SPRING_ATTACK";
    feat_names[95] = "STEALTHY";
    feat_names[96] = "STILL_SPELL";
    feat_names[97] = "STUNNING_FIST";
    feat_names[98] = "TOUGHNESS";
    feat_names[99] = "TOWER_SHIELD_PROFICIENCY";
    feat_names[100] = "TRACK";
    feat_names[101] = "TRAMPLE";
    feat_names[102] = "TWO_WEAPON_DEFENCE";
    feat_names[103] = "TWO_WEAPON_FIGHTING";
    feat_names[104] = "WEAPON_FINESSE";
    feat_names[105] = "WEAPON_FOCUS";
    feat_names[106] = "WEAPON_SPECIALIZATION";
    feat_names[107] = "WHIRLWIND_ATTACK";
    feat_names[108] = "WIDEN_SPELL";

    return feat_names[id];
  }
}

    // This function takes a string and returns the
    // lower case version (without under scores).
    // The string "A_FEAT_NAME" will change to "a feat name"
    function Proper_Case(line: string)
    {
       var myline = new String(line);
       var reg_expression = /_/g;

       myline = myline.replace(reg_expression, ' ');
       myline = myline.toLowerCase();
       return myline;
    }