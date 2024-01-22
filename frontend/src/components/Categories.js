import React from "react";
export default function Categories(){
    const data1 = [
        {
            "id":1,
            "img":"https://images.pexels.com/photos/4641825/pexels-photo-4641825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "category":"CLOTHES"
        },
        {
            "id":2,
            "img":"https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "category":"LAPTOPS"
        },
        {
            "id":3,
            "img":"https://images.pexels.com/photos/1697218/pexels-photo-1697218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "category":"WATCHES"
        },{
            "id":4,
            "img":"https://images.pexels.com/photos/68814/pexels-photo-68814.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "category":"SHOES"
        }
    ];

    const data2 =[
        {
            "id":1,
            "img":"https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "category":"CAMERAS"
        },
        {
            "id":2,
            "img":"https://images.pexels.com/photos/1697218/pexels-photo-1697218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "category":"WATCHES"
        }
    ]
    return(
        <div id="categories">
            <h1>categories</h1>
        <div className="categories1"> 
            {
                data1.map((ele)=>(
                    <div className="category1Card">
                        <img src={ele.img} alt="here" />
                        <div className="info1">
                            <h3>{ele.category}</h3>
                            {/* <button>show more</button> */}
                        </div>
                    </div>
                ))
            }
        </div>
        
        <div className="categories2">
            {
                data2.map((ele)=>(
                    <div className="category2Card">
                        <img src={ele.img} alt="" />
                        <div className="info2">
                            <h3>{ele.category}</h3>
                        </div>
                    </div>
                ))
            }
        </div>

        </div>
    )
}