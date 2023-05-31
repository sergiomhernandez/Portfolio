import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import "./About.css"
import { AiOutlineDownload } from "react-icons/ai";

const About = () => {
  return (
    <section name="about" className='pt-[62px] pb-[72px]'>
        <div className='flex flex-col items-center pb-12'>
            <div>
                <span >
                    <BsFillPersonFill size={53} />
                </span>
            </div>
            <div className='w-[2px] h-[39px] my-3 mx-auto bg-cyan-200'></div>
            <h2 className='text-[28px] mb-6'>About Me</h2>
            <p className='text-[14px] max-w-md w-[90%] text-center leading-6'>Learn more about who I am, what I’ve done and how I can help your business</p>
        </div>
        <div>
            <div>
                <div>
                    <h3 className='heading__about text-center text-[#5c6269] md:text-2xl text-[26px] md:flex md:text-center md:justify-center md:items-center'>
                        <span className='block font-semibold text-[#212529] md:text-2xl text-[24px]'>Sergio Hernandez&nbsp;</span>
                        - Front End Developer
                    </h3>
                </div>
                <div className='mobile-heading'>
                    <h3 className='text-center text-[#5c6269] md:text-2xl text-[26px]'>
                        <span className='block font-semibold text-[#212529] md:text-3xl text-[24px]'>Sergio Hernandez</span>
                        Front End Developer
                    </h3>
                </div>
                <p className='md:w-[90%] max-w-[800px] text-center mt-[25px] mb-9 mx-auto text-sm px-5 leading-6 font-normal text-[#6c757d]'>I am a passionate front end developer based in Santo Domingo, Dominican Republic who enjoys building performing, aestestic user interfaces with a JavaScript tech stack. I have experience building personal technical projects, freelancing and working at a high-level CRO agency developing quality digital solutions.
                <br/>
                <br/>
                Currently, I’m employed at Conversion Kings, developing high quality JavaScript experiments for large national and international brands to help improve conversion rates.</p>
                <div>
                    <button href="./assets/sergiohernandezcv.pdf" target='_blank' className='border-2 py-[16px] px-[32px] rounded-[99px] uppercase tracking-[0.125em] border-teal-400 bg-transparent text-teal-400 hover:bg-teal-400 hover:text-white duration-300 ease-in-out text-[14px] flex items-center justify-center mx-auto my-0'>Download CV <AiOutlineDownload className='float-right ml-2 '/> 
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About