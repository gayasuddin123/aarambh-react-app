import React, { useState } from 'react'

function Button() {
    const [sign,setSign]=useState('Sign In')
  return (
    <>
    <button className='w-20 h-9 bg-slate-600 rounded-md hover:bg-slate-300 hover:text-black'>{sign}</button>
    </>
  )
}

export default Button
