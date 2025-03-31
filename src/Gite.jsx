import React from "react";

export default function Gite({ hebergement }) {
  return (
    <a className="bg-white p-3 rounded-md shadow-sm m-2 block  min-w-3xs w-3xs">
      <img
        className="h-[160px] w-full object-cover hover:rotate-2  ease-in-out duration-100 rounded-md mb-1 "
        src={hebergement.image}
        alt={hebergement.title}
      />
      <h3 className="text-xl font-medium mb-1">{hebergement.title}</h3>
      <p className="text-gray-500 bg-white mb-1">{hebergement.location}</p>
      <h4 className="text-red-600 font-bold">{hebergement.price} € : nuit</h4>
    </a>
  );
}
