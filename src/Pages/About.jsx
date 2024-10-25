import React from "react";
import { myProfile } from "@/Data/MyData";
import Timeline from "./Sections/Timeline";
import Projects from "./Sections/Projects";
import jayshree from "../assets/jayshree.jpg";

// import TechTools from "@/Components/TechTools";
function About() {
  const {
    intro: aboutMe,
    technologies: { text: techUse },
  } = myProfile.Aboutus;
  const { name, title, company } = myProfile;
  return (
    <section className="h-auto w-full py-[115px] bg-black text-white flex flex-col items-center justify-center font-Alata tracking-wider">
      {/* <h1 className="text-5xl mb-10 font-Alice text-LayoutPink font-semibold">
        ABOUT ME
      </h1> */}
      {/* About Me title */}
      <div className="flex items-center w-[70vw] max-w-[70vw] justify-start gap-10">
        <div
          className="bg-white border-2 rounded-full shadow-lg "
          style={{
            width: "9rem",
            height: "9rem",
            backgroundImage: `url(${jayshree})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <p className="text-left  py-10">
          <p className="text-4xl py-2">{name}</p>
          <p className="py-2 text-gray-500">{title}</p>
          <p className="text-gray-500">{company}</p>
        </p>
      </div>

      {/* Introductory paragraph about the user */}
      <p className="max-w-[70vw] text-justify text-xl mb-10 leading-relaxed">
        {aboutMe}
      </p>

      {/* Technologies the user uses */}
      <p className="text-2xl font-semibold text-LayoutPink">{techUse}</p>
      {/* <TechTools /> */}

      <Timeline />
    </section>
  );
}

export default About;
