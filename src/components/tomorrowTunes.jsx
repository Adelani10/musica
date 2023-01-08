import React from "react";

export default function TomorrowTune ({item}) {
    return (
        <main className="bg-[#33373B] flex text-white items-center justify-between md:justify-start text-xs px-2 pr-4 py-1 rounded-2xl">

            <div className="space-x-4 md:w-1/3 flex items-center">
                <img src={item.image} alt="" className="w-10 h-10 rounded-lg" />
                <button className="hidden md:inline-block">
                    <i className="fa-regular fa-heart"></i>
                </button>
            </div>

            <div className="flex flex-col w-1/3 space-x-0 md:space-x-10 md:flex-row items-start md:items-center">
                <h3 className="md:w-[70%] w-auto">{item.title} ~ <span>{item.subtitle}</span> </h3>
                <h3 className="">{item.type}</h3>
            </div>

            <div className="flex flex-col w-1/3  space-x-0 md:space-x-24 md:flex-row items-end md:items-center justify-end">
                <h3 className="md:order-first order-last">4:04</h3>
                <button className="text-[#FACD66]">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
            </div> 
            
        </main>
    )
}