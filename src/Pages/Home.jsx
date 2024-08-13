import Particles from "@/magic/magicui/particles";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { myProfile } from "../Data/MyData";
import jayshree from "../assets/jayshree.jpg";

function Home() {
  const { name: myName } = myProfile;
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-black pb-10 md:shadow-xl">
      {/* Background Gradient and Text Styling */}
      <div className="absolute inset-0  dark:from-white dark:to-slate-900/10"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full p-20">
        {/* Profile Image */}
        <div
          className="mb-6 bg-white border-2 rounded-full shadow-lg"
          style={{
            width: "9rem",
            height: "9rem",
            backgroundImage: `url(${jayshree})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        {/* Name Display */}
        <div className="text-7xl text-white font-Lobster font-semibold tracking-wider mb-5">
          {myName}
        </div>
        {/* About Me Button */}
        <Button
          text="ABOUT ME"
          onClick={() => navigate("/About")}
        />
      </div>
      {/* Uncomment to use Particles */}
      <Particles
        className="absolute inset-0"
        quantity={250}
        ease={100}
        color="#000"
        refresh
      />
    </div>
  );
}

export default Home;
