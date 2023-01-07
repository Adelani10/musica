import Sidebar from './components/sidebar'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Playlist from './pages/playlist'
import NowPlaying from './components/nowPlaying'
import Radio from './pages/radio'
import Videos from './pages/videos'
import Profile from './pages/profile'
import LogOut from './pages/logOut'
import Nav from './components/nav'
import Tomorrow from './pages/tomorrow'
import RandB from './pages/rnb'
import GoldenAge from './pages/goldenAge'

function App() {

  return (
    <div className="App h-screen overflow-y-scroll font-quickSand container mx-auto relative bg-[#1D2123] text-white md:space-y-2">
      <Nav/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/home/tomorrow' element={<Tomorrow/>}/>
          <Route exact path='/home/rnb' element={<RandB/>}/>
          <Route exact path='/home/goldenAge' element={<GoldenAge/>}/>
          <Route path='/playlist' element={<Playlist/>}/>
          <Route path='/radio' element={<Radio/>}/>
          <Route path='/videos' element={<Videos/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/logOut' element={<LogOut/>}/>
      </Routes>
      <Sidebar/>
      <NowPlaying/>
    </div>
  )
}

export default App
