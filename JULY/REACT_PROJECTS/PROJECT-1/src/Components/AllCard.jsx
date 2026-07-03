import { useState } from "react";
import { data } from "./data";
import Searchbar from "./Searchbar";

const AllCard = () => {
  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Searchbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="max-w-7xl mx-auto mt-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="h-60 w-full object-cover"
                />

                <div className="p-5">
                  <h2 className="font-bold text-lg line-clamp-1">
                    {item.title}
                  </h2>

                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-blue-600">
                      ${item.price}
                    </span>

                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
                      ⭐ {item.rating}
                    </span>
                  </div>

                  <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-center text-3xl font-bold col-span-4 text-red-500">
              No Product Found 😢
            </h1>
          )}

        </div>
      </div>
    </>
  );
};

export default AllCard;