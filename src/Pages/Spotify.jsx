import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Spotify() {
const navigate = useNavigate()

  return (
    <div className="bg-black  w-full flex flex-col items-center justify-center text-white">
      <div className="text-4xl  font-semibold  m-5 p-5">
      My <span className="text-LayoutPink">Spotify</span> Top Songs
      </div>
     
     <p className="flex items-center justify-end w-[55vw] my-28 text-lg font-semibold cursor-pointer" onClick={()=>{navigate("/Spotify/AllPlaylists")}}>
     All PlayLists
       <span className="m-2"><FaLongArrowAltRight /></span> </p> 
    </div>
    
  );
}

export default Spotify;
