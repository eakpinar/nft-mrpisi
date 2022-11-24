import Topbar from "./components/topbar/Topbar"
// import Characters from "./components/characters/Characters"
import "./app.scss"
import { useEffect, useState } from "react"
// import Menu from "./components/menu/Menu"
// import Testimonials from "./components/testimonials/Testimonials"
import React, { Suspense } from "react"
// import GalleryRandom from "./components/galleryRandom/galleryRandom"

const Welcome = React.lazy(() => import("./components/welcome/Welcome"))
const Creators = React.lazy(() => import("./components/creators/Creators"))
const Info = React.lazy(() => import("./components/info/Info"))
const Roadmap = React.lazy(() => import("./components/roadmap/Roadmap"))
const Ocean = React.lazy(() => import("./components/ocean/Ocean"))
const ShowCase = React.lazy(() => import("./components/showCase/ShowCase"))
const Nft = React.lazy(() => import("./components/nft/Nft"))


function App() {
  const [menuOpen, setMenuOpen] = useState(false)


  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <div className="app">
      {/* <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
      <Suspense fallback={<div className="pos-center"><div className="loader"></div></div>}>
        <div className="sections" /*onClick={()=>setMenuOpen(false)}*/>
          <Welcome isMobile={isMobile}/>
          <Ocean oceanId={1} />
          <Info />
          <Nft />
          <Roadmap isMobile={isMobile} />
          <Ocean oceanId={3} />
          <ShowCase />
          <Ocean oceanId={4} />
          <Creators />
          {/* <Ocean oceanId={5} /> */}
          {/*<Testimonials /> */}
          {/* <Ocean oceanId={5} />
          <GalleryRandom /> */}
        </div>
      </Suspense>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
}

export default App;
