import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNotes from "./pages/EditNotes";

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  console.log(notes);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Notes notes={notes} />} />
            <Route
              path="/create-note"
              element={<CreateNote setNotes={setNotes} />}
            />
            <Route path="/edit-note/:id" element={<EditNotes notes={notes} setNotes={setNotes} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
