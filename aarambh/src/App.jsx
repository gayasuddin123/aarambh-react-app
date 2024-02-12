import React from 'react'
import HeroSection from './component/Herosection'
import Testimonials from './component/testimonials'
import Footer from './component/Footer'
import Blog from './component/blogpost'
import CountdownBanner from './component/Banneruntil'
import Navbar from './component/Navbar'
import Banner from './component/Roadmap'
import Mainactiveslider from './component/activeslider/mainactiveslider'

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
    <div className='mr-10 ml-10'>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-8 p-8">DSA Materials</h2>
    <Mainactiveslider/>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default App
