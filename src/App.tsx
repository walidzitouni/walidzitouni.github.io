import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  FileSearch,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Star,
  TerminalSquare,
  X,
} from 'lucide-react'
import './App.css'

const GITHUB_URL = 'https://github.com/walidzitouni'
const LINKEDIN_URL = 'https://www.linkedin.com/in/walid-zitouni-634809299/'
const EMAIL = 'zitouni-walid@outlook.fr'
const CV_URL = `${import.meta.env.BASE_URL}CV__ZITOUNI_Walid.pdf`

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
]

const projects = [
  {
    name: 'Link Dumper',
    description: 'A multithreaded web crawler for reconnaissance that extracts URLs, JavaScript files, API keys, and version data.',
    tags: ['Python', 'Web Security', 'Recon'],
    url: `${GITHUB_URL}/Link_dumper`,
    icon: ScanSearch,
    meta: '58 GitHub stars',
    featured: true,
  },
  {
    name: 'Email Security Analyzer',
    description: 'A full-stack platform for detecting spam, phishing, and malware, with SPF, DKIM, and DMARC verification.',
    tags: ['TypeScript', 'React', 'AI'],
    url: `${GITHUB_URL}/Email-Security-Analyzer`,
    icon: Mail,
    meta: 'Full-stack security',
  },
  {
    name: 'CTF Writeups',
    description: 'A dedicated space for practical capture-the-flag writeups, security notes, and lessons learned from challenges.',
    tags: ['Astro', 'CTF', 'Writeups'],
    url: `${GITHUB_URL}/CTFWriteups`,
    icon: BookOpen,
    meta: 'Offensive security',
  },
  {
    name: 'Fast LinkedIn Jobs',
    description: 'A local job-search assistant that tracks new public listings in SQLite and generates formatted Excel reports.',
    tags: ['Python', 'Streamlit', 'SQLite'],
    url: `${GITHUB_URL}/Fast-Linkedin-jobs`,
    icon: FileSearch,
    meta: 'Automation tool',
  },
]

const experience = [
  {
    company: 'Holcim Maroc',
    role: 'IT Infrastructure Security Intern',
    period: 'Jul — Aug 2026',
    location: 'Casablanca, Morocco',
    points: [
      'Hardened enterprise Active Directory with GPOs, RBAC, and privileged-account reviews.',
      'Centralized authentication for 200+ accounts through a SAML / SSO identity federation.',
      'Reduced lateral-movement exposure with VLAN segmentation, firewalling, and WAF controls.',
    ],
    stack: ['Active Directory', 'SAML 2.0', 'VLAN', 'WAF', 'PowerShell'],
  },
  {
    company: 'Domaines Zniber',
    role: 'Cybersecurity & Networks Intern',
    period: 'Jul — Aug 2025',
    location: 'Meknès, Morocco',
    points: [
      'Built a hardened Active Directory lab in VMware to simulate intrusions and validate detection.',
      'Administered Sophos XG filtering, SSL/TLS inspection, and network-flow monitoring.',
      'Tested domain resilience against Kerberoasting, AS-REP Roasting, and Sliver C2 scenarios.',
    ],
    stack: ['Sophos XG', 'VMware', 'Impacket', 'Kerberos', 'Sliver C2'],
  },
]

const education = [
  {
    school: 'Polytech Nancy',
    degree: 'Engineering Degree — IA2R, SIR pathway',
    period: '2026 — 2028',
    location: 'Université de Lorraine · Nancy, France',
    description: 'Computer science, networks and systems, with a focus on distributed algorithms, cryptography, cybersecurity, and information systems.',
    tags: ['Networks', 'Cybersecurity', 'Distributed Systems'],
  },
  {
    school: 'ENSA Oujda',
    degree: 'State Engineering Degree — Cybersecurity',
    period: '2024 — 2028',
    location: 'Oujda, Morocco',
    description: 'Offensive and defensive security spanning pentesting, cryptography, system hardening, network security, and governance.',
    tags: ['Pentesting', 'Cryptography', 'Hardening'],
  },
  {
    school: 'ENSA Oujda',
    degree: 'Integrated Preparatory Classes',
    period: '2022 — 2024',
    location: 'Oujda, Morocco',
    description: 'Intensive scientific foundations in mathematics, physics, algorithms, and telecommunications.',
    tags: ['Mathematics', 'Algorithms', 'Physics'],
  },
]

