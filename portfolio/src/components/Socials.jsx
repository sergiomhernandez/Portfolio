import React from 'react'
import { IoShareSocial } from "react-icons/io5";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Socials = () => {
  return (
    <div name="socials">
        <section className='pt-[62px] pb-[72px]'>
            <div className='flex flex-col items-center mb-12'>
                <div>
                    <span>
                        <IoShareSocial size={53} />
                    </span>
                </div>
                <div className='w-[2px] h-[39px] my-3 mx-auto bg-cyan-200'></div>
                <h2 className='text-[28px] mb-6'>My Socials</h2>
            </div>
            <div className='grid md:grid-cols-3 gap-4 max-w-6xl my-0 mx-auto px-5'>
                <a className='bg-white h-[70px] flex justify-center items-center rounded-md text-black transition duration-300 ease-in-out shadow-[0px_0px_50px_rgba(0,0,0,0.125)] hover:bg-cyan-200 hover:text-white no-underline m-0 ' href="https://www.linkedin.com/in/sergio-hernandez-263494242/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin size={24} className='mr-[10px]' />
                    LinkedIn
                </a>
                <a className='bg-white h-[70px] flex justify-center items-center rounded-md text-black transition duration-300 ease-in-out shadow-[0px_0px_50px_rgba(0,0,0,0.125)] hover:bg-cyan-200 hover:text-white no-underline m-0 ' href="https://www.linkedin.com/in/sergio-hernandez-263494242/" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub size={24} className='mr-[10px]' />
                    GitHub
                </a>
                <a className='bg-white h-[70px] flex justify-center items-center rounded-md text-black transition duration-300 ease-in-out shadow-[0px_0px_50px_rgba(0,0,0,0.125)] hover:bg-cyan-200 hover:text-white no-underline m-0 ' href="https://twitter.com/SergioManueel" target="_blank" rel="noopener noreferrer">
                    <BsTwitter size={24} className='mr-[10px]' />
                    Twitter
                </a>
            </div>
        </section>
    </div>
  )
}

export default Socials