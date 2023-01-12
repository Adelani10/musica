import React from "react";
import { useState, useEffect } from "react";
import { data } from "./data";
import { newReleases } from "./data";
import { sb } from "./data";
import { popularTunes } from "./data";

const AddContext = React.createContext()

function Context (props) {
    const [topChartsData, setTopChartsData] = useState(data)
    const [newReleasesData, setNewReleasesData] = useState(get())
    const [popularData, setPopularData] = useState(popularTunes)
    const [sideBarData, setSideBarData] = useState(sb)
    const [playListItems, setPlayListItems] = useState(getItems())
    const [value, setValue] = useState(0)
    const [random, setRandom] = useState(randomNumber())
    const [isShown, setIsShown] = useState(false)

    useEffect(()=> {
        localStorage.setItem("playList", JSON.stringify(playListItems))
        localStorage.setItem("newRelease", JSON.stringify(newReleasesData))
    }, [playListItems, newReleasesData])

    function getItems () {
        return localStorage.getItem("playList") ? JSON.parse(localStorage.getItem("playList")) : []
    }
     
    function get () {
        return localStorage.getItem("newRelease") ? JSON.parse(localStorage.getItem("newRelease")) : newReleases
    }

    function generateHowFar(result, main){
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

    function addFav (id) {
        const newData = newReleasesData.map(item => {
            if (id === item.id){
                return {
                    ...item, isFavorited: true
                }
            }
            return item
        })
        setNewReleasesData(newData)
    }

    function removeFav (id) {
        const newData = newReleasesData.map(item => {
            if (id === item.id){
                return {
                    ...item, isFavorited: false
                }
            }
            return item
        })
        setNewReleasesData(newData)
    }

    function handlePopFav (id) {
        const newData = popularData.map(item => {
            if (id === item.id){
                return {
                    ...item, isFavorited: !item.isFavorited
                }
            }
            return item
        })
        setPopularData(newData)
    }

    function addToPlayList (newItem) {
        setPlayListItems(prev => {
            return [...prev, newItem]
        })
    }

    function removeFromPlaylist (id) {
        const newItem = playListItems.filter(item => {
            if(item.id !== id){
                return item
            }
        })
        setPlayListItems(newItem)
    }


    return (
        <AddContext.Provider value={{
            topChartsData,
            newReleasesData,
            popularData,
            playListItems,
            value,
            handleChange,
            getBackgroundSize,
            percent,
            isShown,
            showSideBar,
            removeSideBar,
            sideBarData,
            removeFav,
            addFav,
            handlePopFav,
            addToPlayList,
            removeFromPlaylist

        }}>
            {props.children}
        </AddContext.Provider>
    )
}

export {Context, AddContext}