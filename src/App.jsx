import heroImg from './assets/hero.png'
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
          <p className="eyebrow">Portfolio / 2026</p>
          <h1 id="hero-title">Building digital experiences with clarity and character.</h1>
          <p className="intro">
            I am a multidisciplinary designer and developer creating thoughtful products
            for people and ambitious teams.
          </p>
          <a className="hero-action" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="art-circle"></div>
          <img src={heroImg} alt="" />
          <p>Selected<br />work</p>
        </div>
      </section>
    </main>
  )
}

export default App
