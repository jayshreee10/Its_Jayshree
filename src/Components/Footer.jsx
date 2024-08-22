import { MdCopyright } from "react-icons/md";
import { PiDotOutlineFill } from "react-icons/pi";
import Social from "./Social";
function Footer() {
 

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
      <Social />
      </div>
    </div>
  );
}

export default Footer;
