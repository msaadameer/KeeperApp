import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [notes, setNotes] = useState([]);
  
  
  function addNote(newNote) {
    const noteWithId = { ...newNote, id: uuidv4() };
    setNotes(prevNotes => [...prevNotes, noteWithId]);
  }
  

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  }
  
  function editNote(id, updatedNote) {
    setNotes(prevNotes =>
      prevNotes.map(note => (note.id === id ? { ...note, ...updatedNote } : note))
    );
  }
  

  return (
    <div>
  <Header />
  <CreateArea onAdd={addNote} />
  <div className="notes-container">
    {notes.map((noteItem, index) => (
     <Note
     key={noteItem.id}
     id={noteItem.id}
     title={noteItem.title}
     content={noteItem.content}
     onDelete={deleteNote}
     onEdit={editNote}
   />
   
    ))}
  </div>
  <Footer />
</div>

  );
}

export default App;
