import {useState} from "react"
import "./gallery.scss"
import { data } from "../../Data/dataNFTRedirect"

export default function Gallery() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const handleClick = (way) => {
        way === "left"
         ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1) 
         : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        <div className="gallery" id="gallery">
            <div className="slider" 
                style= {{ transform:`translateX(-${currentSlide * 100}vw)` }}
            >    
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    <span><a href={d.url}>OpenSeaLink</a></span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
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
