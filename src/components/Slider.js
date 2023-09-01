import React from "react"
// import leftIcon from '../left-arrow.png'
import rightIcon from '../right-arrow.png'
import img1 from '../images/main_image_star-forming_region_carina_nircam_final-1280.jpg'
import img2 from '../images/pexels-pixabay-268533.jpg'

import { useState } from "react"

export default function Slider(){

    const sliderdata = [
        {
           
            "title":"summer sale",
            "desc":"avail more than 40% off on each purchase"
        },
        {
           
            "title":"winter sale",
            "desc":"avail more than 40% off on each purchase"
        },
        {
            
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

            {/* <div className="slide">
                <img src={img1} alt="image here" />
                <div className="titles">
                    <h1>hello</h1>
                    <h4>desc</h4>
                </div>
            </div> */}

            {
                sliderdata.map((ele)=>
                    (<div className="slide" style={{
                        transform: `translate(-${index}%)`
                    }}>
                        <img src={img1} alt="image here" />
                        <div className="titles">
                            <h1>{ele.title}</h1>
                            <h4>{ele.desc}</h4>
                        </div>
                    </div>)
                )
            }


            </div>
            <button id="btn" onClick={()=>{handleChange("left")}}>prev</button>
            <button id="btn" onClick={()=>{handleChange("right")}}>next</button>

        </div>
    )
}
