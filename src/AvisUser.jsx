import React from "react";

export default function AvisUser({ avis }) {
  return (
    <div className="bg-white p-3 rounded-md shadow-sm m-2 block w-80 max-md:w-full">
      <h3 className="text-l font-medium mb-1">{avis.name}</h3>
      <p className="text-gray-500 bg-white mb-1">{avis.review}</p>
    </div>
  );
}
