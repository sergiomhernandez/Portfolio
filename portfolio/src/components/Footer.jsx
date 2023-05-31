import React from 'react'
import { BsArrowUp } from "react-icons/bs";
import { Link } from 'react-scroll';


const Footer = () => {
  return (
    <div name="footer">
      <footer className='py-14'>
        <Link to='home' smooth duration={500} className='border-2 py-[16px] px-[32px] rounded-[99px] uppercase tracking-[0.125em] border-teal-400 bg-transparent text-teal-400 hover:bg-teal-400 hover:text-white duration-300 ease-in-out text-[14px] flex items-center justify-center mx-auto my-0 w-fit mb-5 cursor-pointer'>Back top top
        <BsArrowUp size={16} className='ml-[10px]' /></Link>
        
        <p className='w-[90%] mx-auto my-0 text-[#a2aab0] text-center'>
          © 
          <span>
          &nbsp;Sergio Hernandez. All Rights Reserved.
          </span>
        </p>
      </footer>
    </div>
  )
}

export default Footer