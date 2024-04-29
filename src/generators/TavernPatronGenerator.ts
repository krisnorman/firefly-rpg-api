import { Roller } from '../utils/Roller';

export class TavernPatronGenerator {

  public generate(count: number = 1): string {
    if (count == 1) return this._generate();

    let result = "";

    for (let index = 0; index < count; index++) {
        result = result + "<br>" + this._generate();        
    }
    
    return result;
  }

  private _generate(): string {
    let gender = (this._data.gender as GenderTable[])[Roller.roll(this._data.gender.length) - 1];
    let race = this._data.race[Roller.roll(this._data.race.length) - 1];
    let age = (this._data.age as AgeTable[])[Roller.roll(this._data.age.length) - 1];
    let demeanor = this._getDemeanor();
    let firstGlance = this._getFirstGlance(race);
    let closerInspection = this._getCloserInspection(firstGlance);

    let result = 
    `${(age.prefix)} ${age.age} ${gender.gender} ${race} with a 
     ${demeanor} demeanor. At first glance, ${gender.pronoun} appears to be ${firstGlance}. 
     A closer inspection revels ${gender.pronoun} is ${closerInspection}.`;

    return result;
  }

  private _getDemeanor(): string {
    let demeanorTable = this._data.demeanor as string[];
    let demeanorRow = demeanorTable[Roller.roll(demeanorTable.length) - 1];
    let demeanorItem = demeanorRow[Roller.roll(demeanorRow.length) - 1];
    return demeanorItem;
  }

  private _getFirstGlance(race: string): string {
    let options = FirstGlanceTable.getOptions(this._data.first_glance, race);
    let result = options[Roller.roll(options.length) - 1];
    return result;
  }

  private _getCloserInspection(firstGlance: string): string {
    let options = CloserInspectionTable.getOptions(
      this._data.closer_inspection,
      firstGlance
    );
    let result = options[Roller.roll(options.length) - 1];
    return result;
  }

  private _data:any = {
    "gender": [
        {"gender":"male", "pronoun":"he"}, 
        {"gender":"female", "pronoun":"she"}, 
        {"gender":"male", "pronoun":"he"}, 
        {"gender":"female", "pronoun":"she"}],
    "race": ["halfling", "human", "human", "human", "dwarf", "elf"],
    "age": [
        {"age": "teenager", "prefix": "a"}, 
        {"age": "teenager", "prefix": "a"}, 
        {"age": "adult", "prefix": "an"}, 
        {"age": "adult", "prefix": "an"}, 
        {"age": "adult", "prefix": "an"}, 
        {"age": "middle aged", "prefix": "a"}, 
        {"age": "senior", "prefix": "a"}, 
        {"age": "elderly", "prefix": "an"}
    ],
    "first_glance": [
        {
            "race": "halfling", 
            "options": ["criminal", "merchant", "traveller", "commoner", "commoner", "traveller", "artisan", "adventurer", "adventurer", "adventurer"]
        },
        {
            "race": "human", 
            "options": ["criminal", "merchant", "commoner", "commoner", "artisan", "warrior", "faithful", "warrior", "traveller", "adventurer"]
        },
        {
            "race": "dwarf", 
            "options": ["artisan", "traveller", "faithful", "warrior", "warrior", "warrior", "warrior", "merchant", "adventurer", "adventurer"]
        },
        {
            "race": "elf", 
            "options": ["criminal", "artisan", "merchant", "traveller", "traveller", "traveller", "warrior", "warrior", "adventurer", "adventurer"]
        }
    ],
    "closer_inspection": [
        {"first_glance": "commoner","options": ["a beggar", "a rat catcher", "a laborer", "a laborer", "a farmer", "a farmer", "a citizen", "a citizen", "a citizen", "a peasant", "a peasant", "a peasant"]},
        {"first_glance": "criminal","options": ["a fence", "a pickpocket", "a mugger", "a spy", "a loan shark", "a bookie", "a gambler", "a rake/wench", "a conterfeiter", "a bandit", "a thief", "an assasin"]},
        {"first_glance": "merchant","options": ["a bookseller", "a tailor", "a vendor", "an informant", "a gem-cutter", "a jeweler", "a spice trader", "a gypsy", "a junk merchant", "trinkets", "conterfeiter", "an exotics trader"]},
        {"first_glance": "faithful","options": ["a zealot", "a zealot", "a zealot", "a chaplain", "a guru", "a guru", "a pilgrim", "a pilgrim", "a prophet/oracle", "a guru", "a cultist", "a cleric"]},
        {"first_glance": "warrior","options": ["a veteran", "a city guard", "a city guard", "a mercenary", "a spearman", "an axeman", "a swordsman", "a swordsman", "an axeman", "an axeman", "a berzerker", "a figher"]},
        {"first_glance": "artisan","options": ["a sculptor", "a carpenter", "a wheelwright", "a mason", "a blacksmith", "a butcher", "a cook", "a weaver", "a miller", "a painter", "a brewer", "a bard"]},
        {"first_glance": "traveller","options": ["a fugitive", "an exile", "a refugee", "a pirate", "a wanderer", "a foreigner", "a trapper", "a hunter", "a bounty hunter", "a sight-seer", "a hedge wizard/witch", "a mage/sorcoress"]},
        {"first_glance": "adventurer","options": ["a beggar"]}
    ],
    "demeanor": [
        ["rowdy", "calm"],
        ["drunken", "modest"],
        ["depressed", "happy"],
        ["tired", "jittery"],
        ["irritable", "blissful"],
        ["friendly", "obnoxious"],
        ["intimidating", "irritating"],
        ["rude", "coy"],
        ["oblivious", "intense"],
        ["perturbed", "silent"],
        ["eloquent", "dense"]
    ]
  };

}

type GenderTable = {  
  gender: string;
  pronoun: string;
}

type AgeTable = {  
  age: string;
  prefix: string;
}

class FirstGlanceTable {
  constructor(public race: string, public options: string[]) {}

  static getOptions(data: FirstGlanceTable[], race: string): string[] {
    let obj = data.filter((x) => x.race === race)[0];
    return obj.options;
  }
}

class CloserInspectionTable {
  constructor(public first_glance: string, public options: string[]) {}

  static getOptions(
    data: CloserInspectionTable[],
    firstGlance: string
  ): string[] {
    let obj = data.filter((x) => x.first_glance === firstGlance)[0];
    return obj.options;
  }
}
