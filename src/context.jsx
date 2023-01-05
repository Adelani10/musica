import React from "react";
import { useState } from "react";
import { data } from "./data";
import { newReleases } from "./data";
import { sb } from "./data";

const AddContext = React.createContext()

function Context (props) {
    const [topChartsData, setTopChartsData] = useState(data)
    const [newReleasesData, setNewReleasesData] = useState(newReleases)
    const [sideBarData, setSideBarData] = useState(sb)
    const [value, setValue] = useState(0)
    const [random, setRandom] = useState(randomNumber())
    const [isShown, setIsShown] = useState(false)


    function generateHowFar( result, main){
        return result * 100/ main
    }
    
    function randomNumber(){
        return Math.floor(Math.random()* 99) + 1
    }
    const percent = generateHowFar(random, 100)

    function handleChange (e) {
        setValue(e.target.valueAsNumber)
    }
    function getBackgroundSize () {
        return { backgroundSize: `${value * 100 / 10}% 100%`}
    }

    function showSideBar () {
        setIsShown(true)
    }

    function removeSideBar () {
        setIsShown(false)
    }




    return (
        <AddContext.Provider value={{
            topChartsData,
            newReleasesData,
            value,
            handleChange,
            getBackgroundSize,
            percent,
            isShown,
            showSideBar,
            removeSideBar,
            sideBarData
        }}>
            {props.children}
        </AddContext.Provider>
    )
}

export {Context, AddContext}