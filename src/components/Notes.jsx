import { Save, Trash } from "lucide-react";
import React from "react";

const Notes = ({ note, id, deleteNote }) => {
  const handleDownload = (e) => {
    e.preventDefault();
    const blob = new Blob([note], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${note.slice(0, 5)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col justify-between w-full sm:w-64 h-64 bg-gray-800 rounded-xl shadow-md p-4 transition-transform hover:scale-105 duration-300">
      {/* ID Box */}
      <div className="bg-purple-600 rounded-md px-3 py-1 text-white text-center text-sm font-medium">
        {id}
      </div>

      {/* Centered Note Title */}
      <div className="flex-grow flex items-center justify-center px-2">
        <h1 className="text-lg font-semibold text-center text-white break-words">
          {note}
        </h1>
      </div>

      {/* Button Group */}
      <div className="flex justify-between mt-2 gap-4">
        <button
          className="flex-1 bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition"
          onClick={() => deleteNote(id)}
        >
          <Trash className="mx-auto" size={20} />
        </button>
        <button
          className="flex-1 bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition"
          onClick={handleDownload}
        >
          <Save className="mx-auto" size={20} />
        </button>
      </div>
    </div>
  );
};

export default Notes;
