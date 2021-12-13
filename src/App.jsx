import Info from "./components/info/Info"
import Topbar from "./components/topbar/Topbar"
import Creators from "./components/creators/Creators"
import Characters from "./components/characters/Characters"
import Nft from "./components/nft/Nft"
import "./app.scss"
import { useState } from "react"
import Menu from "./components/menu/Menu"
import Gallery from "./components/gallery/Gallery"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Info />
        <Nft />
        <Creators />
        <Characters />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
