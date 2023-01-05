import React from "react";  
import { AddContext } from "../context";
import { useContext } from "react";

export default function Nav () {

    const {topChartsData, newReleasesData, showSideBar} = useContext(AddContext)

    return (
        <div className="flex space-x-4 md:pl-[10%] lg:pl-[8%]">
            <div className="flex space-x-3 md:hidden">
                <button onClick={showSideBar} className="text-gray-400 text-xl">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <img src="/logo.svg" alt="" className="w-6" />
            </div>
            <input 
                type="text" 
                className=" bg-[#1D2123] h-10 w-full px-3 rounded-sm text-sm tracking-widest text-white text-right md:text-left" 
                placeholder="Search"
            />
        </div>
    )
}