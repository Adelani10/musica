import React from "react";
import { useState, useEffect } from "react";
import { data } from "./data";
import { newReleases } from "./data";
import { sb } from "./data";
import { popularTunes } from "./data";
import { radioStations } from "./data";

const AddContext = React.createContext()

function Context (props) {
    const [topChartsData, setTopChartsData] = useState(data)
    const [newReleasesData, setNewReleasesData] = useState(get())
    const [popularData, setPopularData] = useState(popularTunes)
    const [radioData, setRadioData] = useState(radioStations)
    const [sideBarData, setSideBarData] = useState(sb)
    const [playListItems, setPlayListItems] = useState(getItems())
    const [value, setValue] = useState(0)
    const [random, setRandom] = useState(randomNumber())
    const [isShown, setIsShown] = useState(false)
    const [isRadioOn, setIsRadioOn] = useState(false)
    const [radioStation, setRadioStation] = useState(0)
    const [favStations, setFavStations] = useState(getStations())

    const presentRadioStation = radioData[radioStation]
    
    // fetch('https://theaudiodb.p.rapidapi.com/searchalbum.php?s=daft_punk', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

    useEffect(()=> {
        localStorage.setItem("playList", JSON.stringify(playListItems))
        localStorage.setItem("nR", JSON.stringify(newReleasesData))
        localStorage.setItem("stations", JSON.stringify(favStations))
    }, [playListItems, newReleasesData, favStations])

    function getStations () {
        return localStorage.getItem("stations") ? JSON.parse(localStorage.getItem("stations")) : []
    }

    function getItems () {
        return localStorage.getItem("playList") ? JSON.parse(localStorage.getItem("playList")) : []
    }
     
    function get () {
        return localStorage.getItem("nR") ? JSON.parse(localStorage.getItem("nR")) : newReleases
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

    function radioOn () {
        setIsRadioOn(true)
    }

    function radioOff () {
        setIsRadioOn(false)
    }

    function nextStation () {
        
        setRadioStation(prev => {
            if (prev <= 20) {
                return prev + 1
            }
            else {
                return 0
            }
        })
    }

    function prevStation () {
        
        setRadioStation(prev => {
            if (prev <= 0) {
                return 21
            }
            else {
                return prev - 1
            }
        })
    }

    function setPresentStation (id) {
        setRadioStation(id)
    }

    function handleFaved (newItem) {
        setFavStations(prev => {
            return [...prev, newItem]
        })
    }

    function favRemoved (id) {
        const newItem = favStations.filter(item => {
            if (item.id !== id){
                return item
            }
        })
        setFavStations(newItem)
    }

    console.log(favStations)

    return (
        <AddContext.Provider value={{
            topChartsData,
            newReleasesData,
            popularData,
            radioData,
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
            removeFromPlaylist,
            isRadioOn,
            radioOn,
            radioOff,
            presentRadioStation,
            nextStation, 
            prevStation,
            setPresentStation,
            handleFaved,
            favRemoved,
            favStations

        }}>
            {props.children}
        </AddContext.Provider>
    )
}

export {Context, AddContext}