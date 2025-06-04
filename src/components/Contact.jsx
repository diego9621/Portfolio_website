import React from 'react';

const Contact = () => {
  return (
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
  );
};

export default Contact;