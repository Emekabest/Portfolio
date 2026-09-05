import { useState, useEffect } from 'react'
import heroBgImg from './assets/hero-background.png'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigationItems = [
    'About',
    'Experience',
    'Projects',
    'Skills',
    'Education',
    'Contact',
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
        <div className="hero-copy">
          <div className="hero-intro">
            <p className="hero-kicker">Mobile & Web Developer</p>
            
            {/* Elegant Mobile Profile Placeholder Frame (hidden on desktop) */}
            <div className="hero-mobile-image-wrapper">
              <div className="hero-mobile-frame">
                <div className="hero-mobile-frame-inner">
                  <span className="placeholder-icon">👤</span>
                  <p className="placeholder-label">Portrait Slot</p>
                </div>
              </div>
            </div>

            <h1 id="hero-title">
              I’m <span>Joseph Dimma Oguike</span>
            </h1>
            <p className="hero-summary">
              I design and build modern digital experiences that help businesses grow.
            </p>
          </div>

          <div className="hero-stats" aria-label="Portfolio highlights">
            {heroStats.map((stat) => (
              <article className="hero-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
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
    

      <footer className='footer'>
        
      </footer>
    </main>

 
  )
}

export default App
