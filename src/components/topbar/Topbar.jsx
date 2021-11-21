import React from "react"
import "./topbar.scss"

export default function Topbar() {
    return (
        <div className="topbar">
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
                    This is right
                </div>
            </div>
        </div>
    )
}
