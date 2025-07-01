import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";

export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className="flex justify-between items-center bg-gray-700 px-4 py-3 rounded-md mb-2">
      <div className="flex items-center gap-3">
        <div
          onClick={() => onToggle(task.id)}
          className={`w-5 h-5 rounded-full border-2 cursor-pointer flex items-center justify-center ${
            task.completed ? "bg-cyan-500 border-cyan-500" : "border-gray-400"
          }`}
        >
          {task.completed && (
            <div className="w-2.5 h-2.5 bg-white rounded-full" />
          )}
        </div>

        <span
          className={`text-base ${
            task.completed ? "line-through text-gray-400" : "text-white"
          }`}
        >
          {task.text}
        </span>
      </div>

      <div className="flex items-center gap-3 text-lg">
        <button
          onClick={() => onEdit(task)}
          className="text-cyan-400 hover:text-cyan-300 opacity-80"
        >
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-white hover:text-red-400 opacity-60 text-xl"
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
}
