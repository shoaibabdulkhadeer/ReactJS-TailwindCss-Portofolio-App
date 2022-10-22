import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import ClockLoader  from "react-spinners/ClockLoader";
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
     {loading ?   <ClockLoader 
        color={"#36d7b7"}
        loading={loading}
        size={80}
       
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
