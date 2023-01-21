import React from "react";  
import { AddContext } from "../context";
import { useContext } from "react";

export default function Nav () {

    const {showSideBar} = useContext(AddContext)

    return (
        <div className="flex space-x-4 md:space-x-0">
            <div className="flex space-x-3 md:hidden">
                <button onClick={showSideBar} className="text-gray-400 text-3xl">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <img src="https://res.cloudinary.com/dksvvhuj2/image/upload/v1673962514/musica/others/logo_n6e56x.svg" alt="" className="w-6" />
            </div>
            <input 
                type="text" 
                className=" bg-transparent h-10 w-full px-3 rounded-sm text-sm tracking-widest text-white text-right md:text-left" 
                placeholder="Search"
            />
        </div>
    )
}