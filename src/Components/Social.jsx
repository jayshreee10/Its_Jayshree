import React from "react";
import { FiHome } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { SiMaildotru } from "react-icons/si";
import { SlSocialSpotify } from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";
import { TiSocialLinkedin } from "react-icons/ti";
function Social() {
  const footerIcons = [
    {icon:<FiHome size={20} />,title:"Home"},
   { icon:<TbBrandGithub size={20} />,title:"Github"},
    {icon:<TiSocialLinkedin size={26} />,title:"Linkedin"},
    {icon:<SiMaildotru size={17} />,title:"Mail"},
    {icon:<BsInstagram size={17} />,title:"Instagram"},
   { icon:<SlSocialSpotify size={20} />,title:"Spotify"}
  ];
  return (
    /* From Uiverse.io by EcheverriaJesus */
    <section class="flex justify-evenly items-center w-[40vw] ">
      {footerIcons.map((value, index) => {
        return (
          <button
            key={index}
            class="group flex justify-evenly  rounded-md drop-shadow-xl bg-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
            href="/"
          >
            {value.icon}
            <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
              {value.title}
            </span>
          </button>
        );
      })}
    </section>
  );
}

export default Social;
