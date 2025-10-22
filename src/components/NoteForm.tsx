import { useState } from "react";
import type { Note } from "../types/Note";
import "./NoteForm.scss";

interface Props {
  onAdd: (note: Note) => void;
}

export default function NoteForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    const newNote: Note = {
      id: crypto.randomUUID(),
      title,
      content,
      date: new Date().toISOString(),
    };
    onAdd(newNote);
    setTitle("");
    setContent("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}
