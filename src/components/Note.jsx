import React, { useState } from "react";

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedContent, setEditedContent] = useState(props.content);

  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleSaveClick() {
    props.onEdit(props.id, {
      title: editedTitle,
      content: editedContent
    });
    setIsEditing(false);
  }

  return (
    <div className="note">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            rows="3"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
            <div className="note-buttons">
            <button className="save-btn" onClick={handleSaveClick}> <i className="fas fa-save"></i>Save</button>
            <button  className="delete-btn" onClick={handleDelete}> <i className="fas fa-trash"></i>Delete</button>
          </div>
        </>
      ) : (
        <>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <div className="note-buttons">
            <button  className="edit-btn" onClick={handleEditClick}> <i className="fas fa-pen"></i>Edit</button>
            <button  className="delete-btn"onClick={handleDelete}> <i className="fas fa-trash"></i>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Note;
