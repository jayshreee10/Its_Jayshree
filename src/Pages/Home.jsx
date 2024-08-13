import Particles from "@/magic/magicui/particles";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { myProfile } from "../Data/MyData";
import jayshree from "../assets/jayshree.jpg";

function Home() {
  // Destructure the name from the myProfile object
  const { name: myName } = myProfile;
  // Initialize the navigation hook
  const navigate = useNavigate();

  return (
    // Main container for the Home section
    <div className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-black md:shadow-xl">
      {/* Background gradient (for dark mode) */}
      <div className="absolute inset-0 dark:from-white dark:to-slate-900/10"></div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center">
        {/* Profile image */}
        <div
          className="bg-white border-2 rounded-full shadow-lg "
          style={{
            width: "12rem",
            height: "12rem",
            backgroundImage: `url(${jayshree})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>

        {/* Name display */}
        <div className="md:text-7xl sm:text-6xl max-sm:text-4xl max-sm:w-full text-white font-Lobster font-semibold tracking-wider my-10">
          {myName}
        </div>

        {/* About Me button */}
        <Button text="ABOUT ME" onClick={() => navigate("/About")} />
      </div>

      {/* Particles effect for the background */}
      <Particles
        className="absolute inset-0"
        quantity={250}
        ease={15}
        color="#fff"
        refresh
      />
    </div>
  );
}

export default Home;
