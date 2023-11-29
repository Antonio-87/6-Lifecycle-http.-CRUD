import HOST from "../Hosts";
import createRequest from "../functions/createRequest";

const getNotes = (
  callback: (data: { id: number; content: string }[]) => void
) => {
  createRequest(
    `${HOST}/notes/`,
    {
      method: "GET",
    },
    callback
  );
};

const createNote = ({ id, content }: { id: number; content: string }) => {
  createRequest(`${HOST}/notes/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ id, content }),
  });
};

const deleteNote = (id: number) => {
  createRequest(`${HOST}/notes/${id}`, {
    method: "DELETE",
  });
};

export { getNotes, createNote, deleteNote };
