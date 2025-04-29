import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));

    if (name === "title" && value.trim() !== "") {
      setError(""); // Clear error when user starts typing a valid title
    }
  }

  function submitNote(event) {
    event.preventDefault(); // Prevent form reload first

    if (note.title.trim() === "") {
      setError("Title is required.");
      return;
    }

    props.onAdd(note);
    setNote({ title: "", content: "" });
    setError(""); // Clear error after successful submission
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>
          <i className="fas fa-plus"></i>
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default CreateArea;
