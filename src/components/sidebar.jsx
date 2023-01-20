import React from "react";
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AddContext } from "../context";
import MobileSideBar from "./mobileSideBar";

export default function Sidebar () {

    const {removeSideBar, sideBarData, isShown, radioOn, radioOff} = useContext(AddContext)

    const mobileSideBarElements = sideBarData.map(item => {
        return (
            <MobileSideBar key={item.id} item={item} />
        )
    })

    return (
        <section>
            <aside className="md:h-full fixed top-0 left-0 bottom-0 h-full hidden w-[10%] lg:w-[8%] md:flex flex-col items-center pt-4 space-y-8">
                <img src="https://res.cloudinary.com/dksvvhuj2/image/upload/v1673962514/musica/others/logo_n6e56x.svg" alt="" className="w-8" />

                <div className="bg-[#1A1E1F] p-2 flex flex-col space-y-4 rounded-full ">
                    <Link to='/' onClick={radioOff}>
                        <img src="https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961486/musica/icons/Home_tr5nqr.svg" alt="" />
                    </Link>

                    <Link to='/playlist' onClick={radioOff}>
                        <img src="https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961484/musica/icons/pl_tdbtfe.svg" alt="" />
                    </Link>

                    <Link to='/radio' onClick={radioOn}>
                        <img src="https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961484/musica/icons/radio_qvzwqh.svg" alt="" />
                    </Link>

                    <Link to='/videos' onClick={radioOff}>
                        <img src="https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961484/musica/icons/videos_i0uilz.svg" alt="" />
                    </Link>
                </div>

                <div className="bg-[#1A1E1F] px-2 py-2 flex flex-col space-y-4 rounded-full ">
                    <Link to='/profile' onClick={radioOff}>
                        <img src="https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961484/musica/icons/profile_x8mxsb.svg" alt="" />
                    </Link>

                    <Link to='/logOut' onClick={radioOff}>
                        <img src="https://res.cloudinary.com/dksvvhuj2/image/upload/v1673961484/musica/icons/Logout_gmwvkl.svg" alt="" />
                    </Link>
                </div>
            </aside>

            <aside 
                className={` ${isShown ? "translate-x-0" : "-translate-x-full"} flex flex-col fixed md:hidden p-12 space-y-16 pt-6 bottom-0 left-0 top-0 h-full w-[85%]  bg-[#1A1E1F] transition-all duration-700 ease-in-out z-50`}>

                 <button onClick={removeSideBar} className=" rounded-full bg-[#FACD66] h-8 w-8 flex justify-center items-center text-2xl self-end">
                    <i className="fa-solid fa-close"></i>
                 </button>

                 <article className="space-y-8 w-full">
                    {mobileSideBarElements}
                 </article>
            </aside>

        </section>
        
    )
}