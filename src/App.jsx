import './App.css'
import Login from './pages/Login'
import { Routes, Route, Navigate } from 'react-router-dom'
import Search from './pages/Search'
import { UserProvider } from './context/UserContext'

function App() {

  return (
    <>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='*' element={<Navigate to='/' />}></Route>
        </Routes>
      </UserProvider>
    </>
  )
}

export default App
