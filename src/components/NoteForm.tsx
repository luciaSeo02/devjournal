import { useState } from "react";
import type { Note } from "../types/Note";
import "./NoteForm.scss";

interface Props {
  onAdd: (note: Note) => void;
  existingCategories: string[];
}

export default function NoteForm({ onAdd, existingCategories }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    const newNote: Note = {
      id: crypto.randomUUID(),
      title,
      content,
      date: new Date().toISOString(),
      category,
    };
    onAdd(newNote);
    setTitle("");
    setContent("");
    setCategory("");
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
      <label>
        Category:
        <input
          list="categories"
          placeholder="Type or select category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <datalist id="categories">
          {existingCategories.map((c) => (
            <option key={c} value={c} />
          ))}
        </datalist>
      </label>
      <button type="submit">Add Note</button>
    </form>
  );
}
