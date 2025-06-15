import { Plus, StickyNote } from "lucide-react";
import React, { useState } from "react";
import Notes from "./components/Notes";

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Note App" },
    { id: 2, title: "Learning react" },
  ]);
  const [isToggle, setIsToggle] = useState(false);
  const [text, setText] = useState("");
  const addNote = () => {
    if (text.length == 0) {
      setText("Please write something...");
      return;
    }
    setNotes((prev) => [
      ...prev,
      { id: new Date().toLocaleString(), title: text },
    ]);
    setText("");
    setIsToggle(false);
  };
  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="w-full max-w-screen min-h-screen flex flex-col overflow-x-hidden text-white bg-gradient-to-br from-gray-800 to-black p-6">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-5xl font-bold flex items-center gap-2 text-purple-400 drop-shadow-lg">
          <StickyNote size={40} className="text-yellow-400" />
          NOTE
        </h1>
        <p className="font-semibold text-gray-400 text-lg text-center">
          Write your thought & Download it.
        </p>
      </div>
      <div
        className="flex items-center justify-center mt-10 w-full h-20 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg shadow-lg cursor-pointer hover:scale-102 transition-all duration-300 ease-in-out"
        onClick={() => setIsToggle(true)}
      >
        <Plus size={50} />
      </div>
      {isToggle ? (
        <div className="absolute top-1/2 left-1/2 w-11/12 sm:w-2/3 md:w-1/3 transform -translate-x-1/2 -translate-y-1/2 border border-purple-500 bg-gray-900 rounded-lg flex flex-col items-center gap-2 p-6">
          <h1 className="md:text-3xl text-xl font-semibold">
            Write Your Notes...
          </h1>
          <textarea
            name="note"
            id="note"
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="text-white bg-gray-700 rounded-lg w-full h-40 p-4 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <div className="flex gap-2">
            <button
              className="bg-purple-600 px-6 py-2 rounded-lg mt-4"
              onClick={addNote}
            >
              Add
            </button>
            <button
              className="bg-purple-600 px-6 py-2 rounded-lg mt-4"
              onClick={() => setIsToggle(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div>
        {notes.length > 0 ? (
          <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
            {notes.map((note) => (
              <Notes id={note.id} note={note.title} key={note.id} deleteNote={deleteNote}/>
            ))}
          </div>
        ) : (
          <h1>No Notes Available</h1>
        )}
      </div>
    </div>
  );
};

export default App;
