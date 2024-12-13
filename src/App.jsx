import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './Pages/Home'
import Notfound from './Pages/Notfound'
import Success from './Pages/Success'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="*" element = {<Notfound/>}/>
        <Route path="/success" element = {<Success/>}/>
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App