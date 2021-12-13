import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className= {"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#info">Info</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#nft">What is NFT?</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#creators">Creators</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#characters">Characters</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#gallery">Gallery</a>
                </li>
                <li>
                    <div className="itemcontainer">
                        <button onClick={event =>window.location.href="https://discord.gg/jbqwt8vA"} className="discord">Discord Channel</button>
                    </div>
                </li>
                <li>
                    <div className="itemcontainer">
                        <button onClick={event =>window.location.href="https://opensea.io/collection/polarbears-nft-1"} className="opensea">Buy a pisi</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
