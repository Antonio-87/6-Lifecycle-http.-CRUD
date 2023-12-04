import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Notes from "./components/Notes";
import { createNote, deleteNote, getNotes } from "./components/Api.tsx";

function App() {
  const [notes, setNotes] = useState<{ id: number; content: string }[]>([]);

  useEffect(() => {
    getNotes(setNotes);
  }, []);

  const handleSubmit = async (value: string) => {
    const created = await createNote({ id: 0, content: value });
    if (created === true) getNotes(setNotes);
  };

  const handleDelete = async (id: number) => {
    const created = await deleteNote(id);
    if (created === true) getNotes(setNotes);
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
