import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Note } from "../types/Note";
import { getNotes, saveNotes } from "../utils/storage";
import "./NoteDetail.scss";

export default function NoteDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [note, setNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const notes = getNotes();
    const found = notes.find((n) => n.id === id);
    if (found) setNote(found);
  }, [id]);

  const handleSave = () => {
    if (!note) return;
    const notes = getNotes();
    const updated = notes.map((n) => (n.id === note.id ? note : n));
    saveNotes(updated);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (!note) return;
    const notes = getNotes().filter((n) => n.id !== note.id);
    saveNotes(notes);
    navigate("/");
  };

  if (!note) return <p>Note not found.</p>;

  return (
    <div className="note-detail">
      {!isEditing ? (
        <>
          <h2>{note.title}</h2>
          <p className="note-date">{new Date(note.date).toLocaleString()}</p>
          <div className="note-content">{note.content}</div>

          <div className="note-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => navigate("/")}>Back</button>
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
          />
          <textarea
            value={note.content}
            onChange={(e) => setNote({ ...note, content: e.target.value })}
          />
          <div className="note-actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      )}
    </div>
  );
}
