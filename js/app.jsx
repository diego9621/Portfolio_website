const { HashRouter, Routes, Route, Link } = ReactRouterDOM;

const Home = () => {
  React.useEffect(() => {
    const links = document.querySelectorAll('nav a[href^="#"]');
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
      <header className="bg-gray-800 text-gray-100 p-4">
        <h1 className="text-3xl font-bold text-center">Data Portfolio</h1>
        <nav className="mt-2 flex justify-center space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section id="about" className="p-4">
        <h2 className="text-xl font-semibold mb-2">About Me</h2>
        <p>
          Data engineer with a passion for high-performance ETL pipelines, web
          scraping, and presenting results clearly. I specialize in Python and
          SQL to transform raw data into actionable insights.
        </p>
      </section>

      <section id="skills" className="p-4 bg-gray-800">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {['Python','SQL','ETL Pipelines','Web Scraping','Data Visualization','Fast Data Processing'].map(skill => (
            <div key={skill} className="bg-gray-700 rounded shadow p-2 text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="p-4">
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        <div className="space-y-4">
          <Link to="/web-scraping" className="block bg-gray-700 rounded shadow p-4 hover:bg-gray-600">
            <h3 className="font-bold">Web Scraping Pipeline</h3>
            <p>Automated scraper extracting data from multiple sources, storing it in a database and powering real-time dashboards.</p>
          </Link>
          <Link to="/etl-retail" className="block bg-gray-700 rounded shadow p-4 hover:bg-gray-600">
            <h3 className="font-bold">ETL for Retail Analytics</h3>
            <p>Robust ETL workflow in Python and SQL moving millions of records daily with high reliability and speed.</p>
          </Link>
          <Link to="/data-visualization" className="block bg-gray-700 rounded shadow p-4 hover:bg-gray-600">
            <h3 className="font-bold">Data Visualization Toolkit</h3>
            <p>Scripts to transform raw datasets into clean, interactive charts.</p>
          </Link>
        </div>
      </section>

      <section id="contact" className="p-4 bg-gray-800">
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p>Email: <a href="mailto:your.email@example.com" className="text-indigo-400 underline">your.email@example.com</a></p>
      </section>

      <footer className="bg-gray-800 text-gray-100 text-center p-4 mt-4">
        &copy; 2023 Data Portfolio
      </footer>
    </div>
  );
};

const WebScraping = () => (
  <div className="max-w-4xl mx-auto p-4">
    <header className="bg-gray-800 p-4 rounded mb-4">
      <h1 className="text-2xl font-bold">Web Scraping Pipeline</h1>
      <Link to="/" className="text-indigo-400 underline">Back to Home</Link>
    </header>
    <main className="space-y-4">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      <p>Aliquam sit amet turpis ac odio tempus tristique. Curabitur nec orci vitae leo lacinia auctor quis non justo.</p>
    </main>
  </div>
);

const EtlRetail = () => (
  <div className="max-w-4xl mx-auto p-4">
    <header className="bg-gray-800 p-4 rounded mb-4">
      <h1 className="text-2xl font-bold">ETL for Retail Analytics</h1>
      <Link to="/" className="text-indigo-400 underline">Back to Home</Link>
    </header>
    <main className="space-y-4">
      <p>Placeholder content describing the ETL workflow. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Vivamus sit amet urna feugiat, ultricies ipsum id, faucibus lorem. Maecenas tincidunt facilisis lacus.</p>
    </main>
  </div>
);

const DataVisualization = () => (
  <div className="max-w-4xl mx-auto p-4">
    <header className="bg-gray-800 p-4 rounded mb-4">
      <h1 className="text-2xl font-bold">Data Visualization Toolkit</h1>
      <Link to="/" className="text-indigo-400 underline">Back to Home</Link>
    </header>
    <main className="space-y-4">
      <p>Information about creating interactive charts and cleaning datasets will go here. Lorem ipsum dolor sit amet.</p>
      <p>More placeholder text elaborating on features and techniques used in the project.</p>
    </main>
  </div>
);

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/web-scraping" element={<WebScraping />} />
      <Route path="/etl-retail" element={<EtlRetail />} />
      <Route path="/data-visualization" element={<DataVisualization />} />
    </Routes>
  </HashRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
