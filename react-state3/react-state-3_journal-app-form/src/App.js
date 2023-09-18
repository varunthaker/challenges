import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { initialEntries } from "./initalEntries";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [entries, setEntries] = useState(initialEntries);

  const addEntry = (entry) => {
    setEntries([...entries, { ...entry, id: uid() }]);
  };

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={addEntry} />
        <EntriesSection entries={entries} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
