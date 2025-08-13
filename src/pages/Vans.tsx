import React from "react";
import Navbar from "../components/Navbar";

const Vans = () => {
  return (
    <>
      <Navbar />
      <div className="bg-amber-50 p-4">
        <h1 className="font-bold text-4xl">Explore our van options</h1>
        {['Simple', 'Luxury', 'Rugged'].map(item => item)}
      </div>
    </>
  );
};

export default Vans
