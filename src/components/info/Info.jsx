import "./info.scss"
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Info() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["What is", "Why"],
    });
  }, []);
  return (
    <div className="info" id="info">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/pisinft.png" alt=""></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>
            <span ref={textRef}></span>
            <br />
            Mr. Traveler Cat?
          </h1>
          <h3>
            Hello! I’m a cat, a traveler cat! But you can just call me as
            “meow”. I’m not pretty sure if I’ll respond you, because most of the
            time I wander around drunk. Believe me, sometimes I can’t even do
            catwalk on a straight line.
            <br />
            <br />
            I love alcohol and traveling. As I traveled from country to
            country, I drank alcohol and took my own pictures that I liked most.
          </h3>
          <br />
          <br />

          Mr. Pisi is a collection of artworks you can digitally own. By owning
          an NFT, you can also have many future utilities. Join us to be part of
          a unique community!
        </div>
      </div>
    </div>
  );
}
