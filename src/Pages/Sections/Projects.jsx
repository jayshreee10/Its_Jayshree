import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/allprojects");
  };

  return (
    <div className="w-[70vw] font-Mukta bg-black text-white text-center">
      <h4 className="font-Alata tracking-wider text-5xl font-bold py-5 text-LayoutPink">
        PROJECTS
      </h4>
      <ul className=" mt-10 text-xl flex flex-col gap-10 font-medium">
        <li>Proficient in the MERN stack.</li>
        <li>Completed over 10 client projects at Embrays Technologies.</li>
        <li>
          Developed 30+ projects, showcasing a range of skills and technologies.
        </li>
        <li>
          Contributed significantly to the design process of various
          applications.
        </li>
        <li>
          Implemented CI/CD pipelines for efficient and reliable deployment.
        </li>
        <li>
          Focus on clean code, user-centric design, and agile methodologies.
        </li>
      </ul>
      <p
        onClick={handleclick}
        className="flex items-center justify-end w-[70vw] my-28 text-lg font-bold cursor-pointer text-LayoutPink"
      >
        All Projects
        <span className="ml-2">
          <FaLongArrowAltRight />
        </span>
      </p>
    </div>
  );
}

export default Projects;
