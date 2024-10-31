import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "@/Components/Button";
import line from "../../assets/line.svg";
import { myProfile } from "@/Data/MyData";

function Projects() {
  const { projectItems } = myProfile;
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/allprojects");
  };

  return (
    <div className="w-[70vw] min-h-screen relative flex flex-col gap-10 pb-[120px]">
      <div className="mt-16 w-full flex items-center justify-between border-2 shadow-slate-400 border-gray-800 p-10 rounded-lg">
        <h4 className="text-white font-Alata text-center text-5xl tracking-wider uppercase">
          {" About Me"}
        </h4>

        <div>
          <Button
            onClick={() => {
              navigate("/about");
            }}
            text={"Click here"}
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-between font-Mukta  text-white">
        <div className="flex-2 flex-col w-full items-center justify-center grid grid-cols-3 gap-10 mt-20">
          {projectItems.map((item, index) => (
            <div
              key={index}
              className="h-[150px] rounded-lg p-6 shadow-md transition-transform transform hover:scale-105
                 bg-gradient-to-br from-transparent via-black to-transparent bg-opacity-80 
                 border border-pink-600 backdrop-blur-md"
            >
              <p className="text-xl bg-transparent font-medium text-white">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 w-full flex items-center justify-between border-2 shadow-slate-400 border-gray-800 p-10 rounded-lg">
        <h4 className="text-white font-Alata text-center text-5xl tracking-wider uppercase">
          {"My PROJECTS"}
        </h4>

        <div className="mt-[20px]">
          <Button onClick={handleclick} text={"Click here"} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
