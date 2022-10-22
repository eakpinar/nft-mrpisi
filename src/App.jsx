import Welcome from "./components/welcome/Welcome"
// import Topbar from "./components/topbar/Topbar"
import Creators from "./components/creators/Creators"
// import Characters from "./components/characters/Characters"
import Nft from "./components/nft/Nft"
import "./app.scss"
// import { useState } from "react"
// import Menu from "./components/menu/Menu"
import Gallery from "./components/gallery/Gallery"
// import Testimonials from "./components/testimonials/Testimonials"
import Ocean from "./components/ocean/Ocean"
import ShowCase from "./components/showCase/ShowCase"
// import GalleryRandom from "./components/galleryRandom/galleryRandom"


function App() {
  // const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      {/* <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
      {/* <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
      <div className="sections" /*onClick={()=>setMenuOpen(false)}*/>
        <Welcome />
        <Ocean oceanId={1} />
        <Nft />
        <Ocean oceanId={2} />
        <Creators />
        <Ocean oceanId={3} />
        <ShowCase />
        <Ocean oceanId={4} />
        <Gallery />
        {/* <Ocean oceanId={5} /> */}
        {/*<Testimonials /> */}
        {/* <Ocean oceanId={5} />
        <GalleryRandom /> */}
      </div>
    </div>
  );
}

export default App;
