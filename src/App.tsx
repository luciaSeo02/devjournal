import { useState, useEffect } from "react";
import type { Note } from "./types/Note";
import { getNotes, saveNotes } from "./utils/storage";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const addNote = (note: Note) => {
    const updated = [note, ...notes];
    setNotes(updated);
    saveNotes(updated);
  };

  const deleteNote = (id: string) => {
    const updated = notes.filter((n) => n.id !== id);
    setNotes(updated);
    saveNotes(updated);
  };

  return (
    <div className="app">
      <Header />
      <main>
        <NoteForm onAdd={addNote} />
        <NoteList notes={notes} onDelete={deleteNote} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
