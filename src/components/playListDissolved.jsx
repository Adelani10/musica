import React from "react";
import { Link, useParams } from "react-router-dom";
import { AddContext } from "../context";
import { useContext } from "react";

export default function PlaylistDissolved () {

    const {playListItems, setPresentTuneFromPlaylist} = useContext(AddContext)

    const {playlistId} = useParams()

    const mainPL = playListItems.find(item => item.id === playlistId)

    const elements = mainPL.files.map((item, index) => {
        return (
            <div 
                id={item.audio} 
                onClick={(e)=> {
                    setPresentTuneFromPlaylist(e)
                }}
                key={index}
                className="flex justify-between bg-black items-center px-2">
                <div className="flex flex-col">
                    <h3 className="text-xl capitalize">{item.title}</h3>
                    <h5 className=" capitalize text-gray-500">{item.artist}</h5>
                </div>
                <p className="">{item.duration}</p>
            </div>
        )
    })

    return (
        <main className="md:pl-[10%] lg:pl-[8%] radio md:space-y-8 p-4 pb-0 sm:px-8 space-y-6 min-h-full">
            <button className=" ">
                <Link to="/playlist" className="flex justify-center items-center space-x-2">
                    <i className="fa-solid fa-chevron-left"></i>
                    <p>back</p>
                </Link>
            </button>

            <img src={mainPL.cover} alt="" className="w-full h-72" />

            <div className="space-y-3">
                {elements}
            </div>
        </main>
    )
}