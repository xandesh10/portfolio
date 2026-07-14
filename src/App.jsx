import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPageRoute from './components/page_routers/LandingPageRoute'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPageRoute/>}></Route>
    </Routes>
  )
}

export default App