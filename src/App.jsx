import { useEffect, useState } from "react";
import { education, experience, profile, projects, skills } from "./data";

const Icon = ({ name, size = 20 }) => {
  const paths = {
    github: (
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.14a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.95-2.35 4.82-4.58 5.08.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    ),
    linkedin: (
      <path d="M6.5 8.5H3.2V21h3.3V8.5ZM4.85 3A1.93 1.93 0 1 0 4.85 6.86 1.93 1.93 0 0 0 4.85 3ZM21 13.83c0-3.77-2.01-5.52-4.7-5.52-2.16 0-3.13 1.2-3.67 2.04V8.5H9.32V21h3.31v-6.19c0-1.63.31-3.21 2.31-3.21 1.97 0 2 1.86 2 3.32V21H21v-7.17Z" />
    ),
    mail: (
      <path d="M3 5h18v14H3V5Zm2 2v.3l7 5.1 7-5.1V7H5Zm14 10V9.76l-7 5.1-7-5.1V17h14Z" />
    ),
    briefcase: (
      <path d="M9 5V3h6v2h5a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5Zm2 0h2V4h-2v1Zm9 6H4v7h16v-7Zm0-4H4v2h16V7Z" />
    ),
    graduation: (
      <path d="m12 3 10 5-4 2v5.5c0 1.8-2.7 4.5-6 4.5s-6-2.7-6-4.5V10L2 8l10-5Zm0 2.24L6.48 8 12 10.76 17.52 8 12 5.24ZM8 11v4.5c0 .72 1.68 2.5 4 2.5s4-1.78 4-2.5V11l-4 2-4-2Z" />
    ),
    arrow: <path d="M7 17 17 7M9 7h8v8" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    file: (
      <path d="M6 2h8l4 4v16H6V2Zm8 2.5V8h3.5L14 4.5ZM8 11v2h8v-2H8Zm0 4v2h8v-2H8Z" />
    ),
  };

  const outlineIcons = ["arrow", "menu", "close"];
  const isOutlineIcon = outlineIcons.includes(name);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isOutlineIcon ? "none" : "currentColor"}
      stroke="currentColor"
      strokeWidth={isOutlineIcon ? 1.8 : 0}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        SP<span>.</span>
      </a>

      <button
        className="menu-button"
        type="button"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <Icon name={isOpen ? "close" : "menu"} size={24} />
      </button>

      <nav className={isOpen ? "nav-open" : ""}>
        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#experience" onClick={closeMenu}>
          Experience
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>
    </header>
  );
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="site">
      <Navbar />

      <section id="home" className="hero section">
        <div className="hero-left">
          <p className="eyebrow">Software Developer · Systems Thinker</p>

            <p className="hero-name">Hi, I'm Soham Panchal</p>

            <h1 className="hero-heading">
              I build software that works beyond the interface.
            </h1>

          <p className="hero-summary">
            I turn product requirements into reliable, production ready
            systems, working across application logic, backend services, APIs,
            and data to solve problems at their source.
          </p>

          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              Explore My Work
            </a>

            <a
              className="btn secondary"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="file" size={18} />
              View Resume
            </a>
          </div>

          <div className="hero-socials" aria-label="Social links">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Icon name="github" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Icon name="linkedin" />
            </a>

            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Icon name="mail" />
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-visual">
            <div className="hero-photo-wrap">
              <img src="/profile.jpg" alt="Soham Panchal" />
            </div>
          </div>

          <div className="hero-info-card">
            <p className="info-kicker">Based in</p>
            <strong>{profile.location}</strong>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>
      </section>

      <section id="about" className="section grid-section">
        <div className="about-heading">
          <p className="label">About</p>

          <h2>I care about how the entire system behaves.</h2>
        </div>

        <div className="content-card about-card reveal">
          <p className="about-lead">
            I’m a software developer who works across application layers—from
            user-facing product experiences and state management to backend
            services, APIs, and relational data.
          </p>

          <p>
            My strongest work begins where a simple implementation ends:
            understanding how information moves through a system, identifying
            the real source of failure, and building solutions that remain
            reliable as requirements and complexity grow.
          </p>

          <p>
            I approach software as a connected product rather than a collection
            of isolated screens or endpoints. That perspective helps me take
            ownership of complete workflows, make sound technical decisions,
            and deliver work that is easier to test, maintain, and extend.
          </p>

          <div className="about-strengths">
            <span>End-to-end ownership</span>
            <span>Backend and data systems</span>
            <span>Root-cause problem solving</span>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-heading">
          <p className="label">Experience</p>
          <h2>Professional Work</h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-card reveal" key={item.title}>
              <div className="icon-box">
                <Icon name="briefcase" />
              </div>

              <div className="timeline-content">
                <div className="row-between">
                  <div>
                    <h3>{item.title}</h3>

                    <p className="muted">
                      {item.company} · {item.location}
                    </p>
                  </div>

                  <span className="date-badge">{item.date}</span>
                </div>

                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="impact-block">
                  <span className="impact-label">Impact Areas</span>

                  <div className="impact-tags">
                    {item.impact.map((impact) => (
                      <span key={impact}>{impact}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-heading section-heading-row">
          <div>
            <p className="label">Projects</p>
            <h2>Selected Builds</h2>
          </div>

          <p className="section-note">
            Products designed around real workflows, maintainable systems, and
            practical engineering decisions.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card reveal ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.name}
            >
              <div className="project-top">
                <div>
                  <div className="project-status-row">
                    <span className="status-badge">{project.status}</span>
                    <span className="project-date">{project.date}</span>
                  </div>

                  <h3>{project.name}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
              </div>

              <p className="project-desc">{project.description}</p>

              {project.highlights ? (
                <div className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <div key={highlight.label}>
                      <span>{highlight.label}</span>
                      <p>{highlight.value}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}

              <div className="tech-list">
                {project.tech.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
                    <Icon name="arrow" size={17} />
                  </a>
                )}

                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo
                    <Icon name="arrow" size={17} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-heading section-heading-row">
          <div>
            <p className="label">Skills</p>
            <h2>Technical Foundation</h2>
          </div>

          <p className="section-note">
            A focused stack for building, integrating, testing, and shipping
            complete software systems.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group, index) => (
            <article className="skill-card reveal" key={group.category}>
              <span className="skill-number">0{index + 1}</span>

              <h3>{group.category}</h3>
              <p>{group.description}</p>

              <div className="skill-tags">
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <div className="section-heading">
          <p className="label">Education</p>
          <h2>Academic Background</h2>
        </div>

        {education.map((item) => (
          <article className="education-card reveal" key={item.school}>
            <div className="icon-box">
              <Icon name="graduation" />
            </div>

            <div className="education-content">
              <div className="row-between">
                <div>
                  <h3>{item.school}</h3>
                  <p>{item.degree}</p>

                  <p className="muted">
                    {item.details} · {item.location}
                  </p>
                </div>

                <span className="date-badge">{item.date}</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section id="contact" className="section contact reveal">
        <p className="label">Contact</p>

        <h2>Let’s build something that matters.</h2>

        <p>
          I’m open to software engineering internships, development
          opportunities, and ambitious technical projects.
        </p>

        <div className="hero-actions center">
          <a className="btn primary" href={`mailto:${profile.email}`}>
            Start a Conversation
          </a>

          <a
            className="btn secondary"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <Icon name="arrow" size={17} />
          </a>
        </div>
      </section>

      <footer>
        <p>
          © {new Date().getFullYear()} Soham Panchal. Designed and built with
          care.
        </p>
      </footer>
    </main>
  );
}

export default App;