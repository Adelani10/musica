import React from "react";
import TopCharts from "../components/topCharts";
import { AddContext } from "../context";
import { useContext } from "react";
import NewReleases from "../components/newReleases";
import Nav from "../components/nav";
import Popular from "../components/popularInYourArea";

export default function Home () {

    const {topChartsData, newReleasesData, popularData, showFooter} = useContext(AddContext)

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
            <header className="flex flex-col sm:flex-row md:space-x-6 sm:space-x-2 space-y-5 sm:space-y-0 sm:items-center ">
                <img src="https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959798/musica/frames/frame-desktop_jrye8a.jpg" alt="" className="w-[60%] lg:w-[50%] object-cover rounded-3xl hidden sm:inline-block" />
                <img src="https://res.cloudinary.com/dksvvhuj2/image/upload/v1673959797/musica/frames/frame-mobile_z2hjfu.jpg" alt="" className="w-full sm:hidden rounded-3xl" />

                <div className=" md:w-[40%] lg:w-[50%] w-full space-y-1">
                    <h1 className="text-white text-lg font-bold tracking-wider">
                        Top Charts
                    </h1>

                    <article className="flex sm:flex-col sm:space-y-1 overflow-x-scroll sm:overflow-x-auto space-x-6 sm:space-x-0">
                        {topChartsElements}
                    </article>
                </div>
            </header>

            <section className="space-y-1">
                <h1 className="text-white text-lg font-bold tracking-wider">
                    New Releases
                </h1>
                <article className="flex overflow-x-scroll lg:space-x-6 space-x-4 scrollbar-hide">
                    {newReleasesElements}
                </article>
            </section>

            <section className={`space-y-1 ${showFooter ? "pb-24" : "" }  `}>
                <h1 className="text-white text-lg font-bold tracking-wider">
                    Popular in your Area
                </h1>
                <article className="flex overflow-x-scroll lg:space-x-6 space-x-4 scrollbar-hide">
                    {popularElements}
                </article>
            </section>
        </main>
    )
}