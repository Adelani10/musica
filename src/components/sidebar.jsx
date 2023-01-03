import React from "react";
import { Link } from 'react-router-dom'

export default function Sidebar () {
    return (
        <aside className=" h-full hidden w-[10%] lg:w-[8%] md:flex flex-col items-center pt-4 space-y-8">
            <img src="/logo.svg" alt="" className="w-8" />

            <div className="bg-[#1A1E1F] p-2 flex flex-col space-y-4 rounded-full ">
                <Link to='/'>
                    <img src="/Home.svg" alt="" />
                </Link>

                <Link to='/playlist'>
                    <img src="/pl.svg" alt="" />
                </Link>

                <Link to='/'>
                    <img src="/radio.svg" alt="" />
                </Link>

                <Link to='/'>
                    <img src="/videos.svg" alt="" />
                </Link>
            </div>

            <div className="bg-[#1A1E1F] px-2 py-2 flex flex-col space-y-4 rounded-full ">
                <Link to='/'>
                    <img src="/profile.svg" alt="" />
                </Link>

                <Link to='/playlist'>
                    <img src="/Logout.svg" alt="" />
                </Link>
            </div>
        </aside>
    )
}