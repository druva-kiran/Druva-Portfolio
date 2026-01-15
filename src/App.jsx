import Header from "./components/Header";
import Hero from "./components/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {

  useEffect(()=>{
    AOS.init({
      duration:1500,
      once:true,
    })
  })
  return (
    <main>
      {/*Gradient Image */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src="/gradient.png"
        alt="Gradient.png"
        srcset=""
      />
      {/*  Blur Effect */}
      <div
        className="
    absolute 
    top-0 
    right-0 
    h-[40rem]          
    w-[40rem]          
    bg-[conic-gradient(from_225deg_at_100%_0%,transparent_0deg,#e99b63_20deg,transparent_40deg)] 
    opacity-60 
    blur-[40px] 
    -z-10 
    pointer-events-none
    [mask-image:radial-gradient(circle_at_100%_0%,black_10%,transparent_70%)]
  "
      ></div>
      <Header />
      <Hero />
    </main>
  );
}

export default App;
