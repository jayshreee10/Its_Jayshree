import React from "react";

const TechItems = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 border-white bg-transparent text-white transition duration-300 ease-in-out rounded-md py-2 px-5 flex items-center justify-center"
    >
      {children}
    </button>
  );
};

export default TechItems;