const skills = [
  {
    title: 'Offensive security',
    icon: TerminalSquare,
    items: ['Web & network pentesting', 'Active Directory attacks', 'Reverse engineering', 'Fuzzing', 'C2'],
  },
  {
    title: 'Defensive security',
    icon: ShieldCheck,
    items: ['AD hardening', 'SSO / SAML', 'VLAN segmentation', 'Firewall / WAF', 'VPN IPSec'],
  },
  {
    title: 'Tools & systems',
    icon: Network,
    items: ['Burp Suite', 'Nmap', 'Wireshark', 'Ghidra', 'Linux & Windows Server'],
  },
  {
    title: 'Development',
    icon: Code2,
    items: ['Python', 'Bash / PowerShell', 'C / Java', 'Git / Docker', 'LLM orchestration'],
  },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-shell">
        <a className="brand" href="#top" aria-label="Walid Zitouni, back to top" onClick={() => setOpen(false)}>
          <span className="brand-mark">WZ</span>
          <span className="brand-name">walid<span>.dev</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
        <button className="menu-button" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<ChevronRight size={18} /></a>)}
          <a href="#contact" onClick={() => setOpen(false)}>Contact<ChevronRight size={18} /></a>
        </nav>
      )}
    </header>
  )
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow"><span />{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section className="hero" id="top">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="availability"><span className="status-dot" /> Open to 2027 internship opportunities</div>
              <p className="hero-intro">Hey, I’m Walid <span aria-hidden="true">👋</span></p>
              <h1>Cybersecurity<br /><span>engineering student.</span></h1>
              <p className="hero-summary">I build security tools, explore systems from an attacker’s perspective, and design infrastructure that is harder to compromise.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my work <ArrowDown size={17} /></a>
                <a className="button button-secondary" href={CV_URL} download>Download CV <Download size={16} /></a>
              </div>
              <div className="hero-meta">
                <span><MapPin size={15} /> Nancy, France</span>
                <span className="meta-divider" />
                <a href={GITHUB_URL} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
              </div>
            </div>
            <div className="terminal-wrap" aria-label="Profile summary">
              <div className="terminal-card">
                <div className="terminal-top">
                  <div className="terminal-dots"><i /><i /><i /></div>
                  <span>walid@security: ~</span>
                  <TerminalSquare size={15} />
                </div>
                <div className="terminal-body">
                  <p><span className="prompt">❯</span> whoami</p>
                  <p className="terminal-output">walid-zitouni</p>
                  <p><span className="prompt">❯</span> cat focus.txt</p>
                  <p className="terminal-output">offensive_security<br />secure_infrastructure<br />networks_&_systems</p>
                  <p><span className="prompt">❯</span> status --current</p>
                  <p className="terminal-success"><Check size={14} /> Engineering student @ Polytech Nancy</p>
                  <p className="terminal-success"><Check size={14} /> CTF player & challenge creator</p>
                  <p className="terminal-command"><span className="prompt">❯</span> <span className="cursor" /></p>
                </div>
              </div>
              <div className="floating-badge badge-top"><ShieldCheck size={17} /> Security first</div>
              <div className="floating-badge badge-bottom"><Award size={17} /> CyberDrill winner</div>
            </div>
          </div>
          <div className="container hero-foot">
            <span>SCROLL TO DISCOVER</span><div className="scroll-line" />
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container about-grid">
            <div>
              <p className="eyebrow"><span />A little about me</p>
              <h2>Curious by nature.<br />Security by choice.</h2>
            </div>
            <div className="about-copy">
              <p>I’m an engineering student at <strong>Polytech Nancy</strong>, following the IA2R program’s Information Systems & Networks pathway, with a cybersecurity background from <strong>ENSA Oujda</strong>.</p>
              <p>I enjoy the space between offensive security and infrastructure: understanding how systems fail, then applying those lessons to make them more resilient. Outside coursework, I take part in CTFs and build practical security tools.</p>
              <div className="language-row"><span>French · Fluent</span><span>English · Professional</span><span>Arabic · Native</span></div>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <SectionHeading eyebrow="Selected work" title="Things I’ve built." description="A selection of public projects focused on security, automation, and practical problem-solving." />
            <div className="projects-grid">
              {projects.map((project, index) => {
                const Icon = project.icon
                return (
                  <a className="project-card" href={project.url} target="_blank" rel="noreferrer" key={project.name}>
                    <div className="project-top">
                      <div className="project-icon"><Icon size={23} /></div>
                      <div className="project-number">0{index + 1}</div>
                      <ArrowUpRight className="project-arrow" size={21} />
                    </div>
                    <div className="project-content">
                      <p className="project-meta">{project.featured && <Star size={12} fill="currentColor" />}{project.meta}</p>
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                    </div>
                    <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </a>
                )
              })}
            </div>
            <a className="text-link all-projects" href={GITHUB_URL} target="_blank" rel="noreferrer">See more on GitHub <ArrowRight size={17} /></a>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container">
            <SectionHeading eyebrow="Professional experience" title="Where I’ve worked." />
            <div className="timeline">
              {experience.map((job) => (
                <article className="timeline-item" key={job.company}>
                  <div className="timeline-marker"><BriefcaseBusiness size={18} /></div>
                  <div className="timeline-period">{job.period}</div>
                  <div className="timeline-content">
                    <div className="job-heading"><div><h3>{job.role}</h3><p>{job.company} <span>·</span> {job.location}</p></div></div>
                    <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
                    <div className="tag-list">{job.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="container">
            <SectionHeading eyebrow="Education" title="Learning, continuously." description="An engineering education bridging cybersecurity, networks, systems, and computer science." />
            <div className="education-list">
              {education.map((item) => (
                <article className="education-card" key={`${item.school}-${item.period}`}>
                  <div className="education-icon"><GraduationCap size={23} /></div>
                  <div className="education-main">
                    <p className="education-period">{item.period}</p>
                    <h3>{item.school}</h3>
                    <h4>{item.degree}</h4>
                    <p className="education-location">{item.location}</p>
                    <p className="education-description">{item.description}</p>
                    <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <SectionHeading eyebrow="Technical toolkit" title="What I work with." />
            <div className="skills-grid">
              {skills.map((skill) => {
                const Icon = skill.icon
                return <article className="skill-card" key={skill.title}><Icon size={22} /><h3>{skill.title}</h3><ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul></article>
              })}
            </div>
            <div className="distinctions">
              <div className="distinction-title"><Sparkles size={19} /><span>Beyond the classroom</span></div>
              <div className="distinction-item"><Award size={21} /><div><strong>1st place — CyberDrill CTF</strong><span>2nd edition · $1,500 prize</span></div></div>
              <div className="distinction-item"><Award size={21} /><div><strong>Top 10 worldwide — CyberDune</strong><span>Early 2026 CTF ranking</span></div></div>
              <div className="distinction-item"><ShieldCheck size={21} /><div><strong>CTF challenge creator</strong><span>Defensys · Pentest, crypto & CTFd infrastructure</span></div></div>
            </div>
            <div className="certifications"><span>Certifications</span><p>CRTA — Certified Red Team Analyst</p><i /><p>Jr Penetration Tester — TryHackMe</p><i /><p>SQLi Attacks — EC-Council</p></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <p className="eyebrow"><span />Get in touch</p>
            <h2>Let’s build something<br /><em>secure.</em></h2>
            <p>I’m always happy to talk about cybersecurity, interesting projects, or internship opportunities starting in 2027.</p>
            <a className="button button-primary contact-button" href={`mailto:${EMAIL}`}>Say hello <Mail size={17} /></a>
            <a className="email-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer-inner">
          <div><span className="brand-mark">WZ</span><p>Designed & built by Walid Zitouni</p></div>
          <p>© {new Date().getFullYear()} · Nancy, France</p>
          <div className="social-links">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
            <a href={`mailto:${EMAIL}`} aria-label="Email"><Mail size={19} /></a>
            <a href={CV_URL} download aria-label="Download CV"><ExternalLink size={18} /></a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
