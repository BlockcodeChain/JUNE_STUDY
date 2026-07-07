import {
  UsersRound,
  CircleCheckBig,
  CircleX,
  Eye,
  ArrowUpAZ,
  ArrowDownZA,
  Plus,
} from "lucide-react";
import Search from "./SearchBar";

const Box = () => {
  const cards = [
    {
      title: "All Students",
      value: 120,
      icon: <UsersRound size={24} />,
      color: "bg-blue-300",
    },
    {
      title: "Passed",
      value: 90,
      icon: <CircleCheckBig size={24} />,
      color: "bg-green-300",
    },
    {
      title: "Failed",
      value: 30,
      icon: <CircleX size={24} />,
      color: "bg-red-300",
    },
    {
      title: "View",
      value: "All",
      icon: <Eye size={24} />,
      color: "bg-yellow-300",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 py-6">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-5 flex items-center justify-between"
          >
            <div>
              <p className="text-gray-500 text-sm">{card.title}</p>

              <h2 className="text-3xl font-bold text-gray-800 mt-1">
                {card.value}
              </h2>
            </div>

            <div
              className={`${card.color} w-14 h-14 rounded-xl flex items-center justify-center`}
            >
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      <hr className="my-8 border-gray-300" />

      {/* Buttons + Search */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        {/* Left Buttons */}
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition w-full sm:w-auto">
            <ArrowUpAZ size={20} />
            Ascending
          </button>

          <button className="flex items-center justify-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-xl hover:bg-purple-700 transition w-full sm:w-auto">
            <ArrowDownZA size={20} />
            Descending
          </button>
        </div>

        {/* Search */}
        <div className="w-full lg:w-80">
          <Search />
        </div>

        {/* Add Button */}
        <button className="flex items-center justify-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition w-full sm:w-auto">
          <Plus size={20} />
          Add Student
        </button>
      </div>
    </div>
  );
};

export default Box;