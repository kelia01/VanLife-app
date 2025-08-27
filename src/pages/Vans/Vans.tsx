import { useEffect, useState } from "react";
import { Link, NavLink, useSearchParams} from 'react-router-dom'

interface van {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  type: string;
}

const Vans = () => {
  const [vans, setVans] = useState<van[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type')
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  const typesArr = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter.toLowerCase()) : vans
  return (
    <>
    
      <div className="bg-amber-50 min-h-screen p-4">
        <h1 className="font-bold text-2xl md:text-3xl mb-4">
          Explore our van options
        </h1>
        <div className="flex gap-8 mb-6">
          {["Simple", "Luxury", "Rugged"]
          .map((type) => (
            <NavLink to={`?type=${type}`} key={type}>
            <button
              
              className="px-3 py-1 border border-gray-300 rounded hover: bg-gray-200"
              >
              {type}
            </button>
                </NavLink>
          ))}
          <NavLink to='.'>
          {typeFilter ? (
            <button className="ml-auto text-sm text-black font-semibold underline hover:underline">
            Clear filters
          </button>) : null}
          </NavLink>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {typesArr.map((van) => (
            <div key={van.id} className="bg-white rounded shadow">
                <Link to={`/van/${van.id}`}>
              <img
                src={van.imageUrl}
                alt={van.name}
                className="w-full h-48 object-cover rounded-t"
              />
              <div className="p-4">
                <div className="flex justify-between">
                  <h2 className="font-bold text-lg">{van.name}</h2>
                  <p className="text-gray-700 font-semibold">
                    ${van.price}/day
                  </p>
                </div>

                <span
                  className={`inline-block mt-2 px-2 py-1 text-xs font-semibold rounded ${
                    van.type === "simple"
                      ? "bg-orange-200 text-orange-800"
                      : van.type === "luxury"
                      ? "bg-black text-white"
                      : "bg-green-200 text-green-800"
                  }`}
                >
                  {" "}
                  {van.type}{" "}
                </span>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Vans;
