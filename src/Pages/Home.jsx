import { FaLongArrowAltRight } from "react-icons/fa";
import Particles from "@/magic/magicui/particles";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative pt-[20px] flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-black md:shadow-xl">
      <div className="absolute inset-0 dark:from-white dark:to-slate-900/10"></div>

      <p className="bg-transparent z-10 lg:text-[14vw] text-white font-Lobster leading-tight font-semibold tracking-wide">
        {" "}
        Jayshree <br />{" "}
        <span className="ml-[200px] bg-transparent">Sadangi</span>
      </p>

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
