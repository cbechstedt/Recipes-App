import './App.css'
import Login from './pages/Login'
import { Routes, Route, Navigate } from 'react-router-dom'
import Search from './pages/Search'
import { UserProvider } from './context/UserContext'
import Profile from './pages/Profile'
import Favorites from './pages/Favorites'
import Album from './pages/Album'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <header className='app-header'>MusicPlay</header>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/album/:id' element={<Album />}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='*' element={<Navigate to='/' />}></Route>
        </Routes>
      </UserProvider>
      <ToastContainer />
    </>
  )
}

export default App
