import React from "react"
import cam from '../images/camera.jpg'
import shoes from '../images/shoes.jpg'
import clothes from '../images/clothes.jpg'
import lr from '../images/left-arrow.png'
import rr from '../images/right-arrow.png'

import { useState } from "react"

export default function Slider(){

    const sliderdata = [
        {
            "img":`${cam}`,
            "title":"summer sale",
            "desc":"avail more than 40% off on Cameras"
        },
        {
            "img":`${shoes}`,
            "title":"winter sale",
            "desc":"avail more than 40% off on each purchase"
        },
        {
            "img":`${clothes}`,
            "title":"spring sale",
            "desc":"avail more than 40% off on each purchase"
        }
    ];

    let [index, setIndex ] = useState(0);
    const handleChange =(direction)=>{
        if(direction === "left"){
            setIndex(index > 0 ? index-100 : 200) 
        }
        else{
            setIndex(index < 200 ? index+100 : 0)
        }
    }
    return(
        <div className="Slider">
            <div className="slides">
            {
                sliderdata.map((ele)=>
                    (<div className="slide" style={{
                        transform: `translate(-${index}%)`
                    }}>
                        <img src={ele.img} alt="" />
                        <div className="titles">
                            <h1>{ele.title}</h1>
                            <h4>{ele.desc}</h4>
                        </div>
                    </div>)
                )
            }


            </div>
            <div id="lbtn" onClick={()=>{handleChange("left")}}>
                <img src={lr} alt="" />
            </div>
            <div id="rbtn" onClick={()=>{handleChange("right")}}>
                <img src={rr} alt="" />
            </div>

        </div>
    )
}
