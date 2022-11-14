import { useRef } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { worldList } from "../../Data/data4world";
import "./showCase.scss";

const InfiniteLooper = function ShowCase({ speed, direction, children }) {
  const [looperInstances, setLooperInstances] = useState(1);

  const outerRef = useRef();
  const innerRef = useRef();

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const widthDeficit = parentWidth - width;

    const instanceWidth = width / innerRef.current.children.length;

    if (widthDeficit) {
      setLooperInstances(
        looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
      );
    }
  }, [looperInstances]);

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [looperInstances, setupInstances]);

  return (
    <div className="looper" ref={outerRef}>
      <div className="looper__innerList" ref={innerRef} data-animate="true">
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ShowCase() {
  function randomDirection() {
    const texts = ["right", "left"];
    var direction = texts[Math.floor(Math.random() * texts.length)];
    console.log({ direction });
    return direction;
  }
  function randomSpeed() {
    return Math.floor(Math.random() * (19 - 10)) + 10;
  }

  function getRandom(arr, n) {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    console.log({result})
    return result;
  }

  return (
    <div className="showCase" id="showCase">
      <h1>Gallery </h1>
      {worldList.filter(p=>p.country.includes("A"))
        .map((d) => (
          <InfiniteLooper speed={randomSpeed()} direction={randomDirection()}>
            {d.list.map((c) => (
              <div className="contentBlock contentBlock--one">
                <img src={c.img} alt="" />
              </div>
            ))}
          </InfiniteLooper>
        ))}
    </div>
  );
}
