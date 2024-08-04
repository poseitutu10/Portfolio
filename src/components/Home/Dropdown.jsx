import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen }) => {
  return (
    <div
      className={`flex ${
        isOpen ? "flex" : "hidden"
      } items-center justify-between bg-blue-500 p-4`}
    >
      {isOpen && (
        <div className=" text-gray-700 p-5 flex gap-5 w-full">
          <div className="w-full bg-blue-400 p-3 text-white cursor-pointer flex justify-center items-center">
            <Link to="/" className="w-full">
              Home
            </Link>
          </div>
          <div className="w-full bg-blue-400 p-3 text-white cursor-pointer flex justify-center items-center">
            <Link to="/about" className=" w-full">
              About
            </Link>
          </div>
          <div className="w-full bg-blue-400 p-3 text-white cursor-pointer flex justify-center items-center">
            <Link to="/projects" className="w-full">
              Projects
            </Link>
          </div>
          <div className="w-full bg-blue-400 p-3 text-white cursor-pointer flex justify-center items-center">
            <Link to="/contact" className="w-full">
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;