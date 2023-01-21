import React from "react";
import { AddContext } from "../context";
import { useContext, useState } from "react";

export default function NowPlaying () {
    const [isPaused, setIsPaused] = useState(false)
    const [volume, setVolume] = useState(0)

    const {
            percent, 
            handleChange, 
            value, 
            getBackgroundSize, 
            isRadioOn,
            presentRadioStation, 
            nextStation,
            prevStation,
            showFooter
        } = useContext(AddContext)

    function handleVolumeChange(e) {
        handleChange(e)
        if (value < 1){
            setVolume(0)
        }
        else if(value > 0 && value < 4){
            setVolume(1)
        }
        else{
            setVolume(2)
        }
    }

    const styles = {
        width: `${percent}%`
    }

    if (showFooter) {
        return (
            <section>
                {isRadioOn === false ? <footer className="fixed bottom-0 np w-full h-24 flex justify-between items-center md:px-4 px-8 ">
                    <section className="space-x-2 flex md:w-[15%] items-center">
                        <img src="https://res.cloudinary.com/dksvvhuj2/image/upload/v1673962516/musica/others/NP_h8jukw.svg" alt="" className="w-10 rounded-xl" />
                        
                        <div className="flex flex-col">
                            <h1 className="text-gray-300 text-sm">
                                Seasons in
                            </h1>
                            <h5 className="text-xs text-gray-500">James</h5>
                        </div>
                        
                    </section>
    
                    <section className="flex flex-col space-y-3 items-center md:w-[50%]">
                        <div className="flex self-end md:self-auto md:space-x-10 space-x-8 text-white">
                            <button className="hidden md:inline-block">
                                <i className="fa-solid fa-shuffle"></i>
                            </button>
    
                            <button className="hidden md:inline-block">
                                <i className="fa-solid fa-backward-step"></i>
                            </button>
    
                            <button onClick={() => setIsPaused(!isPaused) } className="flex justify-center text-xl md:text-sm items-center h-5 w-5 md:p-4 p-5 rounded-full bg-[#FACD66]">
                                {!isPaused ? <i className="fa-solid fa-play"></i>
                                :<i className="fa-solid fa-pause"></i>}
                            </button>
    
                            <button className=" text-lg md:text-auto">
                                <i className="fa-solid fa-forward-step"></i>
                            </button>
    
                            <button className="hidden md:inline-block">
                                <i className="fa-solid fa-repeat"></i>
                            </button>
                        </div>
                        
                        <div className="outer h-1 bg-neutral-300 hidden md:inline-block rounded-full w-full">
                            <div className="inner h-full rounded-full bg-[#FACD66]" style={styles}>
                            </div>
                        </div>
                    </section>
                    
                    <section className="md:w-[20%] hidden md:flex items-center space-x-2">
                        <button className="max-w-[15%] text-white">
                           {volume === 0 ? <i className="fa-solid fa-volume-off"></i>
                            : volume === 1 ? <i className="fa-solid fa-volume-low"></i> 
                            : volume === 2 ? <i className="fa-solid fa-volume-high"></i>: ""}
                        </button>
    
                        <input 
                            type="range" 
                            
                            name="" id="" 
                            min={0} max={10}
                            value={value}
                            onChange={handleVolumeChange}
                            style={getBackgroundSize()}
                            className="slider h-1 w-[85%] rounded-full bg-gray-300" 
                        />
                    </section>
                </footer>
                :
                <footer className="fixed bottom-0 np w-full h-24 flex justify-between items-center md:px-12 px-8 ">
    
                    <section className="space-x-2 flex items-center">
                        <img src={presentRadioStation.image} alt="" className="w-10 rounded-xl" />
                        
                        <div className="flex text-white flex-col">
                            <h1 className="text-gray-300 text-lg font-bold">
                                {presentRadioStation.name}
                            </h1>
                            <h5 className="text-xs">{presentRadioStation.frequency}</h5>
                        </div>
                    </section>
    
                    <section className="flex items-center">
                        <div className="flex md:self-auto md:space-x-10 space-x-8 text-white">
                            <button  onClick={prevStation} className="hidden md:inline-block">
                                <i className="fa-solid fa-backward-step"></i>
                            </button>
    
                            <button onClick={() => setIsPaused(!isPaused) } className="flex justify-center text-xl md:text-sm items-center h-5 w-5 md:p-4 p-5 rounded-full bg-[#FACD66]">
                                {!isPaused ? <i className="fa-solid fa-play"></i>
                                :<i className="fa-solid fa-pause"></i>}
                            </button>
    
                            <button onClick={nextStation} className=" text-lg md:text-auto">
                                <i className="fa-solid fa-forward-step"></i>
                            </button>
                        </div>
                    </section>
                    
                    <section className="hidden md:flex items-center space-x-2">
                        <button className="max-w-[15%] text-white">
                           {volume === 0 ? <i className="fa-solid fa-volume-off"></i>
                            : volume === 1 ? <i className="fa-solid fa-volume-low"></i> 
                            : volume === 2 ? <i className="fa-solid fa-volume-high"></i>: ""}
                        </button>
    
                        <input 
                            type="range" 
                            
                            name="" id="" 
                            min={0} max={10}
                            value={value}
                            onChange={handleVolumeChange}
                            style={getBackgroundSize()}
                            className="slider h-1 w-[85%] rounded-full bg-gray-300" 
                        />
                    </section>
                </footer>}
            </section>
                
        )
    } 
}