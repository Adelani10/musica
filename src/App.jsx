import Sidebar from './components/sidebar'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Playlist from './pages/playlist'
import NowPlaying from './components/nowPlaying'
import Radio from './pages/radio'
import Videos from './pages/videos'
import Profile from './pages/profile'
import Tomorrow from './pages/tomorrow'
import RandB from './pages/rnb'
import GoldenAge from './pages/goldenAge'
import { AddContext } from "./context";
import { useContext } from "react";

function App() {

  const {
          isLogClicked, 
          logRemoved, 
          isLoggedIn, 
          handleForm, 
          formData, 
          handleLogIn,
          handleLogOut,
          incorrect
        } = useContext(AddContext)


  if (isLogClicked) {
        return (
            <main className="text-black relative flex justify-center h-screen items-center w-full bg-stone-300 ">

              <img src="https://res.cloudinary.com/dksvvhuj2/image/upload/v1673962514/musica/others/logo_n6e56x.svg" alt="" className=" sm:w-16 w-1/6 lg:w-36 absolute left-4 top-4" />

              {isLoggedIn ? 
              
              <article className="bg-[#f5f5f5] flex flex-col space-y-3 items-center shadow-2xl shadow-stone-600 rounded-xl md:w-1/2 w-3/4 lg:w-1/4 p-6">
                  <img src="https://res.cloudinary.com/dksvvhuj2/image/upload/v1673962514/musica/others/logo_n6e56x.svg" alt="" className="md:w-16 w-1/5" />

                  <h4 className="text-xl font-bold self-start">Log out of Musica?</h4>

                  <p>You can always log back in at any time. If you want to switch accounts, you can do that by adding an existing acccount. </p>

                  <div className="space-y-2 w-full">
                      <button onClick={handleLogOut} className="w-full bg-black text-white font-semibold rounded-full py-2 tracking-widest">
                          Log out
                      </button>

                      <button onClick={logRemoved} className="w-full border text-black font-semibold rounded-full py-2 tracking-widest transition-all duration-300 ease-in hover:bg-sky-900 hover:text-white ">
                          Cancel
                      </button>
                  </div>
              </article>
              :
              <article className="bg-stone-700 text-white flex flex-col space-y-4 items-center md:w-1/2 w-3/4 lg:w-1/4 rounded-lg p-6">

                {incorrect && <h2 className='text-[10px] sm:text-xs text-red-600 tracking-wider'>Incorrect username or password 😬</h2>}
                <div className='w-full'>
                  <label htmlFor="username" className='text-xl'>Username</label>
                  <input 
                    onChange={handleForm} 
                    type="text" 
                    name="username"
                    value={formData.username} 
                    id="username" 
                    className='bg-transparent h-10 border w-full px-2 rounded-md' />
                </div>


                <div className='w-full'>
                  <label htmlFor="password" className='text-xl'>Password</label>
                  <input 
                    onChange={handleForm} 
                    type="password" 
                    name="password" 
                    value={formData.password}
                    id="password" 
                    className='bg-transparent h-10 border w-full px-2 rounded-md' />
                </div>

                <button onClick={handleLogIn} className="w-1/2 bg-sky-700 text-white font-semibold rounded-full py-2 tracking-widest">
                    Log In
                </button>

              </article>}
          </main>)
  }
  else {
    return (
      <div className="App h-screen overflow-y-scroll font-quickSand  relative bg-[#1D2123] text-white">
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/home/tomorrow' element={<Tomorrow/>}/>
            <Route exact path='/home/rnb' element={<RandB/>}/>
            <Route exact path='/home/goldenAge' element={<GoldenAge/>}/>
            <Route path='/playlist' element={<Playlist/>}/>
            <Route path='/radio' element={<Radio/>}/>
            <Route path='/videos' element={<Videos/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
        <Sidebar/>
        <NowPlaying/>
    </div>
    )
  }
}

export default App
