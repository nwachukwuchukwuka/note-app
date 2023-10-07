import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import FormatDate from "../components/FormatDate";

const EditNotes = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id == id);
  const [title, setTitle] = useState(note.title);
  const [detail, setDetail] = useState(note.detail);
  const date = FormatDate();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    if (title && detail) {
      const newNote = { ...note, title, detail, date };
      const newNotes = notes.map((item) => {
        if (item.id == id) {
          item = newNote;
        }
        return item;
      });

      setNotes(newNotes);
    }
    navigate("/");
  };
  const handleDelete = () => {
    const newNotes = notes.filter((item) => item.id != id);
    setNotes(newNotes);

    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <section className="bg-white rounded-lg p-6 shadow-md w-[300px] md:w-[600px]">
        <Link to="/" className="text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 inline-block mr-1 -mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-2xl font-semibold mt-4">Edit Note</h1>
        <form className="mt-4">
          <input
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            autoFocus
            placeholder="Title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full overflow-hidden mt-3 border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            rows="6"
            placeholder="Note details..."
            value={detail}
            required
            onChange={(e) => setDetail(e.target.value)}
          ></textarea>
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleClick}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Save
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
            >
              Delete
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EditNotes;
