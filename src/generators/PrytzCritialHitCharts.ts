import { Roller } from '../utils/Roller';

export class PrytzCritialHitCharts {

    static Slashing(): string {        
        let item = Slashing.getRandom();
        return item.effect;
    }
}

class LimbDamage {
    constructor(public values: number[], public effect: string){}

    static getRandom(): LimbDamage {
        let roll = Roller.roll(6);        
        let item = this._limbDamageData.filter(x => x.values.filter(y=> y == roll)[0])[0];
        return item;
    }

    private static readonly _limbDamageData: LimbDamage[] = [
        {"values": [1], "effect": "Right Leg"},
        {"values": [2,5], "effect": "Left Leg"},
        {"values": [3,6], "effect": "Right Arm"},
        {"values": [4], "effect": "Left Arm"}
    ];
}

class OrganDamage {
    public static STOMACH: string = "Damage X2, take full damage again daily from digestive fluids. Will become terminally infected in one day.  This will weaken the victim at 1 Strength and 1 Constitution point / day. The victim dies when Strength, Constitution, or HP goes below zero. A cure disease is required to stop infection; thereafter, the character will regain Strength and Constitution at the rate of 1 point per day.";
    public static SPLEEN: string = "Damage +3, bleed for 1d6 hp for 5 rounds.";

    private constructor(public roll: number, public organ: string, public effect: string){}

    static getRandom(): OrganDamage {
        let roll = Roller.roll(6);        
        let item = this._data.filter(x => x.roll === roll)[0];
        return item;
    }

    private static readonly _data: OrganDamage[] = [
        {"roll": 1,"organ": "Lung", "effect": "Damage X2, save vs. poison or lung collapses: unconscious for 10-20rnds then half move until healed."},
        {"roll": 2,"organ": "Heart", "effect": "(nicked):  Damage MAX X2."},
        {"roll": 3,"organ": "Kidney", "effect": "Damage +2, blood poisoning, death in 4d12+Con hours; neutralize poison will add 10 hours."},
        {"roll": 4,"organ": "Liver", "effect": `Damage +3, bleed for ${Roller.roll(4)} (1d4) hp for 5 rounds.`},
        {"roll": 5,"organ": "Spleen", "effect": this.SPLEEN},
        {"roll": 6,"organ": "Stomach", "effect": this.STOMACH}
    ];
    
    static format(obj: OrganDamage) {
        return `${obj.organ}: ${obj.effect}`;
    }
}

class Slashing {
    constructor(public min: number, public max: number, public effect: string){}

    static getRandom(): Slashing {
        let roll = Roller.roll(100);
        let item = this._slashingData.filter(x => roll >= x.min && roll <= x.max)[0];
        return item;
    }

    private static readonly _slashingData: Slashing[] = [
        {"min": 1, "max": 9, "effect": "Hit vulnerable area, damage X2."},
        {"min": 10, "max": 12, "effect": "Strike vital area, damage X3."},
        {"min": 13, "max": 20, "effect": `Destroy ${Roller.roll(4)} (1d4) items, 1/2 damage.`},
        {"min": 21, "max": 22, "effect": `Slit throat; ${(Roller.roll(10) + 20)} (20+1d10) damage plus ${Roller.roll(8)} (1d8) for next 5 rounds until binding.`},
        {"min": 23, "max": 55, "effect": `Limb damaged: ${LimbDamage.getRandom().effect}.`},
        {"min": 56, "max": 60, "effect": "Hit face; scar, -1 charisma."},
        {"min": 61, "max": 63, "effect": "Scalped, damage X2, -3 charisma, no hair will grow."},
        {"min": 64, "max": 65, "effect": "Removed nose, -10 to charisma."},
        {"min": 66, "max": 66, "effect": "Removed left ear, -20% chance of hearing, -2 charisma."},
        {"min": 67, "max": 67, "effect": "Removed right ear, -20% chance of hearing, -2 charisma."},
        {"min": 68, "max": 70, "effect": "Blind in one eye, 1/2 damage, -2 to hit, -4 with missiles, lose Dex bonus on AC."},
        {"min": 71, "max": 72, "effect": "Blind in both eyes, 1/2 damage, -6 to hit, -10 with missiles, lose Dex bonus on AC."},
        {"min": 73, "max": 77, "effect": `Gut wound, 1/2 damage, takes 2 rounds to bind, STOMACH WOUNDS: ${OrganDamage.STOMACH}`},
        {"min": 78, "max": 79, "effect": "Sever spinal cord, save vs. paralization or legs paralyzed. +10 damage."},
        {"min": 80, "max": 88, "effect": `Organ hit, ${OrganDamage.format(OrganDamage.getRandom())}.`},
        {"min": 89, "max": 98, "effect": "Removed weapon. No damage unless monster (claws or teeth removed)."},
        {"min": 99, "max": 99, "effect": `Limb, major nerve severed, no sense of touch, ${LimbDamage.getRandom().effect}.`},
        {"min": 100, "max": 100, "effect": "DEATH."}
    ];
}
