import React from 'react';

const Skills = ({ skills }) => {
  return (
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
  );
};

export default Skills;