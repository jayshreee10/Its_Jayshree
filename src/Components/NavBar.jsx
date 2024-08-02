import React from "react";
import { LuCommand } from "react-icons/lu";
import { FiSun } from "react-icons/fi";
function NavBar() {
  return (
    <div className="w-full bg-black flex text-white items-center justify-evenly py-10">
      <div className="font-Lobster text-2xl font-extrabold  ">J.</div>
      <div className="flex items-center  justify-end w-[50vw]">
        <LuCommand size={20} /> + K
        <div className="text-sm  font-semibold px-5">BLOG</div>
        {/* <span className="p-2 bg-pink-700 rounded-xl"><FiSun size={20}/></span> */}
      </div>
    </div>
  );
}

export default NavBar;
