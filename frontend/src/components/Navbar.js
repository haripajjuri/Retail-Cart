import React from "react";
export default function Navbar(){
    return(
        <div className="navContainer">
            <div id="logo"><h2>logo</h2></div>
            <div id="navComponents">
                <div className="navItems" ><p> Home </p></div>
                <div className="navItems" ><p> About </p></div>
                <div className="navItems" ><p> Contact </p></div>
                <div className="navItems" ><p> Favourites </p></div>
            </div>
        </div>
    )
}