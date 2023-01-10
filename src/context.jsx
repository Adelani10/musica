import React from "react";
import { useState, useEffect } from "react";
import { data } from "./data";
import { newReleases } from "./data";
import { sb } from "./data";
import { popularTunes } from "./data";

const AddContext = React.createContext()

function Context (props) {
    const [topChartsData, setTopChartsData] = useState(data)
    const [newReleasesData, setNewReleasesData] = useState(newReleases)
    const [popularData, setPopularData] = useState(popularTunes)
    const [sideBarData, setSideBarData] = useState(sb)
    const [playListItems, setPlayListItems] = useState(getItems())
    const [value, setValue] = useState(0)
    const [random, setRandom] = useState(randomNumber())
    const [isShown, setIsShown] = useState(false)
    const [isEntered, setIsEntered] = useState(false)

    useEffect(()=> {
        localStorage.setItem("playList", JSON.stringify(playListItems))
    }, [playListItems])

    function getItems () {
        return localStorage.getItem("playList") ? JSON.parse(localStorage.getItem("playList")) : []
    }


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1191a9fedfmshd85d8cda7af90f1p19e596jsn97149b5aa0ad',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    // useEffect(()=> {
    //     fetch('https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
    // }, [])

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

    function handleMouseEnter () {
        setIsEntered(true)
    }
    function handleMouseLeave () {
        setIsEntered(false)
    }

    function handleFav (id) {
        const newData = newReleasesData.map(item => {
            if (id === item.id){
                return {
                    ...item, isFavorited: !item.isFavorited
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
            handleFav,
            handlePopFav,
            handleMouseEnter,
            handleMouseLeave,
            isEntered,
            addToPlayList,
            removeFromPlaylist

        }}>
            {props.children}
        </AddContext.Provider>
    )
}

export {Context, AddContext}