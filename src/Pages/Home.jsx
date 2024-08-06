import Particles from "@/magic/magicui/particles";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { myProfile } from "../Data/MyData";
import jayshree from "../assets/jayshree.jpg";
function Home() {
  const myName = myProfile.name;
  const navigate = useNavigate();
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden pb-10  bg-black md:shadow-xl ">
      <span className=" whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        <div className="flex-col flex justify-center items-center ">
          <div className="mb-6 flex flex-col justify-evenly items-center w-full z-10 p-20">
            <div
              className="profileImg bg-white size-[9rem] border-2 rounded-full shadow-[0_0px_20px_rgba(240,_46,_170,_0.7)] "
              style={{
                backgroundImage: `url(${jayshree})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="text-7xl py-5 mb-5 text-white font-semibold font-Lobster tracking-wider">
              {myName}
            </div>
            <Button
              text={"ABOUT ME"}
              onClick={() => {
                navigate("/About");
              }}
            />
          </div>
        </div>
      </span>
      {/* <Particles
        className="absolute inset-0"
        quantity={250}
        ease={100}
        color={"#000"}
        refresh
      /> */}
    </div>
  );
}

export default Home;
// shadow-[0_0px_20px_rgba(240,_46,_170,_0.7)]
