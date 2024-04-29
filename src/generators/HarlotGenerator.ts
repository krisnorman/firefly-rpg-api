import { Roller } from '../utils/Roller';

export class Harlot {
    constructor(
      public Pronoun: string,
      public Background: string,
      public MarkOfBeauty: string,
      public FlawedBeauty: string,
      public FlawVisibility: string,
      public Talent: string,
      public Goal: string
    ) {}
  
    public toString = (): string => {
      let result =
        `The harlot is ${
          this.Background
        } with ${this.MarkOfBeauty.toLowerCase()}. ` +
        `${
          this.Pronoun
        } has ${this.FlawedBeauty.toLowerCase()} that is ${this.FlawVisibility.toLowerCase()}.` +
        `${this.Pronoun} is very skilled at ${this.Talent.toLowerCase()}` +
        `${this.Pronoun} is looking to ${this.Goal.toLowerCase()} `;
      return result;
    };
  }
  
  export class HarlotGenerator {
    public static readonly Description: string = 'Harlot';
  
    static generate(): Harlot {
      let d = this._data;
      let pronoun = "She"; //['He', 'She'][Roller.roll(2) - 1];
      let result = new Harlot(
        pronoun,
        d.background[Roller.roll(d.background.length) - 1],
        d.mark_of_beauty[Roller.roll(d.mark_of_beauty.length) - 1],
        d.flawed_beauty[Roller.roll(d.flawed_beauty.length) - 1],
        d.flaw_visibility[Roller.roll(d.flaw_visibility.length) - 1],
        d.talent[Roller.roll(d.talent.length) - 1],
        d.goal[Roller.roll(d.goal.length) - 1]
      );
  
      return result;
    }
  
    private static readonly _data = {
      background: [
        'A veteran who may have been beautiful.',
        'A passionate young woman.',
        'A homely young lady.',
        'A friendly and plump woman.',
        'The bastard daughter of a noble house.',
        'A young foreigner.',
        "The boss's favorite.",
        'An exotic beauty.',
        'New to the place and always in trouble.',
        'New to the place and eager to please.',
      ],
      mark_of_beauty: [
        'A pretty smile.',
        'Beautiful eyes.',
        'Lovely, long eyelashes.',
        'Lush, curly locks.',
        'Short-cropped hair.',
        'A clean satin gown.',
      ],
      flawed_beauty: [
        'A gimpy leg.',
        'Crooked teeth.',
        'A scowl on her face.',
        'An unsightly scar.',
        'An unfortunately shaped nose.',
        'A large mole on her face.',
        'Crossed-eyes.',
        'A mustache.',
      ],
      flaw_visibility: [
        'Barely noticeable.',
        'Barely noticeable.',
        'Well-concealed by make-up or practice.',
        'Well-concealed by make-up or practice.',
        'Something you can look past.',
        'Intimidating.',
      ],
      talent: [
        'Listening and offering emotional support.',
        'Bringing a smile to her clients’ faces without even touching them.',
        'Bringing a smile to her clients’ faces as soon as she touches them.',
        'Embroidery and sewing.',
        'Cooking and cleaning.',
        'Drinking and swearing.',
      ],
      goal: [
        'Earn enough coin to get out of this place.',
        'Earn enough coin to get out of this place.',
        'Bring to light a scandal involving a rival.',
        'Secure a marriage to get out of this place.',
        'Secure a marriage to get out of this place.',
        'Hear word of a child given away.',
      ],
    };
  }