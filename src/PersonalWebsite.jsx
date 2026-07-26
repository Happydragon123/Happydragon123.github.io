import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  ExternalLink,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Heart,
  Menu,
  X,
  MapPin,
} from "lucide-react";

/** Small inline brand icons — lucide-react dropped these as exports
 *  in newer versions, so they're defined directly here instead. */
function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.01 3.29 9.26 7.86 10.76.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.17 0 1.56-.01 2.82-.01 3.2 0 .32.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.28-5.23-11.52-11.5-11.52z" />
    </svg>
  );
}
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
    </svg>
  );
}

/**
 * ------------------------------------------------------------------
 *  EDIT ME: All your personal content lives in this one object.
 *  Fill in / duplicate the entries below — the layout will adapt
 *  automatically. Everything is clearly marked as placeholder text.
 * ------------------------------------------------------------------
 */
const SITE_DATA = {
  name: "Aaron Low",
  tagline: "Data Scientist / Software Engineer",
  location: "Dallas-Fort Worth",
  intro:
    "Hi! Thank you for visiting!",
  email: "azl.17c@gmail.com",
  social: {
    github: "https://github.com/Happydragon123",
    linkedin: "www.linkedin.com/in/aaronlow21",
  },

  about:
    "I'm a senior at the University of Houston, studying Computer Science with minors in Mathematics and Business Administration. I aspire to be a high level Data Scientist, but I enjoy software as well! My main interests lie in model development and machine learning. ",

  experience: [
    {
      role: "Data Science Engineer intern",
      org: "AT&T",
      dates: "June 2026 - Present",
      location: "Dallas, Texas",
      // Path or URL to a company logo, e.g. "/logos/acme.png" or an
      // imported asset. Leave as "" to show the placeholder icon.
      logo: "/images/at&t.png",
      bullets: [
        "Engineered structured prompts incorporating KPI context, site metadata, and historical parameter-change data to improve model reasoning on site diagnostics",
        "Fine-tuned Gemma 3n E4B using QLoRA on curated site-performance scenarios to generate parameter-change recommendations with explainable engineering reasoning, reducing reliance on costly third-party LLM APIs",
        "Validated fine-tuned model outputs using BLEU and ROUGE scores against reference engineering recommendations, quantifying improvements in generation quality and guiding iterative fine-tuning decisions",
      ],
    },
    {
      role: "Data & Analytics Intern",
      org: "Ally Financial",
      dates: "May 2025 - August 2025",
      location: "Lewisville, Texas",
      logo: "/images/ally.jpg",
      bullets: [
        "Analyzed auto loan collection call transcripts using Python Pandas, SQL, and Snowflake",
        "Utilized Transformers for Natural Language Processing to improve sentiment analysis of conversations",
        "Tuned a pretrained Transformers model to identify voicemails, improving the identification of voicemails by 25%",
        "Leveraged Large Language Models for topic analysis, enhancing customer targeting strategies, and improving consumer outreach",
      ],
    },
    // Add more roles by copying an object above.
  ],

  education: [
    {
      degree: "B.S., Computer Science, Minors in Mathematics and Business Administration",
      school: "University of Houston",
      dates: "2023 — 2027",
      location: "Houston, Texas",
      // Path or URL to a school crest/logo. Leave as "" for the placeholder.
      logo: "/images/houston.png",
      notes: "Relevant Coursework: Data Science I & II, Linear Algebra, Discrete Math, Statistics for Sciences, Data Science & Machine Learning, Natural Language Processing and LLMs, Data Structures & Algorithms, Database Systems",
      //"Honors: Dean’s Freshmen Excellence Award, Natural Sciences and Mathematics Dean’s Distinguished Scholars’ List",
    },
    // Add more schools/certifications by copying the object above.
  ],

  projects: [
    {
      name: "Accident Patterns in Texas Urban Areas",
      description:
        "One or two sentences on what this project does and why you built it.",
      tags: ["Python", "K-Means", "XGBoost", "LSTM"],
      link: "https://github.com/Happydragon123/COSC4337-Project/tree/main",
    },
    {
      name: "ShipNGo",
      description:
        "A full stack web application that mimics a post office database system, with full functionality for employees and customers in a real world context",
      tags: ["SQL", "Javascript", "HTML", "CSS"],
      link: "https://github.com/Happydragon123/ShipNGo",
    },
    {
      name: "This website",
      description: "A React web application!",
      tags: ["React"],
      link: "https://github.com/yourhandle/project-three",
    },
    // Add more projects by copying an object above.
  ],

  hobbies: [
    { label: "Basketball", note: "Love hooping" },
    { label: "Rubik's Cubes", note: "3x3 PR is 8.17 secs" },
    { label: "Milk Tea!", note: "Chagee > Nature Brew > Molly Tea" },
    { label: "Badminton", note: "Malaysia Boleh!" },
    // Add or remove entries freely — the grid reflows automatically.
  ],
};

