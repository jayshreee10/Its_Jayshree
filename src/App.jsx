import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Root from "./Pages/Root";
import About from "./Pages/About";
import AllBlogs from "./Pages/AllBlogs";
import AllPlayLists from "./Pages/AllPlayLists";
import AllProjects from "./Pages/Sections/AllProjects";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/allblog" element={<AllBlogs />} />
        <Route path="/spotify/allplaylists" element={<AllPlayLists />} />
        <Route path="/allprojects" element={<AllProjects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
