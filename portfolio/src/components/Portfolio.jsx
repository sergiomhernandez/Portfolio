import React from 'react'
import { BiCodeBlock } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";
import githubicon from "../assets/github-mark.svg";
import { AiFillGithub } from "react-icons/ai";

const Portfolio = () => {

  const Portfolio = [
    {
      id:1,
      src: "project1",
    },
    {
      id:2,
      src: "project2",
    },
    {
      id:3,
      src: "project3",
    },
    {
      id:4,
      src: "project4",
    },
    {
      id:5,
      src: "project5",
    },
  ]


  return (
    <div name="portfolio">
        <section className='py-[72px] bg-[#f8f9fa] h-auto w-full'>
            <div className='flex flex-col items-center mb-12'>
                <div>
                  <span>
                    <BiCodeBlock size={53} />
                  </span>
                </div>
                <div className='w-[2px] h-[39px] my-3 mx-auto bg-cyan-200'></div>
                <h2 className='text-[28px] mb-6'>My Work</h2>
                <p className='text-[14px] max-w-md w-[90%] text-center leading-6'>View some side and freelance projects I’ve completed that highlight my technical expertise</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 md:w-11/12 md:max-w-6xl mx-auto mt-0 mb-[50px] px-5 md:px-0'>
              <div className='md:w-full bg-white md:h-[200px] relative shadow-[0px_0px_50px_rgba(0,0,0,0.125)]'>
                <span className='flex items-center justify-center pt-16'>
                  <BiCodeAlt size={64} />
                </span>
                <div className='flex items-center justify-center pt-[20px] '>
                  <button className=' w-screen px-6 py-3  pt-4 duration-200  hover:text-black hover:bg-cyan-200'>Demo</button>
                  <button className=' w-screen px-6 py-3  pt-4 duration-200  hover:text-black hover:bg-cyan-200'>Code</button>
                </div>
              </div>
            </div>
            <a className='border-2 py-[16px] px-[32px] rounded-[99px] uppercase tracking-[0.125em] border-cyan-200 bg-transparent text-cyan-200 hover:bg-cyan-200 hover:text-white duration-300 ease-in-out text-[14px] flex items-center justify-center mx-auto my-0 w-fit' href="https://github.com/sergiomhernandez" target='_blank'>View Github
            <AiFillGithub className='float-right ml-2'  />
            </a>
        </section>
    </div>
  )
}

export default Portfolio