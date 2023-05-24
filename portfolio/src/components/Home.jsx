import React from 'react';
import { HiArrowNarrowDown } from "react-icons/hi";
import Background from "../assets/background.jpg";

const Home = () => {
  return (
    <div name="home">
        <header className='h-screen w-screen flex items-center justify-center bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${Background})` }}>
            <div className='absolute opacity-80 z-[1] w-screen h-screen bg-[#1a1f27]'></div>
            <section className='z-[2] relative text-center px-4'>
                <h4 className='text-[#ffffff80] text-sm md:text-lg uppercase text-center tracking-[0.125em]'>Front end developer</h4>
                <h1 className='text-white text-[32px] font-bold my-3 md:text-[52px]'>Sergio Hernandez</h1>
                <p className="text-white text-sm md:text-lg max-w-screen-sm mt-0 mx-auto mb-[40px]">I’m a developer based in Dominican Republic, specializing in building elegant and performing web applications.</p>
                <div>
                    <button className='border-2 py-[14px] px-[28px] rounded-[99px] uppercase tracking-[0.125em] border-cyan-200 bg-transparent text-cyan-200 hover:bg-cyan-200 hover:text-white duration-300 ease-in-out text-[14px] flex items-center justify-center mx-auto my-0'>Portfolio 
                    <span className='float-right ml-2 '><HiArrowNarrowDown/></span> 
                    </button>
                </div>
            </section>
        </header>
    </div>
  )
}

export default Home