import React, { useState } from 'react'
function Navbar() {
  // const hamburger = () => {

  // }
  const [hamburgerDropDown, sethamburgerDropDown] = useState(false)
  return (
    <>

      <div className=' h-14 bg-slate-800 flex items-center justify-between group '>
        <div className=" text-white block lg:hidden" onClick={() => sethamburgerDropDown(!hamburgerDropDown)} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-8 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </div>
        <div className="hidden gap-5 ml-4 align-middle text-white lg:flex">
          <div className="flex ">
            <h3 className=''>Cources</h3>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <div className="flex">
            <h3 className=''>Tutorials</h3>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <div className="flex">
            <h3 className=''>Practice</h3>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <div className="flex ">
            <h3 className=''>Contests</h3>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
        <div className="logo">
          <img src="../public/arambh-white.png" className='h-10' alt="" />
        </div>
        <div className="flex w-24 text-white gap-14 items-center lg:w-60 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
          <button className='w-20 h-9 bg-slate-600 hidden lg:block rounded-md hover:bg-slate-300 hover:text-black'>Sign In</button>
        </div>
      </div>
      <div className={`w-80 ${hamburgerDropDown === false ? 'hidden' : 'z-10'} h-screen absolute transition-all ease-linear duration-500 lg:hidden flex flex-col gap-10  bg-slate-600`}>
        <div className="w-full h-14 bg-slate-900 text-center relative text-white text-lg  border-b-2 cursor-pointer">
          <a href="#" className='absolute left-4 top-2' >Cources</a>
        </div>
        <div className="w-full h-14 bg-slate-900 text-center relative text-white text-lg  border-b-2 cursor-pointer">
          <a href="#" className='absolute left-4 top-2' >Tutorials</a>
        </div>
        <div className="w-full h-14 bg-slate-900 text-center relative text-white text-lg  border-b-2 cursor-pointer">
          <a href="#" className='absolute left-4 top-2' >Practice</a>
        </div>
        <div className="w-full h-14 bg-slate-900 text-center relative text-white text-lg  border-b-2 cursor-pointer">
          <a href="#" className='absolute left-4 top-2' >Contests</a>
        </div>
        <div className="flex justify-center">
          <button className='w-60 h-9 bg-slate-900 text-white rounded-md hover:bg-slate-300 hover:text-black'>Sign In
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
