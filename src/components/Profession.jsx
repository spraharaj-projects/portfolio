import React from "react";
import bracket from "../assets/Bracket2.svg";

const Profession = () => {
  return (
    <div className="h-60 w-full ms-10 bg-sky-950 bg-opacity-40 rounded-xl">
      <div className="p-3 bg-sky-950 w-full bg-opacity-60 flex gap-2 justify-end rounded-t-xl">
        <div className="h-3 w-3 bg-green-600 rounded-full"></div>
        <div className="h-3 w-3 bg-yellow-600 rounded-full"></div>
        <div className="h-3 w-3 bg-red-600 rounded-full"></div>
      </div>
      <div className="flex items-center justify-evenly h-5/6 gap-5 font-mono">
        <div
          className="relative glitch text-7xl text-gray-300 z-[0] before:content-[attr(data-text)] before:absolute before:z-[-1] before:w-[110%] after:content-[attr(data-text)] after:absolute after:z-[-1] after:w-[110%] before:top-[10px] before:left-[15px] before:text-pink-600 after:top-[5px] after:left-[-10px] after:text-cyan-300 before:animate-glitch-a after:animate-glitch-b"
          data-text="I’m a"
        >
          <span className="animate-[paths_5s_step-end_infinite]">I’m a</span>
        </div>
        <img className="origin-center rotate-180 " src={bracket} />
        <div className="flex flex-col text-cyan-300 text-2xl gap-3">
          <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-green-400 text-3xl">
            Specialist Programmer
          </span>
          <span className="relative left-5">{">"} Data Engineer</span>
          <span className="relative left-5">{">"} Fullstack Developer</span>
        </div>
        <img src={bracket} />
      </div>
    </div>
  );
};

export default Profession;
