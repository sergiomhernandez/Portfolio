import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import "./About.css"
import { AiOutlineDownload } from "react-icons/ai";

const About = () => {
  
    const tabHeadings = document.querySelectorAll(".about-section__tab-heading");

    tabHeadings.forEach((heading)=>{
        heading.addEventListener("click", function() {
            if (!heading.classList.contains("active")) {
                document.querySelector(".about-section__tab-heading.active").classList.remove("active");
                heading.classList.add("active");
    
                document.querySelector(".about-section__tab-content.active").classList.remove("active");
                document.querySelector(`#tab-${heading.getAttribute("data-tab")}`).classList.add("active");
            }
        });
    }
    );
  
    return (
    <section name="about" id='about' className='pt-[62px] pb-[72px]'>
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
        <div className='about-section__tabs-container'>
            <div className="about-section__tab-headings">
                <div class="about-section__tab-heading active" data-tab="0">
                    About
                </div>
                <div className="about-section__tab-heading" data-tab="1">Skills</div>
            </div>
            <div className='about-section__tab-contents'>
                    <div className='about-section__tab-content active' id='tab-0'>
                        <h3 className="about-tab__heading">
                            <span>Sergio Hernandez</span> - Front End Developer
                        </h3>
                        <h3 className="about-tab__heading mobile-heading">
                            <span>Sergio</span>
                            Front End Developer
                        </h3>
                        <p className='about-tab__paragraph'>
                            
                I am a passionate front end developer based in Santo Domingo, Dominican Republic
                who enjoys building performing, aestestic user interfaces with a
                JavaScript tech stack. I have experience building personal
                technical projects, freelancing and working at a high-level CRO
                agency developing quality digital solutions.
                        <br />
                        <br />     
                Currently, I’m employed at Conversion Kings, developing high
                quality JavaScript experiments for large national and
                international brands to help improve conversion rates.
                        </p>
                        <div>
                        <a href="/assets/sergiohernandezcv.pdf" target='_blank' className='border-2 py-[16px] px-[32px] rounded-[99px] uppercase tracking-[0.125em] border-teal-400 bg-transparent text-teal-400 hover:bg-teal-400 hover:text-white duration-300 ease-in-out text-[14px] flex items-center justify-center mx-auto my-0'>Download CV <AiOutlineDownload className='float-right ml-2 '/> 
                        </a>
                        </div>
                    </div>
                    <div className='about-section__tab-content' id='tab-1'>
                        <div class="skills-tab__container">
                            <div class="skills-tab__skill-group">
                                    <h4 class="skills-tab__skill-group-title">
                                    Front End Development
                                    </h4>
                                    <p className="skills-tab__skill-group-list">
                                    HTML, CSS, Tailwind, WordPress, JavaScript, Bootstrap,
                                    React and Redux
                                    </p>
                            </div>
                            <div className="skills-tab__skill-group">
                                <h4 className="skills-tab__skill-group-title">
                                Back End Development
                                </h4>
                                <p className="skills-tab__skill-group-list">
                                Node.js, Express.js, MongoDB, GraphQL and Heroku
                                </p>
                            </div>
                            <div className="skills-tab__skill-group">
                            <h4 className="skills-tab__skill-group-title">Other Tools</h4>
                            <p className="skills-tab__skill-group-list">
                            Visual Studio Code, Git, GitHub, Yarn, Jest and TypeScript
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default About