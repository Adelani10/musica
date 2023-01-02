import React from "react";
import TopCharts from "../components/topCharts";
import { AddContext } from "../context";
import { useContext } from "react";
import NewReleases from "../components/newReleases";

export default function Home () {

    const {topChartsData, newReleasesData} = useContext(AddContext)

    const topChartsElements = topChartsData.map((item, index) => {
        return (
            <TopCharts key={index} item={item} />
        )
    })

    const newReleasesElements = newReleasesData.map((item, index) => {
        return (
            <NewReleases item={item} />
        )
    })

    return (
        <section className="w-[90%] lg:w-[92%] p-4 md:space-y-3 space-y-5">
            <input 
                type="text" 
                className=" bg-[#1D2123] h-10 w-full px-3 rounded-sm text-sm tracking-widest text-white" 
                placeholder="Search 🔍"
            />

            <header className="flex flex-col md:flex-row md:space-x-6 space-y-5 md:space-y-0 md:items-center ">
                <img src="/frame1.svg" alt="" className="w-[60%] hidden md:inline-block" />
                <img src="/frameSc.svg" alt="" className="w-full md:hidden " />

                <div className=" md:w-[40%] w-full space-y-1">
                    <h1 className="text-white text-lg font-bold tracking-wider">
                        Top Charts
                    </h1>

                    <article className="flex md:flex-col md:space-y-2 overflow-x-scroll md:overflow-x-auto space-x-6 md:space-x-0">
                        {topChartsElements}
                    </article>
                </div>
            </header>

            <article className="space-y-1">
                <h1 className="text-white text-lg font-bold tracking-wider">
                    New Releases
                </h1>
                <article className="flex overflow-x-scroll md:overflow-x-auto space-x-8">
                    {newReleasesElements}
                </article>
            </article>

        </section>
    )
}