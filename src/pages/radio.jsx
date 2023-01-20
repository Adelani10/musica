import React from "react";
import Nav from "../components/nav";
import { AddContext } from "../context";
import { useContext, useState } from "react";
import Station from "../components/stations";
import FavStation from "../components/favStation";

export default function Tomorrow () {

    const [favPagePresent, setFavPagePresent] = useState(false)

    const {radioData, favStations} = useContext(AddContext)

    const stationElements = radioData.map(item => {
        return (
            <Station key={item.id} item={item}/>
        )
    })

    console.log(favStations)

    return (
        <main className="md:pl-[10%] lg:pl-[8%] radio md:space-y-8 p-4 pb-0 sm:px-8 space-y-6 min-h-full">
            <Nav/>
            <section className="flex flex-col md:items-center space-y-6 md:space-y-0 md:space-x-4 md:flex-row">
                <img src="https://res.cloudinary.com/dksvvhuj2/image/upload/v1673962520/musica/others/radioimg_k2ukbf.jpg" alt="" className="md:w-[40%] h-80 md:h-56 object-cover w-full  rounded-2xl" />

                <div className="text-[#EFEEE0] space-y-8 w-full">
                    <div className="space-y-2">
                        <h1 className="text-2xl">FM Radio </h1>
                        <p className="text-sm">Listen to popular, captivating-voiced On-Air-Presenters as they walk you through breaking news and everything trending in the country.</p>
                        <h3 className="font-mono">On, All day, Everyday!</h3>
                    </div>
        
                    <div className="space-x-2 w-full flex text-sm">
                        <button onClick={() => setFavPagePresent(!favPagePresent)} className={`flex ${favPagePresent ? "" : "space-x-2"} min-w-[25%] md:min-w-0 items-center justify-center px-3 py-2 rounded-full bg-[#33373B] hover:bg-gray-300 hover:text-black `}>
                            <img src="https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961486/musica/icons/Heart_h5ssmk.svg" alt="" className={`${favPagePresent ? "hidden" : "inline-block"}`}/>
                            <h3 className="text-xs">{favPagePresent ? "Back to List" : "Favorite"}</h3>
                        </button>
                    </div>
                </div>
            </section>

            {!favPagePresent ? <section className="sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-3 gap-y-2 pb-28 sm:pb-4 flex flex-col w-full">
                {stationElements}
            </section>
            :
            <section className="flex flex-col space-y-2 pb-28 sm:pb-4">
                {favStations.length ? 
                    favStations.map(item => {
                        return (
                            <FavStation key={item.id} item={item}/>
                        )
                    })
                    :
                    <h3 className="text-xl">
                        Add Favorite Stations!
                    </h3>
                }
            </section>}
        </main>
    )
}