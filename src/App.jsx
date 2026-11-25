import { useEffect, useRef, useState } from 'react';
import { about, aiTools, education, experience, profile, projects, stack } from './data';
import GitHubContributions from './GitHubContributions';

function Icon({ name, size = 16, ...props }) {
  const paths = {
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></>,
    moon: <path d="M20.9 13A9 9 0 0 1 11 3.1a9 9 0 1 0 9.9 9.9Z"/>,
    github: <><path d="M9 19c-4 1.3-4-2-5.5-2.5M15 22v-3.3a2.9 2.9 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 18.4 7a4.3 4.3 0 0 0-.1-3.5s-1 0-3.5 1.8a12 12 0 0 0-6.6 0C5.7 3.5 4.7 3.5 4.7 3.5A4.3 4.3 0 0 0 4.6 7a4.7 4.7 0 0 0-1.3 3.4c0 4.7 2.8 5.7 5.5 6A2.9 2.9 0 0 0 8 18.7V22"/></>,
    linkedin: <><rect x="3" y="8" width="4" height="13" rx=".5"/><path d="M5 3v.1M11 21V8h4v2a4 4 0 0 1 7 2.6V21h-4v-8a2 2 0 0 0-4 0v8Z"/></>,
    mail: <><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 6 9 7 9-7"/></>,
    map: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.4"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></>,
    arrow: <><path d="M5 19 19 5M9 5h10v10"/></>,
    chevron: <path d="m6 9 6 6 6-6"/>,
    close: <path d="M5 5 19 19M19 5 5 19"/>,
    file: <><path d="M7 2h7l5 5v15H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/><path d="M14 2v6h5M9 12h6M9 16h6"/></>,
    terminal: <><rect x="2" y="3" width="20" height="18" rx="2"/><path d="m6 8 4 4-4 4M12 16h6"/></>,
    up: <path d="m6 14 6-6 6 6"/>,
    award: <><circle cx="12" cy="8" r="5"/><path d="m8.5 12-2 9 5.5-3 5.5 3-2-9"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    demo: <><rect x="2.5" y="3.5" width="19" height="14" rx="2"/><path d="M8 21h8m-4-3.5V21m-2-13 5 3-5 3V8Z"/></>,
  };
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}

function ExternalLink({ href, children, className = '' }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
}

function Section({ id, title, count, children }) {
  return <section className="section" id={id}>
    <h2 className="section-title">{title}{count != null && <span className="count">({count})</span>}</h2>
    {children}
  </section>;
}

function EducationRecognition({ recognition }) {
  const dialogRef = useRef(null);

  return <div className="education-recognition">
    <span className="recognition-label">Recognition</span>
    <div className="recognition-row">
      <span className="recognition-icon"><Icon name="award" size={19}/></span>
      <div className="recognition-content">
        <h4>{recognition.title}</h4>
        <p className="recognition-meta">{recognition.issuer} · {recognition.period}</p>
        <p className="recognition-description">{recognition.description}</p>
        <button type="button" className="certificate-link" onClick={() => dialogRef.current?.showModal()}>
          <Icon name="file" size={14}/> View Certificate <Icon name="arrow" size={12}/>
        </button>
      </div>
    </div>
    <dialog ref={dialogRef} className="certificate-dialog" aria-labelledby="certificate-title"
      onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
      <div className="certificate-dialog-inner">
        <div className="certificate-dialog-header">
          <h3 id="certificate-title">{recognition.title}</h3>
          <button type="button" className="certificate-close" aria-label="Close certificate" onClick={() => dialogRef.current?.close()}>
            <Icon name="close" size={20}/>
          </button>
        </div>
        <img className="certificate-image" src={recognition.certificate} alt="UTA Learning Resource Center Tutor of the Month, Tutor Choice certificate for Soham Panchal, October/November 2026, awarded November 20, 2026" loading="lazy"/>
      </div>
    </dialog>
  </div>;
}

