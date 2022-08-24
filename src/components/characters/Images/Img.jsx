import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import "./img.scss"

export default function Img({ src }) {

    const [loaded, setLoaded] = useState(false)
    const ref = useRef()
    const onLoad = () => {
        console.log("true")
        debugger
        setLoaded(true);
    }

    useEffect(() =>{
        if(ref.current && ref.current.complete) {
            onLoad()
        }
        else {
            console.log("false")
        }
    })

    return (
        <div className="item">
            {loaded ? ( <img ref={ref} onLoad={onLoad} src={src} alt="" /> ) : (<h1>yukleniyior</h1>) }
        </div>
    )
}
