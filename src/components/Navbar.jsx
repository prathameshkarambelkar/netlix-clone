import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 z-[100] w-full absolute ' >
        <h1 className='text-white text-4xl text-red-600'>NETFLIX</h1>
        <div>
        <button className='pr-4 text-white' >Sign In</button>
        <button className='bg-red-600 py-2 rounded-sm cursor-pointer px-6 ' >Sign Up</button>

        </div>

    </div>
  )
}

export default Navbar