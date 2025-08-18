import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

interface Van {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  type: string;
  description: string;
}

const VanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState<Van | null>(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.van));
  }, [params.id]);

  if (!van) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-amber-50 min-h-screen p-6">

        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <img
            src={van.imageUrl}
            alt={van.name}
            className="w-full h-64 object-cover rounded-md mb-4"
          />

          <span
            className={`inline-block mb-3 px-3 py-1 text-sm font-semibold rounded ${
              van.type === "simple"
                ? "bg-orange-200 text-orange-800"
                : van.type === "luxury"
                ? "bg-black text-white"
                : "bg-green-200 text-green-800"
            }`}
          >
            {van.type}
          </span>

          <h1 className="text-2xl font-bold mb-2">{van.name}</h1>
          <p className="text-lg font-semibold mb-4">${van.price}/day</p>

          <p className="text-gray-700 mb-6">{van.description}</p>

          <button className="w-full bg-orange-500 text-white py-3 rounded font-semibold hover:bg-orange-600 transition">
            Rent this van
          </button>
        </div>
      </div>
    </>
  );
};

export default VanDetail;
