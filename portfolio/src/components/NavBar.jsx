import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from "react-scroll";

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
      link: "contact",
    },
  ]

  return (
    <div name="navbar">
      <nav className='navbar'>
        <div className="flex justify-center items-center w-full h-20 z-10 text-white fixed md:px-4 top-0 left-0 bg-black">
          <div className='flex justify-between md:max-w-6xl w-[90%] '>
              <a href='' className='text-xl tracking-[0.20em] ml-2 uppercase font-bold list-none cursor-pointer'>Sergio</a>
            <ul className="hidden md:flex">
              {links.map(({id, link}) => (
                <li key={id} 
                className="px-4 list-item cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-cyan-200 duration-200"
                >
                  <a href="#home"><Link to={link} smooth duration={500}>
                    {link}</Link></a>
                </li>
              ))}
            </ul>
          </div>
         </div>
      </nav>

      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-50 md:hidden fixed right-4 top-6 text-white'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex fixed flex-col justify-center items-center top-0 z-10 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        {links.map(({id, link}) => (
             <li key={id} 
             className="px-4 cursor-pointer capitalize py-3 text-2xl transition duration-300 ease-in-out"
             >
              <a href=""><Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                  {link}</Link></a>
            </li>
          ))}
        </ul>      
      )}

      
    </div>
  )
}

export default NavBar