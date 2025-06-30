import { FaTrash, FaEdit } from "react-icons/fa";

export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className="flex justify-between items-center bg-gray-700 p-3 rounded">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 text-cyan-500"
        />
        <span
          className={`text-white ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.text}
        </span>
      </div>
      <div className="flex gap-2 text-lg">
        <button onClick={() => onEdit(task)} className="text-cyan-400">
          <FaEdit />
        </button>
        <button onClick={() => onDelete(task.id)} className="text-red-400">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
