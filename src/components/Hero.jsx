  import "boxicons/css/boxicons.min.css";
  import Spline from "@splinetool/react-spline";

  const Hero = () => {
    return (
      <main className="relative flex flex-col lg:flex-row lg:items-center justify-between min-h-[calc(90vh-6rem)]">
        {/* Text Section */}
        <div className="max-w-xl ml-5 z-10 mt-24 lg:mt-0">
          {/* Glow pill */}
          <div
            className="inline-block rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] p-[2px]
                          shadow-[0_0_20px_rgba(233,155,99,0.8)]"
          >
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
        </div>

        {/* 3D Model */}
        <div
          className="relative lg:w-1/2 w-full h-[400px] sm:h-[500px] lg:h-[600px]
                  z-0 rotate-[-2deg]"
        >
          <Spline
            scene="https://prod.spline.design/YYWxV6wKctGcoU1E/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </main>
    );
  };

  export default Hero;
