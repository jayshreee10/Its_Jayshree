import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Projects() {
    const navigate = useNavigate()
  const  handleclick = ()=>{
    navigate("/allprojects")
  }
  return (
    <div className="w-[70vw] font-Mukta">
      <h4 className="font-Alata tracking-wider text-4xl py-5">PROJECTS</h4>
    <ul className="text-xl ">
        <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, eum!
        </li>
        
    </ul>
      <p 
      onClick={()=>{handleclick()}}
      className="flex items-center justify-end w-[70vw] my-28 text-lg font-semibold cursor-pointer">
        All Projects
        <span className="ml-2">
          <FaLongArrowAltRight />
        </span>{" "}
      </p>
    </div>
  );
}

export default Projects;
