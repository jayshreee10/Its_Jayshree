import React from "react";
import Button from "../Components/Button";
import { myProfile } from "../Data/MyData";
function Home() {
  const myName = myProfile.name;
  return (
    <div className="Home bg-black py-10 w-full flex justify-center items-center">
      <div className="flex-col flex justify-center items-center ">
        <div className="mb-6 flex flex-col justify-evenly items-center w-full">
          <div className="profileImg bg-white h-[10rem] w-[10rem] rounded-full mb-10 shadow-[0_0px_20px_rgba(240,_46,_170,_0.7)]"></div>
          <div className="myName text-7xl text-white font-semibold font-Lobster">
            {myName}
          </div>
        </div>

        <div className="work text-white text-center text-2xl mb-10 w-full font-Alice">
          I Build Things For Web
        </div>

        <Button text={"RESUME"} />
      </div>
    </div>
  );
}

export default Home;
