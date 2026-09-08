import { useState, useEffect } from 'react'
import heroBgImg from './assets/hero-background.png'
import heroMobileImg from './assets/user-mobile.png'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedExperience, setExpandedExperience] = useState(0)
  const [expandedProject, setExpandedProject] = useState(0)

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
        'Built pages for available courses, training programs, registration information, and contact details.',
        'Created a user-friendly interface to help students easily explore courses and training options.',
        'Integrated dynamic content and backend functionality for managing website information.',
        'Optimized the website for different screen sizes and improved performance for a smooth browsing experience.',
      ]
    }
  ]

  const projects = [
    {
      id: 0,
      type: 'Web · Full Stack',
      date: 'Mar – Apr 2023',
      name: 'Abiola Ajimobi Technical University',
      website: 'tech-u.edu.ng',
      role: 'Sole Full-Stack Developer',
      description: 'Developed a responsive university website providing information on admissions, programmes, news, campus activities, and other academic services.',
      features: [
        {
          icon: '⚡',
          title: 'System & Performance',
          description: 'Node.js/JavaScript infrastructure with Cloudflare for improved performance, reliability, and security.'
        },
        {
          icon: '👥',
          title: 'Academic & Student Services',
          description: 'Dynamic website for managing academic programmes, admissions, student information, scholarships, campus activities, and university news.'
        },
        {
          icon: '🔒',
          title: 'Security',
          description: 'Secure data handling and database interactions to protect student, staff, and university information.'
        },
        {
          icon: '🌐',
          title: 'User Experience',
          description: 'Optimized across desktop, tablet, and mobile devices for a smooth and accessible experience for students, staff, and visitors.'
        }
      ],
      stack: ['Node', 'MySQL', 'JavaScript', 'Cloudflare', 'HTML/CSS', 'Full Stack']
    },
    {
      id: 1,
      type: 'Mobile · React Native',
      date: 'June – Aug 2025',
      name: 'SpendWise',
      website: 'Fintech App',
      role: 'Sole Mobile Developer',
      description: 'Designed, developed, and deployed a full luxury-focused e-commerce shopping application as the sole Mobile Developer. Managed the entire lifecycle from design through dual-platform launch on both Google Play Store and Apple App Store.',
      features: [
        {
          icon: '💰',
          title: 'Budgeting & Financial Management',
          description: 'Developed a budgeting and financial management mobile application using React Native to help users plan, track, and control personal spending.'
        },
        {
          icon: '🎯',
          title: 'Savings & Budgeting',
          description: 'Built intuitive features for setting savings goals, managing budgets, monitoring wallet balances, and tracking financial activity.'
        },
        {
          icon: '💳',
          title: 'Payments & APIs',
          description: 'Integrated Paystack for secure wallet funding and connected backend APIs to manage and synchronize user financial data.'
        },
        {
          icon: '🔄',
          title: 'State & Transactions',
          description: 'Implemented application state management, form validation, transaction feedback, and error handling to ensure reliable financial flows.'
        },
        {
          icon: '⚡',
          title: 'Performance & Components',
          description: 'Built reusable components and optimized app performance for smooth navigation and responsiveness, using Git for version control and iterative development'
        }
      ],
      stack: ['React Native', 'JavaScript', 'iOS', 'Android', 'Firebase', 'App Store', 'Google Play']
    },
    {
      id: 2,
      type: 'Web · Frontend',
      date: 'Nov – Mar 2026',
      name: 'Hafrik',
      website: 'hafrik.com',
      role: 'Frontend Developer',
      description: 'Developed and launched a production-ready university website using Node.js and JavaScript, delivering a responsive and user-friendly experience.',
      features: [
        {
          icon: '⚡',
          title: 'Core Features',
          description: 'Built key website features including dynamic pages, content management, news updates, image/media uploads, and responsive navigation.'
        },
        {
          icon: '👥',
          title: 'Backend & APIs',
          description: 'Integrated backend APIs and database services to manage website content, university information, news, and other dynamic data.'
        },
        {
          icon: '🔒',
          title: 'Performance & Security',
          description: 'Optimized website performance and implemented secure data handling, database interactions, and Cloudflare protection for improved reliability.'
        },
        {
          icon: '🌐',
          title: 'Responsive Design',
          description: 'Developed responsive UI layouts optimized for desktop, tablet, and mobile devices, ensuring a consistent experience across different screen sizes.'
        }
      ],
      stack: ['React', 'JavaScript', 'HTML/CSS', 'Frontend']
    },
    {
      id: 3,
      type: 'Web · Full Stack',
      date: 'Apr – June 2020',
      name: 'FlorinTech',
      website: 'florintechcomputercollege.com',
      role: 'Sole FullStack Developer',
      description: 'Developed and launched a responsive website for FlorinTech Computer College, providing users with information about computer training programs, courses, and available services.',
      features: [
        {
          icon: '⚡',
          title: 'Website Features',
          description: 'Built key features including course listings, training information, registration details, contact forms, and dynamic content pages.'
        },
        {
          icon: '👥',
          title: 'Course Management',
          description: 'Developed pages for managing and presenting computer training programs, course details, schedules, and other learning resources.'
        },
        {
          icon: '🔒',
          title: 'Backend & Data',
          description: 'Integrated backend functionality and database interactions for managing website content, enquiries, and registration-related information.'
        },
        {
          icon: '🌐',
          title: 'Responsive Design',
          description: 'Optimized the website for desktop, tablet, and mobile devices, providing a smooth experience for students and prospective learners.'
        }
      ],
      stack: ['React', 'NodeJs', 'JavaScript', 'HTML/CSS', 'Full Stack']
    },
    {
      id: 4,
      type: 'Mobile · React Native',
      date: 'Apr – June 2024',
      name: 'QuickVote',
      website: '',
      role: 'Sole Mobile Developer',
      description: 'Developed a real-time voting application using React Native, delivering a smooth and interactive cross-platform experience.',
      features: [
        {
          icon: '🗳️',
          title: 'Real-Time Voting',
          description: 'Built an interactive voting system with live vote counting and instant result updates using Firebase Firestore.'
        },
        {
          icon: '🔐',
          title: 'Vote Validation',
          description: 'Implemented validation logic to prevent duplicate voting and ensure accurate and fair voting.'
        },
        {
          icon: '📊',
          title: 'Live Results',
          description: 'Displayed real-time voting results without requiring users to refresh the application.'
        },
        {
          icon: '⚡',
          title: 'Performance',
          description: 'Optimized real-time listeners, application state, and component rendering for fast and reliable updates.'
        },
        {
          icon: '🛠️',
          title: 'Error Handling',
          description: 'Implemented loading states, error handling, and edge-case handling to provide a reliable user experience.'
        },
        {
          icon: '🔄',
          title: 'Cross-Platform',
          description: 'Developed reusable components and responsive interfaces for a consistent experience across supported platforms.'
        }
      ],
      stack: ['ReactNative', 'SpringBoot', 'Expo', 'JavaScript', 'Full Stack']
    },
    {
      id: 5,
      type: 'Mobile · React Naitve',
      date: 'Sep – Jan 2024',
      name: 'Travel Spend',
      website: '',
      role: 'Sole Mobile Developer',
      description: 'Developed and contributed to a cross-platform travel budgeting application using React Native, helping users manage travel expenses and organize their trip information.',
      features: [
        {
          icon: '✈️',
          title: 'Travel Planning',
          description: 'Built user-friendly features for organizing trips, managing travel information, and planning expenses.'
        },
        {
          icon: '💰',
          title: 'Expense Management',
          description: 'Developed interfaces for tracking travel expenses, monitoring spending, and managing budgets.'
        },
        {
          icon: '🔗',
          title: 'APIs & Data',
          description: 'Integrated RESTful APIs and managed application state and asynchronous operations to keep travel and financial data synchronized.'
        },
        {
          icon: '⚡',
          title: 'Performance',
          description: 'Optimized rendering, navigation, and component updates to improve application performance and responsiveness.'
        },
        {
          icon: '🤝',
          title: 'Team Collaboration',
          description: 'Worked remotely with developers and stakeholders to implement features, fix bugs, and deliver reliable application updates.'
        }
      ],
      stack: ['ReactNative', 'NodeJs', 'Expo', 'JavaScript', 'Full Stack']
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

  const skillSections = [
    {
      icon: '📱',
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 95 },
        { name: 'JavaScript', level: 95 },
        { name: 'iOS (SwiftUI/UIKit)', level: 75 },
        { name: 'Android (Kotlin)', level: 75 },
      ],
    },
    {
      icon: '⚙️',
      title: 'State Management',
      skills: [
        { name: 'Redux', level: 92 },
        { name: 'Zustand', level: 85 },
        { name: 'Context API', level: 88 },
      ],
    },
    {
      icon: '🔧',
      title: 'Backend & APIs',
      skills: [
        { name: 'Node.js', level: 78 },
        { name: 'SpringBoot', level: 90 },
        { name: 'REST APIs', level: 90 },
        { name: 'MySQL / MySQLi', level: 82 },
      ],
    },
    {
      icon: '🔥',
      title: 'Firebase & Cloud',
      skills: [
        { name: 'Firebase Auth', level: 90 },
        { name: 'Cloud Firestore', level: 88 },
        { name: 'Firebase Storage', level: 85 },
        { name: 'FCM Push', level: 82 },
      ],
    },
    {
      icon: '🚀',
      title: 'DevOps & CI/CD',
      skills: [
        { name: 'Codemagic', level: 82 },
        { name: 'Fastlane', level: 78 },
        { name: 'Git / GitHub', level: 90 },
        { name: 'App Store Connect', level: 85 },
      ],
    },
    {
      icon: '🏗️',
      title: 'Architecture',
      skills: [
        { name: 'Clean Architecture', level: 90 },
        { name: 'MVVM', level: 88 },
        { name: 'TDD', level: 72 },
        { name: 'Design Patterns', level: 85 },
      ],
    },
  ]

  const fullTechnologyStack = [
    'React',
    'React Native',
    'JavaScript',
    'Firebase',
    'Node.js',
    'MySQL',
    'Redux',
    'Zustand',
    'Fastlane',
    'Git',
    'REST APIs',
    'Cloudflare',
    'HTML',
    'CSS',
    'Clean Architecture',
    'MVVM',
    'CI/CD',
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

<section className="projects" id="projects" aria-labelledby="projects-title">
        <div className="projects-header">
          <p className="section-kicker">Projects</p>
          <h2 id="projects-title">Featured work.</h2>
        </div>

        <div className="projects-stats" aria-label="Projects metrics">
          <div className="project-stat">
            <strong>50+</strong>
            <span>Apps deployed</span>
          </div>
          <div className="project-stat">
            <strong>900K+</strong>
            <span>Combined downloads</span>
          </div>
          <div className="project-stat">
            <strong>4.5+</strong>
            <span>App store rating</span>
          </div>
          <div className="project-stat">
            <strong>99.5%</strong>
            <span>Crash-free rate</span>
          </div>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <button
                className={`project-trigger ${expandedProject === project.id ? 'is-active' : ''}`}
                onClick={() => setExpandedProject(expandedProject === project.id ? -1 : project.id)}
                aria-expanded={expandedProject === project.id}
                aria-controls={`project-details-${project.id}`}
              >
                <div className="project-header-content">
                  <div className="project-meta">
                    <span className="project-type">{project.type}</span>
                    <span className="project-date">{project.date}</span>
                  </div>
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-website">{project.website}</p>
                </div>
                <div className="project-toggle">
                  <span className="toggle-icon" aria-hidden="true">+</span>
                </div>
              </button>

              {expandedProject === project.id && (
                <div id={`project-details-${project.id}`} className="project-details">
                  <div className="project-details-content">
                    <div className="project-role">
                      <strong>Role</strong>
                      <p>{project.role}</p>
                    </div>
                    
                    <div className="project-description">
                      <p>{project.description}</p>
                    </div>

                    <div className="project-features">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="feature-item">
                          <span className="feature-icon">{feature.icon}</span>
                          <div className="feature-content">
                            <h4>{feature.title}</h4>
                            <p>{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="project-stack">
                      <strong>Stack</strong>
                      <div className="stack-tags">
                        {project.stack.map((tech, idx) => (
                          <span key={idx} className="stack-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="skills" id="skills" aria-labelledby="skills-title">
        <div className="skills-header">
          <p className="section-kicker">Skills</p>
          <h2 id="skills-title">Technologies I use.</h2>
          <p className="skills-summary">
            A focused toolkit for building mobile, web, backend, and cloud-connected products.
          </p>
        </div>

        <div className="skills-grid">
          {skillSections.map((section) => (
            <article className="skill-card" key={section.title}>
              <div className="skill-card-header">
                <span className="skill-icon" aria-hidden="true">{section.icon}</span>
                <h3>{section.title}</h3>
              </div>

              <div className="skill-items">
                {section.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-meta">
                      <span>{skill.name}</span>
                      <strong>{skill.level}%</strong>
                    </div>
                    <div className="skill-bar" aria-hidden="true">
                      <span style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="stack-showcase">
          <div className="stack-showcase-copy">
            <p className="section-kicker">Full Technology Stack</p>
            <h3>Tools and platforms I reach for across product builds.</h3>
          </div>
          <div className="stack-chip-list" aria-label="Full technology stack">
            {fullTechnologyStack.map((item) => (
              <span className="stack-chip" key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>
      
      <footer className='footer'>
      </footer>
    </main>

 
  )
}

export default App
