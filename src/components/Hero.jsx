import React from 'react';

const Hero = () => {
  return (
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
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a 
            href="#projects" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </a>
          <a 
            href="./pages/my-story.html" 
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105"
          >
            My Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;