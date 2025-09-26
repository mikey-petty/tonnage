import React, { useState } from "react";
import { initializeSQLite } from "../../storage/database";
import type { Database } from "@sqlite.org/sqlite-wasm";

let sqliteDB: Database | null = null;

export default function SQLiteMessage() {
  const [message, setMessage] = useState<string>("No Message Yet");
  const [version, setVersion] = useState<string>("No Version Info Yet");
  const [error, setError] = useState<string | null>(null);

  const storeMessage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      sqliteDB = sqliteDB ?? (await initializeSQLite());
      const input = document.getElementById("message") as HTMLInputElement;
      const userMessage = input.value || "NO MESSAGE REALLY?!";
      sqliteDB.exec({
        sql: "INSERT INTO messages (content) VALUES (?)",
        bind: [userMessage],
      });
    } catch (error) {
      console.error("Error initializing SQLite:", error);
      setError("Failed to initialize SQLite");
    }
  };

  const getMessage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      sqliteDB = sqliteDB ?? (await initializeSQLite());
      const input = document.getElementById("getMessage") as HTMLInputElement;
      const result = sqliteDB.exec({
        sql: "SELECT * FROM messages WHERE content = ? LIMIT 1",
        bind: [input.value],
        returnValue: "resultRows",
      });
      const msg = result?.[0]?.[1];
      setMessage(msg ? String(msg) : "No Message Found");
    } catch (error) {
      console.error("Error initializing SQLite:", error);
      setError("Failed to initialize SQLite: " + (error as Error).message);
    }
  };

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}
    >
      <h3>SQLite Hello World</h3>
      <button onClick={storeMessage}>Initialize SQLite</button>

      <p>
        <strong>Message:</strong> {message}
      </p>

      {version && (
        <p>
          <strong>SQLite Version:</strong> {version}
        </p>
      )}

      {error && (
        <p style={{ color: "red" }}>
          <strong>Error:</strong> {error}
        </p>
      )}

      {/* SQLite Message Form */}
      <form>
        <label htmlFor="message">Message from SQLite: </label>
        <input
          type="text"
          id="message"
          name="message"
          placeholder="Enter your message"
        />
        <button type="submit" onClick={storeMessage}>
          Submit
        </button>
      </form>
      <form>
        <label htmlFor="message">Message from SQLite: </label>
        <input
          type="text"
          id="getMessage"
          name="message"
          placeholder="Enter your message"
        />
        <button type="submit" onClick={getMessage}>
          Get Message
        </button>
      </form>
    </div>
  );
}
