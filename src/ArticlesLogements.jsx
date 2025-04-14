import React from "react";
import Gite from "./Gite";

export default function ArticlesLogements() {
  const listings = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Villa de Luxe",
      location: "Nice, France",
      price: "250",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Chalet Montagne",
      location: "Chamonix, France",
      price: "180",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Maison Bohème",
      location: "Bordeaux, France",
      price: "120",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Loft Design",
      location: "Paris, France",
      price: "300",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Cabane en forêt",
      location: "Lille, France",
      price: "90",
    },
  ];
  return (
    <div className="px-5 py-10 bg-gray-200">
      <h2 className="text-2xl pl-2 font-medium mb-4">Logements disponibles</h2>
      <div className="p-3 pl-0 products-list flex max-xl:overflow-x-scroll flex-nowrap ">
        {listings.map((article) => (
          <Gite key={article.id} hebergement={article} />
        ))}
      </div>
    </div>
  );
}
