import React from "react";
import { Link } from 'react-router-dom'

export default function TopCharts ({item, key}) {
    return (
            <div key={key} className="flex justify-between md:items-center bg-[#1A1E1F] px-4 py-3 md:py-2 min-w-[85%] md:min-w-0 md:w-full rounded-xl items-start ">

                <div className="flex flex-col md:flex-row md:space-x-3 space-y-1 md:space-y-0 ">
                    <div className="md:w-10 lg:w-auto">
                        <img src={item.image} alt="" className="w-full" />
                    </div>
                    

                    <div className="flex flex-col space-y-2 md:space-y-0 lg:space-y-1 text-gray-200 font-mono">
                        <h1 className="md:text-sm font-semibold text-[15px]">{item.category}</h1>
                        <h4 className=" md:text-[10px] text-gray-400">{item.artist}</h4>
                        <p className="text-[10px] md:text-[10px]">{item.time}</p>
                    </div>
                </div>

                <img src="/Stroke-1.svg" alt="" className="border p-2 rounded-full border-gray-500" />
            </div>
            
    )
}