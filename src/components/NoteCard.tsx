import type { Note } from "../types/Note";
import "./NoteCard.scss";
import { Link } from "react-router-dom";

interface Props {
  note: Note;
  onDelete: (id: string) => void;
}

export default function NoteCard({ note, onDelete }: Props) {
  return (
    <article className="note-card">
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
        <button onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    </article>
  );
}
