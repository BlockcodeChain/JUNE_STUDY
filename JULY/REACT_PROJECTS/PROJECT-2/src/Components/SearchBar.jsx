const SearchBar = () => {
  return (
    <div className="w-1/2 mx-auto mt-10">
      <div className="flex relative">
        <input
        type="text"
        placeholder="Search Student..."
        className="w-full h-12 px-4 rounded-lg bg-white text-black outline-none"
      />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-md">Search</button>
      </div>
    </div>
  );
};
1
export default SearchBar;