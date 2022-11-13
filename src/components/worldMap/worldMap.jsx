import "./worldMap.scss";
import { worldList } from "../../Data/data4world";

export default function WorldMap() {
  const handleClick = (left) => {
    
  }
  return (
    <div id="worldMap" className="worldMap">
      <div className="distribution-map">
        <img src="assets/map.jpg" alt="" />
        {worldList.map((d) => (
          <button
            id={d.country}
            key={d.country}
            title={d.country}
            className="map-point"
            style={{ top: d.location.top, left: d.location.left }}
            onClick={handleClick(d.location.left)}
          >
            <span>{d.country}</span>
            <div className="content">
              <div className="centered-y">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <a
                          href={
                            "https://opensea.io/collection/drunkcat-mrpisi-collection?search[stringTraits][0][name]=Country&search[stringTraits][0][values][0]=" +
                            d.racial
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          More..
                        </a>
                      </td>
                      {d.list.map((c) => (
                        <td key={c.id}>
                          <img src={c.img} alt=""></img>
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
