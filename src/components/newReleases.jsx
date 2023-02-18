import React from "react";
import { Link } from 'react-router-dom'
import { useContext, useState } from "react";
import { AddContext } from "../context";

export default function NewReleases ({item}) {

    const [isEntered, setIsEntered] = useState(false)

    const {
            removeFav, 
            addFav, 
            addToPlayList, 
            setPresentTuneFromNew, 
            removeFromPlaylist} = useContext(AddContext)

    return (
            <div 
                onMouseEnter={() => setIsEntered(true)} 
                onMouseLeave={() => setIsEntered(false)} 
                onClick={() => {
                    setPresentTuneFromNew(item.id);
                }}
                key={item.id} 
                className="flex cursor-pointer min-w-[40%] md:min-w-[15%] lg:min-w-[5%] sm:min-w-[25%] flex-col space-y-1"
            >
                <div className="relative">
                    <img src={item.cover} alt="" className="h-36 lg:h-28 w-full rounded-2xl" />

                    {isEntered && <div>
                        {item.isFavorited ? <button onClick={()=> removeFav(item.id)} className="absolute top-0 right-2 text-2xl sm:text-lg">
                            <i className="fa-solid fa-heart text-[#FACD66]" onClick={()=> removeFromPlaylist(item.id)}></i>
                        </button>
                        :
                        <button onClick={()=> addFav(item.id)} className="absolute top-0 right-2 text-2xl sm:text-lg">
                            <i className="fa-regular fa-heart text-gray-400" onClick={() => addToPlayList(item)}></i>
                        </button>}
                    </div>}

                </div>
                
                <h1 className="text-gray-400 md:text-xs text-lg tracking-tighter">{item.title}</h1>
                
            </div>
    )
}