const App = () => {
  React.useEffect(() => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  return (
    <div>
      <header className="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 text-gray-900 p-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-3xl font-bold text-center sm:text-left">Data Portfolio</h1>
          <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <nav className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <a href="#about" className="hover:underline">About</a>
              <a href="#skills" className="hover:underline">Skills</a>
              <a href="#projects" className="hover:underline">Projects</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>
            <button
              type="button"
              aria-label="Toggle dark mode"
              onClick={() => window.toggleTheme()}
              className="border rounded px-2 py-1"
            >
              Toggle Theme
            </button>
          </div>
        </div>
      </header>

      <section id="about" className="p-4 bg-white dark:bg-gray-900">
        <h2 className="text-xl font-semibold mb-2">About Me</h2>
        <p>
          Data engineer with a passion for high-performance ETL pipelines, web
          scraping, and presenting results clearly. I specialize in Python and
          SQL to transform raw data into actionable insights.
        </p>
      </section>

      <section id="skills" className="p-4 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
          {['Python','SQL','ETL Pipelines','Web Scraping','Data Visualization','Fast Data Processing'].map(skill => (
            <div key={skill} className="bg-gray-200 dark:bg-gray-700 rounded shadow p-2 text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="p-4 bg-white dark:bg-gray-900">
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        <div className="space-y-4">
          <a href="web-scraping.html" className="block bg-gray-200 dark:bg-gray-700 rounded shadow p-4 hover:bg-gray-100 dark:hover:bg-gray-600">
            <h3 className="font-bold">Web Scraping Pipeline</h3>
            <p>Automated scraper extracting data from multiple sources, storing it in a database and powering real-time dashboards.</p>
          </a>
          <a href="etl-retail.html" className="block bg-gray-200 dark:bg-gray-700 rounded shadow p-4 hover:bg-gray-100 dark:hover:bg-gray-600">
            <h3 className="font-bold">ETL for Retail Analytics</h3>
            <p>Robust ETL workflow in Python and SQL moving millions of records daily with high reliability and speed.</p>
          </a>
          <a href="data-visualization.html" className="block bg-gray-200 dark:bg-gray-700 rounded shadow p-4 hover:bg-gray-100 dark:hover:bg-gray-600">
            <h3 className="font-bold">Data Visualization Toolkit</h3>
            <p>Scripts to transform raw datasets into clean, interactive charts.</p>
          </a>
        </div>
      </section>

      <section id="contact" className="p-4 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p>Email: <a href="mailto:your.email@example.com" className="text-indigo-400 underline">your.email@example.com</a></p>
      </section>

      <footer className="bg-gray-200 dark:bg-gray-800 dark:text-gray-100 text-gray-900 text-center p-4 mt-4">
        &copy; 2023 Data Portfolio
      </footer>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
