import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={project.title} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-[1.02]">
              <div className="flex flex-col lg:flex-row">
                <div className={`lg:w-1/3 h-48 lg:h-auto bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <img 
                    src={project.image} 
                    alt={project.imageAlt}
                    className="w-24 h-24 object-contain opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300 relative z-10 drop-shadow-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <div className="text-6xl opacity-20 hidden">📊</div>
                </div>
                <div className="lg:w-2/3 p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span key={tech} className="bg-gray-700 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
                  >
                    View Details 
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;