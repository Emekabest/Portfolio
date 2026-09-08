import { useState, useEffect } from 'react'
import heroBgImg from './assets/hero-background.png'
import heroMobileImg from './assets/user-mobile.png'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedExperience, setExpandedExperience] = useState(0)

  const navigationItems = [
    'About',
    'Experience',
    'Projects',
    'Skills',
    'Education',
    'Contact',
  ]

  const experiences = [
    {
      id: 0,
      company: 'Airtel SmartCash PSB',
      period: 'Oct 2023 - Now',
      highlights: 'Backend Development',
      details: [
        'Collaborated with a cross-functional team to develop and maintain backend services using Java Spring Boot.',
        'Built and exposed RESTful APIs to support mobile and web applications, ensuring secure and efficient data exchange.',
        'Integrated database operations using JPA/Hibernate for data persistence and optimized queries for improved performance.',
        'Participated in code reviews, debugging, and performance tuning, contributing to improved system reliability and reduced response times.',
      ]
    },
    {
      id: 1,
      company: 'Hafrik',
      period: 'Nov 2025',
      highlights: 'Full-Stack Web Development',
      details: [
        'Developed and launched responsive websites using modern web technologies.',
        'Built features such as authentication, dashboards, user interactions, media uploads, and video content.',
        'Integrated backend APIs for authentication, data management, and real-time features.',
        'Improved website performance and fixed technical issues during development and deployment.',
        'Managed website testing, builds, hosting, and production deployment.',
      ]
    },
    {
      id: 2,
      company: 'Ori App Studio',
      period: 'Oct 2021',
      highlights: 'React Native Development',
      details: [
        'Contributed to the development and maintenance of a cross-platform travel budgeting mobile application using React Native.',
        'Built responsive, user-friendly interfaces for managing travel expenses, monitoring spending, and organizing travel-related data.',
        'Integrated RESTful APIs and managed application state and asynchronous operations to keep financial and travel data synchronized.',
        'Improved app performance by optimizing rendering, navigation flows, and component updates while implementing validation, loading states, and error handling.',
        'Collaborated remotely with developers and stakeholders to implement features, resolve bugs, and deliver reliable application updates.',
      ]
    },
    {
      id: 3,
      company: 'Florin Tech',
      period: 'Apr 2020',
      highlights: 'Real-Time Web Development',
      details: [
        'Developed a real-time voting website with a smooth and responsive user experience.',
        'Integrated Firebase Firestore to provide live vote updates and display results without refreshing the page.',
        'Built an interactive voting system with validation to prevent duplicate voting and ensure fairness.',
        'Improved website performance and handled real-time data updates efficiently.',
        'Added loading states and error handling while using Git for version control.',
      ]
    }
  ]

  const heroStats = [
    { value: '50+', label: 'Apps and Website deployed' },
    { value: '900k+', label: 'Combined downloads' },
  ]

  const highlightStats = [
    { value: '6', label: 'Years of Experience' },
    { value: '50+', label: 'Apps and Websites deployed' },
    { value: '900K+', label: 'Combined downloads' },
    { value: '99%', label: 'Crash-Free Sessions' },
  ]

  // Prevent background scroll when mobile menu is active
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <main className="portfolio-page">
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Home" onClick={() => setMenuOpen(false)}>
          JD<span>.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="primary-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <a className="hire-link-desktop" href="#contact">Hire me <span aria-hidden="true">↗</span></a>

        {/* Hamburger toggle button */}
        <button 
          className={`menu-toggle ${menuOpen ? 'is-active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        {/* Mobile Flyout Menu Overlay */}
        <div 
          id="mobile-menu"
          className={`mobile-menu-overlay ${menuOpen ? 'is-open' : ''}`}
          aria-hidden={!menuOpen}
        >
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navigationItems.map((item, index) => (
              <a 
                href={`#${item.toLowerCase()}`} 
                key={item}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              className="hire-link-mobile" 
              href="#contact" 
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: `${navigationItems.length * 50}ms` }}
            >
              Hire me <span>↗</span>
            </a>
          </nav>
        </div>
      </header>
      
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className='hero-content'>

          <div className='hero-content-top-mobile'>
            <h1>Hello</h1>
            <p>— It’s Joseph Dimma, a developer who solves problems</p>
          </div>
          
          <div className='hero-content-center-mobile'>
            <div className="mobile-circle-frame">
              <img src={heroMobileImg} alt="Joseph Dimma" className="mobile-circle-image" />
            </div>
          </div>
          
          <div className='hero-content-bottom-mobile'>
            <div className="mobile-stat-box">
              <strong>50+</strong>
              <span>Apps and Websites deployed</span>
            </div>
            <div className="mobile-stat-box">
              <strong>900K+</strong>
              <span>Combined downloads</span>
            </div>
          </div>
          
          <div className='hero-content-top'>
            <p className="hero-stat-pill"><strong>50+</strong><span>Apps and Websites deployed</span></p>
            <p className="hero-stat-pill"><strong>900K+</strong><span>Combined downloads</span></p>
          </div>
          <div className='hero-content-center'>
              {/* <h2>Hello</h2> */}
              <div>
                <h1>Hello</h1>
                <p>— It’s Joseph Dimma, a developer who solves problems</p>
              </div>
              
          </div>
          <div className='hero-content-bottom'>
              <p className="hero-scroll-cue">Scroll Down <span aria-hidden="true">↓</span></p>
          </div>
        </div>
            
      </section>

      
      <section className="highlights" aria-labelledby="highlights-title">
        <div className="highlights-copy">
          <p className="section-kicker">Selected capabilities</p>
          <h2 id="highlights-title">Work that balances product thinking, clean UI, and reliable delivery.</h2>
          <p className="highlights-summary">
            Browse featured work or open my resume to get a quick view of the experience and
            outcomes behind the portfolio.
          </p>

          <div className="highlights-actions">
            <a className="primary-action" href="#projects">View Work</a>
            <a className="secondary-action" href="#contact">CV / Resume</a>
          </div>
        </div>

        <div className="highlights-grid" aria-label="Portfolio metrics">
          {highlightStats.map((item) => (
            <article className="highlight-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>


      <section className="about" id="about" aria-labelledby="about-title">
        <div className="about-content">
          <div className="about-copy">
            <p className="section-kicker">About Me</p>
            <h2 id="about-title">Engineering web and mobile experiences that last.</h2>
            <p className="about-bio">
              Hey there! I'm Joseph Dimma Oguike, a Senior Web and Mobile Developer with 6 years of experience building and scaling production-grade mobile applications.
            </p>
            <p className="about-bio">
              I work primarily with React, ReactNative & JavaScript, with deep expertise in integrating Firebase, SpringBoot, RESTful APIs, and managing app state using Zustand and Redux. What I enjoy most is building things that last — apps that scale as products and teams grow.
            </p>
            <p className="about-bio">
              I've worked closely with designers, backend engineers, and product managers in distributed, remote-first teams, turning complex requirements into intuitive, high-performance mobile experiences.
            </p>
          </div>

          <div className="about-strengths">
            <h3>Core Strengths</h3>
            <ul className="strengths-list">
              <li>Clean Architecture & MVVM design patterns</li>
              <li>99.5% crash-free session rate across all apps</li>
              <li>CI/CD pipelines with Codemagic & Fastlane</li>
              <li>Cross-functional remote-first collaboration</li>
              <li>State management: Zustand, Redux</li>
              <li>Firebase integration: Auth, Firestore, FCM</li>
              <li>Open to remote work — contract or full-time</li>
            </ul>
          </div>
        </div>

        <div className="about-stats" aria-label="Developer metrics">
         
          <article className="about-stat-card">
            <strong>50+</strong>
            <span>Apps and Websites deployed</span>
          </article>
          <article className="about-stat-card">
            <strong>300K+</strong>
            <span>Combined Downloads</span>
          </article>
          <article className="about-stat-card">
            <strong>4.5+</strong>
            <span>App Store Rating</span>
          </article>
          <article className="about-stat-card">
            <strong>99%</strong>
            <span>Crash-Free Rate</span>
          </article>
          <article className="about-stat-card">
            <strong>6</strong>
            <span>Total Exp. Years</span>
          </article>
        </div>
      </section>
      
<section className="experience" id="experience" aria-labelledby="experience-title">
        <div className="experience-header">
          <p className="section-kicker">Experience</p>
          <h2 id="experience-title">Where I've made an impact.</h2>
        </div>

        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <button
                className={`experience-trigger ${expandedExperience === exp.id ? 'is-active' : ''}`}
                onClick={() => setExpandedExperience(expandedExperience === exp.id ? -1 : exp.id)}
                aria-expanded={expandedExperience === exp.id}
                aria-controls={`experience-details-${exp.id}`}
              >
                <div className="experience-header-row">
                  <div className="experience-title-group">
                    <h3 className="experience-company">{exp.company}</h3>
                    <p className="experience-period">{exp.period}</p>
                  </div>
                  <div className="experience-highlights">{exp.highlights}</div>
                  <div className="experience-toggle">
                    <span className="toggle-icon" aria-hidden="true">+</span>
                  </div>
                </div>
              </button>

              {expandedExperience === exp.id && (
                <div id={`experience-details-${exp.id}`} className="experience-details">
                  <ul className="experience-details-list">
                    {exp.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      
      <footer className='footer'>
      </footer>
    </main>

 
  )
}

export default App
