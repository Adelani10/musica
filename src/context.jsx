import React from "react";
import { useState, useEffect } from "react";
import { data} from "./data";
import { sb } from "./data";
import { radioStations } from "./data";

const AddContext = React.createContext()

function Context (props) {
    const [isPaused, setIsPaused] = useState(true)
    const [topChartsData, setTopChartsData] = useState(data)
    const [newReleasesData, setNewReleasesData] = useState([])
    const [popularData, setPopularData] = useState([])
    const [radioData, setRadioData] = useState(radioStations)
    const [sideBarData, setSideBarData] = useState(sb)
    const [playListItems, setPlayListItems] = useState(getItems())
    const [value, setValue] = useState(0)
    const [random, setRandom] = useState(randomNumber())
    const [isShown, setIsShown] = useState(false)
    const [isRadioOn, setIsRadioOn] = useState(false)
    const [radioStation, setRadioStation] = useState(0)
    const [tuneIndex, setTuneIndex] = useState(11)
    const [favStations, setFavStations] = useState(getStations())
    const [showFooter, setShowFooter] = useState(false)
    const [incorrect, setIncorrect] = useState(false)
    const [isLogClicked, setIsLogClicked] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const presentRadioStation = radioData[radioStation]
    const whichTune = newReleasesData[tuneIndex]
    const [audio, setAudio] = useState("xyz");

    console.log(audio)
    console.log(whichTune)
    console.log(tuneIndex)
    
    useEffect(()=> {
        localStorage.setItem("playList", JSON.stringify(playListItems))
        localStorage.setItem("stations", JSON.stringify(favStations))

        fetch ("https://musica-api.up.railway.app/new")
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

            setNewReleasesData(newArr)
        })

        fetch ("https://musica-api.up.railway.app/popular")
        .then(res => res.json())
        .then (data => setPopularData(data))
        }, [playListItems, favStations])

    function getStations () {
        return localStorage.getItem("stations") ? JSON.parse(localStorage.getItem("stations")) : []
    }

    function getItems () {
        return localStorage.getItem("playList") ? JSON.parse(localStorage.getItem("playList")) : []
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

    function handlePlayPause ()  {
        setIsPaused(!isPaused)

        if (isPaused) {
          audio.play();
        } else {
          audio.pause();
        }
      };

    function setPresentTuneFromNew (id) {
        setIsPaused(false)
        setTuneIndex(id)
        setShowFooter(true)
        setAudio(new Audio(whichTune.audio))

        if (isPaused) {
            audio.play();
          } else {
            audio.pause();
        }
    }


    function setPresentTuneFromPopular (id) {
        setShowFooter(true)
        setIsPaused(false)

        if (isPaused) {
            audio.play();
          } else {
            audio.pause();
        }

        popularData.map(item => {
            if (item.id === id){
                setWhichTune(item)
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
            whichTune,
            isPaused,
            handlePlayPause,
            audio
        }}>
            {props.children}
        </AddContext.Provider>
    )
}

export {Context, AddContext}