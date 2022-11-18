import {useState} from "react"
import "./roadmap.scss"
import { data } from "../../Data/dataRoadmap"

export default function Roadmap() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const handleClick = (way) => {
        way === "left"
         ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1) 
         : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        <div className="roadmap" id="roadmap">
            <div className="slider" 
                style= {{ transform:`translateX(-${currentSlide * 100}vw)` }}
            >    
                {data.map((d) => (
                    <div key={d.id} className="container">
                        <div className="item">
                            <img src={d.img} alt=""/>
                            <h4>{d.id} to {data.length}</h4>
                        </div>
                    </div>
                ))
                }
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")} />
        </div>
    )
}
