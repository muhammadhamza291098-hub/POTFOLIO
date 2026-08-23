"use client";

/* Project assets are pre-sized WebP files served directly by the Site. */
/* eslint-disable @next/next/no-img-element */

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
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
import { capabilityModules, projects } from "../data/portfolio";

const LivingNetworkScene = dynamic(() => import("./LivingNetworkScene"), {
  ssr: false,
  loading: () => <div className="scene-loading">CALIBRATING NETWORK...</div>,
});

const assetPath = (path: string) => `/POTFOLIO${path}`;

export default function PortfolioExperience() {
  const prefersReducedMotion = useReducedMotion();
  const [entered, setEntered] = useState(false);
  const [activeId, setActiveId] = useState(projects[0].id);
  const [mode, setMode] = useState<"scan" | "deep">("scan");
  const [menuOpen, setMenuOpen] = useState(false);
  const [networkMotionEnabled, setNetworkMotionEnabled] = useState(true);
  const [activeCapabilityId, setActiveCapabilityId] = useState(
    () => capabilityModules.find((capability) => capability.proofProjectId === projects[0].id)?.id ?? capabilityModules[0].id,
  );
  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeId) ?? projects[0],
    [activeId],
  );
  const activeProjectIndex = projects.findIndex((project) => project.id === activeId);
  const visibleProjects = mode === "scan" ? projects.slice(0, 4) : projects;
  const activeProcess = [...activeProject.flow, "EVIDENCE"];
  const activeCapability = useMemo(
    () => capabilityModules.find((capability) => capability.id === activeCapabilityId) ?? capabilityModules[0],
    [activeCapabilityId],
  );
  const relatedCapability = useMemo(
    () => capabilityModules.find((capability) => capability.proofProjectId === activeProject.id) ?? capabilityModules[0],
    [activeProject.id],
  );

  useEffect(() => {
    if (!entered) return;
    document.documentElement.style.scrollBehavior = prefersReducedMotion ? "auto" : "smooth";
  }, [entered, prefersReducedMotion]);

  const enter = () => {
    setEntered(true);
    window.setTimeout(() => document.querySelector("#network")?.scrollIntoView(), 100);
  };

  const selectProject = (projectId: string) => {
    const capability = capabilityModules.find((item) => item.proofProjectId === projectId);
    setActiveId(projectId);
    if (capability) setActiveCapabilityId(capability.id);
  };

  const selectCapability = (capabilityId: string) => {
    const capability = capabilityModules.find((item) => item.id === capabilityId);
    setActiveCapabilityId(capabilityId);
    if (capability) setActiveId(capability.proofProjectId);
  };

  const openEvidence = (projectId: string, syncCapability = true) => {
    const isHiddenInScan = !projects.slice(0, 4).some((project) => project.id === projectId);
    if (mode === "scan" && isHiddenInScan) setMode("deep");
    if (syncCapability) selectProject(projectId);
    else setActiveId(projectId);
    window.setTimeout(
      () => document.getElementById("work")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" }),
      isHiddenInScan ? 80 : 0,
    );
  };

  const selectNextProject = () => {
    const nextIndex = (activeProjectIndex + 1) % projects.length;
    selectProject(projects[nextIndex].id);
  };

  const cycleObservatory = (direction: -1 | 1) => {
    const currentIndex = visibleProjects.findIndex((project) => project.id === activeId);
    const safeIndex = currentIndex < 0 ? 0 : currentIndex;
    const nextIndex = (safeIndex + direction + visibleProjects.length) % visibleProjects.length;
    selectProject(visibleProjects[nextIndex].id);
  };

  const changeMode = (nextMode: "scan" | "deep") => {
    if (nextMode === "scan" && !projects.slice(0, 4).some((project) => project.id === activeId)) {
      selectProject(projects[0].id);
    }
    setMode(nextMode);
  };

  const openCapabilityProof = () => {
    openEvidence(activeCapability.proofProjectId, false);
  };

  const openRelatedCapability = () => {
    selectCapability(relatedCapability.id);
    window.setTimeout(
      () => document.getElementById("proof")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" }),
      0,
    );
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
                <h1>Building my skills through<br /><em>real systems, practical problems<br />and continuous learning.</em></h1>
                <p className="portal-summary">
                  Cyber security student learning through packet analysis, resilient networks,
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
              onClick={() => { changeMode("scan"); setMenuOpen(false); }}
            >90 SEC</button>
            <button
              className={mode === "deep" ? "active" : ""}
              aria-pressed={mode === "deep"}
              onClick={() => { changeMode("deep"); setMenuOpen(false); }}
            >DEEP</button>
          </div>
        </nav>
        <div className="mode-switch" aria-label="Portfolio viewing mode">
          <button className={mode === "scan" ? "active" : ""} aria-pressed={mode === "scan"} onClick={() => changeMode("scan")}>90 SEC</button>
          <button className={mode === "deep" ? "active" : ""} aria-pressed={mode === "deep"} onClick={() => changeMode("deep")}>DEEP</button>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={20} /> : <Command size={20} />}
        </button>
      </header>

      <section id="network" className="network-hero">
        <div className="scene-wrap" aria-hidden="true">
          <LivingNetworkScene activeId={activeId} onSelect={selectProject} reducedMotion={!networkMotionEnabled} />
        </div>
        <div className="mobile-network-controls" role="group" aria-label="Interactive project network">
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
              style={{ "--node-color": project.color, "--node-weight": project.networkWeight } as React.CSSProperties}
              onClick={() => selectProject(project.id)}
              aria-label={`Select project ${index + 1}: ${project.title}`}
              aria-pressed={activeId === project.id}
            >
              <span>{project.networkLabel}</span>
            </button>
          ))}
        </div>
        <div className="hero-scanline" />
        <button
          type="button"
          className="motion-control mono"
          aria-pressed={networkMotionEnabled}
          onClick={() => setNetworkMotionEnabled((enabled) => !enabled)}
        >
          <Sparkles size={12} /> {networkMotionEnabled ? "PAUSE MOTION" : "START MOTION"}
        </button>
        <div className="network-heading">
          <p className="eyebrow"><ScanLine size={14} /> THE LIVING NETWORK</p>
          <h2>Explore what I&apos;m learning<br />by building real systems.</h2>
        </div>
        <div className="node-index mono">
          {projects.map((project) => (
            <button
              key={project.id}
              className={activeId === project.id ? "active" : ""}
              onClick={() => selectProject(project.id)}
              style={{ "--node-color": project.color, "--node-weight": project.networkWeight } as React.CSSProperties}
            >
              <span>{project.index}</span>{project.networkLabel}
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
            <div className="node-learning-map mono">
              <span><small>MY ROLE</small>{activeProject.role}</span>
              <span><small>LEARNING</small>{activeProject.learning}</span>
            </div>
            <button className="open-evidence" onClick={() => openEvidence(activeProject.id)}>
              OPEN EVIDENCE <ArrowDown size={14} />
            </button>
          </motion.aside>
        </AnimatePresence>
        <div className="hero-instruction mono"><span /> PLANET SCALE = OWNERSHIP + TECHNICAL DEPTH</div>
      </section>

      <section className="signal-strip" aria-label={`${activeProject.title} process`} style={{ "--project-color": activeProject.color } as React.CSSProperties}>
        <strong className="signal-context mono">{activeProject.networkLabel}</strong>
        {activeProcess.map((stage, index) => (
          <span key={stage}><small>0{index + 1}</small>{stage}{index < activeProcess.length - 1 && <ChevronRight size={15} />}</span>
        ))}
      </section>

      <section id="work" className="work-section content-shell">
        <div className="section-intro observatory-intro">
          <div>
            <p className="eyebrow"><CircleDot size={13} /> TECHNICAL WORK / PROJECT EVIDENCE</p>
            <h2>Seven projects.<br /><em>Different dimensions of my development.</em></h2>
          </div>
          <p>Together, these projects show how my learning has developed across software, networks, security analysis, infrastructure, AI, embedded systems and governance.</p>
        </div>

        <div className="project-observatory" style={{ "--project-color": activeProject.color } as React.CSSProperties}>
          <div className="observatory-status mono">
            <span><i /> FIELD ONLINE</span>
            <span>ACTIVE PROJECT {activeProject.index} / {String(projects.length).padStart(2, "0")}</span>
          </div>

          <div className="observatory-nav" role="group" aria-label="Select a project">
            {visibleProjects.map((project) => (
              <button
                type="button"
                key={project.id}
                className={activeProject.id === project.id ? "active" : ""}
                style={{ "--orbit-color": project.color } as React.CSSProperties}
                onClick={() => selectProject(project.id)}
                aria-pressed={activeProject.id === project.id}
              >
                <i aria-hidden="true" />
                <span className="mono">{project.index}</span>
                <strong>{project.networkLabel}</strong>
              </button>
            ))}
          </div>

          <div className="observatory-body">
            <AnimatePresence mode="wait">
              <motion.div
                key={`stage-${activeProject.id}`}
                className="observatory-stage"
                initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : .985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.015 }}
                transition={{ duration: prefersReducedMotion ? 0 : .45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="dossier-scan" aria-hidden="true" />
                <div className="observatory-stars" aria-hidden="true" />
                <div className="system-topology" aria-hidden="true">
                  <svg className="topology-links" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M50 50 L18 20" />
                    <path d="M50 50 L82 20" />
                    <path d="M50 50 L18 80" />
                    <path d="M50 50 L82 80" />
                  </svg>
                  {activeProject.flow.map((step, stepIndex) => (
                    <span key={step} className={`topology-node topology-node-${stepIndex + 1}`}>
                      <i className="mono">{String(stepIndex + 1).padStart(2, "0")}</i>
                      <strong className="mono">{step}</strong>
                    </span>
                  ))}
                  <div className="topology-core">
                    <img
                      className={`topology-image ${activeProject.imageFit === "contain" ? "contain" : "cover"}`}
                      src={assetPath(activeProject.image)}
                      alt=""
                      width="941"
                      height="941"
                      decoding="async"
                    />
                    <span className="topology-shade" />
                    <small className="mono">{activeProject.networkLabel}</small>
                  </div>
                  <span className="topology-pulse topology-pulse-a" />
                  <span className="topology-pulse topology-pulse-b" />
                </div>
                <span className="visual-index mono">/{activeProject.index}</span>
                <span className="visual-kind mono">{activeProject.status}</span>
                <span className="planet-coordinate mono">PROJECT {activeProject.index} / {activeProject.category}</span>
                <span className="sr-only">{activeProject.imageAlt}</span>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.article
                key={`dossier-${activeProject.id}`}
                className="observatory-dossier"
                initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: prefersReducedMotion ? 0 : -18 }}
                transition={{ duration: prefersReducedMotion ? 0 : .38, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="card-meta mono"><span>{activeProject.category}</span><span>{activeProject.status}</span></div>
                <h3>{activeProject.title}</h3>
                <p className="project-statement">{activeProject.statement}</p>

                <div className="project-role-learning">
                  <section>
                    <strong className="mono">MY ROLE</strong>
                    <p>{activeProject.role}</p>
                  </section>
                  <section>
                    <strong className="mono">WHAT I LEARNED</strong>
                    <p>{activeProject.learning}</p>
                  </section>
                </div>

                <div className="project-flow mono" aria-label={`${activeProject.title} system flow`}>
                  {activeProject.flow.map((step, stepIndex) => (
                    <span key={step}>
                      <i>{String(stepIndex + 1).padStart(2, "0")}</i>{step}
                      {stepIndex < activeProject.flow.length - 1 && <ChevronRight size={13} />}
                    </span>
                  ))}
                </div>

                <p className="dossier-label mono">SYSTEM SIGNALS</p>
                <div className="evidence-list project-signals">
                  {activeProject.evidence.map((item) => <span key={item}><Check size={14} />{item}</span>)}
                </div>

                {mode === "deep" && (
                  <div className="engineering-deep">
                    <p className="dossier-label mono">ENGINEERING NOTES</p>
                    <div className="engineering-notes">
                      {activeProject.engineering.map((note) => (
                        <section key={note.label}>
                          <strong className="mono">{note.label}</strong>
                          <p>{note.detail}</p>
                        </section>
                      ))}
                    </div>
                    <div className="project-boundary">
                      <strong className="mono">EVIDENCE BOUNDARY</strong>
                      <p>{activeProject.boundary}</p>
                    </div>
                    <details className="assessment-drawer">
                      <summary className="mono">VIEW ACADEMIC PROVENANCE <ChevronRight size={13} /></summary>
                      <div>
                        <p><strong>CONTEXT</strong>{activeProject.context}</p>
                        <p><strong>VERIFIED OUTCOME</strong>{activeProject.outcome}</p>
                        <p><strong>{activeProject.feedbackLabel}</strong>{activeProject.feedback}</p>
                      </div>
                    </details>
                  </div>
                )}

                <div className="tool-row">{activeProject.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                <div className="dossier-actions">
                  {mode === "scan" && (
                    <button type="button" className="observatory-deep mono" onClick={() => setMode("deep")}>
                      OPEN DEEP SIGNAL <ArrowUpRight size={13} />
                    </button>
                  )}
                  <button type="button" className="capability-handoff" onClick={openRelatedCapability}>
                    <span className="mono"><i /> NEXT SIGNAL / RELATED CAPABILITY</span>
                    <strong>{relatedCapability.title}</strong>
                    <ArrowRight size={17} />
                  </button>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="observatory-controls mono">
            <button type="button" onClick={() => cycleObservatory(-1)} aria-label="Previous project"><ArrowLeft size={15} /> PREVIOUS</button>
            <span>{String(visibleProjects.findIndex((project) => project.id === activeId) + 1).padStart(2, "0")} / {String(visibleProjects.length).padStart(2, "0")}</span>
            <button type="button" onClick={() => cycleObservatory(1)} aria-label="Next project">NEXT <ArrowRight size={15} /></button>
          </div>
        </div>
      </section>

      <section id="proof" className="proof-section">
        <div className="backplane-field" aria-hidden="true" />
        <div className="content-shell">
          <div className="section-intro capability-intro">
            <div>
              <p className="eyebrow"><CircleDot size={13} /> INTERNAL SYSTEM / LIVE</p>
              <h2>The Capability<br /><em>Backplane.</em></h2>
            </div>
            <p>A practical map of what I have learned to do so far—and the project evidence behind each capability.</p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeProject.id}-${activeCapability.id}`}
              className="project-capability-bridge"
              style={{ "--bridge-color": activeCapability.color } as React.CSSProperties}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
              transition={{ duration: prefersReducedMotion ? 0 : .28 }}
            >
              <span className="bridge-pulse" aria-hidden="true"><i /></span>
              <div>
                <small className="mono">SELECTED PROJECT / {activeProject.index}</small>
                <strong>{activeProject.networkLabel}</strong>
              </div>
              <ArrowRight size={18} />
              <div>
                <small className="mono">LIVE CAPABILITY LINK</small>
                <strong>{activeCapability.title}</strong>
              </div>
              <span className="bridge-state mono">SYNCHRONISED</span>
            </motion.div>
          </AnimatePresence>

          <div
            className="capability-backplane"
            style={{ "--active-capability": activeCapability.color } as React.CSSProperties}
          >
            <div className="backplane-head mono">
              <span>CORE BUS / 08 MODULES</span>
              <span><i /> SIGNAL VERIFIED</span>
            </div>

            <div className="module-field">
              <div className="backplane-rail" aria-hidden="true">
                <span className="rail-packet packet-a" />
                <span className="rail-packet packet-b" />
                <span className="rail-packet packet-c" />
              </div>
              <div className="capability-modules" role="group" aria-label="Technical capability modules">
                {capabilityModules.map((capability) => {
                  const isActive = activeCapability.id === capability.id;
                  return (
                    <button
                      type="button"
                      key={capability.id}
                      className={`capability-module${isActive ? " active" : ""}`}
                      style={{ "--module-color": capability.color } as React.CSSProperties}
                      onClick={() => selectCapability(capability.id)}
                      aria-pressed={isActive}
                    >
                      <span className="module-port" aria-hidden="true"><i /></span>
                      <span className="module-top mono"><b>{capability.code}</b><small>{capability.state}</small></span>
                      <strong>{capability.title}</strong>
                      <span className="module-signal mono">{capability.signals[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={activeCapability.id}
                className="capability-console"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.28 }}
              >
                <header className="console-head mono">
                  <span><i /> MODULE ONLINE</span>
                  <span>{activeCapability.code} / {activeCapability.state}</span>
                </header>

                <div className="console-title">
                  <div>
                    <p className="mono">SELECTED CAPABILITY / LINKED TO PROJECT {activeProject.index}</p>
                    <h3>{activeCapability.title}</h3>
                    <span>{activeCapability.summary}</span>
                  </div>
                  <div className="signal-readout mono" aria-label="Key technical identifiers">
                    {activeCapability.signals.map((signal, index) => (
                      <span key={signal}><small>0{index + 1}</small>{signal}</span>
                    ))}
                  </div>
                </div>

                <div className="capability-route mono" aria-label={`${activeCapability.title} workflow`}>
                  {activeCapability.route.map((step, index) => (
                    <span key={step}>
                      <i>{String(index + 1).padStart(2, "0")}</i>{step}
                      {index < activeCapability.route.length - 1 && <ChevronRight size={14} />}
                    </span>
                  ))}
                </div>

                {mode === "deep" && (
                  <div className="console-deep">
                    <section>
                      <p className="console-label mono">OPERATIONS</p>
                      <div className="operation-list">
                        {activeCapability.operations.map((operation) => (
                          <span key={operation}><Check size={13} />{operation}</span>
                        ))}
                      </div>
                    </section>
                    <section>
                      <p className="console-label mono">STACK / PROTOCOLS</p>
                      <div className="capability-stack">
                        {activeCapability.stack.map((item) => <span key={item}>{item}</span>)}
                      </div>
                      <p className="console-label mono">EVIDENCE BOUNDARY</p>
                      <p className="evidence-boundary">{activeCapability.boundary}</p>
                    </section>
                  </div>
                )}

                <footer className="console-proof">
                  <div>
                    <p className="console-label mono">PROOF ROUTE</p>
                    <strong>{activeCapability.proof}</strong>
                    <span>{activeCapability.verification}</span>
                  </div>
                  <div className="console-actions">
                    {mode === "scan" && (
                      <button type="button" className="depth-button mono" onClick={() => setMode("deep")}>OPEN DEEP MODE</button>
                    )}
                    <button type="button" className="proof-button mono" onClick={openCapabilityProof}>
                      TRACE TO PROJECT <ArrowUpRight size={14} />
                    </button>
                  </div>
                </footer>
              </motion.article>
            </AnimatePresence>

            <p className="backplane-statement">Building my skills through real systems, practical problems and <em>continuous learning.</em></p>
          </div>
        </div>
      </section>

      <section id="journey" className="journey-section content-shell">
        <div className="journey-copy">
          <p className="eyebrow">CURRENT COORDINATES</p>
          <h2>Learning security by building, testing and understanding the systems beneath it.</h2>
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
        <h2>Ready to learn,<br /><em>build and contribute.</em></h2>
        <p>I&apos;m looking for opportunities where I can keep learning while contributing across cyber security, secure infrastructure, networks and AI systems.</p>
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
