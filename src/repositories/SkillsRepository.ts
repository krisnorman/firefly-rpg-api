import { Config } from "../config";
import { RepositoryBase } from "./RepositoryBase";

export class Skills {
  constructor(
    public Id: number,
    public CharacterId: number,
    public AnimalHandling: number
  ) {}
}

export class SkillsRepository extends RepositoryBase<Skills> {
  constructor() {
    super(Config.DATABASE_PATH);
  }

  getSingle(id: number): Skills | null {
    let row: any = this.db.prepare("SELECT * FROM Skills WHERE id = ?").get(id);
    if (row === undefined) return null;
    return new Skills(row.Id, row.CharacterId, row.AnimalHandling);
  }
  getByCharacterId(characterId: number): Skills | null {
    let row: any = this.db
      .prepare("SELECT * FROM Skills WHERE CharacterId = ?")
      .get(characterId);
    if (row === undefined) return null;
    return new Skills(row.Id, row.CharacterId, row.AnimalHandling);
  }
  getAll(): Skills[] {
    let obj: any[] = this.db.prepare("SELECT * FROM Skills").all();
    let skills: Skills[] = obj.map(
      (a: any) => new Skills(a.Id, a.CharacterId, a.AnimalHandling)
    );
    return skills;
  }
}
