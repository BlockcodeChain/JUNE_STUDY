import { Search } from "lucide-react";

const Searchbar = ({ searchTerm, setSearchTerm }) => {

  return (

    <div className="mt-8">

      <div className="flex justify-center gap-3">

        <input
          type="text"
          placeholder="Search Products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-2/3 h-12 rounded-full px-6 bg-white text-black shadow-lg outline-none"
        />

        <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full">

          <Search size={20} />

        </button>

      </div>

    </div>

  );
};

export default Searchbar;