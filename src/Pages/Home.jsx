import { FaLongArrowAltRight } from "react-icons/fa";
import Particles from "@/magic/magicui/particles";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-black md:shadow-xl">
      <div className="absolute inset-0 dark:from-white dark:to-slate-900/10"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center">
        <div className="md:text-7xl  lg:text-[15vw] sm:text-6xl max-sm:text-4xl max-sm:w-full text-white font-Lobster font-semibold tracking-wider">
          Jayshree <br /> <span className="ml-[200px]">Sadangi</span>
          <p
            className="flex items-center justify-end text-LayoutPink tracking-wide my-28 text-xl font-semibold cursor-pointer font-Alata"
            onClick={() => {
              navigate("/about");
            }}
          >
            About Me
            <span className="ml-2">
              <FaLongArrowAltRight />
            </span>{" "}
          </p>
        </div>
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
