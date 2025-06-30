import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  if (tasks.length === 0) {
    return (
      <div className="mt-4 bg-gray-700 p-6 rounded text-gray-400 text-center">
        <div className="text-3xl">📝</div>
        No tasks yet. Add one to get started!
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
