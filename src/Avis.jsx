import React from "react";
import AvisUser from "./AvisUser";

export default function ArticlesLogements() {
  const reviews = [
    {
      id: 1,
      name: "Sophie L.",
      review: "Super séjour ! Maison très propre et bien située.",
    },
    {
      id: 2,
      name: "Thomas B.",
      review: "Hôte très sympathique, je recommande à 100% !",
    },
    { id: 3, name: "Emma D.", review: "Excellente expérience, on reviendra." },
  ];
  return (
    <div className="px-5 py-10">
      <h2 className="text-2xl pl-2 font-medium mb-4">Avis clients</h2>
      <div className="py-3 px-0 products-list flex max-md:flex-col ">
        {reviews.map((avisClt) => (
          <AvisUser key={avisClt.id} avis={avisClt} />
        ))}
      </div>
    </div>
  );
}
