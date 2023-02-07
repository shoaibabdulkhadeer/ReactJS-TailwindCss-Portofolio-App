import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';



const Contact = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInLeftBig">
    <div name='Contact' className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-16'>
        <form method='POST' action="https://getform.io/f/2a7c0aee-f42f-42d9-8c23-c7342fb81aeb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 max-w-[600px]'>
            <AnimationOnScroll initiallyVisible={true} duration={5} animateIn="animate__swing">
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                </AnimationOnScroll>
                <p className='text-gray-300 py-4 max-w-[400px]'> / / Submit the form below or shoot me an email  </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' required></textarea>
            <AnimationOnScroll animateIn="animate__swing">
            <button className='text-white border-2 hover:bg-yellow-600 hover:border-yellow-600 hover:text-black font-bold px-4 py-3 my-8 mx-auto flex items-center'>
            Let's Collaborate
            </button>
            </AnimationOnScroll>
        </form>
    </div>


</AnimationOnScroll>

  


  )
}

export default Contact