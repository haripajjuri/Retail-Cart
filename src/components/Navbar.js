import React from "react";
export default function Navbar(){
    return(
        <div className="navContainer">
            <div id="logo"><p>logo</p></div>
            <div id="navComponents">
                <div className="navItems" ><p> Home </p></div>
                <div className="navItems" ><p> About </p></div>
                <div className="navItems" ><p> Contact </p></div>
                <div className="navItems" ><p> Favourites </p></div>
            </div>
        </div>
    )
}