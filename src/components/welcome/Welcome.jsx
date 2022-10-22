import "./welcome.scss";
import { useState } from "react";
import { InfoBox } from "../infoBox/InfoBox";

export default function Welcome() {
  const [top, setTop] = useState("30.5%");
  const [left, setLeft] = useState("42%");
  const [width, setWidth] = useState("32%");
  const [height, setHeight] = useState("40%");
  const [cursor, setCursor] = useState("pointer");
  let [showInfo1, setShowInfo1] = useState(false);


  const openMap = (status) => {
    if(status) {
        setTop("43.5%")
        setLeft("41%")
        setWidth("72%")
        setHeight("88%")
        setShowInfo1(true)
        setCursor("")
    } else {

      setTop("30.5%");
      setLeft("42%");
      setWidth("32%");
      setHeight("40%");
      setCursor("pointer")
      setShowInfo1(false);
    }
  };

  return (
    <div id="welcome" className="welcome">
      <div
        className="distribution-map"
      >
        <img id="pub" src="assets/pub.gif" alt="" />
        <img
          id="clickthemap"
          src="assets/clickthemap.gif"
          alt=""
          className="clickthemap"
        />
        <img
          id="drinking"
          src="assets/drinking.gif"
          alt=""
          className="drinking"
        />
        <div
          className="black-board"
          style={{ top: top, left: left, width: width, height: height, cursor: cursor }}
          onClick={() => openMap(true)}
        >
            <div id="world" className="world">
              <InfoBox
                show={showInfo1}
                onClickOutside={() => {
                  openMap(false);
                }}
              />
            </div>
        </div>
      </div>
    </div>
  );
}
