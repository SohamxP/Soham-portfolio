import {
  profile,
  education,
  experience,
  projects,
  skills,
} from "./data";

function App() {
  return (
    <main className="site">
      <Navbar />

      <section id="home" className="hero section">
        <div className="hero-left">
          <p className="eyebrow">✦ Available for internships and software projects</p>

          <h1>
            Building mobile apps, backend systems, and AI-powered products.
          </h1>

          <p className="hero-text">{profile.intro}</p>

          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              View Projects ↗
            </a>

            <a className="btn secondary" href={profile.resume} target="_blank">
              Resume ↓
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="avatar">
            <span>SP</span>
          </div>

          <h2>{profile.name}</h2>
          <p>{profile.role}</p>

          <div className="card-lines">
            <span>📍 {profile.location}</span>
            <span>✉️ {profile.email}</span>
            <span>📞 {profile.phone}</span>
          </div>

          <div className="socials">
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
      </section>

      <section id="about" className="section grid-section">
        <div>
          <p className="label">About</p>
          <h2>Software student focused on practical, shipped work.</h2>
        </div>

        <div className="content-card">
          <p>
            I am an Honors Computer Science student at the University of Texas
            at Arlington with experience building mobile apps, backend APIs,
            AI-powered tools, and database-backed systems.
          </p>

          <p>
            My strongest areas are React Native, full-stack JavaScript,
            REST APIs, relational databases, and backend architecture. I like
            projects where the frontend, backend, and data layer work together
            cleanly.
          </p>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-heading">
          <p className="label">Experience</p>
          <h2>Recent Work</h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-card" key={item.title}>
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
            <article className="project-card" key={project.name}>
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
            <div className="skill-card" key={category}>
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
          <article className="education-card" key={item.school}>
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
        Soham<span>.</span>
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