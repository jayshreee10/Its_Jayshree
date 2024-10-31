import React from "react";
import Home from "./Home";
import Passion from "./Passion";
import Blog from "./Posts";
import Spotify from "./Spotify";
import Projects from "./Sections/Projects";
import Button from "@/Components/Button";
import { useNavigate } from "react-router-dom";
function Root() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-black flex flex-col items-center">
      <Home />
      {/* <Button text="ABOUT ME" onClick={() => navigate("/about")} /> */}
      <Passion />
      <Projects />
      <Blog />
      {/* <Spotify />  */}
    </div>
  );
}

export default Root;
