import { Config } from "../config";
import { RepositoryBase } from "./RepositoryBase";

export interface ICharacter {
  Id: number;
  PlayerId: number;
  Name: string;
  Nickname: string;
  Homeworld: string;
  Concept: string;
  Age: number;
  Hair: string;
  Eyes: string;
  Skin: string;
  Height: number;
  Weight: number;
  Birthmarks: string;
  Tattoos: string;
  Other: string;
}

export class Character implements ICharacter {
  constructor(
    public Id: number,
    public PlayerId: number,
    public Name: string,
    public Nickname: string,
    public Homeworld: string,
    public Concept: string,
    public Age: number,
    public Hair: string,
    public Eyes: string,
    public Skin: string,
    public Height: number,
    public Weight: number,
    public Birthmarks: string,
    public Tattoos: string,
    public Other: string
  ) {}
}

export class CharacterRepository extends RepositoryBase<Character> {
  constructor() {
    super(Config.DATABASE_PATH);
  }

  getSingle(id: number): Character | null {
    let row: any = this.db
      .prepare("SELECT * FROM Characters WHERE id = ?")
      .get(id);
    if (row === undefined) return null;
    return new Character(
      row.Id,
      row.PlayerId,
      row.Name,
      row.Nickname,
      row.Homeworld,
      row.Concept,
      row.Age,
      row.Hair,
      row.Eyes,
      row.Skin,
      row.Height,
      row.Weight,
      row.Birthmarks,
      row.Tattoos,
      row.Other
    );
  }
  getAll(): Character[] {
    let obj: any[] = this.db.prepare("SELECT * FROM Characters").all();
    let characters: Character[] = obj.map(
      (a: any) =>
        new Character(
          a.Id,
          a.PlayerId,
          a.Name,
          a.Nickname,
          a.Homeworld,
          a.Concept,
          a.Age,
          a.Hair,
          a.Eyes,
          a.Skin,
          a.Height,
          a.Weight,
          a.Birthmarks,
          a.Tattoos,
          a.Other
        )
    );
    return characters;
  }

  getCharacters(playerId: number): Character[] {
    let obj: any[] = this.db
      .prepare("SELECT * FROM Characters WHERE PlayerId = ?")
      .all(playerId);
    let characters: Character[] = obj.map(
      (a: any) =>
        new Character(
          a.Id,
          a.PlayerId,
          a.Name,
          a.Nickname,
          a.Homeworld,
          a.Concept,
          a.Age,
          a.Hair,
          a.Eyes,
          a.Skin,
          a.Height,
          a.Weight,
          a.Birthmarks,
          a.Tattoos,
          a.Other
        )
    );
    return characters;
  }
}
