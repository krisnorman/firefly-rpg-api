import { Config } from "../config";
import { RepositoryBase } from "./RepositoryBase";

export class Specializations {
  constructor(
    public Id: number,
    public CharacterId: number,
    public SkillId: number
  ) {}
}

export class SpecializationsRepository extends RepositoryBase<Specializations> {
  constructor() {
    super(Config.DATABASE_PATH);
  }

  getSingle(id: number): Specializations | null {
    let row: any = this.db.prepare("SELECT * FROM Specializations WHERE id = ?").get(id);
    if (row === undefined) return null;
    return new Specializations(row.Id, row.CharacterId, row.SkillId);
  }
  getByCharacterId(characterId: number): Specializations | null {
    let row: any = this.db
      .prepare("SELECT * FROM Specializations WHERE CharacterId = ?")
      .get(characterId);
    if (row === undefined) return null;
    return new Specializations(row.Id, row.CharacterId, row.SkillId);
  }
  getAll(): Specializations[] {
    let obj: any[] = this.db.prepare("SELECT * FROM Specializations").all();
    let specializations: Specializations[] = obj.map(
      (a: any) => new Specializations(a.Id, a.CharacterId, a.SkillId)
    );
    return specializations;
  }
}
