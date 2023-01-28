import React from "react";
import Nav from "../components/nav";
import { useState } from "react";
import { AddContext } from "../context";
import { useContext } from "react";

export default function Profile () {

    const {formData, isLoggedIn, hideFooter, logClicked} = useContext(AddContext)

    const [isHovered, setIsHovered] = useState(false)
    return (
        <section className="md:pl-[10%] lg:pl-[8%] md:space-y-12 p-4 pb-0 space-y-6 text-center h-full">

            <Nav/>

            <div className="bg-stone-600 rounded-sm p-4 sm:px-8 h-72 flex flex-col justify-between">
                <div className="flex justify-between w-full">
                    <button className="border-2 font-semibold hover:bg-sky-800 rounded-2xl text-xs hover:border-none px-3 py-1 capitalize">
                        upgrade
                    </button>

                    <button onClick={() => {
                        logClicked()
                        hideFooter()
                    }} className="font-bold capitalize hover:scale-150">
                        {isLoggedIn ? "Log Out" : "Log In"}
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-3 items-center">

                    <div onMouseEnter={() => setIsHovered(true)} 
                        onMouseLeave={()=> setIsHovered(false)}
                        className="w-44 bg-black h-44 rounded-full flex justify-center items-center flex-col border-2"
                    >
                        {isHovered ? 
                        <p className="text-sm">
                            <i className="fa-regular fa-image text-3xl"></i>
                            <br></br>
                            Choose Pic
                        </p>
                        :
                        <i className="fa-regular fa-user text-3xl"></i>}
                    </div>

                    <div className="flex flex-col items-start sm:mb-3">
                        <h4 className="uppercase font-bold hidden sm:inline-block tracking-widest">
                            profile
                        </h4>

                        <h2 className="md:text-8xl text-3xl capitalize tracking-wider">
                            {formData.username}
                        </h2>
                    </div>

                </div>
            </div>

            <div className="space-y-8 flex flex-col">
                <h5 className="text-center tracking-widest md:text-xl">
                    Wanna Edit Profile ?
                </h5>

                <article className="space-y-4">
                    <div className="flex items-center space-x-6">
                        <h2 className="text-2xl">
                            Username
                        </h2>
                        <button className="text-sky-400">
                            <i className="fa-regular fa-edit text-3xl"></i>
                        </button>
                    </div>

                    <div className="flex items-center space-x-6">
                        <h2 className="text-2xl">
                            Password
                        </h2>
                        <button className="text-sky-400">
                            <i className="fa-regular fa-edit text-3xl"></i>
                        </button>
                    </div>

                    <div className="flex items-center space-x-6">
                        <h2 className="text-2xl">
                            Profile Image
                        </h2>
                        <button className="text-sky-400">
                            <i className="fa-regular fa-edit text-3xl"></i>
                        </button>
                    </div>
                </article>
                
            </div>

        </section>
    )
}