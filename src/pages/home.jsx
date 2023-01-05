import React from "react";
import TopCharts from "../components/topCharts";
import { AddContext } from "../context";
import { useContext } from "react";
import NewReleases from "../components/newReleases";

export default function Home () {

    const {topChartsData, newReleasesData} = useContext(AddContext)

    const topChartsElements = topChartsData.map((item, index) => {
        return (
            <TopCharts item={item} />
        )
    })

    const newReleasesElements = newReleasesData.map((item, index) => {
        return (
            <NewReleases item={item} />
        )
    })

    return (
        <section className="md:w-[90%] w-full lg:w-[92%] p-4 md:space-y-12 space-y-6">
            <div className="flex space-x-3">
                <div className="flex space-x-3 md:hidden">
                    <button className="text-gray-400 text-xl">
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
            

            <header className="flex flex-col md:flex-row md:space-x-6 space-y-5 md:space-y-0 md:items-center ">
                <img src="/frame1.svg" alt="" className="w-[60%] hidden md:inline-block" />
                <img src="/frameSc.svg" alt="" className="w-full md:hidden " />

                <div className=" md:w-[40%] w-full space-y-1">
                    <h1 className="text-white text-lg font-bold tracking-wider">
                        Top Charts
                    </h1>

                    <article className="flex md:flex-col md:space-y-1 overflow-x-scroll md:overflow-x-auto space-x-6 md:space-x-0">
                        {topChartsElements}
                    </article>
                </div>
            </header>

            <section className="space-y-1">
                <h1 className="text-white text-lg font-bold tracking-wider">
                    New Releases
                </h1>
                <article className="flex overflow-x-scroll md:overflow-x-auto md:space-x-8 space-x-4">
                    {newReleasesElements}
                </article>
            </section>

        </section>
    )
}