import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsSend } from "react-icons/bs";
import "./Contact.css"

const Contact = () => {
  return (
    <div name="contact">
        <section className='section__gradiente-bg section'>
            <div className='flex flex-col items-center mb-12'>
            <div>
                <span>
                    <AiOutlineMail size={53} className='text-white w-full' />
                </span>
            </div>
                <div className='w-[2px] h-[39px] my-3 mx-auto bg-cyan-200'></div>
                <h2 className='text-[28px] mb-6 text-white'>My Work</h2>
                <p className='text-[14px] max-w-md w-[90%] text-center leading-6 text-[#a2aab0]'>Fill out the following form and I’ll be in touch soon</p>
            </div>
            <form action="https://getform.io/f/82eb44ef-e30f-4326-943a-c85c59d597ba" method="POST" className='max-w-2xl my-0 mx-auto contact__form'>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-[30px]'>
                        <div>
                            <label htmlFor="name" className='contact-form__label'>Name</label>
                            <input className='contact-form__input' type='text' name='name' id='name' placeholder='Enter your name' required/>
                        </div>
                        <div>
                            <label className='contact-form__label' htmlFor="name">Phone {`(Optional)`}</label>
                            <input className='contact-form__input' type='text' name='phone' id='phone' placeholder='Enter your phone #'/>
                        </div>
                    </div>
                    <div className='mt-[30px]'>
                        <label className='contact-form__label' htmlFor="email">Email</label>
                        <input className='contact-form__input' type='email' name='email' id='email' placeholder='Enter your email' required/>
                    </div>
                    <div className='mt-[30px]'>
                        <label className='contact-form__label' htmlFor="message">Message</label>
                        <textarea className='contact-form__textarea' name='message' id='message' placeholder='Enter your message' required></textarea>
                    </div>
                    <div className='mt-[40px]'>
                        <button type='submit' className='border-2 py-[16px] px-[32px] rounded-[99px] uppercase tracking-[0.125em] border-teal-400 bg-transparent text-teal-400 hover:bg-teal-400 hover:text-white duration-300 ease-in-out text-[14px] flex items-center justify-center mx-auto my-0 w-fit'>
                            Send Message
                            <BsSend size={20} className='ml-[10px]' />
                        </button>
                    </div>
                </div>
            </form>
        </section>
    </div>
  )
}

export default Contact