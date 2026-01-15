import React from "react";
import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section 
      id="about" 
      // FIX IS HERE: Increased 'pb-4' to 'pb-32' to give more height/space at the bottom
      className="relative flex flex-col lg:flex-row lg:items-center justify-between pt-32 pb-32 px-4 lg:px-20"
    >
      {/* Text Section */}
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl z-10"
      >
        {/* Badge */}
        <div className="inline-block rounded-full bg-gradient-to-r from-[#656565] to-[#c95d15] p-[2px] shadow-[0_0_20px_rgba(254,215,170,0.4)]">
          <div className="flex items-center gap-2 px-4 py-2 bg-black rounded-full text-white text-sm">
            <i className="bx bx-world text-[#d46c46] text-lg"></i>
            Hello World! I'm
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider my-8 text-white">
          Druva Kiran .J
        </h1>

        <p className="text-base sm:text-lg leading-relaxed text-gray-400 max-w-[32rem] font-medium mb-8">
          AI & Machine Learning student passionate about creating intelligent
          solutions through data, algorithms and continuous learning.
        </p>

        {/* JSON About Me */}
        <div className="bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-lg p-4 font-mono text-sm max-w-md shadow-xl mb-8 group hover:border-orange-500/50 transition-colors">
          <div className="flex gap-2 mb-2 border-b border-white/5 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <code className="text-gray-300">
            <span className="text-purple-400">const</span> <span className="text-yellow-300">aboutMe</span> = {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-blue-300">role</span>: <span className="text-green-300">"AI Engineer"</span>,
            <br />
            &nbsp;&nbsp;<span className="text-blue-300">college</span>: <span className="text-green-300">"E.P.M.C.E"</span>,
            <br />
            &nbsp;&nbsp;<span className="text-blue-300">learning</span>: [<span className="text-green-300">"Neural Nets"</span>, <span className="text-green-300">"DevOps"</span>],
            <br />
            &nbsp;&nbsp;<span className="text-blue-300">fuel</span>: <span className="text-green-300">"Coffee ☕"</span>
            <br />
            {'}'};
          </code>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/druva-kiran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300 text-3xl"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/druva-kiran-j/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#0077b5] transition-colors duration-300 text-3xl"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>

          <a
            href="mailto:ffdruva0@gmail.com"
            className="text-gray-400 hover:text-[#ea4335] transition-colors duration-300 text-3xl"
          >
            <i className="bx bxl-gmail"></i>
          </a>
        </div>
      </div>

      {/* 3D Model Section */}
      <div className="relative lg:w-1/2 w-full h-[400px] sm:h-[500px] lg:h-[600px] z-0 rotate-[-2deg] overflow-hidden mt-12 lg:mt-0">
        <div className="w-full h-[calc(100%+100px)] -mt-[50px]">
          <Spline
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="2500"
            scene="https://prod.spline.design/YYWxV6wKctGcoU1E/scene.splinecode"
            className="w-full h-full"
          />
        </div>
        <div className="absolute -bottom-10 -right-10 w-48 h-24 bg-black z-50 pointer-events-none rotate-[2deg]" />
      </div>
    </section>
  );
};

export default Hero;