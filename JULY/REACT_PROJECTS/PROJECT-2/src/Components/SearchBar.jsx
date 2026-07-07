const SearchBar = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Student..."
          className="w-full h-12 rounded-xl border border-gray-300 bg-white pl-4 pr-28 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg transition">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;