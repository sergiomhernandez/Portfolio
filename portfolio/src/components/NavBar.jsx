import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';

const NavBar = () => { 

  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ]
  

  return (
    <div name="navbar" className="flex justify-between items-center w-full h-20 z-10 text-white fixed px-4">
      <div>
        <h1 className='text-xl tracking-[0.20em] ml-2 uppercase font-bold text- cursor-pointer'>Sergio</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({id, link}) => (
           <li key={id} 
           className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-cyan-200 duration-200"
           >
            {link}
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden '>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
        {links.map(({id, link}) => (
             <li key={id} 
             className="px-4 cursor-pointer capitalize py-3 text-2xl"
             >
              {link}
            </li>
          ))}
        </ul>      
      )}

      
    </div>
  )
}

export default NavBar