import { Config } from "../config";
import { RepositoryBase } from "./RepositoryBase";

export class Attributes {
  constructor(
    public Id: number,
    public CharacterId: number,
    public Agility: number,
    public Alertness: number,
    public Strength: number,
    public Vitality: number,
    public Intelligence: number,
    public Willpower: number
  ) {}
}

export class AttributesRepository extends RepositoryBase<Attributes> {
  constructor() {
    super(Config.DATABASE_PATH);
  }

  getSingle(id: number): Attributes | null {
    let row: any = this.db
      .prepare("SELECT * FROM Attributes WHERE id = ?")
      .get(id);
    if (row === undefined) return null;
    return new Attributes(
      row.Id,
      row.CharacterId,
      row.Agility,
      row.Alertness,
      row.Strength,
      row.Vitality,
      row.Intelligence,
      row.Willpower
    );
  }
  getByCharacterId(characterId: number): Attributes | null {
    let row: any = this.db
      .prepare("SELECT * FROM Attributes WHERE CharacterId = ?")
      .get(characterId);
    if (row === undefined) return null;
    return new Attributes(
      row.Id,
      row.CharacterId,
      row.Agility,
      row.Alertness,
      row.Strength,
      row.Vitality,
      row.Intelligence,
      row.Willpower
    );
  }
  getAll(): Attributes[] {
    let obj: any[] = this.db.prepare("SELECT * FROM Attributes").all();
    let players: Attributes[] = obj.map(
      (a: any) =>
        new Attributes(
          a.Id,
          a.CharacterId,
          a.Agility,
          a.Alertness,
          a.Strength,
          a.Vitality,
          a.Intelligence,
          a.Willpower
        )
    );
    return players;
  }
}
