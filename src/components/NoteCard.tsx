import type { Note } from "../types/Note";

interface Props {
  note: Note;
  onDelete: (id: string) => void;
}

export default function NoteCard({ note, onDelete }: Props) {
  return (
    <article
      style={{ border: "1px solid #ccc", margin: "1rem 0", padding: "1rem" }}
    >
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <small>{new Date(note.date).toLocaleString()}</small>
      <br />
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </article>
  );
}