function Tags({ items }) {
  return <div className="tags">{items.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>;
}


const internshipIcons = {
  'REST APIs': <><path d="m7 7-4 5 4 5M17 7l4 5-4 5M14 4 10 20"/></>,
  SQL: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></>,
  Authentication: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3M12 14v3"/></>,
  Testing: <><path d="m5 12 4 4L19 6"/><path d="M12 2a10 10 0 1 0 10 10"/></>,
  Backend: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M7 6h.01M11 6h.01M8 14l-2 2 2 2M16 14l2 2-2 2"/></>,
};

function InternshipStack({ items }) {
  return <div className="internship-stack" aria-label="Internship work areas">{items.map(item => <span className="internship-chip" key={item}><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{internshipIcons[item]}</svg>{item}</span>)}</div>;
}

function StackTile({ item }) {
  const [imageFailed, setImageFailed] = useState(false);
  return <div className="stack-tile" tabIndex={0} role="img" aria-label={item.name} data-label={item.name}>
    {imageFailed ? <span className="stack-fallback" aria-hidden="true">{item.name === 'Codex' ? '✳' : item.name.slice(0, 2)}</span> : <img className={item.invert ? 'stack-invert' : ''} src={item.src || 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/' + item.icon} alt="" loading="lazy" onError={() => setImageFailed(true)}/>}
  </div>;
}

function OrganizationLogo({ name, initials, src, school = false }) {
  const [failed, setFailed] = useState(false);
  return <span className={`organization-logo ${school ? 'school-logo' : ''}`}>
    {src && !failed ? <img src={src} alt="" loading="lazy" decoding="async" onError={() => setFailed(true)}/> : <span aria-label={`${name} initials`}>{initials}</span>}
  </span>;
}

function Toolbar({ theme, setTheme, openSearch }) {
  return <nav className="toolbar" aria-label="Portfolio controls">
    <button type="button" className="search-trigger" onClick={openSearch} aria-label="Search portfolio (Command K)">
      <Icon name="search" size={16}/><span>Search...</span><kbd>⌘ K</kbd>
    </button>
    <div className="toolbar-right">
      <ExternalLink href={profile.github} className="toolbar-icon" ><Icon name="github" size={17}/><span className="sr-only">GitHub</span></ExternalLink>
      <span className="toolbar-separator"/>
      <button type="button" className="toolbar-icon" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} title="Toggle color theme">
        <Icon name={theme === 'light' ? 'moon' : 'sun'} size={17}/>
      </button>
    </div>
  </nav>;
}

const searchItems = [
  { name: 'Overview', hint: 'Introduction and contact', url: '#overview' },
  { name: 'About', hint: 'Background and interests', url: '#about' },
  { name: 'GitHub Contributions', hint: 'My activity on GitHub', url: '#contributions' },
  { name: 'Stack', hint: 'Technologies I work with', url: '#stack' },
  { name: 'Experience', hint: 'E-Sutra Technologies', url: '#experience' },
  { name: 'Education', hint: 'University of Texas at Arlington', url: '#education' },
  { name: 'Projects', hint: 'Selected work', url: '#projects' },
  ...projects.map(p => ({ name: p.name, hint: p.subtitle, url: `#${p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}` })),
  { name: 'View Resume', hint: 'Open PDF', url: profile.resume, external: true },
  { name: 'Email Me', hint: profile.email, url: `mailto:${profile.email}`, external: true },
];

function CommandPalette({ onClose }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);
  const filtered = searchItems.filter(i => `${i.name} ${i.hint}`.toLowerCase().includes(query.toLowerCase()));
  useEffect(() => { inputRef.current?.focus(); document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = ''; }; }, []);
  function activate(item) {
    if (!item) return;
    onClose();
    if (item.external) window.open(item.url, item.url.startsWith('mailto:') ? '_self' : '_blank', 'noopener,noreferrer');
    else { window.location.hash = item.url; }
  }
  return <div className="dialog-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="command-dialog" role="dialog" aria-modal="true" aria-label="Search portfolio">
      <div className="command-search"><Icon name="search" size={20}/><input ref={inputRef} value={query} onChange={e => {setQuery(e.target.value); setSelected(0);}} onKeyDown={e => {if(e.key === 'ArrowDown'){e.preventDefault();setSelected(v=>Math.min(v+1,filtered.length-1));}if(e.key === 'ArrowUp'){e.preventDefault();setSelected(v=>Math.max(0,v-1));}if(e.key === 'Enter') activate(filtered[selected]);if(e.key === 'Escape') onClose();}} placeholder="Search for a command..." aria-label="Search commands"/><button type="button" onClick={onClose} aria-label="Close search"><Icon name="close" size={17}/></button></div>
      <div className="command-results"><p className="command-label">Jump to</p>{filtered.length ? filtered.map((item, i) => <button type="button" key={item.name} className={`command-item ${i === selected ? 'selected' : ''}`} onMouseEnter={()=>setSelected(i)} onClick={()=>activate(item)}><Icon name={item.external ? 'arrow' : 'terminal'} size={16}/><span><strong>{item.name}</strong><small>{item.hint}</small></span><span className="command-action">↵</span></button>) : <p className="no-results">No matches found.</p>}</div>
      <div className="command-footer">Navigate with ↑ ↓ <span>↵ Select</span><span>Esc Close</span></div>
    </div>
  </div>;
}

