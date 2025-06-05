import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CVRequest from './components/CVRequest';
import Contact from './components/Contact';
import './styles/index.css'; // Make sure this path is correct

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
    { name: 'Python', level: 90, icon: '🐍' },
    { name: 'SQL', level: 75, icon: '🗃️' },
    { name: 'ETL Pipelines', level: 75, icon: '⚡' },
    { name: 'Web Scraping', level: 95, icon: '🕸️' },
    { name: 'Data Visualization', level: 85, icon: '📊' },
    { name: 'Fast Data Processing', level: 85, icon: '🚀' }
  ];

  const projects = [
    {
      title: "Slack KPI Bot",
      description: "Automated daily business intelligence system delivering real-time KPI reports, year-over-year comparisons, and actionable insights directly to team Slack channels.",
      image: "https://cdn-icons-png.flaticon.com/512/2111/2111615.png",
      imageAlt: "Slack KPI Bot",
      tech: ["Python", "BigQuery", "Slack API", "SQL"],
      link: "./pages/slack-kpi-bot.html",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      
      title: "Competitor Price Scraping",
      description: "Advanced competitor price monitoring system with AI-powered product matching, real-time data extraction from multiple sources, and comprehensive analytics dashboard.",
      image: "https://7574663.fs1.hubspotusercontent-na1.net/hubfs/7574663/Logos%20and%20headers/ibuyflowers-icon.png",
      imageAlt: "Competitor Price Scraping System",
      tech: ["Python", "OpenAI GPT", "BigQuery", "Async Processing"],
      link: "./pages/competitor-pricing.html",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Funda Web Scraper",
      description: "A sophisticated web scraper for Funda.nl, extracting real estate data with advanced techniques to bypass anti-scraping measures.",
      image: "https://careers.recruiteecdn.com/image/upload/q_auto,f_auto,w_1920,c_limit/production/images/BgW6/a5aJk31baPpD.png",
      imageAlt: "Funda Real Estate Scraper",
      tech: ["Selenium", "GeoPandas", "Folium", "Pandas"],
      link: "./pages/funda-scraper.html",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Funko Pop Collector",
      description: "A full-stack application for Funko Pop collectors, featuring a Supabase backend for real-time data management and user authentication.",
      image: "https://images.seeklogo.com/logo-png/32/1/funko-logo-png_seeklogo-329514.png",
      imageAlt: "Funko Pop Collector Application",
      tech: ["Python", "Supabase", "FastAPI", "SQL"],
      link: "./pages/funko-collector.html",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Web Scraping Pipeline",
      description: "Automated scraper extracting data from multiple sources, storing it in a database and powering real-time dashboards.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
      imageAlt: "Python Web Scraping",
      tech: ["Python", "BeautifulSoup", "Scrapy", "PostgreSQL"],
      link: "./pages/web-scraping.html",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "ETL for Retail Analytics",
      description: "Robust ETL workflow in Python and SQL moving millions of records daily with high reliability and speed.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/AirflowLogo.png/1200px-AirflowLogo.png",
      imageAlt: "Apache Airflow ETL Pipeline",
      tech: ["Python", "Apache Airflow", "SQL", "AWS"],
      link: "./pages/etl-retail.html",
      gradient: "from-green-500 to-blue-600"
    },
    {
      title: "Data Visualization Toolkit",
      description: "Scripts to transform raw datasets into clean, interactive charts and comprehensive dashboards.",
      image: "https://images.plot.ly/logo/new-branding/plotly-logomark.png",
      imageAlt: "Plotly Data Visualization",
      tech: ["Python", "Plotly", "Dash", "Pandas"],
      link: "./pages/data-visualization.html",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header activeSection={activeSection} />
      <Hero />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <CVRequest />
      <Contact />
      
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
