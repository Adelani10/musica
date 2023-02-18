import React from "react";
import { AddContext } from "../context";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export default function PlaylistCard ({item}) {

    const [isEntered, setIsEntered] = useState(false)

    const {removeFromPlaylist} = useContext(AddContext)

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


                { isEntered && 
                    <button onClick={() => removeFromPlaylist(item.id)}
                     className="absolute top-0 right-2 sm:text-xl lg:text-3xl text-red-500 text-2xl">
                     <i className="fa-solid fa-circle-minus"></i>
                </button>}
            </Link>
                
    )
}