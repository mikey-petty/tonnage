import { useState } from "react";
import "./App.css";
import BackendMessage from "./components/backend-message/BackendMessage";
import SQLiteMessage from "./components/sqlite-message/SQLiteMessage";

function App() {
  return (
    <>
      <div>
        <h1>Frontend + Backend Examples</h1>
        <BackendMessage />
        <SQLiteMessage />
      </div>
    </>
  );
}

export default App;
