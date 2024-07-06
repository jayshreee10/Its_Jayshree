import React from "react";
import { CgFileDocument } from "react-icons/cg";
import { PiMailboxDuotone } from "react-icons/pi";
import Button from "../Components/Button";
import { myProfile } from "../Data/MyData";
function Home() {
  const myName = myProfile.name;
  const title = myProfile.title;
  const mail = myProfile.contact.email;
  return (
    <div className="Home bg-LayoutBlue h-[100vh] w-full flex justify-center items-center">
      <div className="flex-col ">
        <div className="mb-10">
          <div className="bg-white h-[10rem] w-[10rem] rounded-full mb-3"></div>
          <div className="text-2xl text-white font-semibold mb-2">{myName}</div>
          <div className="text-sm text-gray-400">{title}</div>
        </div>

        <div className="text-white text-justify max-w-6xl mb-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At vel vero
          quis temporibus consequuntur sed itaque facere est debitis,
          accusantium illum consequatur, laboriosam cumque nulla voluptatem
          voluptas! Sunt accusantium a distinctio mollitia iure hic veritatis
          repellat impedit? Ea facere ipsa nesciunt dolores. Deleniti vero nobis
          magnam sapiente consequatur ea velit.
        </div>
        <div className="text-white text-justify max-w-6xl mb-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At vel vero
          quis temporibus consequuntur sed itaque facere est debitis,
          accusantium illum consequatur, laboriosam cumque nulla voluptatem
          voluptas! Sunt accusantium a distinctio mollitia iure hic veritatis
          repellat impedit? Ea facere ipsa nesciunt dolores. Deleniti vero nobis
          magnam sapiente consequatur ea velit.
        </div>

        <div className="text-white flex mb-3 items-center ">
          {" "}
          <PiMailboxDuotone size={22} /> <span className="ml-2">{mail}</span>
        </div>
        <div className="text-white flex mb-7 items-center">
          <CgFileDocument size={20} />
          <span className="ml-2">Resume</span>
        </div>
        <Button />
      </div>
    </div>
  );
}

export default Home;
