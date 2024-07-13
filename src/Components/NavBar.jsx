import React from "react";
import { LuCommand } from "react-icons/lu";
function NavBar() {
  return (
    <div className="w-full bg-black flex text-white items-center justify-evenly py-10">
      <div className="font-Lobster text-2xl font-extrabold  ">J.</div>
      <div className="flex items-center justify-end w-[50vw]">
        <LuCommand size={20} /> + K
      </div>
    </div>
  );
}

export default NavBar;
