import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SecureShare CLI",
      category: "System Engineering",
      status: "In Progress",
      description: "A secure file sharing command-line tool built on Linux architecture. Utilizes SSH protocols and custom Bash scripts for encrypted, high-speed data transfer between local and remote environments.",
      tech: ["Linux", "Bash", "Python", "SSH"],
      link: "#",
    },
    {
      id: 2,
      title: "BioViz Platform",
      category: "AI & Web",
      status: "Concept",
      description: "An educational web platform for biology research. Features an AI model that identifies plant species from user uploads and generates interactive 3D growth visualizations and taxonomic data.",
      tech: ["React", "TensorFlow", "WebGL", "REST API"],
      link: "#",
    },
    {
      id: 3,
      title: "Object Detection Model",
      category: "Computer Vision",
      status: "Planned",
      description: "Real-time object classification system designed for automated surveillance. Implementing YOLO architecture to detect and track multiple entities in video feeds with high precision.",
      tech: ["Python", "OpenCV", "PyTorch", "YOLO"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-black text-white py-24 px-4 lg:px-20 flex flex-col justify-center overflow-hidden">
      
      {/* Title */}
      <div 
        data-aos="fade-down" 
        className="mb-20 border-b border-gray-800 pb-8"
      >
        <h2 className="text-4xl md:text-6xl font-light tracking-tight">
          Selected <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">Works</span>
        </h2>
        <p className="mt-4 text-gray-500 max-w-lg text-lg">
          A collection of system architectures, AI models, and web solutions currently in development.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            // Delay 0 on mobile for immediate response, staggered on desktop
            data-aos-delay={window.innerWidth < 768 ? 0 : index * 100}
            // MOBILE POP & GLOW: Added active: classes for touch feedback
            className="
              group flex flex-col justify-between p-8 border-l-2 border-gray-800 bg-transparent transition-all duration-300 
              hover:border-orange-400 hover:bg-zinc-900/20 hover:translate-x-2
              active:scale-95 active:bg-orange-500/10 active:border-orange-400 active:shadow-[0_0_20px_rgba(251,146,60,0.2)]
              touch-manipulation
            "
          >
            <div>
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest group-hover:text-orange-300 group-active:text-orange-300 transition-colors">
                  0{project.id} / {project.category}
                </span>
                <span className="text-xs px-2 py-1 border border-gray-800 text-gray-400 rounded-full group-hover:border-orange-400/50 group-active:border-orange-400 transition-all">
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 group-active:text-orange-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 text-sm group-hover:text-gray-300 group-active:text-gray-300 transition-colors">
                {project.description}
              </p>
            </div>

            {/* Footer / Tech Stack */}
            <div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-sm text-gray-500 font-mono">
                {project.tech.map((t, i) => (
                  <span key={i} className="hover:text-white group-active:text-white transition-colors cursor-default">#{t}</span>
                ))}
              </div>
              
              <a 
                href={project.link}
                className="inline-flex items-center gap-2 text-white text-sm font-semibold group-hover:text-orange-300 group-active:text-orange-300 transition-colors"
              >
                <i className='bx bxl-github text-lg'></i>
                <span>View Source</span>
                <i className='bx bx-right-arrow-alt text-xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-active:opacity-100 group-active:translate-x-0 transition-all duration-300'></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;