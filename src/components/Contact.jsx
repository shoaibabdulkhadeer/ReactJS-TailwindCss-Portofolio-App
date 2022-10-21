import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-16'>
        <form method='POST' action="https://getform.io/f/2a7c0aee-f42f-42d9-8c23-c7342fb81aeb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 max-w-[600px]'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4 max-w-[400px]'> / / Submit the form below or shoot me an email  </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-yellow-600 hover:border-yellow-600 hover:text-black font-bold px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact