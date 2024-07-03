import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  console.log(category)


  return (
    <div className="grid md:grid-cols-3 mt-7 mb-12 place-items-center gap-5 p-5 w-full">
      {category.map((cat, idx) => (
        <div
          key={idx}
          className="bg-[#14213D] h-[300px] rounded-xl bg-cover"
          style={{ backgroundImage: `url(${cat.image})`}}
        >
          <div className="bg-[#14213D] hover:scale-105 hover:backdrop-blur-xl transition-all ease-in-out p-5 h-full w-full bg-opacity-70 space-y-3 rounded-xl border flex flex-col justify-center">
            <p className="text-3xl font-semibold text-[#FCA311] font-satisfy">{cat.name}</p>
            <p className="text-gray-200">{cat.description}</p>
            <div className="text-white">
              <span className="text-gray-50 underline">
                Available Locations :
              </span>
              {cat.locations.map((location, idx) => (
                <p
                  key={idx}
                  className="text-gray-300 flex items-center gap-2 mt-1"
                >
                  <FaLocationDot />
                  {location}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
