import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "@/Components/Button";
import line from "../../assets/line.svg";

function Projects() {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/allprojects");
  };

  // Sample project items
  const projectItems = [
    "Proficient in the MERN stack and modern frontend frameworks, especially React.js.",
    "Completed over 10 client projects at Embrays Technologies, working across both frontend and backend.",
    "Developed 30+ projects, showcasing a diverse range of skills and technologies.",
    "Implemented CI/CD pipelines to streamline deployment and improve project delivery.",
    "Optimized website performance, enhancing Core Web Vitals and improving scores from 60 to 97.",
    "Integrated complex API functionalities, including REST and GraphQL, to create dynamic, data-driven apps.",
    "Worked on protected routes, JWT authentication, and custom state management solutions.",
    "Enhanced project features with tools such as Firebase, Netlify, and Chrome DevTools for efficient development.",
    "Certified in frontend development and assessed in TCS NQT and Amcat for technical proficiency.",
  ];

  return (
    <div className="w-[70vw] min-h-screen relative flex flex-col gap-10">
      <div className="mt-16 w-full flex items-center justify-between">
        <h4 className="text-white font-Alata text-center text-7xl tracking-wider">
          {" About Me"}
        </h4>

        <div className="mt-[20px]">
          <Button
            onClick={() => {
              navigate("/about");
            }}
            text={"Click here"}
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-between font-Mukta  text-white">
        <div className="flex-2 flex-col w-full items-center justify-center grid grid-cols-3 gap-10 mt-20 ">
          {projectItems.map((item, index) => (
            <div
              key={index}
              className="bg-pink-600 bg-opacity-70 h-[150px] rounded-lg p-6 shadow-md transition-transform transform hover:scale-105"
            >
              <p className="text-xl font-medium bg-transparent">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 w-full flex items-center justify-between">
        <h4 className="text-white font-Alata text-center text-7xl tracking-wider">
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
