import React from "react";
import { useState, useEffect } from "react";
import { data, newReleases, popularTunes} from "./data";
import { sb } from "./data";
import { radioStations } from "./data";

const AddContext = React.createContext()

function Context (props) {
    const [isPaused, setIsPaused] = useState(true)
    const [topChartsData, setTopChartsData] = useState(data)
    const [newReleasesData, setNewReleasesData] = useState(newReleases)
    const [popularData, setPopularData] = useState(popularTunes)
    const [radioData, setRadioData] = useState(radioStations)
    const [sideBarData, setSideBarData] = useState(sb)
    const [playListItems, setPlayListItems] = useState([])
    const [isShown, setIsShown] = useState(false)
    const [isRadioOn, setIsRadioOn] = useState(false)
    const [radioStation, setRadioStation] = useState(0)
    const [tuneIndex, setTuneIndex] = useState(0)
    const [popularTuneIndex, setPopularTuneIndex] = useState(0)
    const whichTune = newReleasesData[tuneIndex]
    const whichPopularTune = popularData[popularTuneIndex]
    const [whichPlaylistTune, setWhichPlaylistTune] = useState(null)
    const [favStations, setFavStations] = useState(getStations())
    const [newClicked, setNewClicked] = useState(false)
    const [plClicked, setPlClicked] = useState(false)
    const [showFooter, setShowFooter] = useState(false)
    const [incorrect, setIncorrect] = useState(false)
    const [isLogClicked, setIsLogClicked] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const presentRadioStation = radioData[radioStation]

    useEffect(()=> {
        // localStorage.setItem("playList", JSON.stringify(playListItems))
        localStorage.setItem("stations", JSON.stringify(favStations))

        fetch ("https://musica-api.up.railway.app/popular")
        .then(res => res.json())
        .then (data => {
            const newArr = data.map((item, index) => {
                return {
                    id: index,
                    artist: item.artist,
                    duration: item.duration,
                    title: item.title,
                    cover: item.cover,
                    audio: item.audio,
                    isFavorited: false
                }
            })

            setPopularData(newArr)
        })

        fetch ("https://musica-api.up.railway.app/playlist")
        .then(res => res.json())
        .then (data => setPlayListItems(data))
        }, [favStations])

    function getStations () {
        return localStorage.getItem("stations") ? JSON.parse(localStorage.getItem("stations")) : []
    }

    function getItems () {
        return localStorage.getItem("playList") ? JSON.parse(localStorage.getItem("playList")) : []
    }

    function handleChange (e) {
        setValue(e.target.valueAsNumber)
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

    function setPresentTuneFromNew (id) {
        setNewClicked(true)
        setPlClicked(false)
        setTuneIndex(id)
        setShowFooter(true)
    }

    function nextTuneFromNew () {
        if (tuneIndex < 9 && tuneIndex >= 0){
            setTuneIndex(prev => prev + 1)
        }
        else{
            setTuneIndex(0)
        }
    }

    function setPresentTuneFromPopular (id) {
        setNewClicked(false)
        setPlClicked(false)
        setPopularTuneIndex(id)
        setShowFooter(true)
    }

    function setPresentTuneFromPlaylist (e) {
        setPlClicked(true)
        setWhichPlaylistTune(e.target.id)
        console.log(e.target.id)
        setShowFooter(true)
    }

    function nextTuneFromPopular () {
        if (popularTuneIndex < 9 && popularTuneIndex >= 0){
            setPopularTuneIndex(prev => prev + 1)
        }
        else{
            setPopularTuneIndex(0)
        }
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

    function hideFooter () {
        setShowFooter(false)
    }

    function addFooter () {
        setShowFooter(true)
    }

    function logClicked () {
        setIsLogClicked(true)
    }

    function logRemoved () {
        setIsLogClicked(false)
    }

    function handleLogIn () {
        if (formData.username && formData.password){
            setIsLoggedIn(true)
            setIsLogClicked(false)
            setIncorrect(false)
        }
        else {
            setIncorrect(true)
        }
    }

    function handleLogOut () {
        setIsLoggedIn(false)
        setIsLogClicked(false)
        setFormData({
            username: "",
            password: ""
        })
    }

    function handleForm (e) {
        const {type, value, name} = e.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <AddContext.Provider value={{
            topChartsData,
            newReleasesData,
            popularData,
            radioData,
            playListItems,
            handleChange,
            isShown,
            showSideBar,
            removeSideBar,
            sideBarData,
            removeFav,
            addFav,
            handlePopFav,
            isRadioOn,
            radioOn,
            radioOff,
            presentRadioStation,
            nextStation, 
            prevStation,
            setPresentStation,
            handleFaved,
            favRemoved,
            favStations,
            showFooter,
            addFooter,
            hideFooter,
            isLogClicked,
            logClicked,
            logRemoved,
            isLoggedIn,
            handleLogIn,
            handleLogOut,
            handleForm,
            formData,
            incorrect,
            setPresentTuneFromNew,
            setPresentTuneFromPopular,
            setPresentTuneFromPlaylist,
            whichTune,
            whichPopularTune,
            whichPlaylistTune,
            isPaused,
            nextTuneFromNew,
            newClicked,
            plClicked,
            nextTuneFromPopular,
        }}>
            {props.children}
        </AddContext.Provider>
    )
}

export {Context, AddContext}