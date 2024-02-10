import React from 'react'
import HeroSection from './component/Herosection'
import Testimonials from './component/testimonials'
import Footer from './component/Footer'
import Blog from './component/blogpost'
import CountdownBanner from './component/Banneruntil'

function App() {
  return (
    <>
    <HeroSection/>
    <CountdownBanner/>
    <Blog/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default App