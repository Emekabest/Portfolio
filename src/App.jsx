import { useState, useEffect } from 'react'
import heroBgImg from './assets/hero-background.png'
import heroMobileImg from './assets/user-mobile.png'
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
      
      
      <footer className='footer'>
         
      </footer>
    </main>

 
  )
}

export default App
