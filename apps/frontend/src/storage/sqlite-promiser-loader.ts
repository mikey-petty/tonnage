import {
  sqlite3Worker1Promiser,
  type SQLite3Worker1PromiserConfig,
} from "@sqlite.org/sqlite-wasm";

// Worker config for the database
const WORKER_CONFIG: SQLite3Worker1PromiserConfig = {
  debug: import.meta.env.DEV
    ? (...args) => console.debug("[sqlite3-worker]", ...args)
    : () => {},
};

// Initialize the database worker
export const db = await sqlite3Worker1Promiser.v2(WORKER_CONFIG);

// Open the database
db("open", { filename: "file:mydb.sqlite3?vfs=opfs" });
