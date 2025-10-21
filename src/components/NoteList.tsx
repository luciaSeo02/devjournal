import type { Note } from "../types/Note";
import NoteCard from "./NoteCard";

interface Props {
  notes: Note[];
  onDelete: (id: string) => void;
}

export default function NoteList({ notes, onDelete }: Props) {
  if (!notes.length) return <p>No notes yet. Start writing!</p>;

  return (
    <section>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={onDelete} />
      ))}
    </section>
  );
}
