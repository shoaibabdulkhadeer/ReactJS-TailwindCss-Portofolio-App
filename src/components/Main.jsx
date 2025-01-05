import React, { Suspense, useEffect, useRef } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import Typewriter from "typewriter-effect";
import "animate.css/animate.min.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import goku from "../../src/assets/goku.gif"
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useProgress } from '@react-three/drei';
import { Leva } from 'leva';


function Model({ modelPath }) {
  const modelRef = useRef()
  const { scene, animations } = useGLTF(modelPath); // Load the model
  const { actions } = useAnimations(animations, scene); // Get animation actions
 
  React.useEffect(() => {
    actions?.[Object.keys(actions)[0]]?.play();
  }, [actions]);

useFrame(() => {
    if (modelRef.current) {
      // modelRef.current.rotation.x += 0.01;  // Rotate along X axis
      // modelRef.current.rotation.y += 0.01;  // Rotate along Y axis
      // modelRef.current.rotation.z += 0.01;  // Rotate along Z axis
    }
  });

// return <primitive object={scene} ref={modelRef} scale={1.5} position={[10, -60.5, 5]} />
return <primitive object={scene} ref={modelRef} scale={70.5} position={[0, -57, 5]}  castShadow/>
}


function LoadingScreen() {
  const { progress } = useProgress();  
  
  return (
    <div style={{
      position: 'absolute', top: '50%', left: '80%',
      transform: 'translate(-50%, -50%)', color: 'white',
      fontSize: '24px', fontWeight: 'bold'
    }}>
      <div>Loading: {Math?.round(progress)}%</div>
    </div>
  );
}

const Main = ({ theme }) => {

  useEffect(() => {
    toast.info('Welcome! Shoaib Here 😉, CheckOut My New Project In Work Section ✅', {
      position: "bottom-center",
      autoClose: 50000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }, [])

  // const { cameraX, cameraY, cameraZ, lightIntensity, shadowIntensity } = useControls({
  //   Camera: {
  //     cameraX: { value: 4, min: 1, max: 10 },
  //     cameraY: { value: 4, min: 1, max: 10 },
  //     cameraZ: { value: 4, min: 1, max: 10 },
  //   },
  //   Lighting: {
  //     lightIntensity: { value: 1, min: 0, max: 5 },
  //   },
  //   Shadows: {
  //     shadowIntensity: { value: 10, min: 5, max: 2 },
  //   },
  // });

  return (

    <div name="Main"
      className={theme ? ("p-20 md:pl-36 md:flex min-h-screen min-w-full shadow-box-shadow bg-[#ffffff] justify-center items-center ") : ("p-20 md:pl-36 md:flex min-h-screen min-w-full bg-[#0a192f] shadow-box-shadow justify-center items-center ")}
    >



      <div className={theme ? ("text-black  font-bold shadow-box-shadow p-5 rounded-2xl text-sm sm:text-2xl ") : ("text-[#ffffff] text-sm sm:text-2xl ")} >
        <p className="text-pink-600 text-xs md:text-xl">Hi, my name is</p>
        <h1 className="text-2xl sm:text-3xl md:text-2xl" >
          Shoaib Abdul Khadeer
        </h1>
        <ToastContainer limit={1} className="text-sm " />

        <h1 className={theme ? " text-xl text-blue-600 font-bolder sm:text-2xl md:text-4xl font-mono"
          : " text-xl text-green-500 sm:text-2xl md:text-2xl font-mono"}>
          <Typewriter
            options={{
              strings: ["I'm a React JS Developer", "NodeJS,Tailwind", "</> Happy coding !!"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>


        <p className="max-w-[600px] mt-4 text-sm">
  I’m a full-stack MERN developer specializing in building and occasionally
  designing exceptional digital experiences. Currently, I’m working as a Software Engineer - I at G7CR Technologies and focused on building responsive full-stack web applications.
</p>


        <p className="font-serif text-xl font-bold text-red-600 mt-2 sm:text-sm md:text-sm flex items-center">
          <Typewriter
            options={{
              strings: ["Shoaib AK"],
              autoStart: true,
              loop: true,
            }}
          />
          <img src={goku} alt="" className="w-11 rounded-lg ml-4 shadow-box-shadow" />
        </p>

        <a href={'/shoaib.docx'} download>
          <button
            class="group bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-3 border
         border-blue-500 hover:border-transparent rounded mt-3 flex items-center text-sm" >

            Download Resume
            <MdArrowRightAlt
              size={30}
              className="group-hover:rotate-90  duration-700"
            />

          </button>
        </a>
      </div>

<div className="">

<Leva collapsed/>

<Suspense fallback={<LoadingScreen />}>
<Canvas 
camera={{ position: [-2,5,5], fov: 50 }}
// shadowIntensity={shadowIntensity}
// camera={{ position: [cameraX, cameraY, cameraZ], fov: 50 }}

 style={{height:"440px"}} shadows >

<ambientLight intensity={0.4} />
<directionalLight 
            position={[5, 20, 5]} 
            intensity={30} 
            castShadow 
            shadow-mapSize-width={2024} // Set shadow map size for better quality
            shadow-mapSize-height={1024}
            shadow-camera-near={24} // Set near clipping plane
            shadow-camera-far={10} // Set far clipping plane
          />
    <Model modelPath="/rogue_tv_man.glb" />
    <OrbitControls  
        makeDefault 
          enableZoom={true} 
          maxDistance={240} 
          minDistance={173} 
          // maxDistance={440} 
          // minDistance={473} 
          target={[3, 0, 0.01]} 
          enableDamping={true} // Smooth movement


          />
  </Canvas>
</Suspense>
</div>


      {/* Image */}
      {/* <AnimationOnScroll initiallyVisible={true} duration={2} loop={true} animateIn="animate__swing">
        <div className="mt-20  bg-blue-400 rounded-full scale-4 sm:scale-24 md:scale-50 overflow-hidden">
          <img src={boy} alt="boy" className='' />
        </div>
      </AnimationOnScroll> */}



    </div>
  );
};

export default Main;
