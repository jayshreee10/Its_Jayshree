import { FcMusic } from "react-icons/fc";
function AllPlayLists() {
  return (
    < div className="bg-black w-full flex flex-col items-center justify-center">
      <p className="text-5xl font-semibold w-[80vw] text-white flex items-center justify-center p-5 tracking-wide">
        Groove On! Savor the
        <span className="text-LayoutPink ml-2 flex items-center justify-center">Happy Beats</span>
        <FcMusic color="#BE185D"/>
      </p>
      <div className=" w-full bg-black flex  items-center justify-center">
        <iframe
          style={{ borderRadius: "12px", margin: "50px" }}
          width="30%"
          height="400px"
          src="https://open.spotify.com/embed/playlist/7jvqJe5qjABb7zQkU9Fy2v?utm_source=generator"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

        <iframe
          src="https://open.spotify.com/embed/playlist/3q0cAQ8r3S0JPFvBR2D9bT?utm_source=generator"
          style={{ borderRadius: "12px", margin: "50px" }}
          width="30%"
          height="400px"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          color="#BE185D"
        ></iframe>
      </div>
      <div className=" w-full bg-black flex  items-center justify-center">
        <iframe
          style={{ borderRadius: "12px", margin: "50px" }}
          width="30%"
          height="400px"
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX6bnzK9KPvrz?utm_source=generator"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          style={{ borderRadius: "12px", margin: "50px" }}
          width="30%"
          height="400px"
          src="https://open.spotify.com/embed/playlist/37i9dQZF1EJBaBM4sYm6LI?utm_source=generator"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div className=" w-full bg-black flex  items-center justify-center">
        <iframe
          style={{ borderRadius: "12px", margin: "50px" }}
          width="30%"
          height="400px"
          src="https://open.spotify.com/embed/playlist/0E4oCknVXU53DMhdl7DkZA?utm_source=generator"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <iframe
          style={{ borderRadius: "12px", margin: "50px" }}
          width="30%"
          height="400px"
          src="https://open.spotify.com/embed/artist/79bxUQsBIXO8nVLB9fYKf7?utm_source=generator"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default AllPlayLists;
