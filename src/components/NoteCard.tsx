import type { Note } from "../types/Note";
import "./NoteCard.scss";

interface Props {
  note: Note;
  onDelete: (id: string) => void;
}

export default function NoteCard({ note, onDelete }: Props) {
  return (
    <article className="note-card">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <div className="note-footer">
        <small>{new Date(note.date).toLocaleString()}</small>
        <button onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    </article>
  );
}
