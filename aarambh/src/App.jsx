import React from 'react'
import HeroSection from './component/Herosection'
import Testimonials from './component/testimonials'
import Footer from './component/Footer'
import Blog from './component/blogpost'
import CountdownBanner from './component/Banneruntil'
import Navbar from './component/Navbar'
import Banner from './component/Roadmap'
import Mainactiveslider from './component/activeslider/mainactiveslider'
// import Slider from './component/Slider/Slider'
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
    <div><h2 className="text-3xl md:text-4xl font-bold text-center mb-16 mt-16 p-8">DSA Materials</h2></div>
    <Mainactiveslider/>
    <Footer/>
    </div>
    </>
  )
}

export default App