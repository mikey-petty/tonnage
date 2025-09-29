import "./App.css";
import BackendMessage from "./components/backend-message/BackendMessage";
import Header from "./components/header/Header";
import SQLiteMessage from "./components/sqlite-message/SQLiteMessage";

function App() {
  return (
    <>
      <div>
        <Header />
        <SQLiteMessage />
      </div>
    </>
  );
}

export default App;
