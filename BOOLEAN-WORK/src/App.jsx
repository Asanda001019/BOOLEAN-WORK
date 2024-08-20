import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './pages/layout'
import Home from './pages/home'
import TrafficLight from './pages/trafficLight'
import NoPage from './pages/noPage'
import Exercise from './pages/exercise'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="trafficLight" element={<TrafficLight />} />
          <Route path="exercise" element={<Exercise />} />
          <Route path="noPage" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App
