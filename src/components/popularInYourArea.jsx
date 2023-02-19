import React from "react";
import { Link } from 'react-router-dom'
import { useContext, useState } from "react";
import { AddContext } from "../context";

export default function Popular ({item}) {
    const [isEntered, setIsEntered] = useState(false)

    const {handlePopFav, setPresentTuneFromPopular} = useContext(AddContext)

    return (
            <div
                onMouseEnter={() => setIsEntered(true)} 
                onMouseLeave={() => setIsEntered(false)}
                onClick={(e) => setPresentTuneFromPopular(item.id)} 
                key={item.id}
                className="flex flex-col space-y-1 min-w-[40%] md:min-w-[15%] lg:min-w-[5%] sm:min-w-[25%] ">
                <div className="relative">
                    <img src={item.cover} alt={item.audio} className=" rounded-2xl h-32 lg:h-28 w-full sm:h-36" />

                    {isEntered && <button onClick={()=> handlePopFav(item.id)} className="absolute top-0 right-2 text-2xl sm:text-lg" >
                        {item.isFavorited ? <i className="fa-solid fa-heart text-[#FACD66]"></i>
                            : <i className="fa-regular fa-heart text-gray-400"></i>}
                    </button>}
                </div>
                
                <h1 className="text-gray-400 md:text-xs text-lg tracking-tighter">{item.title}</h1>
                
            </div>
    )
}