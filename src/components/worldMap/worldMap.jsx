import "./worldMap.scss";
import { worldList } from "../../Data/data4world";

export default function WorldMap({ isMobile }) {
  function handleClick(id, location) {
    removeElementsByClass("active");
    var element = document.getElementById(id);
    element.classList.add("active");
    element.classList.add(location);
    if (element.style.left.replace("%", "") > 75) {
      element.style.left = "75%";
    }
    if (element.style.left.replace("%", "") < 25) {
      element.style.left = "25%";
    }
  }

  function removeElementsByClass(className) {
    const elements = document.querySelectorAll("." + className);
    elements.forEach((element) => {
      element.classList.remove(className);
      element.style.left = element.classList[element.classList.length - 1];
      element.classList.remove(element.classList[element.classList.length - 1]);
      console.log(element.style.left);
    });
  }
  function changeElementsLeftByClass() {
    // const elements = document.querySelectorAll(".active");
    // elements.forEach(element => {
    //   element.style.left = element.classList[element.classList.length-1]
    //   console.log(element)
    // });
  }
  return (
    <div
      id="worldMap"
      className="worldMap"
      onClick={() => changeElementsLeftByClass()}
    >
      <div className="distribution-map">
        <img
          src={!isMobile ? "assets/map.jpg" : "assets/blackboard.jpg"}
          alt=""
        />
        {worldList.map((d, index) =>
          !isMobile ? (
            <button
              id={d.country}
              key={d.country}
              title={d.country}
              className="map-point"
              style={{ top: d.location.top, left: d.location.left }}
              onClick={() => handleClick(d.country, d.location.left)}
            >
              <div className="content">
                <span>{d.country}</span>
                <div className="centered-y">
                  <table>
                    <tbody>
                      <tr>
                        {d.list.map((c) => (
                          <td key={c.id}>
                            <img
                              src={c.img}
                              alt=""
                              onClick={() =>
                                window.open(
                                  "https://opensea.io/collection/mrtravellercat?search[stringTraits][0][name]=Country&search[stringTraits][0][values][0]=" +
                                    d.racial,
                                  "_blank"
                                )
                              }
                            ></img>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="next">
                  <img src="assets/rightarrow.png" alt="" className="left" />
                </div>
              </div>
            </button>
          ) : (
            <div
              id={index}
              className="font-face-gm"
              style={{
                top: ((index % 13) + 1) * 5 + 10 + "%",
                left: (index < 13 ? 30 : 70) + "%",
              }}
              onClick={() =>
                window.open(
                  "https://opensea.io/collection/mrtravellercat?search[stringTraits][0][name]=Country&search[stringTraits][0][values][0]=" +
                    d.racial,
                  "_blank"
                )
              }
            >
              {d.country}
            </div>
          )
        )}
      </div>
    </div>
  );
}
