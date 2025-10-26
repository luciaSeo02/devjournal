import { useState, useEffect } from "react";
import type { Note } from "../types/Note";
import { getNotes, saveNotes } from "../utils/storage";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import "./Home.scss";

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [filter, setFilter] = useState("");

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

  const categories = Array.from(
    new Set(notes.map((n) => n.category).filter(Boolean))
  );

  return (
    <div className="home">
      <NoteForm onAdd={addNote} existingCategories={categories} />
      {categories.length > 0 && (
        <div className="filter">
          <label htmlFor="filter">Filter by category:</label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">All</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      )}
      <NoteList
        notes={filter ? notes.filter((n) => n.category === filter) : notes}
        onDelete={deleteNote}
      />
    </div>
  );
}
