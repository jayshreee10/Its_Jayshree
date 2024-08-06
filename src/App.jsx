import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Root from "./Pages/Root";
import About from "./Pages/About";
import AllBlogs from "./Pages/AllBlogs";
import AllPlayLists from "./Pages/AllPlayLists";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog/AllBlog" element={<AllBlogs />} />
        <Route path="/Spotify/AllPlaylists" element={<AllPlayLists />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
