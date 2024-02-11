import React from 'react'
import HeroSection from './component/Herosection'
import Testimonials from './component/testimonials'
import Footer from './component/Footer'
import Blog from './component/blogpost'
import CountdownBanner from './component/Banneruntil'
import Navbar from './component/Navbar'
import Banner from './component/Roadmap'
function App() {
  return (
    <>
    <div className='bg-gray-100'>
    <Navbar></Navbar>
    <HeroSection/>
    <CountdownBanner/>
    <Blog/>
    <Banner/>
    <Testimonials/>
    <Footer/>
    </div>
    </>
  )
}

export default App