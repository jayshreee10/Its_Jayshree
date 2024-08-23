import React from "react";
import { myProfile } from "@/Data/MyData";
import Timeline from "./Sections/Timeline";
import Projects from "./Sections/Projects";
// import TechTools from "@/Components/TechTools";
function About() {
  // Destructure the necessary data from myProfile.Aboutus
  const {
    intro: aboutMe,
    technologies: { text: techUse },
  } = myProfile.Aboutus;
  const { name, title,company } = myProfile;
  return (
    // Main container for the About section
    <section className="h-auto w-full py-[115px] bg-black text-white flex flex-col items-center justify-center font-Alata tracking-wider">
      
      {/* <h1 className="text-5xl mb-10 font-Alice text-LayoutPink font-semibold">
        ABOUT ME
      </h1> */}
      {/* About Me title */}
      <p className="text-left w-[70vw] max-w-[70vw] py-10">
        <p className="text-4xl py-2">{name}</p>
        <p className="py-2 text-LayoutPink">{title}</p>
        <p className="text-LayoutPink">{company}</p>
      </p>
     

      {/* Introductory paragraph about the user */}
      <p className="max-w-[70vw] text-justify text-xl mb-10 leading-relaxed">
        {aboutMe}
      </p>

      {/* Technologies the user uses */}
      <p className="text-2xl font-semibold text-LayoutPink">{techUse}</p>
      {/* <TechTools /> */}
      <Projects />
      <Timeline />
    </section>
  );
}

export default About;
