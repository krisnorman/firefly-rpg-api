import Database from "better-sqlite3";


export abstract class RepositoryBase<T> {
  protected db: Database.Database;

  constructor(dbName: string) {
    this.db = new Database(dbName);
    this.db.pragma('journal_mode = WAL');
  }

  abstract getSingle(id: number): T | null;
  abstract getAll(): T[];
}
