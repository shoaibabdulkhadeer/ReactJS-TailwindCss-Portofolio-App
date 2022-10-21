import React from "react";
import html from "../../src/assets/html.png"
import css from "../../src/assets/css.png"
import javascript from "../../src/assets/javascript.png"
import react from "../../src/assets/react.png"
import tailwind from "../../src/assets/tailwind.png"
import node from "../../src/assets/node.png"

const Skills = () => {
  return (
    <div name ="Skills" className="min-h-screen w-full bg-[#0a192f] p-5">

   {/* About Container */}
      <div className="flex justify-center text-[#ccd6f6] flex-col pl-12">



        <div className="text-center ">
          <h1 className="border-b-2 border-pink-600 inline text-4xl font-bold">Skills</h1>
          <p className="mx-auto mt-3 text-xl max-w-[600px] ">These are the Technologies I Have worked with.</p>
        </div>

       {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 ">
         <div className="m-6 p-12 flex flex-col items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-150 cursor-pointer">  
               <img src={html} alt="" className="h-20"></img>
               <p className="mt-2">HTML</p>  
         </div>
            
         <div className="m-6 p-12 flex flex-col items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-150 cursor-pointer">  
               <img src={css} alt="" className="h-20"></img>
               <p className="mt-2">CSS</p>  
         </div>

         <div className="m-7 p-12 flex flex-col items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-150 cursor-pointer">  
               <img src={javascript} alt="" className="h-20"></img>
               <p className="mt-2">JAVASCRIPT</p>  
         </div>

         <div className="m-6 p-12 flex flex-col items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-150 cursor-pointer">  
               <img src={react} alt="" className="h-20"></img>
               <p className="mt-2">REACT</p>  
         </div>
 
         <div className="m-6 p-12 flex flex-col items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-150 cursor-pointer">  
               <img src={tailwind} alt="" className="h-20"></img>
               <p className="mt-2">TAILWIND </p>  
         </div>

         <div className="m-7 p-12 flex flex-col items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">  
               <img src={node} alt="" className="h-20"></img>
               <p className="mt-2">NODE JS</p>  
         </div>



         </div>







      </div>

    </div>
  );
};

export default Skills;
