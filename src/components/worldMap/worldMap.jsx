import "./worldMap.scss";
import { worldList } from "../../Data/data4world";

export default function WorldMap() {
  function handleClick(id, location) {
    removeElementsByClass("active")
    var element = document.getElementById(id);
    element.classList.add("active");
    element.classList.add(location);
    if (element.style.left.replace("%", "") > 75) {
      element.style.left = "75%"
    }
    if (element.style.left.replace("%", "") < 25) {
      element.style.left = "25%"
    }
  }

  function removeElementsByClass(className) {
    const elements = document.querySelectorAll("."+className);
    elements.forEach(element => {
      element.classList.remove(className)
      element.style.left = element.classList[element.classList.length-1]
      element.classList.remove(element.classList[element.classList.length-1])
      console.log(element.style.left)

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
    <div id="worldMap" className="worldMap" onClick={() => changeElementsLeftByClass()}>
      <div className="distribution-map">
        <img src="assets/map.jpg" alt="" />
        {worldList.map((d) => (
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
                      {/* <td>
                        <img
                          src="assets/right-arrow.png"
                          alt=""
                          onClick={() =>
                            window.open(
                              "https://opensea.io/collection/drunkcat-mrpisi-collection?search[stringTraits][0][name]=Country&search[stringTraits][0][values][0]=" +
                                d.racial,
                              "_blank"
                            )
                          }
                        ></img>
                      </td> */}
                      {d.list.map((c) => (
                        <td key={c.id}>
                          <img
                            src={c.img}
                            alt=""
                            onClick={() =>
                              window.open(
                                "https://opensea.io/collection/drunkcat-mrpisi-collection?search[stringTraits][0][name]=Country&search[stringTraits][0][values][0]=" +
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
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
