import React from "react";
import "./topbar.scss";
import { instagram, opensea, twitter } from "../../Data/links";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <div className="itemcontainer">
            <img
              id="twitter"
              src="assets/social/twitter.png"
              alt=""
              className="social twitterLogo"
              onClick={() => window.open(twitter, " _blank")}
            />
          </div>
          <div className="itemcontainer">
            <img
              id="instagram"
              src="assets/social/instagram.png"
              alt=""
              className="social instagramLogo"
              onClick={() => window.open(instagram, "_blank")}
            />
          </div>
          <div className="itemcontainer">
            <img
              id="opensea"
              src="assets/social/opensea.png"
              alt=""
              className="social openseaLogo"
              onClick={() => window.open(opensea, "_blank")}
            />
          </div>
        </div>

        {/* <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div> */}
      </div>
    </div>
  );
}
