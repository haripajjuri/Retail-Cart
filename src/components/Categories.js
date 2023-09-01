import React from "react";
export default function Categories(){
    const data = [
        {
            "id":1,
            "img":"https://images.pexels.com/photos/1502216/pexels-photo-1502216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "category":"CLOTHES"
        },
        {
            "id":2,
            "img":"https://images.pexels.com/photos/4069535/pexels-photo-4069535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "category":"ELECTRONICS"
        },
        {
            "id":3,
            "img":"https://images.pexels.com/photos/1697218/pexels-photo-1697218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "category":"WATCHES"
        }
    ]
    return(
        // <div>
        //     <div>
        //         <h2>categories</h2>
        //     </div>
        <div className="categories"> 
            {
                data.map((ele)=>(
                    <div className="categoryCard">
                        <img src={ele.img} alt="here" />
                        <div className="info">
                            <h3>{ele.category}</h3>
                            <button>show more</button>
                        </div>
                    </div>
                ))
            }
        </div>
        // </div>
    )
}