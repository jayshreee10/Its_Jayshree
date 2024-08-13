import React from "react";
import { LuCommand } from "react-icons/lu";

function NavBar() {
  // Array containing navigation items
  const navItems = [<LuCommand size={20} />, "BLOG", "GUESTBOOK"];

  return (
    // Main container for the navigation bar
    <div className="w-full bg-black flex text-white items-center justify-evenly py-10 font-Rubik">
      {/* Logo or brand name */}
      <div className="font-Lobster text-2xl font-extrabold">J.</div>

      {/* Navigation items displayed in larger screens */}
      <div className="flex items-center justify-end w-[50vw] max-md:hidden">
        {navItems.map((value, index) => (
          <p
            key={index}
            className={`${
              index < 2 ? "mr-10" : "mr-0"
            } flex items-center justify-center`}
          >
            {value}
          </p>
        ))}
      </div>

      {/* Command icon for mobile view */}
      <div className="flex items-center justify-end w-[50vw] md:hidden">
        <LuCommand size={25} />
      </div>
    </div>
  );
}

export default NavBar;
