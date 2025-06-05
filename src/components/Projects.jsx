import React from 'react';

const Projects = ({ projects }) => {
  // Show first 6 projects on homepage
  const displayedProjects = projects.slice(0, 6);

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <p className="text-xl text-gray-300">
            Some of my recent work showcasing data analysis, web scraping, and automation projects that demonstrate my skills in Python, SQL, and data visualization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-2xl p-1 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 border border-gray-700/50 h-full">
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>
              
              {/* Content */}
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <img 
                    src={project.image} 
                    alt={project.imageAlt}
                    className="w-12 h-12 rounded-lg mr-4 object-contain bg-white/10 p-2"
                  />
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-700/70 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  className={`inline-block w-full text-center bg-gradient-to-r ${project.gradient} hover:scale-105 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 transform text-sm mt-auto`}
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects Button - Only show if there are more than 6 projects */}
        {projects.length > 6 && (
          <div className="text-center">
            <a 
              href="/pages/all-projects.html"
              className="inline-block bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 text-lg"
            >
              View All Projects ({projects.length}) →
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;