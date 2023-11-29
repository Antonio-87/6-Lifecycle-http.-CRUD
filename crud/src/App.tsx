import { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";
import Notes from "./components/Notes";
import { createNote, deleteNote, getNotes } from "./components/Api.tsx";

function App() {
  const [notes, setNotes] = useState<{ id: number; content: string }[]>([]);
  const [note, setNote] = useState<string>("");
  const [delNote, setDeleteNote] = useState<number>(0);

  useEffect(() => {
    getNotes(setNotes);
  }, []);

  useEffect(() => {
    getNotes(setNotes);
  }, [note, delNote]);

  const handleSubmit = (value: string) => {
    const newId = uuidv4();
    createNote({ id: Number(newId), content: value });
    setNote(value);
  };

  const handleDelete = (id: number) => {
    deleteNote(id);
    setDeleteNote(id);
  };

  const handleUpdate = () => {
    getNotes(setNotes);
  };

  return (
    <>
      <header className="header-notes">
        <h2>Notes</h2>
        <div className="update" onClick={handleUpdate}></div>
      </header>
      <Notes className="notes">
        {notes.map((element) => (
          <li className="note" key={element.id}>
            <p>{element.content}</p>
            <div
              className="delete"
              data-id={element.id}
              onClick={() => handleDelete(element.id)}
            />
          </li>
        ))}
      </Notes>
      <Form handleSubmit={handleSubmit} />
    </>
  );
}

export default App;
