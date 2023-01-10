import React from "react";
import { AddContext } from "../context";
import { useContext } from "react";

export default function PlaylistCard ({item}) {

    const {removeFromPlaylist} = useContext(AddContext)

    return (
            <div className="relative w-full h-52 md:h-auto rounded-xl">
                <img src={item.image} alt="" className="h-full w-full rounded-xl" />

                <div className=" absolute tracking-tighter -space-y-2 flex flex-col items-start left-2 bottom-0">
                    <h3 className="text-sm ">{item.title}</h3>
                    <h5 className="text-[10px]">{item.subtitle}</h5>
                </div>

                <button className="flex justify-center absolute bottom-3 right-2 sm:text-xl text-sm items-center h-5 w-5 p-4 sm:p-5 rounded-full bg-[#FACD66]">
                     <i className="fa-solid fa-play"></i>
                </button>


                <button onClick={() => removeFromPlaylist(item.id)} className="absolute top-0 right-2 sm:text-3xl lg:text-4xl text-[#FACD66] text-lg">
                     <i className="fa-solid fa-heart"></i>
                </button>
            </div>
                
    )
}