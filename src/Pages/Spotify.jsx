import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Spotify() {
  // Initialize the navigation hook
  const navigate = useNavigate();

  return (
    // Main container for the Spotify section
    <div className="bg-black w-full flex flex-col items-center justify-center text-white font-Rubik">
      {/* Title section with responsive text size */}
      <div className="text-6xl max-sm:text-2xl font-bold m-5 p-5 tracking-wide font-Alata">
        My <span className="text-LayoutPink">Spotify</span> Top Songs
      </div>

      {/* Navigation link to All Playlists with arrow icon */}
      <p
        className="flex items-center justify-end w-[80vw] my-28 text-lg font-semibold cursor-pointer"
        onClick={() => navigate("/Spotify/AllPlaylists")}
      >
        All PlayLists
        <span className="m-2">
          <FaLongArrowAltRight />
        </span>
      </p>
    </div>
  );
}

export default Spotify;
