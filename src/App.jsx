import React, { useEffect, useState } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Add scroll spy functionality
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Python', level: 95, icon: '🐍' },
    { name: 'SQL', level: 90, icon: '🗃️' },
    { name: 'ETL Pipelines', level: 88, icon: '⚡' },
    { name: 'Web Scraping', level: 92, icon: '🕸️' },
    { name: 'Data Visualization', level: 85, icon: '📊' },
    { name: 'Fast Data Processing', level: 87, icon: '🚀' }
  ];

  const projects = [
    {
      title: 'Web Scraping Pipeline',
      description: 'Automated scraper extracting data from multiple sources, storing it in a database and powering real-time dashboards.',
      tech: ['Python', 'BeautifulSoup', 'Scrapy', 'PostgreSQL'],
      link: 'src/pages/web-scraping.html',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'ETL for Retail Analytics',
      description: 'Robust ETL workflow in Python and SQL moving millions of records daily with high reliability and speed.',
      tech: ['Python', 'Apache Airflow', 'SQL', 'AWS'],
      link: 'src/pages/etl-retail.html',
      gradient: 'from-green-500 to-blue-600'
    },
    {
      title: 'Data Visualization Toolkit',
      description: 'Scripts to transform raw datasets into clean, interactive charts and comprehensive dashboards.',
      tech: ['Python', 'Plotly', 'Dash', 'Pandas'],
      link: 'src/pages/data-visualization.html',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Modern Header */}
      <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-700 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Data Portfolio
            </h1>
            <nav className="flex space-x-8">
              {['about', 'skills', 'projects', 'contact'].map(section => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 ${
                    activeSection === section
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-300'
                  }`}
                >
                  {section}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
              👨‍💻
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Data Engineer & Analytics Expert
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about building high-performance ETL pipelines, advanced web scraping solutions, 
              and transforming complex data into clear, actionable insights. Specializing in Python and SQL 
              to drive data-driven decision making.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mt-8">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105">
              View Projects
            </button>
            <button className="border-2 border-gray-500 hover:border-blue-400 px-8 py-3 rounded-full text-gray-300 hover:text-blue-400 font-semibold transition-all duration-300">
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-gray-700/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/70 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-3 mb-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400">{skill.level}% Proficiency</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={project.title} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex flex-col lg:flex-row">
                  <div className={`lg:w-1/3 h-48 lg:h-auto bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <div className="text-6xl opacity-20">📊</div>
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

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to discuss your next data project? I'd love to hear from you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-700/50 rounded-xl p-6 hover:bg-gray-700/70 transition-all duration-300">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <a href="mailto:your.email@example.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                your.email@example.com
              </a>
            </div>
            <div className="bg-gray-700/50 rounded-xl p-6 hover:bg-gray-700/70 transition-all duration-300">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Connect with me
              </a>
            </div>
            <div className="bg-gray-700/50 rounded-xl p-6 hover:bg-gray-700/70 transition-all duration-300">
              <div className="text-3xl mb-4">🐙</div>
              <h3 className="font-semibold text-white mb-2">GitHub</h3>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                View repositories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-8 border-t border-gray-700">
        <p className="text-gray-400">
          &copy; 2025 Data Portfolio. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default App;
