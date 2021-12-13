import React from "react"
import "./topbar.scss"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#info" className="logo">Mr. Pisi</a>
                    <div className="itemcontainer">
                        <button onClick={event =>window.location.href="https://discord.gg/jbqwt8vA"} className="discord">Discord Channel</button>
                    </div>
                    <div className="itemcontainer">
                        <button onClick={event =>window.location.href="https://opensea.io/collection/polarbears-nft-1"} className="opensea">Buy a pisi</button>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
