import { Roller } from '../utils/Roller';

export class AreaNameGenerator {

    generate(): string {        
        let resultA = this._data.Table_A[Roller.roll(this._data.Table_A.length) - 1];
        let resultB = this._getResultB();
        let resultD = this._data.Table_D[Roller.roll(this._data.Table_D.length) - 1];

        let finalResult = `${resultA} ${resultB} of ${resultD}`;
        return finalResult;
    }

    private _getResultB(): string {
        let resultB = this._data.Table_B[Roller.roll(this._data.Table_B.length) - 1];
        let resultC = this._data.Table_C[Roller.roll(this._data.Table_C.length) - 1];
        let finalResult = [resultB,resultC][Roller.roll(2) - 1];
        return finalResult;
    }

    private _data:any = {
        "Table_A": [
            "Black", "Firey", "Red", "Bloody", "Haunted", "Forgotten", "Forbidden", "Ancient", "Golden", 
            "Cursed", "Wonderous", "Frozen", "Green and Purple", "Lost", "Fabled", "Deadly", "Elder", 
            "Mysterious", "Petrified", "Screaming" 
        ],
        "Table_B": [
            "Vault", "Cave", "Cavern", "Chamber", "Tomb", "Lake", "Fountain", "Pool", "Hall", "Crypt", "Maze", 
            "Gate", "Stair", "Statue", "Shrine", "Gallery", "Pit", "Redoubt", "Temple", "Mural"
        ],
        "Table_C": [
            "Door", "Arch", "Well", "Cistern", "Lagoon", "Prison", "Mausoleum", "Catacombs", "Wall", "Lounge", 
            "Garrison", "Garden", "Grotto", "Chasm", "Church", "Barracks", "Harem", "Baths", "Museum", "Mines" 
        ],
        "Table_D": [
            "Doom", "Blood", "Kings", "Statues", "Slime", "Ghosts", "Gods", "Legend", "Death", "Endless Gold", 
            "Blessings", "Tomes", "Souls", "Magic", "Curses", "Echoes", "Ancients", "Slime", "Crystal", "Wisdom"
        ]
    };
}

