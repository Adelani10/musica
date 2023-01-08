import React from "react";
import Nav from "../components/nav";
import TomorrowTune from "../components/tomorrowTunes";
import { AddContext } from "../context";
import { useContext } from "react";

export default function Tomorrow () {

    const {newReleasesData} = useContext(AddContext)

    const tomorrowTuneElements = newReleasesData.map(item => {
        return (
            <TomorrowTune key={item.id} item={item}/>
        )
    })
    return (
        <main className="md:pl-[10%] lg:pl-[8%] tomorrow md:space-y-8 p-4 pb-0 space-y-6 min-h-full">
            <Nav/>
            <section className="flex flex-col md:items-center space-y-6 md:space-y-0 md:space-x-4 md:flex-row">
                <img src="/tomorrow-img.jpg" alt="" className="md:w-[40%] h-80 md:h-56 object-cover w-full  rounded-2xl" />

                <div className="text-[#EFEEE0] space-y-8 w-full">
                    <div className="space-y-2">
                        <h1 className="text-2xl">Tomorrow's tunes</h1>
                        <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus officia suscipit odio explicabo omnis ratione..</p>
                        <h3>64 songs - 16 hrs+</h3>
                    </div>
        
                    <div className="space-x-2 w-full flex text-sm">

                        <button className="flex space-x-2 min-w-[25%] md:min-w-0  items-center justify-center px-3 py-2 rounded-full bg-[#33373B] ">
                            <img src="/Play.svg" alt="" />
                            <h3 className="text-xs">Play all</h3>
                        </button>

                        <button className="flex space-x-3 min-w-[45%] md:min-w-0 items-center justify-center px-3 py-2 rounded-full bg-[#33373B] ">
                            <img src="/music-square-add.svg" alt="" />
                            <h3 className="text-xs">Add to collection</h3>
                        </button>

                        <button className="flex space-x-2 min-w-[25%] md:min-w-0 items-center justify-center px-3 py-2 rounded-full bg-[#33373B] ">
                            <img src="/Heart.svg" alt="" />
                            <h3 className="text-xs">Like</h3>
                        </button>
                    </div>
                </div>
            </section>

            <section className="flex flex-col space-y-2 pb-4 ">
                {tomorrowTuneElements}
            </section>
        </main>
    )
}