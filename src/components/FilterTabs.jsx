export default function FilterTabs({ filter, setFilter }) {
  return (
    <div className="flex gap-2 ">
      {["all", "active", "completed"].map((type) => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-3 py-1 rounded cursor-pointer ${
            filter === type
              ? "bg-cyan-500 text-white"
              : "bg-gray-600 text-gray-300"
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
}
