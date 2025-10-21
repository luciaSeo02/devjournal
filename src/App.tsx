import { useState, useEffect } from "react";
import type { Note } from "./types/Note";
import { getNotes, saveNotes } from "./utils/storage";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

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
    <main style={{ maxWidth: "800px", margin: "2rem auto" }}>
      <h1>DevJournal</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </main>
  );
}

export default App;
