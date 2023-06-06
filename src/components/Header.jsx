import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full text-white font-serif z-50">
      <nav className="flex justify-between">
        <div className="ms-[80px] mt-14">
          <div className={"h-12 w-12 bg-logo bg-cover hover:opacity-80 rounded"}>Hi</div>
        </div>
        <div className="w-auto flex flex-col gap-3 justify-end items-end  bg-opacity-50 bg-gray-800 mt-8 me-16 rounded-xl text-lg py-5">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return `${
                isActive
                  ? "text-cyan-300 bg-opacity-10 bg-slate-400 border-current"
                  : "border-transparent"
              } w-full cursor-pointer border-x-4 hover:border-current hover:text-sky-600`;
            }}
          >
            <div className="flex justify-center px-5  ">Home</div>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return `${
                isActive
                  ? "text-cyan-300 bg-opacity-10 bg-slate-400 border-current"
                  : "border-transparent "
              } w-full cursor-pointer hover:border-current border-x-4 hover:text-sky-600`;
            }}
          >
            <div className="flex justify-center px-5  ">About</div>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
