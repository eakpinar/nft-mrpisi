import { team } from "../../Data/dataCreators"
import "./creators.scss"

export default function Creators() {
    return (
        <div className="creators" id="creators">
            <h1>Team</h1>
            <div className="container">
                {team.map(d=>(
                    <div key={d.id} className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/right-arrow.png" alt="" className="left" />
                            <img src={d.img} alt="" className="user"/>
                            <img src={d.icon} alt="" className="right"/>
                        </div>
                        {/* <div className="center">
                            {d.desc}
                        </div> */}
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
