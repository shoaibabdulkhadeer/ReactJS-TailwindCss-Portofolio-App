import React from "react";
import { MdArrowRightAlt} from 'react-icons/md';
import boy from "../../src/assets/boy.png";


const Main = () => {
  return (
    <div name="Main" className=" md:flex min-h-screen min-w-full bg-[#0a192f] p-20  justify-center items-center ">
      
      <div className="text-[#ccd6f6] text-sm sm:text-2xl ">
        <p className="text-pink-600 text-xs md:text-xl">Hi, my name is</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl">Shoaib Abdul Khadeer</h1>
        <h1 className=" text-xl   sm:text-2xl md:text-4xl">I'm a Front End Developer,</h1>
        <p className="max-w-[600px] mt-4 text-sm md:text-xl">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
      
        
        <a href="/assets/hello.txt" download="my_file.txt">
          <button class="group bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border
         border-blue-500 hover:border-transparent rounded mt-3 flex items-center" >
          Download Resume <MdArrowRightAlt size={30} className="group-hover:rotate-90  duration-700"/>
        </button>
        </a>
    
      </div>


      {/* Image */}
      <div className="mt-20  bg-gray-700 rounded-full scale-4 sm:scale-24 md:scale-75 " >
         
         <img src={boy} alt="boy" />
 
      </div>

    </div>
  );
};

export default Main;