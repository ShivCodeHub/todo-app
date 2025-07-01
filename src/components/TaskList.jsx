import TaskItem from "./TaskItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

export default function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  if (tasks.length === 0) {
    return (
      <div className="mt-4 bg-gray-700 p-6 rounded text-gray-400 text-center">
        <FontAwesomeIcon icon={faClipboardList} className="text-3xl mb-2" />
        <div>No tasks yet. Add one to get started!</div>
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
