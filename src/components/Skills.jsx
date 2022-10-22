import React from "react";
import html from "../../src/assets/html.png"
import css from "../../src/assets/css.png"
import javascript from "../../src/assets/javascript.png"
import react from "../../src/assets/react.png"
import tailwind from "../../src/assets/tailwind.png"
import node from "../../src/assets/node.png"
import Typewriter from "typewriter-effect";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Skills = () => {
  return (
    <div name ="Skills" className="min-h-screen w-full bg-[#0a192f] p-5">

   {/* About Container */}
      <div className="flex justify-center text-[#ccd6f6] flex-col pl-12">



        <div className="text-center ">
        <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
          <h1 className="border-b-2 border-pink-600 inline text-4xl font-bold">Skillz</h1>
          </AnimationOnScroll>
   
          <p className=" mx-auto mt-3 text-xl max-w-[600px] font-mono text-green-500">
                 <Typewriter 
                  options={{
                 strings: ["These are the Technologies I Have worked with." ],
                 autoStart: true,
                loop: true,
                 }}
                />
             </p>


        </div>

       {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 ">
        

         <div className="m-6 p-12 flex flex-col items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-150 cursor-pointer">  
         <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
               <img src={html} alt="" className="h-20"></img>
               </AnimationOnScroll>
               <p className="mt-2">HTML</p>  
         </div>
     
         <div className="m-6 p-12 flex flex-col items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-150 cursor-pointer">  
         <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
              <img src={css} alt="" className="h-20"></img>
              </AnimationOnScroll>
               <p className="mt-2">CSS</p>  
             
         </div>

         <div className="m-7 p-12 flex flex-col items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-150 cursor-pointer">  
         <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
               <img src={javascript} alt="" className="h-20"></img>
               </AnimationOnScroll>
               <p className="mt-2">JAVASCRIPT</p>  
         </div>

         <div className="m-6 p-12 flex flex-col items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-150 cursor-pointer">  
         <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
               <img src={react} alt="" className="h-20"></img>
               </AnimationOnScroll>
               <p className="mt-2">REACT</p>  
         </div>
 
         <div className="m-6 p-12 flex flex-col items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-150 cursor-pointer">  
         <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
               <img src={tailwind} alt="" className="h-20"></img>
               </AnimationOnScroll>
               <p className="mt-2">TAILWIND </p>  
         </div>

         <div className="m-7 p-12 flex flex-col items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">  
         <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada">
               <img src={node} alt="" className="h-20"></img>
               </AnimationOnScroll>
               <p className="mt-2">NODE JS</p>  
         </div>



         </div>







      </div>

    </div>
  );
};

export default Skills;
