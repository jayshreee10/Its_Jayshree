import { myProfile } from "@/Data/MyData";
import Timeline from "./Sections/Timeline";
import jayshree from "../assets/jayshree.jpg";
import TechItems from "@/Components/TechItems";

function About() {
  const {
    intro: aboutMe,
    technologies: { text: techUse },
  } = myProfile.Aboutus;

  const { frontend } = myProfile;

  // Define frontend technologies with icons

  const { name, title, company } = myProfile;

  return (
    <section className="h-auto w-full py-[115px] bg-black text-white flex flex-col items-center justify-center font-Alata tracking-wider">
      {/* About Me title */}
      <div className="flex items-center w-[70vw] max-w-[70vw] justify-start gap-10">
        <div
          className="bg-white border-2 rounded-full shadow-lg"
          style={{
            width: "9rem",
            height: "9rem",
            backgroundImage: `url(${jayshree})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <p className="text-left py-10">
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
      <div className="grid grid-cols-4 gap-5 pt-10 pb-24 w-[70vw]">
        {frontend.map((tech, index) => (
          <TechItems key={index}>
            <div className="flex gap-2 items-center justify-center">
              <img src={tech.icon} className="size-[22px]" />
              {tech.name}
            </div>
          </TechItems>
        ))}
      </div>
      <Timeline />
    </section>
  );
}

export default About;
