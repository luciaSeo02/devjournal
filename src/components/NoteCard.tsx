import { useState } from "react";
import type { Note } from "../types/Note";
import "./NoteCard.scss";
import ConfirmModal from "./ConfirmModal";
import { Link } from "react-router-dom";

interface Props {
  note: Note;
  onDelete: (id: string) => void;
}

export default function NoteCard({ note, onDelete }: Props) {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <article className="note-card">
      {showConfirm && (
        <ConfirmModal
          message="Are you sure you want to delete this note?"
          onConfirm={() => {
            onDelete(note.id);
            setShowConfirm(false);
          }}
          onCancel={() => setShowConfirm(false)}
        />
      )}

      <h3>
        <Link to={`/note/${note.id}`} className="note-link">
          {note.title}
        </Link>
      </h3>
      <div
        className="note-preview"
        dangerouslySetInnerHTML={{
          __html:
            note.content.length > 150
              ? note.content.slice(0, 150) + "..."
              : note.content,
        }}
      />
      <div className="note-footer">
        <small>{new Date(note.date).toLocaleString()}</small>
        <button onClick={() => setShowConfirm(true)}>Delete</button>
      </div>
    </article>
  );
}
