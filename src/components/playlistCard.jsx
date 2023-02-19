import React from "react";
import { Link } from "react-router-dom";

export default function PlaylistCard ({item}) {

    return (
            <Link 
                to={`/playlist/${item.id}`}
                onMouseEnter={() => setIsEntered(true)} 
                onMouseLeave={() => setIsEntered(false)} className="relative w-full h-64 sm:h-auto rounded-xl">

                <img src={item.cover} alt="" className="h-full w-full rounded-xl" />

                <div className=" absolute tracking-tighter font-bold -space-y-2 flex flex-col items-start left-2 bottom-0">
                    <h3 className="text-sm ">{item.title}</h3>
                </div>

                <button className="flex justify-center absolute bottom-3 right-2 text-xl items-center sm:h-5 sm:w-5 h-7 w-7 p-6 sm:p-5 rounded-full bg-[#FACD66]">
                     <i className="fa-solid fa-play"></i>
                </button>
            </Link>
                
    )
}