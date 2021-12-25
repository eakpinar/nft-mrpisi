import "./characterList.scss"

export default function CharacterList({id, title, active, setSelected}) {
    
    
    return (
        <li 
            key={id} 
            className={active ? "characterList active" : "characterList"} 
            onClick={()=> setSelected(id)}
        >
            {title}
        </li>
    )
}
