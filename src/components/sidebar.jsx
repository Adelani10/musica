import React from "react";
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AddContext } from "../context";
import MobileSideBar from "./mobileSideBar";

export default function Sidebar () {

    const {removeSideBar, sideBarData, isShown} = useContext(AddContext)

    const mobileSideBarElements = sideBarData.map(item => {
        return (
            <MobileSideBar key={item.id} item={item} />
        )
    })

    return (
        <>
            <aside className=" h-full absolute top-0 left-0 hidden w-[10%] lg:w-[8%] md:flex flex-col items-center pt-4 space-y-8">
                <img src="/logo.svg" alt="" className="w-8" />

                <div className="bg-[#1A1E1F] p-2 flex flex-col space-y-4 rounded-full ">
                    <Link to='/'>
                        <img src="/Home.svg" alt="" />
                    </Link>

                    <Link to='/playlist'>
                        <img src="/pl.svg" alt="" />
                    </Link>

                    <Link to='/radio'>
                        <img src="/radio.svg" alt="" />
                    </Link>

                    <Link to='/videos'>
                        <img src="/videos.svg" alt="" />
                    </Link>
                </div>

                <div className="bg-[#1A1E1F] px-2 py-2 flex flex-col space-y-4 rounded-full ">
                    <Link to='/profile'>
                        <img src="/profile.svg" alt="" />
                    </Link>

                    <Link to='/logOut'>
                        <img src="/Logout.svg" alt="" />
                    </Link>
                </div>
            </aside>

            <aside 
                className={` ${isShown ? "translate-x-[]" : ""} flex flex-col sticky md:hidden p-12 space-y-16 pt-6  bottom-0 left-0 top-0 h-full w-[85%]  bg-[#1A1E1F] duration-700 ease-in-out -translate-x-full z-50`}>

                 <button onClick={removeSideBar} className=" rounded-full bg-[#FACD66] h-8 w-8 flex justify-center items-center text-2xl self-end">
                    <i className="fa-solid fa-close"></i>
                 </button>

                 <article className="space-y-8 w-full">
                    {mobileSideBarElements}
                 </article>




            </aside>
        </>
        
    )
}