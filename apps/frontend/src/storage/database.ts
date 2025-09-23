// In `worker.js`.
import sqlite3InitModule, { type Sqlite3Static } from "@sqlite.org/sqlite-wasm";

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

const createTables = (db: any) => {
  log("Creating database tables...");

  // Create workouts table
  db.exec(`
    CREATE TABLE IF NOT EXISTS workouts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL,
      notes TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create exercises table
  db.exec(`
    CREATE TABLE IF NOT EXISTS exercises (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      workout_id INTEGER NOT NULL,
      name TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (workout_id) REFERENCES workouts (id) ON DELETE CASCADE
    )
  `);

  // Create sets table
  db.exec(`
    CREATE TABLE IF NOT EXISTS sets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      exercise_id INTEGER NOT NULL,
      weight REAL,
      reps INTEGER,
      rest_seconds INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (exercise_id) REFERENCES exercises (id) ON DELETE CASCADE
    )
  `);

  log("Database tables created successfully");
};

export const initializeSQLite = async () => {
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
