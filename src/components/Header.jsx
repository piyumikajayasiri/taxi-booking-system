import React from "react";
import { Menu } from "lucide-react";
export const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-yellow-500" size={24} />
          <span className="font-bold text-xl text-yellow-500">
            TaxiBookingApp
          </span>
        </div>
        <nav className=" flex justify-center items-center md:flex gap-6">
          <a href="#" className="text-black hover:text-yellow-500">
            Home
          </a>
          <a href="#" className="hover:text-yellow-500 text-black">
            Services
          </a>
          <a href="#" className="hover:text-yellow- text-black">
            About
          </a>
          <a
            href="#"
            className="hover:text-yellow-500 hover:bg-black bg-yellow-500 px-5 py-2 text-black"
          >
            Sign In
          </a>
          <a
            href="#"
            className="hover:text-yellow-500 hover:bg-black bg-yellow-500 px-5 py-2 text-black"
          >
            Sign Up
          </a>
        </nav>
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};
