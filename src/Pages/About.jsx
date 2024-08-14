import React from "react";
import { myProfile } from "@/Data/MyData";
import TechTools from "@/Components/TechTools";
function About() {
  // Destructure the necessary data from myProfile.Aboutus
  const {
    intro: aboutMe,
    technologies: { text: techUse },
  } = myProfile.Aboutus;

  return (
    // Main container for the About section
    <section className="h-screen w-full bg-black text-white flex flex-col items-center justify-center font-Alata tracking-wider">
      {/* About Me title */}
      <h1 className="text-5xl mb-10 font-Alice text-LayoutPink font-semibold">
        ABOUT ME
      </h1>

      {/* Introductory paragraph about the user */}
      <p className="max-w-[70vw] text-justify text-xl mb-10 leading-relaxed">
        {aboutMe}
      </p>

      {/* Technologies the user uses */}
      <p className="text-2xl font-semibold text-LayoutPink">{techUse}</p>
      <TechTools />
    </section>
  );
}

export default About;
