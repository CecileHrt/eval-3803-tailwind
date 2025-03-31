import React from "react";

export default function Header() {
  return (
    <div className="p-4 w-full shadow-sm flex justify-between items-center">
      {/* logo */}
      <a href="" className="text-red-500 text-xl font-bold">
        Airbed & Breakfast
      </a>

      <nav>
        {/* menu burger */}
        <div className="md:hidden">
          <div className="w-6 h-1 mb-1 rounded bg-gray-700 flex column "></div>
          <div className="w-6 h-1 mb-1 rounded bg-gray-700 flex column "></div>
          <div className="w-6 h-1 rounded bg-gray-700 flex column "></div>
        </div>

        {/* navigation */}
        <ul className=" flex space-x-5 justify-between max-md:hidden">
          <li className="">
            <a className="text-gray-700 hover:text-gray-900 " href="">
              Maisons
            </a>
          </li>
          <li>
            <a href="" className="text-gray-700 hover:text-gray-900">
              Appartements
            </a>
          </li>
          <li>
            <a href="" className="text-gray-700 hover:text-gray-900">
              Villas
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
