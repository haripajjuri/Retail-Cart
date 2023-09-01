import React from "react"
// import leftIcon from '../left-arrow.png'
// import rightIcon from '../right-arrow.png'
// import img from '../images/main_image_star-forming_region_carina_nircam_final-1280.jpg'
export default function Slider(){
    return(
        <div className="SliderContainer">
            {/* <div className="arrows">
                <p className="arrow"><img src={leftIcon} alt="arrow" /></p>
                <p className="arrow"><img src={rightIcon} alt="" /></p>
            </div> */}

            <div className="images">
                <div className="slide">2</div>
                <div className="slide">3</div>
                <div className="slide">4</div>
            </div>
            
        </div>
    )
}
