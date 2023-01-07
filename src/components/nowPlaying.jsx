import React from "react";
import { AddContext } from "../context";
import { useContext } from "react";

export default function NowPlaying () {

    const {percent, handleChange, value, getBackgroundSize} = useContext(AddContext)

    const styles = {
        width: `${percent}%`
    }

    return (
            <footer className="sm:sticky fixed bottom-0 border-t np w-full h-24 flex justify-between items-center md:px-4 px-8 ">
                <section className="space-x-2 flex md:w-[20%] items-center">
                    <img src="/NP.svg" alt="" className="w-10 rounded-xl" />
                    
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

                        <button className="flex justify-center items-center h-5 w-5 p-4 rounded-full bg-[#FACD66]">
                            <i className="fa-solid fa-play"></i>
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
                        <i className="fa-solid fa-volume-high"></i>
                    </button>

                    <input 
                        type="range" 
                        name="" id="" 
                        min={0} max={10}
                        value={value}
                        onChange={handleChange}
                        style={getBackgroundSize()}
                        className="slider h-1 w-[85%] rounded-full bg-gray-300" 
                    />
                </section>
            </footer>
    )
}