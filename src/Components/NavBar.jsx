import React from "react";
import { LuCommand } from "react-icons/lu";
import { AiOutlineSpotify } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const navItems = [
    <LuCommand size={20} />,
    <AiOutlineSpotify
      size={20}
      onClick={() => navigate("/spotify/allplaylists")}
    />,
  ];

  return (
    <div className="fixed z-10 w-full bg-black flex items-center justify-center text-white py-10 font-Rubik">
      <div className="flex justify-between items-center w-[70vw]">
        <div
          className="font-Lobster text-2xl font-extrabold cursor-pointer"
          onClick={() => navigate("/")}
        >
          J.
        </div>

        <div className="flex items-center justify-end max-md:hidden cursor-pointer">
          {navItems.map((value, index) => (
            <p
              key={index}
              className={`${
                index < navItems.length - 1 ? "mr-10" : ""
              } flex items-center justify-center`}
            >
              {value}
            </p>
          ))}
        </div>

        <div className="flex items-center justify-end w-[50vw] md:hidden">
          <LuCommand size={25} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
