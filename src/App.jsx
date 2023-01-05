import { useState } from 'react'
import Sidebar from './components/sidebar'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Playlist from './pages/playlist'
import NowPlaying from './components/nowPlaying'

function App() {

  return (
    <div className="App h-screen overflow-y-scroll container mx-auto relative bg-[#1D2123]">
      <div className='flex w-full'>
        <Sidebar/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/playlist' element={<Playlist/>}/>
            {/* <Route exact path='/stats' element={<Stats/>}/> */}
            {/* <Route exact path='/aside' element={<Aside/>}/> */}
        </Routes>
      </div>
      <NowPlaying/>
    </div>
  )
}

export default App
