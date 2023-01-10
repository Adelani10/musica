import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'

export default function TopCharts ({item}) {
    const [isLiked, setIsLiked] = useState(false)
    return (
            <div key={item.id} className="flex justify-between md:items-center bg-[#1A1E1F] md:px-2 lg:px-8 px-4 py-3 md:py-2 min-w-[85%] md:min-w-0 md:w-full rounded-xl items-start  ">

                <Link to={`/home/${item.path}`} className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
                    <div className="md:w-10 w-[60%] lg:w-auto">
                        <img src={item.image} alt="" className="w-full rounded-2xl" />
                    </div>
                    

                    <div className="flex flex-col space-y-1 md:space-y-0 lg:space-y-1 text-gray-200">
                        <h1 className="md:text-sm md:tracking-tighter font-semibold text-[15px]">{item.category}</h1>
                        <h4 className=" md:text-[10px] text-gray-400">{item.artist}</h4>
                        <p className="text-[10px] md:text-[10px]">{item.time}</p>
                    </div>
                </Link>


                <button onClick={()=> setIsLiked(!isLiked)} className="border w-8 h-8 rounded-full border-gray-500" >
                    {isLiked ? 
                        <i className="fa-solid fa-heart text-[#FACD66]"></i> : 
                        <i className="fa-regular fa-heart text-[#FACD66]"></i>}
                </button>
            </div>
            
    )
}