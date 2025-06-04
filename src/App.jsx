import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
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
      link: '/pages/web-scraping.html', // This will look in public/pages/
      gradient: 'from-blue-500 to-purple-600',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
      imageAlt: 'Python Web Scraping'
    },
    {
      title: 'ETL for Retail Analytics',
      description: 'Robust ETL workflow in Python and SQL moving millions of records daily with high reliability and speed.',
      tech: ['Python', 'Apache Airflow', 'SQL', 'AWS'],
      link: '/pages/etl-retail.html', // Updated path
      gradient: 'from-green-500 to-blue-600',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/AirflowLogo.png/1200px-AirflowLogo.png',
      imageAlt: 'Apache Airflow ETL Pipeline'
    },
    {
      title: 'Data Visualization Toolkit',
      description: 'Scripts to transform raw datasets into clean, interactive charts and comprehensive dashboards.',
      tech: ['Python', 'Plotly', 'Dash', 'Pandas'],
      link: '/pages/data-visualization.html', // Updated path
      gradient: 'from-purple-500 to-pink-600',
      image: 'https://images.plot.ly/logo/new-branding/plotly-logomark.png',
      imageAlt: 'Plotly Data Visualization'
    },
    {
      title: 'Funda Web Scraper',
      description: 'A sophisticated web scraper for Funda.nl, extracting real estate data with advanced techniques to bypass anti-scraping measures.',
      tech: ['Selenium Undetected', 'GeoPanda', 'Numpy', 'Pandas', 'Folium'],
      link: '/pages/funda-scraper.html', // Updated path
      gradient: 'from-orange-500 to-red-600',
      image: 'https://logos-world.net/wp-content/uploads/2021/02/Funda-Logo.png',
      imageAlt: 'Funda Real Estate Scraper'
    },
    {
      title: 'Funko Pop Collector & Supabase Backend',
      description: 'A full-stack application for Funko Pop collectors, featuring a Supabase backend for real-time data management and user authentication.',
      tech: ['Python', 'SQL', 'Asynchronous', 'Supabase', 'FastAPI'],
      link: '/pages/funko-collector.html', // Updated path
      gradient: 'from-purple-500 to-pink-600',
      image: 'https://images.seeklogo.com/logo-png/32/1/funko-logo-png_seeklogo-329514.png',
      imageAlt: 'Funko Pop Collector Application'
    },
    {
      title: 'Competitor Price Scraping',
      description: 'Advanced competitor price monitoring system with AI-powered product matching, real-time data extraction from multiple sources, and comprehensive analytics dashboard.',
      tech: ['Python', 'OpenAI GPT', 'Async Processing', 'BigQuery', 'Looker Studio'],
      link: '/pages/competitor-price-scraping.html', // Updated path
      gradient: 'from-emerald-500 to-teal-600',
      image: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png',
      imageAlt: 'Competitor Price Scraping System'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header activeSection={activeSection} />
      <Hero />
      <Skills skills={skills} />
      <Projects projects={projects} />
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
