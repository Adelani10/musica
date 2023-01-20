import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'

export default function TopCharts ({item}) {
    const [isLiked, setIsLiked] = useState(false)
    return (
            <div key={item.id} className="flex justify-between sm:items-center bg-[#1A1E1F] sm:px-1 lg:px-8 px-4 py-3 sm:py-2 min-w-[85%] sm:min-w-0 md:w-full rounded-xl items-start  ">

                <Link to={`/home/${item.path}`} className="flex sm:items-center flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                    <div className="sm:w-8 md:w-10 w-[60%] lg:w-auto rounded-xl">
                        <img src={item.image} alt="" className="w-full rounded-xl" />
                    </div>
                    

                    <div className="flex flex-col space-y-1 sm:space-y-0 lg:space-y-1 text-gray-200">
                        <h1 className="sm:text-xs md:text-lg sm:tracking-tighter font-semibold text-[15px] leading-tight">{item.category}</h1>

                        <h4 className=" md:text-[12px] sm:text-[8px] text-gray-400">{item.artist}</h4>

                        <p className="text-[10px] sm:hidden md:inline-block sm:text-[10px]">{item.time}</p>
                    </div>
                </Link>


                <button onClick={()=> setIsLiked(!isLiked)} className="border w-8 h-8 sm:w-6 sm:h-6 sm:text-xs lg:text-lg lg:w-8 lg:h-8 rounded-full border-gray-500 flex items-center justify-center" >
                    {isLiked ? 
                        <i className="fa-solid fa-heart text-[#FACD66]"></i> : 
                        <i className="fa-regular fa-heart text-[#FACD66]"></i>}
                </button>
            </div>
            
    )
}