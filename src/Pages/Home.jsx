import React from "react";
import Button from "../Components/Button";
import { myProfile } from "../Data/MyData";
import jayshree from "../assets/jayshree.jpg";
function Home() {
  const myName = myProfile.name;
  return (
    <div className="Home  py-10 w-full flex justify-center items-center">
      <div className="flex-col flex justify-center items-center ">
        <div className="mb-6 flex flex-col justify-evenly items-center w-full  p-20">
          <div
            className="profileImg bg-white size-[9rem] border-2 rounded-full mb-5"
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
    </div>
  );
}

export default Home;
// shadow-[0_0px_20px_rgba(240,_46,_170,_0.7)]