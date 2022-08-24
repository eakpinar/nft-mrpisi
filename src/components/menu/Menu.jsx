import { discordchannel, opensea } from "../../Data/links"
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
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#galleryRandom">Random Gallery</a>
                </li>
                <li>
                    <div className="itemcontainer">
                        <a href={discordchannel} target="_blank" className="discord" rel="noreferrer">Discord Channel</a>
                    </div>
                </li>
                <li>
                    <div className="itemcontainer">
                        <a href={opensea} target="_blank" className="opensea" rel="noreferrer">Buy a pisi</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}
