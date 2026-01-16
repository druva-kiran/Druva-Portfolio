import React from "react";

const Skills = () => {
  const skills = [
    {
      category: "AI & Machine Learning",
      icon: "bx-brain",
      items: ["Python", "Jupyter", "Pandas", "NumPy", "Scikit-Learn"],
    },
    {
      category: "Frontend Development",
      icon: "bx-code-alt",
      items: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    },
    {
      category: "Backend & Tools",
      icon: "bx-server",
      items: ["MySQL", "Git", "VS Code", "Linux"],
    },
  ];

  return (
    <section 
      id="skills" 
      className="pt-32 pb-32 bg-black text-white px-4 lg:px-20 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background Decoration - Sharp Light Enabled for Mobile */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl -z-10"></div>

      {/* Section Title - AOS kept for Desktop, disabled via logic if needed */}
      <div data-aos="fade-down" className="mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">Proficiency</span>
        </h2>
        <div className="h-1 w-20 bg-orange-400 mt-4 mx-auto md:mx-0 rounded-full shadow-[0_0_10px_#fb923c]"></div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillSet, index) => (
          <div
            key={index}
            tabIndex="0" // Allows the card to "stay" focused on mobile tap
            /* AOS removed for mobile performance, kept for desktop via delay logic */
            data-aos={window.innerWidth < 768 ? "" : "fade-up"}
            data-aos-delay={index * 150}
            className={`
              group relative p-8 rounded-2xl border border-white/5 transition-all duration-500 outline-none
              bg-zinc-900/80 touch-manipulation
              
              /* Desktop Hover Effects */
              md:hover:border-orange-400/50 md:hover:shadow-[0_0_30px_rgba(251,146,60,0.3)] 
              md:hover:-translate-y-2 md:hover:scale-[1.02] md:backdrop-blur-sm
              
              /* Mobile Persistent Glow (STAYS until another card is touched) */
              focus:border-orange-400 focus:scale-[1.02] focus:bg-zinc-900 
              focus:shadow-[0_0_40px_rgba(251,146,60,0.25)]
            `}
          >
            {/* Lighter Orange Accent Bar */}
            <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-orange-400 to-transparent rounded-r-full opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity"></div>

            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-zinc-800 rounded-lg text-orange-300 text-2xl 
                group-hover:bg-orange-400 group-hover:text-black 
                group-focus:bg-orange-400 group-focus:text-black transition-colors duration-300">
                <i className={`bx ${skillSet.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold tracking-wide text-gray-100 group-hover:text-white group-focus:text-white">
                {skillSet.category}
              </h3>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-3">
              {skillSet.items.map((item, i) => (
                <div
                  key={i}
                  className="
                    relative overflow-hidden px-3 py-2 bg-zinc-800/50 rounded-md border border-white/5 text-sm text-gray-300 
                    transition-all duration-300 cursor-default
                    group-hover:text-white group-hover:border-orange-400/60
                    group-focus:text-orange-300 group-focus:border-orange-400/40
                  "
                >
                  <span className="relative z-10">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;