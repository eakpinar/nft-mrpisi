import React from "react"
import "./topbar.scss"
import { discordchannel, opensea } from "../../Data/links"

export default function Topbar({menuOpen, setMenuOpen}) {

    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#info" className="logo">Mr. Pisi</a>
                    <div className="itemcontainer">
                        <a href={discordchannel} target="_blank" rel="noreferrer" className="discord">Discord Channel</a>
                    </div>
                    <div className="itemcontainer">
                        <a href={opensea} target="_blank" rel="noreferrer" className="opensea">Buy a pisi</a>
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
