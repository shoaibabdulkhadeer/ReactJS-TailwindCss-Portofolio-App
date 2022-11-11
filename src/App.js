import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import ClimbingBoxLoader  from "react-spinners/ClimbingBoxLoader";
import "animate.css/animate.min.css";



function App() {

  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    setTimeout(() => {
         setLoading(false)
    },4000)

  },[])
  
  return ( 
    <div className= "flex items-center justify-center min-h-screen w-full bg-[#0a192f]">
     {loading ?   <ClimbingBoxLoader
        color={"#48f196"}
        loading={loading}
        size={50}
       
      />
    :
    <div>
        <Navbar/>
        <Main />
        <About />
        <Skills />
        <Work />
        <Contact />
    </div> }
 
</div>
  );
}

export default App;
