"use client";
import { useState } from "react";
import { myProfile } from "../Data/MyData";
import jayshree from "../assets/jayshree.jpg";
import Button from "./Button";
import Particles from "../magic/magicui/particles";
const ParticlesDemo = () => {
  const [color, setColor] = useState("#ffffff");
  const myName = myProfile.name;
  
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden pb-10  bg-black md:shadow-xl">
      <span className=" whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        <div className="flex-col flex justify-center items-center ">
          <div className="mb-6 flex flex-col justify-evenly items-center w-full z-10 p-20">
            <div
              className="profileImg bg-white size-[9rem] border-2 rounded-full "
              style={{
                backgroundImage: `url(${jayshree})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="  myName text-7xl py-5 mb-5  text-white font-semibold font-Lobster">
              {myName}
            </div>
            <Button text={"ABOUT ME"} />
          </div>
        </div>
      </span>
      <Particles
        className="absolute inset-0"
        quantity={300}
        ease={100}
        color={color}
        refresh
      />
    </div>
  );
};

export default ParticlesDemo;
