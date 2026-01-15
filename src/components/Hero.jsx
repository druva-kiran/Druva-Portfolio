import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <main className="relative flex flex-col lg:flex-row lg:items-center justify-between min-h-[calc(90vh-6rem)]">
      {/* Text Section */}
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl ml-5 z-10 mt-24 lg:mt-0"
      >
        <div className="inline-block rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] p-[2px] shadow-[0_0_20px_rgba(233,155,99,0.8)]">
          <div className="flex items-center gap-2 px-4 py-2 bg-black rounded-full text-white text-sm">
            <i className="bx bx-globe-asia text-orange-400"></i>
            Hello World! I'm
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          Druva Kiran .J
        </h1>

        <p className="text-base sm:text-lg leading-relaxed text-gray-400 max-w-[32rem] font-semibold">
          AI & Machine Learning student passionate about creating intelligent
          solutions through data, algorithms and continuous learning.
        </p>

        {/* --- SOCIAL ICONS ADDED HERE --- */}
        <div className="flex items-center gap-6 mt-8">
          {/* GitHub */}
          <a
            href="https://github.com/druva-kiran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300 text-3xl"
          >
            <i className="bx bxl-github"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/druva-kiran-j/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#0077b5] transition-colors duration-300 text-3xl"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>

          {/* Email */}
          <a
            href="mailto:ffdruva0@gmail.com"
            className="text-gray-400 hover:text-[#ea4335] transition-colors duration-300 text-3xl"
          >
            <i className="bx bxl-gmail"></i>
          </a>
        </div>
      </div>

      {/* 3D Model Section (With your fixes) */}
      <div
        className="relative lg:w-1/2 w-full h-[400px] sm:h-[500px] lg:h-[600px]
                z-0 rotate-[-2deg] overflow-hidden"
      >
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

        {/* The Nuclear Patch */}
        <div className="absolute -bottom-10 -right-10 w-48 h-24 bg-black z-50 pointer-events-none rotate-[2deg]" />
      </div>
    </main>
  );
};

export default Hero;
