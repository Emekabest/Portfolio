import './App.css'

function App() {
  const navigationItems = [
    'About',
    'Experience',
    'Projects',
    'Skills',
    'Education',
    'Contact',
  ]

  return (
    <main className="portfolio-page">
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Home">
          JD<span>.</span>
        </a>

        <nav className="primary-nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <a className="hire-link" href="#contact">Hire me <span aria-hidden="true">↗</span></a>
      </header>
      
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hero-kicker">Mobile & Web Developer </p>
          <h1 id="hero-title">
            I’m <span>Joseph Dimma Oguike</span>
          </h1>
          <p className="hero-summary">
            I design and build modern digital experiences that help businesses grow.
          </p>
        </div>
      </section>
    

      <footer className='footer'>
        
      </footer>
    </main>

 
  )
}

export default App
