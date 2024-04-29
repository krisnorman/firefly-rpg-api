import { Config } from "../config";
import { RepositoryBase } from "./RepositoryBase";

export class Player {
  constructor(public Id: number, public FirstName: string, public LastName: string) {}
  get FullName(): string { return `${this.FirstName} ${this.LastName}` };
}

export class PlayerRepository extends RepositoryBase<Player> {  
  
  constructor() {
    super(Config.DATABASE_PATH);
  }

  getSingle(id: number): Player | null {
    let row: any = this.db.prepare('SELECT * FROM Players WHERE id = ?').get(id);
    if (row === undefined) return null;
    return new Player(row.Id, row.FirstName, row.LastName);
  }

  getAll(): Player[] {
    let obj: any[] = this.db.prepare('SELECT * FROM Players').all();    
    let players: Player[] = obj.map((a: any) => new Player(a.Id, a.FirstName, a.LastName));
    return players;
  }
}

