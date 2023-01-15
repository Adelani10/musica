import React from "react";
import { useState, useContext } from "react";
import { AddContext } from "../context";

export default function Station ({item}) {
    const [isLiked, setIsLiked] = useState(false)

    const {radioOn, setPresentStation} = useContext(AddContext)

    function handleClick () {
        radioOn()
        setPresentStation(item.id)
    }

    return (
        <button className="bg-[#33373B] text-white p-2 flex justify-between items-center rounded-2xl focus:border-x-2 border-white">

            <div onClick={handleClick} className="space-x-2 flex items-center min-w-[85%]">
                <div className="bg-white h-16 w-16 rounded-lg">
                    <img src={item.image} alt="" className="w-full h-full rounded-lg" />
                </div>

                <div className="flex flex-col items-start">
                    <h3 className="text-sm md:text-lg font-semibold">{item.name}</h3>
                    <h3 className="">{item.frequency}</h3>
                </div>
                
            </div>


            <div className="">
                <div className="text-xl" onClick={() => setIsLiked(!isLiked)}>
                    {isLiked ? <i className="fa-solid fa-heart text-red-600"></i>
                        : <i className="fa-regular fa-heart text-red-600"></i>}
                </div>  
            </div> 
            
        </button>
    )
}