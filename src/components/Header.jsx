import React from 'react';

const Header = ({ activeSection }) => {
  return (
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
  );
};

export default Header;