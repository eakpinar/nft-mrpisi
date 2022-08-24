import "./ocean.scss"

export default function Ocean({oceanId}) {
    return (
        <div id={"ocean" + oceanId} className="ocean">
            <div className="wave"></div>
        </div>
    )
}