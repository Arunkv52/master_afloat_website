import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SafetyPolicy from './pages/SafetyPolicy'
import Services from './pages/Services'
import OffShore from './pages/gallery/OffShore'
import Engineroom from './pages/gallery/Engineroom'
import Antiheeling from './pages/gallery/Antiheeling'
import Bellowrenewal from './pages/gallery/Bellowrenewal'
import Bunkerline from './pages/gallery/Bunkerline'
import Bwtspipes from './pages/gallery/Bwtspipes'
import Coolerpipelt from './pages/gallery/Coolerpipelt'
import Hangingstaging from './pages/gallery/Hangingstaging'
import Hydralics from './pages/gallery/Hydralics'
import Prefabrication from './pages/gallery/Prefabrication'
import Scrubberrepair from './pages/gallery/Scrubberrepair'
import Seafastening from './pages/gallery/Seafastening'
import Steelplate from './pages/gallery/Steelplate'
import Vesselname from './pages/gallery/Vesselname'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/safetypolicy' element={<SafetyPolicy />} />
          <Route path='/services' element={<Services />} />
          <Route path='/offshore' element={<OffShore />} />
          <Route path='/engine' element={<Engineroom />} />
          <Route path='/antiheeling' element={<Antiheeling />} />
          <Route path='/bellowrenewal' element={<Bellowrenewal />} />
          <Route path='/bunkerline' element={<Bunkerline />} />
          <Route path='/bwtspipes' element={<Bwtspipes />} />
          <Route path='/coolerpipes' element={<Coolerpipelt />} />
          <Route path='/hanging' element={<Hangingstaging />} />
          <Route path='/hydralics' element={<Hydralics />} />
          <Route path='/prefabrication' element={<Prefabrication />} />
          <Route path='/scrubber' element={<Scrubberrepair />} />
          <Route path='/seafastening' element={<Seafastening />} />
          <Route path='/steelplate' element={<Steelplate />} />
          <Route path='/vesselname' element={<Vesselname />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
