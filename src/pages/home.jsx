import React from "react";
import TopCharts from "../components/topCharts";
import { AddContext } from "../context";
import { useContext } from "react";
import NewReleases from "../components/newReleases";
import Nav from "../components/nav";
import Popular from "../components/popularInYourArea";

export default function Home () {

    const {topChartsData, newReleasesData, popularData, playListItems} = useContext(AddContext)

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

    const popularElements = popularData.map((item) => {
        return (
            <Popular item={item} key={item.id} />
        )
    })


    return (
        <main className=" md:pl-[10%] lg:pl-[8%] p-4 md:px-8 md:space-y-12 space-y-6">
            <Nav/>
            <header className="flex flex-col md:flex-row md:space-x-6 space-y-5 md:space-y-0 md:items-center ">
                <img src="/frame-desktop.jpg" alt="" className="w-[60%] lg:w-[40%]  object-cover rounded-3xl hidden md:inline-block" />
                <img src="/frame-mobile.jpg" alt="" className="w-full md:hidden rounded-3xl" />

                <div className=" md:w-[40%] lg:w-[60%] w-full space-y-1">
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

            <section className="space-y-1 pb-24 sm:pb-0">
                <h1 className="text-white text-lg font-bold tracking-wider">
                    Popular in your Area
                </h1>
                <article className="flex overflow-x-scroll md:overflow-x-auto md:space-x-8 space-x-4">
                    {popularElements}
                </article>
            </section>
        </main>
    )
}