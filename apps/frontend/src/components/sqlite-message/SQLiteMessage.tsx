import React, { useState } from "react";
import { initializeSQLite } from "../../storage/database";

let sqliteInstance: any;

export async function initSQLite() {
  if (sqliteInstance) {
    return sqliteInstance;
  } else {
    sqliteInstance = await initializeSQLite();
    return sqliteInstance;
  }
}

export default function SQLiteMessage() {
  const [message, setMessage] = useState<string>("No Message Yet");
  const [version, setVersion] = useState<string>("No Version Info Yet");
  const [error, setError] = useState<string | null>(null);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget.form!);
    const inputMessage = formData.get("message") as string;
    try {
      const database = await initSQLite();
      const versionResult = database.exec({
        sql: "SELECT sqlite_version() as version",
        returnValue: "resultRows",
        rowMode: "object",
      });

      database.exec({
        sql: "INSERT INTO workouts (date, notes) VALUES (date('now'), ?)",
        bind: [inputMessage],
      });

      const version = versionResult[0]?.version || "Unknown Version";
      setVersion(String(version));
      console.log("SQLite Message button clicked");
    } catch (error) {
      setError("Failed to retrieve SQLite version");
      console.error("Error fetching SQLite version:", error);
    }
  };

  const handleMessageClick = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    try {
      const database = await initSQLite();
      const userInput = "Mikey Notes";
      const result = database.exec({
        sql: "SELECT * FROM workouts WHERE notes = ?",
        bind: [userInput],
        returnValue: "resultRows",
        rowMode: "object",
      });
      const inputMessage = result[0]?.notes || "No Message Found";
      console.log(result);
      setMessage(String(inputMessage));
      console.log("SQLite Message button clicked");
    } catch (error) {
      setError("Failed to retrieve SQLite version");
      console.error("Error fetching SQLite version:", error);
    }
  };

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}
    >
      <h3>SQLite Hello World</h3>
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
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
      <button onClick={handleMessageClick}>Get Message from SQLite</button>
    </div>
  );
}
