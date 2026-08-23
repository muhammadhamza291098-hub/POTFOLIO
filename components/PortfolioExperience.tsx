"use client";

/* Project assets are pre-sized WebP files served directly by the Site. */
/* eslint-disable @next/next/no-img-element */

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleDot,
  Command,
  Mail,
  ScanLine,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { projects, skillClusters } from "../data/portfolio";

const LivingNetworkScene = dynamic(() => import("./LivingNetworkScene"), {
  ssr: false,
  loading: () => <div className="scene-loading">CALIBRATING NETWORK...</div>,
});

const stageCopy = ["SYSTEM", "ARCHITECTURE", "CODE", "NETWORK", "EVIDENCE"];
const mobileSignalEndpoints = [
  [16, 30],
  [84, 31],
  [15, 72],
  [85, 71],
  [50, 86],
  [34, 88],
  [70, 15],
] as const;
const assetPath = (path: string) => `/POTFOLIO${path}`;

export default function PortfolioExperience() {
  const prefersReducedMotion = useReducedMotion();
  const [entered, setEntered] = useState(false);
  const [activeId, setActiveId] = useState(projects[0].id);
  const [mode, setMode] = useState<"scan" | "deep">("scan");
  const [menuOpen, setMenuOpen] = useState(false);
  const [motionEnabledOverride, setMotionEnabledOverride] = useState<boolean | null>(null);
  const networkMotionEnabled = motionEnabledOverride ?? !Boolean(prefersReducedMotion);
  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeId) ?? projects[0],
    [activeId],
  );
  const activeProjectIndex = projects.findIndex((project) => project.id === activeId);

  useEffect(() => {
    if (!entered) return;
    document.documentElement.style.scrollBehavior = prefersReducedMotion ? "auto" : "smooth";
  }, [entered, prefersReducedMotion]);

  const enter = () => {
    setEntered(true);
    window.setTimeout(() => document.querySelector("#network")?.scrollIntoView(), 100);
  };

  const openEvidence = (projectId: string) => {
    const isHiddenInScan = !projects.slice(0, 4).some((project) => project.id === projectId);
    if (mode === "scan" && isHiddenInScan) setMode("deep");
    window.setTimeout(
      () => document.getElementById(projectId)?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" }),
      isHiddenInScan ? 80 : 0,
    );
  };

  const selectNextProject = () => {
    const nextIndex = (activeProjectIndex + 1) % projects.length;
    setActiveId(projects[nextIndex].id);
  };

  return (
    <main className={networkMotionEnabled ? "force-motion" : "motion-paused"}>
      <AnimatePresence>
        {!entered && (
          <motion.section
            className="portal"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.025, filter: "blur(10px)" }}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="portal-aurora" />
            <div className="portal-grid" />
            <div className="portal-top mono">
              <span><CircleDot size={12} /> NOTTINGHAM / UK</span>
              <span>PORTFOLIO SYSTEM 2026</span>
            </div>
            <div className="portal-identity">
              <div className="portrait-frame">
                <div className="portrait-orbit orbit-one" />
                <div className="portrait-orbit orbit-two" />
                <div className="portrait-shell">
                  <img
                    className="portrait-photo"
                    src={assetPath("/profile-hamza.webp")}
                    alt="Muhammad Hamza"
                    width="900"
                    height="1200"
                    fetchPriority="high"
                  />
                </div>
                <div className="identity-tag mono">HUMAN CORE / 001</div>
              </div>
              <div className="portal-copy">
                <p className="eyebrow">MUHAMMAD HAMZA — CYBER SECURITY</p>
                <h1>I don&apos;t collect skills.<br /><em>I connect systems.</em></h1>
                <p className="portal-summary">
                  Cyber security student building across packet analysis, resilient networks,
                  threat intelligence and AI infrastructure.
                </p>
                <button className="enter-button" onClick={enter}>
                  <span>ENTER THE NETWORK</span>
                  <span className="button-orb"><ArrowDown size={18} /></span>
                </button>
                <div className="portal-facts mono">
                  <span>NTU / BSc (Hons)</span>
                  <span>GRADUATING 2027</span>
                  <span>OPEN TO PLACEMENTS</span>
                </div>
              </div>
            </div>
            <div className="portal-side mono">SCROLL IS LOCKED / ENTER TO EXPLORE</div>
          </motion.section>
        )}
      </AnimatePresence>

      <header className="site-header">
        <a className="identity-dock" href="#network" aria-label="Back to network">
          <span className="dock-avatar"><img src={assetPath("/profile-hamza.webp")} alt="" /></span>
          <span><strong>MUHAMMAD HAMZA</strong><small>CYBER SECURITY / NTU</small></span>
        </a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>WORK</a>
          <a href="#proof" onClick={() => setMenuOpen(false)}>PROOF</a>
          <a href="#journey" onClick={() => setMenuOpen(false)}>JOURNEY</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
          <div className="mobile-mode-switch" aria-label="Portfolio viewing mode">
            <button
              className={mode === "scan" ? "active" : ""}
              aria-pressed={mode === "scan"}
              onClick={() => { setMode("scan"); setMenuOpen(false); }}
            >90 SEC</button>
            <button
              className={mode === "deep" ? "active" : ""}
              aria-pressed={mode === "deep"}
              onClick={() => { setMode("deep"); setMenuOpen(false); }}
            >DEEP</button>
          </div>
        </nav>
        <div className="mode-switch" aria-label="Portfolio viewing mode">
          <button className={mode === "scan" ? "active" : ""} aria-pressed={mode === "scan"} onClick={() => setMode("scan")}>90 SEC</button>
          <button className={mode === "deep" ? "active" : ""} aria-pressed={mode === "deep"} onClick={() => setMode("deep")}>DEEP</button>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={20} /> : <Command size={20} />}
        </button>
      </header>

      <section id="network" className="network-hero">
        <div className="scene-wrap" aria-hidden="true">
          <LivingNetworkScene activeId={activeId} onSelect={setActiveId} reducedMotion={!networkMotionEnabled} />
        </div>
        <div className="mobile-network-controls" role="group" aria-label="Interactive project network">
          <svg
            className="mobile-signal-overlay"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <filter id="mobile-signal-glow" x="-200%" y="-200%" width="500%" height="500%">
                <feGaussianBlur stdDeviation="1.1" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {projects.map((project, index) => {
              const [endX, endY] = mobileSignalEndpoints[index];
              const signalPath = `M 50 50 L ${endX} ${endY}`;
              const isActive = activeId === project.id;
              return (
                <g key={`mobile-signal-${project.id}`}>
                  <path
                    d={signalPath}
                    fill="none"
                    stroke={project.color}
                    strokeWidth={isActive ? 0.5 : 0.24}
                    opacity={isActive ? 0.68 : 0.23}
                  />
                  {networkMotionEnabled && (
                    <>
                      <circle r={isActive ? 1.05 : 0.72} fill={project.color} filter="url(#mobile-signal-glow)">
                        <animateMotion
                          dur={`${isActive ? 2.1 : 3.15 + index * 0.08}s`}
                          begin={`${index * -0.38}s`}
                          repeatCount="indefinite"
                          path={signalPath}
                        />
                      </circle>
                      <circle r={isActive ? 0.72 : 0.48} fill={project.color} opacity={isActive ? 0.9 : 0.68}>
                        <animateMotion
                          dur={`${isActive ? 2.1 : 3.15 + index * 0.08}s`}
                          begin={`${index * -0.38 - 1.25}s`}
                          repeatCount="indefinite"
                          path={signalPath}
                        />
                      </circle>
                    </>
                  )}
                </g>
              );
            })}
          </svg>
          <button
            type="button"
            className="mobile-core-trigger"
            style={{ "--project-color": activeProject.color } as React.CSSProperties}
            onClick={selectNextProject}
            aria-label={`Show next project. Currently selected: ${activeProject.title}`}
          >
            <span className="sr-only">Show next project</span>
          </button>
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className={`mobile-project-node mobile-project-node-${index + 1}${activeId === project.id ? " active" : ""}`}
              style={{ "--node-color": project.color } as React.CSSProperties}
              onClick={() => setActiveId(project.id)}
              aria-label={`Select project ${index + 1}: ${project.title}`}
              aria-pressed={activeId === project.id}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
        <div className="hero-scanline" />
        <button
          type="button"
          className="motion-control mono"
          aria-pressed={networkMotionEnabled}
          onClick={() => setMotionEnabledOverride(!networkMotionEnabled)}
        >
          <Sparkles size={12} /> {networkMotionEnabled ? "PAUSE MOTION" : "START MOTION"}
        </button>
        <div className="network-heading">
          <p className="eyebrow"><ScanLine size={14} /> THE LIVING NETWORK</p>
          <h2>Explore what I build<br />by following the signal.</h2>
        </div>
        <div className="node-index mono">
          {projects.map((project) => (
            <button
              key={project.id}
              className={activeId === project.id ? "active" : ""}
              onClick={() => setActiveId(project.id)}
              style={{ "--node-color": project.color } as React.CSSProperties}
            >
              <span>{project.index}</span>{project.shortTitle}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.aside
            key={activeProject.id}
            className="node-panel"
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.35 }}
            style={{ "--project-color": activeProject.color } as React.CSSProperties}
          >
            <div className="panel-top mono">
              <span>{activeProject.category}</span>
              <span className={`status status-${activeProject.status.toLowerCase().replace(" ", "-")}`}>{activeProject.status}</span>
            </div>
            <p className="project-number">/{activeProject.index}</p>
            <h3>{activeProject.title}</h3>
            <p>{activeProject.statement}</p>
            <button className="open-evidence" onClick={() => openEvidence(activeProject.id)}>
              OPEN EVIDENCE <ArrowDown size={14} />
            </button>
          </motion.aside>
        </AnimatePresence>
        <div className="hero-instruction mono"><span /> SELECT A NODE / DRAG THE FIELD</div>
      </section>

      <section className="signal-strip" aria-label="Design process">
        {stageCopy.map((stage, index) => (
          <span key={stage}><small>0{index + 1}</small>{stage}{index < stageCopy.length - 1 && <ChevronRight size={15} />}</span>
        ))}
      </section>

      <section id="work" className="work-section content-shell">
        <div className="section-intro">
          <div>
            <p className="eyebrow">SELECTED SYSTEMS / REAL EVIDENCE</p>
            <h2>Skills are claims.<br /><em>Projects are proof.</em></h2>
          </div>
          <p>Each system below connects the technology I used to the engineering decision it supported. No percentage bars. No invented metrics.</p>
        </div>

        <div className="project-stack">
          {projects.slice(0, mode === "scan" ? 4 : projects.length).map((project, index) => (
            <article
              id={project.id}
              key={project.id}
              className="project-card"
              style={{ "--project-color": project.color } as React.CSSProperties}
              onMouseEnter={() => setActiveId(project.id)}
            >
              <div className="project-visual">
                <img
                  className={`project-image ${project.imageFit === "contain" ? "contain" : "cover"}`}
                  src={assetPath(project.image)}
                  alt={project.imageAlt}
                  width="1672"
                  height="941"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
                <div className="project-image-scrim" />
                <span className="visual-index mono">/{project.index}</span>
                <span className="visual-kind mono">{project.visualLabel}</span>
                <div className="visual-label mono">PROJECT EVIDENCE / {project.shortTitle.toUpperCase()}</div>
              </div>
              <div className="project-body">
                <div className="card-meta mono"><span>{project.category}</span><span>{project.status}</span></div>
                <h3>{project.title}</h3>
                <p className="project-statement">{project.statement}</p>
                <div className="evidence-list">
                  {project.evidence.map((item) => <span key={item}><Check size={14} />{item}</span>)}
                </div>
                {mode === "deep" && (
                  <div className="deep-evidence">
                    <p className="role-note"><strong>MY ROLE</strong>{project.role}</p>
                    <div className="academic-context">
                      <strong>PROJECT CONTEXT</strong>
                      <span>{project.context}</span>
                      <em>{project.outcome}</em>
                    </div>
                    <div className="feedback-note">
                      <strong>{project.feedbackLabel}</strong>
                      <p>{project.feedback}</p>
                    </div>
                  </div>
                )}
                <div className="tool-row">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="proof" className="proof-section">
        <div className="content-shell">
          <div className="section-intro compact">
            <div><p className="eyebrow">CAPABILITY MATRIX</p><h2>Every tool has a trail.</h2></div>
            <p>Each capability cluster points directly to the project evidence behind it.</p>
          </div>
          <div className="skill-grid">
            {skillClusters.map((cluster, index) => (
              <article key={cluster.title} style={{ "--cluster-color": cluster.color } as React.CSSProperties}>
                <div className="cluster-index mono">0{index + 1} / 04</div>
                <h3>{cluster.title}</h3>
                <div className="cluster-skills">{cluster.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                <p><Sparkles size={14} /> PROVEN IN: {cluster.proof}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="journey-section content-shell">
        <div className="journey-copy">
          <p className="eyebrow">CURRENT COORDINATES</p>
          <h2>Learning security by building the systems beneath it.</h2>
          <p>
            I&apos;m a BSc (Hons) Cyber Security student at Nottingham Trent University,
            graduating in 2027. I&apos;m most interested in the point where networks,
            infrastructure, AI and defensive security meet.
          </p>
          <div className="interest-row">
            <span>AI infrastructure security</span><span>Network defence</span><span>Incident response</span><span>Critical infrastructure</span>
          </div>
        </div>
        <div className="journey-map">
          <div className="timeline-line" />
          <div className="journey-node past"><i /><small>2024</small><strong>ENTERED CYBER SECURITY</strong><span>NTU / Nottingham</span></div>
          <div className="journey-node present"><i /><small>NOW</small><strong>BUILDING + TESTING</strong><span>Projects / Home lab / AI systems</span></div>
          <div className="journey-node future"><i /><small>2027</small><strong>GRADUATE ENGINEER</strong><span>Security / Infrastructure / AI</span></div>
        </div>
      </section>

      <section className="future-section">
        <div className="future-glow" />
        <div className="content-shell future-inner">
          <div>
            <p className="eyebrow">FUTURE ORBIT / CLEARLY LABELLED</p>
            <h2>Ideas I&apos;m moving toward.</h2>
          </div>
          <div className="future-cards">
            <article><span className="mono">CONCEPT 01</span><h3>AI Security Validation Lab</h3><p>A future defensive platform for testing AI-assisted detection, triage and authorised security workflows.</p></article>
            <article><span className="mono">RESEARCH 02</span><h3>Drone Response Intelligence</h3><p>A research direction exploring how aerial sensing could support lawful emergency and security response.</p></article>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section content-shell">
        <div className="contact-orb"><img src={assetPath("/profile-hamza.webp")} alt="" /></div>
        <p className="eyebrow">END OF MAP / START OF CONVERSATION</p>
        <h2>Need someone who sees<br /><em>the whole system?</em></h2>
        <p>I&apos;m looking for opportunities across cyber security, secure infrastructure, networks and AI systems.</p>
        <div className="contact-actions">
          <a href="mailto:muhammadhamza291098@gmail.com">
            <Mail size={17} /> MUHAMMADHAMZA291098@GMAIL.COM <ArrowUpRight size={15} />
          </a>
          <a href="https://www.linkedin.com/in/mhd-hamza29" target="_blank" rel="noreferrer">
            <UserRound size={17} /> LINKEDIN / MHD-HAMZA29 <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="footer-line mono"><span>DESIGNED AS A LIVING SYSTEM</span><span>© 2026 MUHAMMAD HAMZA</span></div>
      </section>
    </main>
  );
}
