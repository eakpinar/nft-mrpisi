import "./nft.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Nft() {
    const textRef =useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["What is", "Why"],
    });
    }, []);
    return (
        <div className="nft" id="nft">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/pisinft.png" alt=""></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>F.A.Q. <span ref={textRef}></span><br/>
                     Nft?</h1>
                    <h2>
                    NFT is a non fungible token, and you can buy and trade these tokens. You can also keep it in your own wallet if you want! 
                    </h2>
                    <h3>
                    Mr. Pisi is a collection of artworks you can digitally own. By owning an NFT, you can also have many future utilities. Join us to be part of a unique community!
                    </h3>
                </div>
            </div>
        </div>
    )
}
