export default function Header({ onAddClick }) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-cyan-400">Todo List App</h1>
      <p className="text-gray-400">Organize your day, beautifully.</p>
      <button
        onClick={onAddClick}
        className="mt-4 w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded"
      >
        + Add New Task
      </button>
    </div>
  );
}
