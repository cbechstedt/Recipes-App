import './App.css'
import Login from './pages/Login'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='*' element={<Navigate to='/' />}></Route>
      </Routes>
    </>
  )
}

export default App
