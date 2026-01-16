import React from "react";

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="min-h-screen bg-black text-white flex items-center justify-center px-4 relative overflow-hidden"
    >
      
      {/* Background Ambience - Sharp Light enabled via background image/torch in App.js */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px]"></div>
      </div>

      {/* --- THE MAIN CARD --- */}
      <div 
        tabIndex="0" // Makes the card focusable on mobile tap
        data-aos={window.innerWidth < 768 ? "" : "fade-up"}
        className="
          relative z-10 w-full max-w-3xl bg-zinc-900/40 border border-white/10 rounded-3xl p-8 md:p-16 text-center 
          shadow-2xl transition-all duration-500 outline-none
          
          /* Desktop Hover */
          md:backdrop-blur-xl md:hover:border-orange-500/30
          
          /* Mobile Persistent Glow */
          focus:border-orange-500/50 focus:bg-zinc-900 focus:shadow-[0_0_50px_rgba(251,146,60,0.15)]
        "
      >
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 border border-white/10 mb-8 md:backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-mono text-gray-300 tracking-widest uppercase">Open to work</span>
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">Collaborate</span>
        </h2>

        {/* Text Section */}
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-light">
          I am actively seeking <span className="text-white font-medium">internships</span> and <span className="text-white font-medium">research roles</span>. 
          Ready to contribute to innovative teams and build intelligent solutions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          
          {/* Email Button */}
          <a 
            href="mailto:ffdruva0@gmail.com"
            className="
              group w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg 
              transition-all duration-300 touch-manipulation
              hover:bg-orange-400 hover:shadow-[0_0_30px_rgba(251,146,60,0.5)]
              active:scale-95 active:bg-orange-500
              flex items-center justify-center gap-2
            "
          >
            <span>Say Hello</span>
            <i className='bx bx-right-arrow-alt text-xl transition-transform duration-300 group-hover:translate-x-1'></i>
          </a>
          
          {/* LinkedIn Button */}
          <a 
            href="https://www.linkedin.com/in/druva-kiran-j/"
            target="_blank"
            rel="noreferrer"
            className="
              group w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/5 font-medium 
              transition-all duration-300 touch-manipulation
              hover:bg-white/10 hover:border-white/30
              active:scale-95 active:bg-white/20 active:border-orange-400/50
              flex items-center justify-center gap-2
            "
          >
            <i className='bx bxl-linkedin text-xl'></i>
            <span>Connect on LinkedIn</span>
          </a>
        </div>

        {/* Minimal Footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-mono">
          <p>© 2026 Druva Kiran .J</p>
          <div className="flex gap-6">
            <a href="https://github.com/druva-kiran" className="hover:text-orange-400 transition-colors">GITHUB</a>
            <a href="https://www.linkedin.com/in/druva-kiran-j/" className="hover:text-orange-400 transition-colors">LINKEDIN</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;