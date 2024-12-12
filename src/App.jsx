import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {}/>
        <Route path="/" element = {}/>
        <Route path="/" element = {}/>
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App