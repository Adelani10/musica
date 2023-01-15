import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import { AddContext } from "../context";
import { useContext } from "react";
import PlaylistCard from "../components/playlistCard";


export default function Playlist () {

    const {playListItems} = useContext(AddContext)

    const playListElements = playListItems.map(item => {
        return (
            <PlaylistCard item={item} key={item.id}/>
        )
    })

    return (
        <main className="md:pl-[10%] lg:pl-[8%] md:space-y-12 p-4 pb-0 space-y-6 h-full text-2xl">
            <Nav/>

            {playListItems.length === 0 ? <h1 className="pt-28  text-center"> Empty! 
                <span className="pl-3"><Link to="/" className="text-sky-400 text-xl">Add Songs</Link></span>
            </h1>
            :
            <div className="sm:grid sm:grid-cols-3 px-4 sm:px-0 md:grid-cols-5 sm:gap-4 sm:gap-y-4 flex flex-col space-y-3 sm:space-y-0 pb-28 sm:pb-0">
                {playListElements}
            </div>}

        </main>
    )
}