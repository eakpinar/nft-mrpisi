import "./info.scss";
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
          <img src="assets/nfting.gif" alt=""></img>
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
            catwalk on a straight line. I love alcohol and traveling. As I
            traveled from country to country, I drank alcohol and took my own
            pictures that I liked most. 11.500 pieces exactly!
            <br />
            The biggest part of the Project is the <b>mobile game</b> that we are going
            to create. The incomes of the mobile game are going to be divided to
            the wallets of the Mr. Traveller CAt NFT holders.
            <br />
            While I was traveling, unfortunately I found that many stray animals
            on earth need my help and I want to help them.
            <br />
            You can do me a favor by buying these photos. Because you are all
            good people, but there are things I’m good at too, especially in
            march! ;) 
            <br />
            I’m going to use most of the incomes of this project for the stray
            animals that need help from all over the world each year in march.
            <br />
            But first, I got to finish my glass.
          </h3>
        </div>
      </div>
    </div>
  );
}
