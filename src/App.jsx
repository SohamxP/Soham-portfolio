import { useEffect } from "react";

import {
  profile,
  education,
  experience,
  projects,
  skills,
} from "./data";

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="site">
      <Navbar />

      <section id="home" className="hero section">
        <div className="hero-left">
          <h1 className="hero-name">
            <span>Soham</span>
            <span>Panchal</span>
          </h1>

          <h2 className="hero-title">Software Developer</h2>

          <p className="hero-summary">
            Honors Computer Science student at UT Arlington building mobile
            apps, full-stack systems, and AI-powered tools using React Native,
            Node.js, Spring Boot, and SQL.
          </p>

          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              View Projects
            </a>

            <a className="btn secondary" href={`mailto:${profile.email}`}>
              Let&apos;s Talk
            </a>
          </div>

          <div className="hero-socials">
            <a href={profile.github} target="_blank" aria-label="GitHub">
              GH
            </a>
            <a href={profile.linkedin} target="_blank" aria-label="LinkedIn">
              IN
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              @
            </a>
          </div>
        </div>

        <div className="hero-right reveal">
          <div className="hero-photo-wrap">
            <img src="/profile.jpg" alt="Soham Panchal" />
          </div>

          <div className="hero-info-card">
            <div className="card-lines no-top-margin">
              <span>📍 {profile.location}</span>
              <span>✉️ {profile.email}</span>
              <span>📞 {profile.phone}</span>
            </div>
          </div>
        </div>
      </section>

    <section id="about" className="section grid-section">
      <div>
        <p className="label">About</p>
        <h2>
        I build mobile and full-stack apps with a focus on clean, practical
        execution.
        </h2>
      </div>

      <div className="content-card reveal">
      <p>
        I am an Honors Computer Science student at the University of Texas at
      Arlington, focused on building real software products instead of only
      classroom projects. I enjoy turning ideas into working apps with clean UI,
      reliable APIs, and organized data flow.
      </p>

      <p>
      My current work is centered around React Native, JavaScript, TypeScript,
      Spring Boot, REST APIs, and relational databases. I am especially
      interested in mobile app development, backend systems, and AI-assisted
      developer tools.
      </p>

      <div className="about-highlights">
        <span>Mobile-first development</span>
        <span>Backend API design</span>
        <span>AI-assisted tools</span>
      </div>
      </div>
    </section>

      <section id="experience" className="section">
        <div className="section-heading">
          <p className="label">Experience</p>
          <h2>Recent Work</h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-card reveal" key={item.title}>
              <div className="icon-box">💼</div>

              <div>
                <div className="row-between">
                  <h3>{item.title}</h3>
                  <span>{item.date}</span>
                </div>

                <p className="muted">
                  {item.company} · {item.location}
                </p>

                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-heading">
          <p className="label">Projects</p>
          <h2>Selected Builds</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.name}>
              <div className="project-top">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.subtitle}</p>
                </div>
                <span className="project-icon">{"</>"}</span>
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <p className="date">{project.date}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-heading">
          <p className="label">Skills</p>
          <h2>Technical Stack</h2>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-card reveal" key={category}>
              <h3>{category}</h3>
              <div className="skill-tags">
                {items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
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
            <div className="icon-box">🎓</div>

            <div>
              <div className="row-between">
                <h3>{item.school}</h3>
                <span>{item.date}</span>
              </div>
              <p>{item.degree}</p>
              <p className="muted">
                {item.details} · {item.location}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section id="contact" className="section contact">
        <p className="label">Contact</p>
        <h2>Want to build something?</h2>
        <p>
          I’m open to internships, software engineering opportunities, and
          project collaborations.
        </p>

        <div className="hero-actions center">
          <a className="btn primary" href={`mailto:${profile.email}`}>
            Email Me ✉️
          </a>

          <a className="btn secondary" href={profile.linkedin} target="_blank">
            LinkedIn ↗
          </a>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Soham Panchal. Built with React.</p>
      </footer>
    </main>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        SP
      </a>

      <nav>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default App;