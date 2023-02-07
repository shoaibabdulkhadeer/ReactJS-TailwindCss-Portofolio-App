import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Youtube = () => {
  return (
    <div>
        
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <div className='flex flex-col items-center'>
        <p className='text-4xl  text-[#ccd6f6] font-bold inline border-b-4 border-pink-600 mb-4' > MY GAMING CHANNEL 😁 </p>
      <div className='flex justify-center items-center'>

        <iframe  className=' w-[400px] h-[240px] md:w-[550px] md:h-[300px]'  src="https://www.youtube.com/embed/IW9rcfcXP3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
    </div>
    </AnimationOnScroll>
    
    </div>
  )
}

export default Youtube


// width="560" height="315" 