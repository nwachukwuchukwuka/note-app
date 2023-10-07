import React, { useEffect, useState } from "react";
import NoteItem from "../components/NoteItem";
import { Link } from "react-router-dom";

const Notes = ({ notes }) => {
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleClick = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };

  useEffect(handleClick, [text]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto p-4 md:p-8">
        <header className="mb-7">
          <h2 className="text-4xl text-gray-500 text-center md:text-left">
            Notes
          </h2>
          <div className="relative mt-4">
            <div className="relative flex items-center">
              <input
                className=" relative w-[90%] max-w-[90%] md:max-w-[90%] m-auto md:m-0 p-2 pl-8 rounded-lg border focus:outline-none"
                type="text"
                autoFocus
                placeholder="Search..."
                onChange={(e) => setText(e.target.value)}
              />
              <button
                onClick={handleClick}
                className="absolute left-[30px] md:left-[10px] top-2 text-gray-300"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </header>

        <div className="flex justify-center md:justify-start gap-4 flex-wrap">
          {filteredNotes.length === 0 ? (
            <p className="text-black max-w-[200px] m-auto text-lg md:text-2xl">No notes found</p>
          ) : (
            filteredNotes.map((note) => <NoteItem key={note.id} note={note} />)
          )}
        </div>
        <div className="mt-4 text-center">
          <Link to="/create-note">
            <button className=" fixed right-4 top-[400px] md:top-[400px] md:mr-[100px] rounded-full bg-slate-500 text-white w-12 h-12 flex justify-center items-center mx-auto">
              +
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notes;
