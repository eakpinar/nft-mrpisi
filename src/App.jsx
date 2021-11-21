import Info from "./components/info/Info"
import Topbar from "./components/topbar/Topbar"
import Creators from "./components/creators/Creators"
import Characters from "./components/characters/Characters"
import Nft from "./components/nft/Nft"
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Info />
        <Creators />
        <Characters />
        <Nft />
      </div>
    </div>
  );
}

export default App;
