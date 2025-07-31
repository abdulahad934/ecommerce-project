import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-7 rounded-4xl mt-4 bg-gray-800 min-w-full px-7 '>
        <h1 className='px-4 text-2xl text-white border rounded-2xl '>Forever</h1>
        <ul className='flex justify-between items-center gap-4 text-sm text-white px-4'>
            <NavLink to="/" className="text-white text-sm ">

            <p>HOME</p>
            <hr className='w-8/8 mt-2 h-[1.5px bg-gray-700 hidden'/>
           
            </NavLink>

            <NavLink to="/collection" className="text-white text-sm ">

            <p>COLLECTION</p>
            <hr className='w-8/8 mt-2 h-[1.5px  bg-gray-700 hidden'/>
           
            </NavLink>

            <NavLink to="/contact" className="text-white text-sm ">

            <p>CONTACT</p>
            <hr className='w-8/8 mt-2 h-[1.5px bg-gray-700 hidden' />
           
            </NavLink>

            
        </ul>

    </div>
  )
}

export default Navbar