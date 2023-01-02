import { useState } from 'react'
import Sidebar from './components/sidebar'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Playlist from './pages/playlist'

function App() {

  return (
    <div className="App md:h-screen container mx-auto flex bg-[#1D2123]">
      <Sidebar/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/playlist' element={<Playlist/>}/>
          {/* <Route exact path='/stats' element={<Stats/>}/> */}
          {/* <Route exact path='/aside' element={<Aside/>}/> */}
      </Routes>
    </div>
  )
}

export default App
