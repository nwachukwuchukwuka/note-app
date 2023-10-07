import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import FormatDate from "../components/FormatDate";

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const date = FormatDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && detail) {
      const note = {
        id: uuid(),
        title,
        detail,
        date,
      };
      setNotes((prevNotes) => [note, ...prevNotes]);
      navigate("/");
    }
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
        <h1 className="text-2xl font-semibold mt-4">Create a New Note</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            autoFocus
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-md py-2 px-3 focus:outline-none"
          />
          <textarea
            rows="6"
            placeholder="Note details..."
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            className="w-full mt-3 border rounded-md py-2 px-3 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Save
          </button>
        </form>
      </section>
    </div>
  );
};

export default CreateNote;
