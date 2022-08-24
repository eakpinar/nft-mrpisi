import { useEffect, useState } from "react";
import CharacterList from "../characterList/CharacterList"
import "./characters.scss"
import {
    chinaCharacters,
    germanyCharacters,
    turkeyCharacters,
    russiaCharacters,
    othersCharacters,
    americaCharacters
} from "../../Data/data"
import Img from "./Images/Img";

export default function Characters() {

    const [selected, setSelected] = useState("china");

    const [data, setData] = useState([])
    const list = [
        {
            id: "china",
            title: "China"
        },
        {
            id: "russia",
            title: "Russia"
        },
        {
            id: "america",
            title: "America"
        },
        {
            id: "germany",
            title: "Germany"
        },
        {
            id: "turkey",
            title: "Turkey"
        },
        {
            id: "others",
            title: "Others"
        }
    ];

    useEffect(() => {
        switch(selected) {
            case "china":
                setData(chinaCharacters);
                break;
            case "russia":
                setData(russiaCharacters);
                break;
            case "turkey":
                setData(turkeyCharacters);
                break;
            case "germany":
                setData(germanyCharacters);
                break;
            case "america":
                setData(americaCharacters);
                break;
            case "others":
                setData(othersCharacters);
                break;
            default :
            setData(chinaCharacters);                
        }
    },[selected]);

    return (
        <div className="characters" id="characters">
            <h1>Characters</h1>
            <ul>
                {list.map(item=>(
                    <CharacterList 
                        key={item.id}
                        id={item.id}
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected} 
                    />
                ))}
            </ul>
            <div className="container">
                {data.map(d=> (
                    <div key={d.id} className="item">
                        <Img src={d.img} />
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>
        </div>
    )
}
