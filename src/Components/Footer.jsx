import { BsInstagram } from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import { MdCopyright } from "react-icons/md";
import { PiDotOutlineFill } from "react-icons/pi";
import { SiMaildotru } from "react-icons/si";
import { SlSocialSpotify } from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";
import { TiSocialLinkedin } from "react-icons/ti";

function Footer() {
  const footerIcons = [
    <FiHome size={20} />,
    <TbBrandGithub size={20} />,
    <TiSocialLinkedin size={26} />,
    <SiMaildotru size={17} />,
    <BsInstagram size={17} />,
    <SlSocialSpotify size={20} />,
  ];

  return (
    <div className="bg-black w-full flex items-center justify-evenly py-10">
      <div className="flex items-center justify-center text-gray-500 ">
        <span className="mr-2">
          <MdCopyright />
        </span>
        2024 <PiDotOutlineFill />
        Jayshree Sadangi
      </div>
      <div className="flex h-[5rem] items-center justify-between w-[15vw]">
        {footerIcons.map((value, index) => {
          return (
            <div
              key={index}
              className="text-gray-500 hover:-translate-y-1 hover:text-white"
            >
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
