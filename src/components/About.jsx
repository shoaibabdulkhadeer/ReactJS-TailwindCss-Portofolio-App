import React, { Suspense, useRef } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
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
return <primitive object={scene} ref={modelRef} scale={70.5} position={[0, -57, 5]}  castShadow />
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





const About = ({theme}) => {
  return (



    <div name='About' className= {theme? ' md:text-2xl w-full min-h-screen  shadow-box-shadow bg-[#ffffff] text-[#000000] font-bold p-20  ' : ' md:text-2xl  w-full min-h-screen bg-[#0a192f] text-[#ccd6f6] p-20  '}>
      <div className='flex flex-col justify-center items-center w-full h-full shadow-box-shadow p-8 rounded-3xl'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <div className='sm:text-right pb-8 pl-4 '>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'> About </p>
          </div>
          </AnimationOnScroll>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <div className='sm:text-right text-4xl '>
              <p className='text-xl sm:text-2xl md:text-4xl'>Hi. I'm Shoaib, nice to meet you. Please take a look around.</p>
              <p className='leading-relaxed text-sm md:text-xl'>I am passionate about building excellent software that improves
              the lives of those around me. I am specializing in creating Responsive
              web applications for individuals and small-businesses,I like to Learn New Technologies . </p>  
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <div>
              
            {/* <AnimationOnScroll animateIn="animate__tada">
               <img src={design} alt='' className='h-13'/>
               </AnimationOnScroll> */}
<div className="">

<Leva collapsed/>

<Suspense fallback={<LoadingScreen />}>
<Canvas 
camera={{ position: [-2,5,5], fov: 50 }}

// shadowIntensity={shadowIntensity}
// camera={{ position: [cameraX, cameraY, cameraZ], fov: 50 }}

 style={{height:"480px",width:"400px"}} shadows >

<ambientLight intensity={0.4} />
<directionalLight 
            position={[5, 20, 5]} 
            intensity={10} 
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
          minDistance={165} 
          // maxDistance={440} 
          // minDistance={473} 
          target={[3, 0, 0.01]} 
          enableDamping={true} // Smooth movement


          />
  </Canvas>
</Suspense>
</div>
          
     
             
            </div>
            </AnimationOnScroll>
          </div>
      </div>
    </div>
   
  );
};

export default About;