/** Section order + labels for the nav / tabs. */
const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "hobbies", label: "Hobbies" },
  { id: "contact", label: "Contact" },
];
 
/**
 * Renders a company/school logo if a src is provided, otherwise a
 * dashed placeholder box so it's obvious where an image can go.
 */
function EntryLogo({ src, alt, fallbackIcon }) {
  if (src) {
    return <img className="entry-logo" src={src} alt={alt} />;
  }
  return (
    <div className="entry-logo entry-logo-placeholder" title="Add an image via the `logo` field in SITE_DATA">
      {fallbackIcon}
    </div>
  );
}
 
export default function PersonalWebsite() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRefs = useRef({});
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
 
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
 
    return () => observer.disconnect();
  }, []);
 
  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
 
  return (
    <div className="site-root">
      <style>{`
        .site-root {
          --ink: #f3f1f8;
          --ink-soft: #a9a4bd;
          --paper: #0a0a10;
          --paper-raised: #15141f;
          --line: #2c2a3c;
          --pine: #ff3ec9;
          --pine-soft: rgba(255, 62, 201, 0.14);
          --clay: #00e5ff;
          --clay-soft: rgba(0, 229, 255, 0.14);
          font-family: 'Inter', system-ui, sans-serif;
          background: var(--paper);
          background-image:
            radial-gradient(circle at 15% 10%, rgba(255, 62, 201, 0.10), transparent 40%),
            radial-gradient(circle at 85% 30%, rgba(0, 229, 255, 0.08), transparent 40%);
          color: var(--ink);
          min-height: 100vh;
          width: 100%;
        }
        .site-root * { box-sizing: border-box; }
        .font-display { font-family: 'Space Grotesk', 'Fraunces', Georgia, serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
 
        .layout {
          display: flex;
          min-height: 100vh;
          max-width: 1600px;
          margin: 0 auto;
        }
 
        /* ---------- Sidebar / tabs ---------- */
        .sidebar {
          width: 260px;
          flex-shrink: 0;
          padding: 48px 0 48px 32px;
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .sidebar-name {
          font-size: 26px;
          line-height: 1.15;
          margin: 0 0 6px 0;
        }
        .sidebar-tagline {
          font-size: 13px;
          color: var(--ink-soft);
          margin: 0 0 4px 0;
        }
        .sidebar-location {
          font-size: 12px;
          color: var(--ink-soft);
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 32px;
        }
 
        .tabs {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-bottom: auto;
        }
        .tab {
          display: flex;
          align-items: center;
          gap: 10px;
          text-align: left;
          background: transparent;
          border: none;
          border-left: 2px solid var(--line);
          padding: 9px 14px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12.5px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: var(--ink-soft);
          cursor: pointer;
          transition: all 0.18s ease;
          border-radius: 0 4px 4px 0;
        }
        .tab:hover {
          background: var(--paper-raised);
          color: var(--ink);
        }
        .tab.active {
          border-left: 2px solid var(--pine);
          background: var(--pine-soft);
          color: var(--pine);
          font-weight: 600;
          transform: translateX(4px);
          box-shadow: 0 0 16px rgba(255, 62, 201, 0.25);
        }
 
        .sidebar-footer {
          display: flex;
          gap: 14px;
          padding-top: 24px;
        }
        .icon-link {
          color: var(--ink-soft);
          transition: color 0.15s ease;
        }
        .icon-link:hover { color: var(--pine); }
 
        /* ---------- Mobile top bar ---------- */
        .mobile-bar {
          display: none;
          position: sticky;
          top: 0;
          z-index: 20;
          background: var(--paper);
          border-bottom: 1px solid var(--line);
          padding: 14px 20px;
          align-items: center;
          justify-content: space-between;
        }
        .mobile-menu-btn {
          background: none;
          border: 1px solid var(--line);
          border-radius: 6px;
          padding: 6px;
          color: var(--ink);
          cursor: pointer;
        }
        .mobile-drawer {
          display: none;
          flex-direction: column;
          background: var(--paper-raised);
          border-bottom: 1px solid var(--line);
        }
        .mobile-drawer.open { display: flex; }
        .mobile-drawer .tab { border-radius: 0; border-left: none; border-bottom: 1px solid var(--line); padding: 14px 20px; }
        .mobile-drawer .tab.active { transform: none; border-left: 3px solid var(--pine); }
 
        /* ---------- Main content ---------- */
        .main {
          flex: 1;
          min-width: 0;
          padding: 64px 40px 120px 48px;
          border-left: 1px solid var(--line);
        }
 
        .hero h1 {
          font-size: 46px;
          line-height: 1.05;
          margin: 0 0 14px 0;
          max-width: 620px;
          text-shadow: 0 0 30px rgba(255, 62, 201, 0.25);
        }
        .hero p {
          font-size: 16px;
          color: var(--ink-soft);
          max-width: 520px;
          line-height: 1.6;
        }
        .hero-actions { display: flex; gap: 12px; margin-top: 28px; }
        .btn {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12.5px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          padding: 11px 18px;
          border-radius: 6px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          border: 1px solid var(--ink);
          transition: all 0.15s ease;
        }
        .btn-solid { background: var(--pine); color: #fff; border-color: var(--pine); }
        .btn-solid:hover { background: var(--clay); border-color: var(--clay); box-shadow: 0 0 24px rgba(0, 229, 255, 0.4); }
        .btn-outline { background: transparent; color: var(--ink); border-color: var(--line); }
        .btn-outline:hover { background: var(--paper-raised); border-color: var(--pine); color: var(--pine); }
 
        section.block { padding-top: 88px; scroll-margin-top: 24px; }
        .eyebrow {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--clay);
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }
        .eyebrow::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--line);
        }
        h2.section-title {
          font-size: 28px;
          margin: 0 0 24px 0;
        }
 
        .about-text { max-width: 640px; font-size: 16px; line-height: 1.75; color: var(--ink-soft); }
 
        .entry {
          padding: 20px 0;
          border-bottom: 1px solid var(--line);
          display: grid;
          grid-template-columns: 150px 1fr;
          gap: 24px;
        }
        .entry:last-child { border-bottom: none; }
        .entry-meta {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: var(--ink-soft);
          padding-top: 3px;
        }
        .entry-role { font-size: 17px; font-weight: 600; margin: 0 0 2px 0; }
        .entry-org { font-size: 14px; color: var(--pine); margin: 0 0 10px 0; font-weight: 500; }
        .entry ul { margin: 0; padding-left: 18px; color: var(--ink-soft); font-size: 14.5px; line-height: 1.7; }
        .entry-notes { font-size: 13.5px; color: var(--ink-soft); margin-top: 6px; }
 
        .entry-header { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 10px; }
        .entry-logo {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          object-fit: cover;
          flex-shrink: 0;
          background: var(--paper);
        }
        .entry-logo-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px dashed var(--line);
          color: var(--ink-soft);
        }
        .entry-header-text { flex: 1; min-width: 0; }
        .entry-header-text .entry-role { margin-bottom: 0; }
        .entry-header-text .entry-org { margin-bottom: 0; }
 
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 16px;
        }
        .project-card {
          background: var(--paper-raised);
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: transform 0.15s ease, border-color 0.15s ease;
        }
        .project-card:hover { transform: translateY(-3px); border-color: var(--pine); box-shadow: 0 0 24px rgba(255, 62, 201, 0.18); }
        .project-card h3 { margin: 0; font-size: 16px; display: flex; justify-content: space-between; align-items: center; }
        .project-card p { margin: 0; font-size: 13.5px; color: var(--ink-soft); line-height: 1.6; flex: 1; }
        .tag-row { display: flex; flex-wrap: wrap; gap: 6px; }
        .tag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10.5px;
          text-transform: uppercase;
          background: var(--clay-soft);
          color: var(--clay);
          padding: 3px 8px;
          border-radius: 999px;
        }
 
        .hobby-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 14px;
        }
        .hobby-card {
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 16px;
          background: var(--paper-raised);
        }
        .hobby-card .label { font-weight: 600; font-size: 14.5px; display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
        .hobby-card .note { font-size: 12.5px; color: var(--ink-soft); }
 
        .contact-box {
          background: linear-gradient(135deg, #ff3ec9 0%, #7b2ff7 50%, #00e5ff 100%);
          color: #0a0a10;
          border-radius: 14px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
          box-shadow: 0 0 60px rgba(255, 62, 201, 0.2);
        }
        .contact-box h2 { margin: 0; font-size: 26px; color: #0a0a10; }
        .contact-box p { margin: 0; color: rgba(10, 10, 16, 0.75); max-width: 440px; font-size: 14.5px; }
        .contact-box .btn-solid { background: #0a0a10; color: #fff; border-color: #0a0a10; }
        .contact-box .btn-solid:hover { background: #1a1a24; box-shadow: none; }
 
        footer.site-footer {
          margin-top: 60px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11.5px;
          color: var(--ink-soft);
          display: flex;
          justify-content: space-between;
        }
 
        @media (max-width: 860px) {
          .sidebar { display: none; }
          .mobile-bar { display: flex; }
          .main { padding: 32px 20px 100px 20px; border-left: none; }
          .hero h1 { font-size: 34px; }
          .entry { grid-template-columns: 1fr; gap: 6px; }
        }
      `}</style>
 
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
 
      {/* Mobile top bar */}
      <div className="mobile-bar">
        <span className="font-display" style={{ fontSize: 18 }}>
          {SITE_DATA.name}
        </span>
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            className={`tab ${active === s.id ? "active" : ""} font-mono`}
            onClick={() => scrollTo(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>
 
      <div className="layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div>
            <h1 className="sidebar-name font-display">{SITE_DATA.name}</h1>
            <p className="sidebar-tagline">{SITE_DATA.tagline}</p>
            <p className="sidebar-location">
              <MapPin size={12} /> {SITE_DATA.location}
            </p>
          </div>
 
          <nav className="tabs">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                className={`tab ${active === s.id ? "active" : ""}`}
                onClick={() => scrollTo(s.id)}
              >
                {s.label}
              </button>
            ))}
          </nav>
 
          <div className="sidebar-footer">
            <a
              className="icon-link"
              href={SITE_DATA.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              className="icon-link"
              href={SITE_DATA.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              className="icon-link"
              href={`mailto:${SITE_DATA.email}`}
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </aside>
 
        {/* Main content */}
        <main className="main">
          {/* Hero */}
          <div className="hero" id="top">
            <h1 className="font-display">{SITE_DATA.intro}</h1>
            <div className="hero-actions">
              <button className="btn btn-solid" onClick={() => scrollTo("projects")}>
                View Projects
              </button>
              <button className="btn btn-outline" onClick={() => scrollTo("contact")}>
                Get in Touch
              </button>
            </div>
          </div>
 
          {/* About */}
          <section
            id="about"
            className="block"
            ref={(el) => (sectionRefs.current.about = el)}
          >
            <div className="eyebrow">About</div>
            <h2 className="section-title font-display">Who I am</h2>
            <p className="about-text">{SITE_DATA.about}</p>
          </section>
 
          {/* Experience */}
          <section
            id="experience"
            className="block"
            ref={(el) => (sectionRefs.current.experience = el)}
          >
            <div className="eyebrow">
              <Briefcase size={13} /> Experience
            </div>
            <h2 className="section-title font-display">Where I've worked</h2>
            {SITE_DATA.experience.map((job, i) => (
              <div className="entry" key={i}>
                <div className="entry-meta">
                  {job.dates}
                  <br />
                  {job.location}
                </div>
                <div>
                  <div className="entry-header">
                    <EntryLogo
                      src={job.logo}
                      alt={`${job.org} logo`}
                      fallbackIcon={<Briefcase size={18} />}
                    />
                    <div className="entry-header-text">
                      <p className="entry-role">{job.role}</p>
                      <p className="entry-org">{job.org}</p>
                    </div>
                  </div>
                  <ul>
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>
 
          {/* Education */}
          <section
            id="education"
            className="block"
            ref={(el) => (sectionRefs.current.education = el)}
          >
            <div className="eyebrow">
              <GraduationCap size={13} /> Education
            </div>
            <h2 className="section-title font-display">Where I studied</h2>
            {SITE_DATA.education.map((ed, i) => (
              <div className="entry" key={i}>
                <div className="entry-meta">
                  {ed.dates}
                  <br />
                  {ed.location}
                </div>
                <div>
                  <div className="entry-header">
                    <EntryLogo
                      src={ed.logo}
                      alt={`${ed.school} logo`}
                      fallbackIcon={<GraduationCap size={18} />}
                    />
                    <div className="entry-header-text">
                      <p className="entry-role">{ed.degree}</p>
                      <p className="entry-org">{ed.school}</p>
                    </div>
                  </div>
                  {ed.notes && <p className="entry-notes">{ed.notes}</p>}
                </div>
              </div>
            ))}
          </section>
 
          {/* Projects */}
          <section
            id="projects"
            className="block"
            ref={(el) => (sectionRefs.current.projects = el)}
          >
            <div className="eyebrow">
              <FolderGit2 size={13} /> Projects
            </div>
            <h2 className="section-title font-display">What I've built</h2>
            <div className="project-grid">
              {SITE_DATA.projects.map((p, i) => (
                <a
                  className="project-card"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  key={i}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <h3>
                    {p.name}
                    <ExternalLink size={14} style={{ opacity: 0.5 }} />
                  </h3>
                  <p>{p.description}</p>
                  <div className="tag-row">
                    {p.tags.map((t, j) => (
                      <span className="tag" key={j}>
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>
 
          {/* Hobbies */}
          <section
            id="hobbies"
            className="block"
            ref={(el) => (sectionRefs.current.hobbies = el)}
          >
            <div className="eyebrow">
              <Heart size={13} /> Outside of work
            </div>
            <h2 className="section-title font-display">Hobbies &amp; interests</h2>
            <div className="hobby-grid">
              {SITE_DATA.hobbies.map((h, i) => (
                <div className="hobby-card" key={i}>
                  <div className="label">{h.label}</div>
                  <div className="note">{h.note}</div>
                </div>
              ))}
            </div>
          </section>
 
          {/* Contact */}
          <section
            id="contact"
            className="block"
            ref={(el) => (sectionRefs.current.contact = el)}
          >
            <div className="eyebrow">Contact</div>
            <div className="contact-box">
              <h2 className="font-display">Let's talk</h2>
              <p>
                Have a role, project, or just want to say hi? My inbox is open —
                I try to reply to everyone.
              </p>
              <a className="btn btn-solid" href={`mailto:${SITE_DATA.email}`}>
                <Mail size={14} /> {SITE_DATA.email}
              </a>
            </div>
            <footer className="site-footer">
              <span>© {new Date().getFullYear()} {SITE_DATA.name}</span>
              <span>Built with React</span>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}