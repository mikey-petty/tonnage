import { useState } from "react";
import { db } from "../../storage/sqlite-promiser-loader";
import { CREATE_MESSAGES_TABLE, INSERT_MESSAGE } from "../../storage/tables";

export default function SQLiteMessage() {
  const [version, setVersion] = useState("Not Loaded Yet");
  const handleClick = async () => {
    await db("exec", {
      sql: CREATE_MESSAGES_TABLE,
    });

    await db("exec", {
      sql: INSERT_MESSAGE,
      bind: ["Hello World"],
    });

    const result = await db("exec", {
      sql: /*sql*/ `SELECT * FROM messages LIMIT 1`,
      rowMode: "object",
    });

    const version = result.result.resultRows?.[0].content;
    setVersion(version);
  };

  return (
    <div style={{ padding: "20px", borderRadius: "5px" }}>
      <button onClick={handleClick}>Initialize SQLite</button>
      <p>SQLite Version: {version}</p>
    </div>
  );
}
