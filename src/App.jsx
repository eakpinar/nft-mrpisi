import Info from "./components/info/Info"
import Topbar from "./components/topbar/Topbar"
import Creators from "./components/creators/Creators"
import Characters from "./components/characters/Characters"
import Nft from "./components/nft/Nft"
import "./app.scss"
import { useState } from "react"
import Menu from "./components/menu/Menu"
import Gallery from "./components/gallery/Gallery"
import Testimonials from "./components/testimonials/Testimonials"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections" onClick={()=>setMenuOpen(false)}>
        <Info />
        <div id="ocean1" className="ocean">
          <div className="wave"></div>
        </div>
        <Nft />
        <div id="ocean2" className="ocean">
          <div className="wave"></div>
        </div>
        <Creators />
        <div id="ocean3" className="ocean">
          <div className="wave"></div>
        </div>
        <Characters />
        <div id="ocean4" className="ocean">
          <div className="wave"></div>
        </div>
        <Gallery />
        <div id="ocean5" className="ocean">
          <div className="wave"></div>
        </div>
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