function App() {
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('portfolio-theme') || 'light'; } catch { return 'light'; } });
  const [searchOpen, setSearchOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(true);
  const [expandedProjects, setExpandedProjects] = useState(() => new Set([projects[0]?.name]));
  const [expandedExperience, setExpandedExperience] = useState(() => new Set([experience[0]?.company]));
  function toggleEntry(name, kind) {
    const change = previous => { const next = new Set(previous); if (next.has(name)) next.delete(name); else next.add(name); return next; };
    if (kind === 'project') setExpandedProjects(change); else setExpandedExperience(change);
  }
  const [copied, setCopied] = useState(false);
  useEffect(() => { document.documentElement.dataset.theme = theme; try { localStorage.setItem('portfolio-theme', theme); } catch { /* storage optional */ } }, [theme]);
  useEffect(() => { const handler = e => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {e.preventDefault(); setSearchOpen(s => !s);} if (e.key === 'Escape') setSearchOpen(false); }; window.addEventListener('keydown', handler); return () => window.removeEventListener('keydown', handler); }, []);
  const localTime = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit', hour12: false, timeZoneName: 'short' }).format(new Date());
  async function copyEmail() { try { await navigator.clipboard.writeText(profile.email); setCopied(true); window.setTimeout(() => setCopied(false), 1600); } catch { window.location.href = `mailto:${profile.email}`; } }
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 2);

  return <div className="page-shell">
    <Toolbar theme={theme} setTheme={setTheme} openSearch={() => setSearchOpen(true)}/>
    <main>
      <header className="intro" id="overview">
        <div className="intro-copy"><p className="identity-label">Hello, I'm</p><h1>{profile.name}</h1><p className="tagline">{profile.tagline}</p><p className="identity-role">{profile.headline}</p></div>
        <img className="avatar" src="/profile.jpg" loading="eager" decoding="async" fetchPriority="high" alt="Portrait of Soham Panchal" width="102" height="102" />
      </header>

      <Section title="Overview">
        <div className="overview-card">
          <div className="overview-roles"><div className="overview-row"><span className="overview-icon"><Icon name="terminal" size={17}/></span><span>Former Software Developer Intern <span className="subtle">@ E-Sutra Technologies</span></span></div><div className="overview-row"><span className="overview-icon"><Icon name="file" size={17}/></span><span>Computer Science · Mathematics Minor <span className="subtle">@ UT Arlington</span></span></div></div>
          <div className="overview-details"><div><Icon name="map" size={15}/><span>{profile.location}</span></div><div><Icon name="clock" size={15}/><span>{localTime}</span></div><div><Icon name="mail" size={15}/><button type="button" className="inline-button" onClick={copyEmail}>{copied ? 'Email copied!' : profile.email} {copied && <Icon name="check" size={14}/>}</button></div><div><Icon name="file" size={15}/><ExternalLink href={profile.resume}>View resume <Icon name="arrow" size={13}/></ExternalLink></div></div>
        </div>
      </Section>

      <Section title="Social Links"><div className="socials"><ExternalLink href={profile.github} className="social-link"><Icon name="github" size={17}/>GitHub <Icon name="arrow" size={13}/></ExternalLink><ExternalLink href={profile.linkedin} className="social-link"><Icon name="linkedin" size={17}/>LinkedIn <Icon name="arrow" size={13}/></ExternalLink><a className="social-link" href={`mailto:${profile.email}`}><Icon name="mail" size={17}/>Email <Icon name="arrow" size={13}/></a><ExternalLink href={profile.resume} className="social-link"><Icon name="file" size={17}/>Resume <Icon name="arrow" size={13}/></ExternalLink></div></Section>

      <Section title="About" id="about"><ul className="about-list">{about.map(item => <li key={item}>{item}</li>)}</ul></Section>

      <Section title="GitHub Contributions" id="contributions"><GitHubContributions/></Section>

      <Section title="Stack" id="stack"><div className="stack-grid">{stack.map(item => <StackTile item={item} key={item.name}/>)}</div><h3 className="stack-subheading">AI Tools</h3><div className="stack-grid stack-tools-grid">{aiTools.map(item => <StackTile item={item} key={item.name}/>)}</div></Section>

      <Section title="Experience" id="experience">{experience.map(job => {
        const expanded = expandedExperience.has(job.company);
        const panelId = 'experience-' + job.company.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return <article className="entry" key={job.company}>
          <button type="button" className="entry-toggle entry-top" aria-expanded={expanded} aria-controls={panelId} onClick={() => toggleEntry(job.company, 'experience')}>
            <OrganizationLogo name={job.company} initials={job.initials} src={job.logo}/>
            <span className="entry-heading"><span className="entry-company">{job.company}</span><span className="entry-subtitle">{job.title}</span></span>
            <span className="entry-period-summary">{job.period}</span>
            <Icon className={'expand-chevron ' + (expanded ? 'is-expanded' : '')} name="chevron" size={17}/>
          </button>
          <div id={panelId} hidden={!expanded} className="entry-expandable">
            <div className="facts"><div><span>Employment Type</span><strong>{job.type}</strong></div><div><span>Employment Period</span><strong>{job.period}</strong></div><div><span>Duration</span><strong>{job.duration}</strong></div></div>
            <ul className="detail-list">{job.points.map(point => <li key={point}>{point}</li>)}</ul>
            <InternshipStack items={job.tags}/>
          </div>
        </article>;
      })}</Section>

      <Section title="Education" id="education"><article className="entry"><div className="entry-top"><OrganizationLogo name={education.school} initials={education.initials} src={education.logo} school/><div className="entry-heading"><h3>{education.school}</h3><p>{education.degree}</p></div></div><div className="facts"><div><span>Period</span><strong>{education.period}</strong></div><div><span>Location</span><strong>{education.location}</strong></div></div><ul className="detail-list">{education.details.map(point => <li key={point}>{point}</li>)}</ul><div className="coursework"><h4>Relevant Coursework</h4><Tags items={education.coursework}/></div><EducationRecognition recognition={education.recognition}/></article></Section>

      <Section title="Projects" count={projects.length} id="projects"><div className="projects-list">{visibleProjects.map((project, i) => {
        const expanded = expandedProjects.has(project.name);
        const slug = project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return <article className="entry project-entry" id={slug} key={project.name}>
          <div className="project-header">
            <button type="button" className="project-toggle" aria-expanded={expanded} aria-controls={`${slug}-details`} onClick={() => toggleEntry(project.name, 'project')}>
              <span><span className="project-title-row"><span className="project-heading">{project.name}</span></span><span className="project-subtitle">{project.subtitle}</span></span>
              <span className="project-header-right"><span className="project-index">0{i+1} / 0{projects.length}</span><Icon className={`expand-chevron ${expanded ? 'is-expanded' : ''}`} name="chevron" size={17}/></span>
            </button>
            {project.demo ? <ExternalLink href={project.demo} className="project-demo-link"><Icon name="demo" size={14}/> Live Demo <Icon name="arrow" size={12}/></ExternalLink> : <span className="project-demo-unavailable" title="No public live demo is available" aria-label="Live Demo unavailable"><Icon name="demo" size={14}/> Live Demo</span>}
          </div>
          <div className="entry-expandable" id={slug + '-details'} hidden={!expanded}>
            <div className="facts project-facts"><div><span>Period</span><strong>{project.period}</strong></div><div><span>Links</span><div className="project-links">{project.github && <ExternalLink href={project.github}><Icon name="github" size={14}/> GitHub <Icon name="arrow" size={12}/></ExternalLink>}{!project.github && !project.demo && <strong className="muted-strong">Code not public</strong>}</div></div></div>
            <p className="project-description">{project.description}</p><ul className="detail-list">{project.points.map(point => <li key={point}>{point}</li>)}</ul><Tags items={project.tags}/>
          </div>
        </article>;
      })}</div>{projects.length > 2 && <button type="button" className="show-more" onClick={() => setShowAllProjects(s => !s)}>{showAllProjects ? 'Show fewer projects' : 'Show all ' + projects.length + ' projects'}<Icon name="chevron" size={16} style={{ transform: showAllProjects ? 'rotate(180deg)' : 'none' }}/></button>}</Section>

      <footer className="footer"><div><p>Built by <strong>Soham Panchal</strong>.</p><p className="footer-note">React, a little CSS, and a lot of iteration.</p></div><div className="footer-actions"><a href={`mailto:${profile.email}`}>Email</a><ExternalLink href={profile.github}>GitHub</ExternalLink><ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink><button type="button" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} title="Scroll to top" aria-label="Scroll to top"><Icon name="up" size={18}/></button></div></footer>
    </main>
    {searchOpen && <CommandPalette onClose={() => setSearchOpen(false)}/>}
  </div>;
}
export default App;