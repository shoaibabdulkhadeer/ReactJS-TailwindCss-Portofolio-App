import React from 'react'

import { FaBars , FaLinkedin, FaDiscord, FaYoutube } from 'react-icons/fa';
import {BsFillPersonLinesFill}  from 'react-icons/bs';
import { ImCross } from 'react-icons/im';

import {Link} from "react-scroll"





const Navbar = () => {

    const [nav,setNav] = React.useState(true)

    function handlechange(){
        setNav(prev => !prev)
    }

  return (
    // Navbar container
    <div className='p-4 w-full h-30 bg-[#0a192f] text-gray-400 flex justify-between sticky bottom-0 top-0 z-20'>
       <h1 className='text-4xl mt-3 text-white font-extrabold font-signature'> ZEN</h1>
         
         {/* Desktop Devices */}
       <div className='pr-5 pt-4 cursor-pointer mr-5 hidden md:flex'>
           <ul className='flex text-xl'>

           <Link to="Main" spy={true} smooth={true} offset={50} duration={500} activeClass="active"  >
                      <li className='mr-6  hover:text-pink-600'>Home</li>
            </Link>
                    
            <Link to="About" spy={true} smooth={true} offset={50} duration={900} activeClass="active"  >
                      <li className='mr-6  hover:text-pink-600'>About</li>
            </Link>

            <Link to="Skills" spy={true} smooth={true} offset={50} duration={500} activeClass="active"  >
                      <li className='mr-6  hover:text-pink-600'>Skills </li>
            </Link>

            <Link to="Work" spy={true} smooth={true} offset={50} duration={500} activeClass="active"  >
                      <li className='mr-6  hover:text-pink-600'>Work</li>
            </Link>

            <Link to="Contact" spy={true} smooth={true} offset={50} duration={500} activeClass="active"  >
                      <li className='mr-6  hover:text-pink-600'>Contact</li>
            </Link>

            <Link to="gaming" spy={true} smooth={true} offset={50} duration={500} activeClass="active"  >
                      <li className='mr-6  hover:text-pink-600'>Gaming</li>
            </Link>

            </ul>  
       </div>  


    {/* mobile Devices */}
       <ul className={ nav ? 'hidden' : 'flex flex-col h-screen cursor-pointer text-3xl justify-center items-center text-gray-400 mx-auto  md:hidden'}>

             
           <Link to="Main"  offset={50} duration={500}  onClick={handlechange} >
                      <li className='mb-10  hover:text-pink-600'>Home</li>
            </Link>
                    
            <Link to="About"   offset={50} duration={900}  onClick={handlechange} >
                      <li className='mb-10  hover:text-pink-600'>About</li>
            </Link>

            <Link to="Skills" offset={50} duration={500}  onClick={handlechange} >
                      <li className='mb-10 hover:text-pink-600'>Skills </li>
            </Link>

            <Link to="Work" smooth={true} offset={50} duration={500} onClick={handlechange} >
                      <li className='mb-10  hover:text-pink-600'>Work</li>
            </Link>

            <Link to="Contact" offset={50} duration={500}   onClick={handlechange}>
                      <li className='mb-10  hover:text-pink-600'>Contact</li>
            </Link>

            <Link to="gaming" offset={50} duration={500}   onClick={handlechange}>
                      <li className='mb-10  hover:text-pink-600'>Gaming</li>
            </Link>




            </ul>


  {/* hamburger */}
  <div className='m-3 cursor-pointer md:hidden' onClick={handlechange}>
      { nav ? <FaBars size={25}/> : <ImCross size={25}/> }
 </div>




{/* Social Icons */}
  <div className=' md:flex fixed flex-col top-[40%] left-0 '> 
     
       <ul >
       <li className=' w-[160px] h-[60px]  flex items-center justify-between bg-blue-500 ml-[-100px] hover:ml-[-1px] duration-[0.6s]' > 
           <a href='https://in.linkedin.com/in/shoaib-abdul-khadeer-214260227' className='flex justify-between items-center w-full text-gray-300 pr-2 ml-4'> 
             LinkedIn <FaLinkedin size={40}/> 
              </a> 
        </li>
     
        <li className='w-[160px] h-[60px]  flex items-center justify-between bg-red-700 ml-[-100px] hover:ml-[-1px] duration-[0.6s]' > 
           <a href='https://www.youtube.com/c/Zenx777/featured?app=desktop' className='flex justify-between items-center w-full text-gray-300 pr-2 ml-4'> 
             Youtube <FaYoutube size={40}/> 
              </a> 
        </li>
        <li className='w-[160px] h-[60px]  flex items-center justify-between bg-[#3F495A] ml-[-100px] hover:ml-[-1px] duration-[0.6s]' > 
           <a href='https://discord.gg/3zyqvWFUaD' className='flex justify-between items-center w-full text-gray-300 pr-2 ml-4'> 
             Discord <FaDiscord size={40}/> 
              </a> 
        </li>

        <li className='w-[160px] h-[60px]  flex items-center justify-between bg-green-600 ml-[-100px] hover:ml-[-1px] duration-[0.6s]' > 
           <a href='/' className='flex justify-between items-center w-full text-gray-300 pr-2 ml-4 '> 
             Resume <BsFillPersonLinesFill size={40}/> 
              </a> 
        </li>
  

       </ul>
  </div>


    </div>
  )
}

export default Navbar
