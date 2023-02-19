import React from "react";
import { AddContext } from "../context";
import { useContext, useState } from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function NowPlaying () {
    const [volume, setVolume] = useState(0)

    const {
            handleChange, 
            value, 
            isRadioOn,
            presentRadioStation, 
            nextStation,
            prevStation,
            showFooter,
            whichTune,
            whichPopularTune,
            whichPlaylistTune,
            plClicked,
            isPaused,
            newClicked,
            nextTuneFromNew,
            nextTuneFromPopular
        } = useContext(AddContext)

    function handleVolumeChange(e) {
        handleChange(e)
        if (value < 1){
            setVolume(0)
        }
        else if(value > 0 && value < 4){
            setVolume(1)
        }
        else{
            setVolume(2)
        }
    }

    if (showFooter) {
        return (
            <section>
                {isRadioOn === false ? 
                <footer className="fixed bottom-0 np w-full h-24 flex justify-between items-center md:px-4 px-6 ">
                    <div className="space-x-2 flex items-center">
                        <img src={newClicked ? whichTune.cover : whichPopularTune.cover} alt="" className="w-10 rounded-xl" />
                        
                        <div className="flex flex-col">
                            <h1 className="text-gray-300 text-sm">
                                {newClicked ? whichTune.title : whichPopularTune.title}
                            </h1>
                            <h5 className="text-xs text-gray-400">{newClicked ? whichTune.artist : whichPopularTune.artist}</h5>
                        </div>
                    </div>
    
                    <div className="flex flex-col space-y-3 items-center ">
                        {!plClicked ? 
                        <audio
                            onEnded={newClicked ? nextTuneFromNew : nextTuneFromPopular}
                            src={newClicked ? whichTune.audio : whichPopularTune.audio}
                            controlsList="nodownload"
                            autoPlay
                            controls
                        />
                        :
                        <audio
                            src={whichPlaylistTune}
                            controlsList="nodownload"
                            autoPlay
                            controls
                        />}
                    </div>
                </footer>
                :
                <footer className="fixed bottom-0 np w-full h-24 flex justify-between items-center md:px-12 px-8 ">
    
                    <section className="space-x-2 flex items-center">
                        <img src={presentRadioStation.image} alt="" className="w-10 rounded-xl" />
                        
                        <div className="flex text-white flex-col">
                            <h1 className="text-gray-300 text-lg font-bold">
                                {presentRadioStation.name}
                            </h1>
                            <h5 className="text-xs">{presentRadioStation.frequency}</h5>
                        </div>
                    </section>
    
                    <section className="flex items-center">
                        <div className="flex md:self-auto md:space-x-10 space-x-8 text-white">
                            <button  onClick={prevStation} className="hidden md:inline-block">
                                <i className="fa-solid fa-backward-step"></i>
                            </button>
    
                            <button onClick={() => setIsPaused(!isPaused) } className="flex justify-center text-xl md:text-sm items-center h-5 w-5 md:p-4 p-5 rounded-full bg-[#FACD66]">
                                {!isPaused ? <i className="fa-solid fa-play"></i>
                                :<i className="fa-solid fa-pause"></i>}
                            </button>
    
                            <button onClick={nextStation} className=" text-lg md:text-auto">
                                <i className="fa-solid fa-forward-step"></i>
                            </button>
                        </div>
                    </section>
                    
                    <section className="hidden md:flex items-center space-x-2">
                        <button className="max-w-[15%] text-white">
                           {volume === 0 ? <i className="fa-solid fa-volume-off"></i>
                            : volume === 1 ? <i className="fa-solid fa-volume-low"></i> 
                            : volume === 2 ? <i className="fa-solid fa-volume-high"></i>: ""}
                        </button>
    
                        <input 
                            type="range" 
                            
                            name="" id="" 
                            min={0} max={10}
                            value={value}
                            onChange={handleVolumeChange}
                            style={getBackgroundSize()}
                            className="slider h-1 w-[85%] rounded-full bg-gray-300" 
                        />
                    </section>
                </footer>}
            </section>
                
        )
    } 
}