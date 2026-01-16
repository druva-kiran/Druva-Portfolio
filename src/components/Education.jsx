import React from "react";

const Education = () => {
  const education = [
    {
      id: 1,
      institution: "Er. Perumal Manimekalai College of Engineering",
      degree: "B.Tech in Artificial Intelligence & Data Science",
      year: "2024 - 2028",
      score: "Pursuing",
      icon: "bx-brain",
      description: "Specializing in Machine Learning algorithms, Data Structures, and Predictive Analytics.",
    },
    {
      id: 2,
      institution: "Government Higher Secondary School, Mullai Nagar",
      degree: "Higher Secondary (12th Grade)",
      year: "Completed",
      score: "76%",
      icon: "bx-book-bookmark",
      description: "Focused on Mathematics, Physics, and Computer Science foundation.",
    },
    {
      id: 3,
      institution: "Green Valley Matric Hr Sec School, Avalapalli",
      degree: "Secondary School (10th Grade)",
      year: "Completed",
      score: "72%",
      icon: "bx-pencil",
      description: "Built strong fundamentals in general sciences and mathematics.",
    },
  ];

  return (
    <section id="education" className="min-h-screen bg-black text-white py-24 px-4 lg:px-20 flex flex-col justify-center overflow-hidden">
      
      {/* Title - Optimized: AOS only on Desktop */}
      <div 
        data-aos={window.innerWidth < 768 ? "" : "fade-down"}
        className="mb-20 border-b border-gray-800 pb-8"
      >
        <h2 className="text-4xl md:text-6xl font-light tracking-tight">
          Academic <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">Journey</span>
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto lg:mx-0">
        
        {/* The Vertical Line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-gray-800 to-transparent"></div>

        <div className="space-y-16">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              tabIndex="0" // Enables persistent focus on mobile tap
              data-aos={window.innerWidth < 768 ? "" : "fade-right"}
              data-aos-delay={index * 150}
              className="relative pl-12 group outline-none touch-manipulation"
            >
              {/* Timeline Dot - Glows on card hover OR focus */}
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-black border-2 border-orange-500 
                group-hover:bg-orange-400 group-hover:scale-125 
                group-focus:bg-orange-400 group-focus:scale-125
                transition-all duration-300 shadow-[0_0_10px_#fb923c]">
              </div>

              {/* Card Content - PERSISTENT POP & GLOW */}
              <div className="
                flex flex-col md:flex-row gap-6 items-start p-6 rounded-xl border border-white/5 bg-zinc-900/40
                transition-all duration-500 ease-out
                /* Desktop Hover */
                md:hover:bg-zinc-900/60 md:hover:border-orange-500/30 md:hover:translate-x-2
                /* Mobile Focus (Tap to stay glowing) */
                group-focus:bg-zinc-900 group-focus:border-orange-500/50 
                group-focus:scale-[1.02] group-focus:shadow-[0_0_25px_rgba(251,146,60,0.2)]
                /* Instant Feedback */
                active:scale-95
              ">
                
                {/* Icon Box */}
                <div className="p-4 bg-zinc-800 rounded-lg text-orange-300 text-3xl shrink-0 
                  group-hover:text-white group-hover:bg-orange-500 
                  group-focus:text-white group-focus:bg-orange-500
                  transition-colors duration-300">
                  <i className={`bx ${edu.icon}`}></i>
                </div>

                {/* Text Details */}
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-orange-300 group-focus:text-orange-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono py-1 px-2 border border-gray-700 rounded text-gray-400">
                      {edu.year}
                    </span>
                  </div>
                  
                  <h4 className="text-lg text-gray-400 mb-4">{edu.institution}</h4>
                  
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed group-hover:text-gray-400 group-focus:text-gray-300 transition-colors">
                    {edu.description}
                  </p>

                  {/* Score Badge */}
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                    <i className='bx bx-award'></i>
                    <span>Score: {edu.score}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;