import React from "react";

export default function Footer() {
  return (
    <div className="flex  pt-8 pl-10 pr-10 pb-11  justify-evenly bg-gray-800 max-md:flex-col">
      <div className="w-1/5 p-3  max-md:w-full ">
        <h4 className="text-white text-xl mb-3 font-bold">A propos</h4>
        <p className="text-white">
          Nous aidons les voyageurs à trouver le logement idéal.
        </p>
      </div>

      <div className="w-1/5 p-3 max-md:w-full ">
        <h4 className="text-white text text-xl mb-3 font-bold">Support</h4>
        <a className="text-white hover:underline block">Contact</a>
        <a className="text-white hover:underline block">FAQ</a>
      </div>
      <div className="w-1/5 p-3 max-md:w-full ">
        <h4 className="text-white text text-xl mb-3 font-bold">Suivez-nous</h4>
        <a className="text-white hover:underline block">Facebook</a>
        <a className="text-white hover:underline block">Instagram</a>
      </div>
      <div className="w-1/5 p-3 max-md:w-full  ">
        <h4 className="text-white text text-xl mb-3 font-bold">
          Mentions légales
        </h4>
        <a className="text-white hover:underline block">Conditions générales</a>
        <a className="text-white hover:underline block">
          Politique de confidentialité
        </a>
      </div>
    </div>
  );
}
