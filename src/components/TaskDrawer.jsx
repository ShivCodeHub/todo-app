import { useEffect, useState } from "react";

export default function TaskDrawer({ open, onClose, onSave, editingTask }) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(editingTask ? editingTask.text : "");
  }, [editingTask]);

  if (!open) return null;

  return (
<div className="fixed inset-0  bg-black/40  flex justify-end z-50">

      <div className="w-full max-w-md  bg-gray-800 h-full p-6 relative shadow-lg">
        <h2 className="text-xl font-semibold text-cyan-400">
          {editingTask ? "Edit Task" : "Add New Task"}
        </h2>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-xl"
        >
          ✕
        </button>
        <label className="block mt-6 text-gray-300">Task Description</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="w-full mt-2 p-3 rounded bg-gray-700 text-white"
          rows={4}
        />
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-white"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (text.trim()) onSave(text.trim());
            }}
            className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded text-white"
          >
            💾 Save Task
          </button>
        </div>
      </div>
    </div>
  );
}
