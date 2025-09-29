import { useState } from "react";
import { db } from "../../storage/sqlite-promiser-loader";

export default function SQLiteMessage() {
  const [version, setVersion] = useState("Not Loaded Yet");
  const handleClick = async () => {
    const result = await db("exec", {
      sql: "SELECT sqlite_version() AS version",
      rowMode: "object",
    });
    const version = result.result.resultRows?.[0].version;
    setVersion(version);
  };

  return (
    <div style={{ padding: "20px", borderRadius: "5px" }}>
      <button onClick={handleClick}>Initialize SQLite</button>
      <p>SQLite Version: {version}</p>
    </div>
  );
}
