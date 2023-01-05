import React from "react";
import TopCharts from "../components/topCharts";
import { AddContext } from "../context";
import { useContext } from "react";
import NewReleases from "../components/newReleases";
import Nav from "../components/nav";

export default function Home () {

    const {topChartsData, newReleasesData, showSideBar} = useContext(AddContext)

    const topChartsElements = topChartsData.map(item => {
        return (
            <TopCharts item={item} key={item.id} />
        )
    })

    const newReleasesElements = newReleasesData.map((item) => {
        return (
            <NewReleases item={item} key={item.id} />
        )
    })

    return (
        <main className=" md:pl-[10%] lg:pl-[8%] md:space-y-12 space-y-6">
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

        </main>
    )
}