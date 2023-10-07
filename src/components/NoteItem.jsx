import React from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  return (
    <div className="w-[250px] md:w-[200px] shadow-lg px-[20px] pt-[10px] h-[130px] bg-gray-300">
      <Link to={`/edit-note/${note.id}`}>
        <h4 className="mb-[10px]">
          {note.title.length > 50
            ? note.title.substr(0, 50) + "..."
            : note.title}
        </h4>
        <h4>{note.date}</h4>
      </Link>
    </div>
  );
};

export default NoteItem;
