import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import FilterTabs from "./components/FilterTabs";
import TaskDrawer from "./components/TaskDrawer";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const filteredTasks = tasks.filter((task) =>
    filter === "all"
      ? true
      : filter === "active"
      ? !task.completed
      : task.completed
  );

  const handleSave = (taskText) => {
    if (editingTask) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === editingTask.id ? { ...task, text: taskText } : task
        )
      );
    } else {
      setTasks((prev) => [
        ...prev,
        { id: Date.now(), text: taskText, completed: false },
      ]);
    }
    setDrawerOpen(false);
    setEditingTask(null);
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="h-screen bg-[#0F172A] flex justify-center items-center px-4 overflow-y-auto">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-xl min-h-[580px] flex flex-col justify-between">
        <div>
          <Header onAddClick={() => setDrawerOpen(true)} />
          <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-2 bg-gray-700 p-2 rounded">
            <span className="text-gray-400">
              {tasks.filter((t) => !t.completed).length} items left
            </span>
            <FilterTabs filter={filter} setFilter={setFilter} />
          </div>
          <TaskList
            tasks={filteredTasks}
            onToggle={toggleComplete}
            onDelete={deleteTask}
            onEdit={(task) => {
              setEditingTask(task);
              setDrawerOpen(true);
            }}
          />
        </div>
        {/* <div className="mt-10 px-4 pb-6 pt-4 rounded-lg bg-[#0F172A]"> */}
        {/* <hr className="border-t border-gray-600 mb-1" /> */}
        <div className="border-t border-gray-600 mt-6 pt-4">
          <p className="text-center text-gray-400 text-sm">
            Crafted with <span className="text-red-500">❤️</span>
            <br />
            Powered by React, TypeScript & TailwindCSS
          </p>
        </div>

      </div>

      <TaskDrawer
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
          setEditingTask(null);
        }}
        onSave={handleSave}
        editingTask={editingTask}
      />
    </div>
  );
}
