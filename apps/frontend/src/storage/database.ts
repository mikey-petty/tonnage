// In `worker.js`.
import sqlite3InitModule, {
  Database,
  type Sqlite3Static,
} from "@sqlite.org/sqlite-wasm";

const log = console.log;
const error = console.error;

const start = (sqlite3: Sqlite3Static) => {
  log("Running SQLite3 version", sqlite3.version.libVersion);
  const db =
    "opfs" in sqlite3
      ? new sqlite3.oo1.OpfsDb("/mydb.sqlite3")
      : new sqlite3.oo1.DB("/mydb.sqlite3", "ct");
  log(
    "opfs" in sqlite3
      ? `OPFS is available, created persisted database at ${db.filename}`
      : `OPFS is not available, created transient database ${db.filename}`
  );

  // Create initial tables
  createTables(db);

  return db;
};

const createTables = (db: Database) => {
  log("Creating database tables...");

  // Create messages table
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  log("Database tables created successfully");
};

export const initializeSQLite = async (): Promise<Database> => {
  try {
    log("Loading and initializing SQLite3 module...");
    const sqlite3 = await sqlite3InitModule({ print: log, printErr: error });
    log("Done initializing. Running demo...");
    const db = start(sqlite3);
    return db;
  } catch (err) {
    const error = err as Error;
    console.error("Initialization error:", error.name, error.message);
    throw error;
  }
};

// Don't auto-initialize - let components control when to init
// initializeSQLite();
