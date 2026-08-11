"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  MapPin,
  Server,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
} from "lucide-react";
import SmoothScroll from "../components/SmoothScroll";

const ImmersiveScene = dynamic(
  () => import("../components/ImmersiveScene"),
  {
    ssr: false,
  }
);

const skills = {
  Languages: [
    "Python",
    "JavaScript",
    "Java",
    "C",
    "HTML5",
    "CSS3",
  ],

  Frontend: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Responsive Web Development",
  ],

  Backend: [
    "Python",
    "Django",
    "Django REST Framework",
    "REST APIs",
    "API Integration",
    "Authentication & Authorization",
    "Business Logic",
    "JSON",
  ],

  Data: [
    "PostgreSQL",
    "MySQL",
    "Database Design",
    "Query Optimization",
    "Data Modeling",
  ],

  Tools: [
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
    "Jira",
    "SDLC",
  ],

  DevOps: [
    "Docker",
    "CI/CD",
    "Cloud Deployment",
    "AWS Environment Configuration",
  ],
};

const projects = [
  {
    number: "01",
    title: "Jyothi Security Services",
    tag: "SECURITY MANAGEMENT PLATFORM",
    stack: "Next.js · React · JavaScript",
    text:
      "Responsive platform for security service management, client requests, recruitment workflows, and Admin operations.",
    link: "https://jyothi-security-services.vercel.app/",
  },

  {
    number: "02",
    title: "Multi-Disease Risk Prediction & Automation",
    tag: "INTELLIGENT PREDICTION PIPELINE",
    stack: "Python · JavaScript",
    text:
      "Prediction pipeline integrating multi-source health data to provide personalized risk assessments.",
  },

  {
    number: "03",
    title: "Smart Uniform",
    tag: "IOT MONITORING SYSTEM",
    stack: "React · JavaScript",
    text:
      "Real-time monitoring system with wireless connectivity, biomechanical data pipelines, automated alerts, and sensor-to-dashboard communication.",
  },
];

export default function Home() {
  const [isNavScrolling, setIsNavScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolling(true);
    };

    const handleScrollEnd = () => {
      setIsNavScrolling(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scrollend", handleScrollEnd);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  }, []);

  return (
    <main>
      {/* Smooth scrolling */}
      <SmoothScroll />

      {/* Original 3D background */}
      <ImmersiveScene />

      {/* Ambient background */}
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <nav
        className={`nav${
          isNavScrolling && !isMobileMenuOpen ? " nav-hidden" : ""
        }${isMobileMenuOpen ? " nav-menu-open" : ""}`}
      >
        <a className="brand" href="#top">
          RK<span>.</span>
        </a>

        <div className="navlinks">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="navcta" href="#contact">
          Let&apos;s talk
          <ArrowUpRight size={15} />
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="mobile-menu" aria-label="Mobile navigation">
          <a href="#work" onClick={() => setIsMobileMenuOpen(false)}>
            Work
          </a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>
            Skills
          </a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </a>
        </div>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="top"
        className="hero cinematic-section"
      >
        <div className="hero-grid" />

        <div className="hero-copy reveal">
          <p className="eyebrow">
            FULL-STACK DEVELOPER · BENGALURU
          </p>

          <h1>
            Building <em>scalable</em>
            <br />
            digital systems.
          </h1>

          <p className="lead">
            Full-Stack Developer focused on backend architecture,
            RESTful APIs, databases, authentication, and
            high-performance web experiences.
          </p>

          <div className="actions">
            <a
              className="primary"
              href="#work"
            >
              Explore work
              <ArrowDown size={17} />
            </a>

            <a
              className="secondary"
              href="#contact"
            >
              Contact me
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="hero-meta">
          <span>01 / 06</span>

          <span>
            SCROLL TO EXPLORE
            <ArrowDown size={13} />
          </span>
        </div>

        <div className="hero-model-label">
          <span className="pulse" />
          INTERACTIVE SYSTEM / 2026
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="section cinematic-section about"
      >
        <div className="section-label">
          01 — ABOUT
        </div>

        <div className="about-layout">
          <div className="section-kicker">
            SYSTEMS
            <br />
            THINKING
          </div>

          <div className="about-content">
            <h2>
              Engineering with a{" "}
              <span>systems mindset.</span>
            </h2>

            <p>
              Full-Stack Developer with hands-on experience
              building scalable web applications and RESTful APIs
              using Java, Python, Django, JavaScript, and Next.js.
              Experienced across backend architecture, databases,
              authentication, testing, Git-based development,
              and cloud-oriented workflows.
            </p>

            <div className="metrics">
              <div>
                <strong>02</strong>
                <small>Internships</small>
              </div>

              <div>
                <strong>03</strong>
                <small>Featured projects</small>
              </div>

              <div>
                <strong>7.8</strong>
                <small>Engineering CGPA</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="work"
        className="section projects cinematic-section"
      >
        <div className="section-label">
          02 — SELECTED WORK
        </div>

        <div className="project-intro">
          <p className="eyebrow">
            SELECTED SYSTEMS
          </p>

          <h2>
            Work that moves from{" "}
            <em>
              idea → interface → system.
            </em>
          </h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article
              className={`project-card project-card-${project.number}`}
              key={project.title}
            >
              {/* Card header */}

              <div className="project-top">
                <span>{project.number}</span>

                <span>{project.tag}</span>
              </div>

              {/* =================================================
                  PROJECT VISUAL
              ================================================= */}

              <div
                className={`project-visual project-visual-${project.number}`}
              >
                {/* =================================================
                    PROJECT 01 — SECURITY
                ================================================= */}

                {project.number === "01" && (
                  <div className="security-visual">
                    <div className="security-grid" />

                    <div className="security-radar">
                      <div className="radar-ring ring-1" />
                      <div className="radar-ring ring-2" />
                      <div className="radar-ring ring-3" />

                      <div className="radar-cross horizontal" />
                      <div className="radar-cross vertical" />

                      <div className="radar-sweep" />

                      <span className="radar-point point-1" />
                      <span className="radar-point point-2" />
                      <span className="radar-point point-3" />
                    </div>

                    <div className="security-shield">
                      <div className="shield-inner">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>

                    <div className="security-status">
                      <span className="status-dot" />
                      SYSTEM SECURE
                    </div>

                    <div className="security-lines">
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>

                    <div className="security-corner top-left" />
                    <div className="security-corner bottom-right" />
                  </div>
                )}

                {/* =================================================
                    PROJECT 02 — AI
                ================================================= */}

                {project.number === "02" && (
                  <div className="ai-visual">
                    <div className="ai-grid" />

                    <div className="ai-network">
                      <div className="ai-line line-1" />
                      <div className="ai-line line-2" />
                      <div className="ai-line line-3" />
                      <div className="ai-line line-4" />
                      <div className="ai-line line-5" />
                      <div className="ai-line line-6" />

                      <span className="ai-node node-1" />
                      <span className="ai-node node-2" />
                      <span className="ai-node node-3" />
                      <span className="ai-node node-4" />
                      <span className="ai-node node-5" />
                      <span className="ai-node node-6" />

                      <div className="ai-core">
                        AI
                      </div>
                    </div>

                    <div className="prediction-bars">
                      <span style={{ height: "42%" }} />
                      <span style={{ height: "76%" }} />
                      <span style={{ height: "58%" }} />
                      <span style={{ height: "91%" }} />
                      <span style={{ height: "67%" }} />
                    </div>

                    <div className="prediction-label">
                      <span>MODEL CONFIDENCE</span>
                      <strong>94.8%</strong>
                    </div>

                    <div className="prediction-tag">
                      PREDICTION ENGINE
                    </div>
                  </div>
                )}

                {/* =================================================
                    PROJECT 03 — IOT
                ================================================= */}

                {project.number === "03" && (
                  <div className="iot-visual">
                    <div className="iot-grid" />

                    <div className="iot-device">
                      <div className="device-top">
                        <span>SMART</span>
                        <span>01</span>
                      </div>

                      <div className="device-screen">
                        <div className="device-pulse" />

                        <div className="device-heart">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                      </div>

                      <div className="device-sensor sensor-a" />
                      <div className="device-sensor sensor-b" />
                      <div className="device-sensor sensor-c" />
                      <div className="device-sensor sensor-d" />

                      <div className="device-bottom">
                        <span>BIOMETRIC</span>
                        <strong>98.4</strong>
                      </div>
                    </div>

                    <div className="iot-signal signal-a" />
                    <div className="iot-signal signal-b" />
                    <div className="iot-signal signal-c" />

                    <div className="iot-data">
                      <span>LIVE SENSOR</span>
                      <strong>98.4</strong>
                      <small>BIOMETRIC DATA</small>
                    </div>

                    <div className="iot-connection">
                      <i />
                      CONNECTED
                    </div>
                  </div>
                )}
              </div>

              {/* =================================================
                  PROJECT CONTENT
              ================================================= */}

              <div className="project-content">
                <div className="project-index">
                  PROJECT / {project.number}
                </div>

                <h3>{project.title}</h3>

                <p>{project.text}</p>
              </div>

              <div className="project-bottom">
                <span>{project.stack}</span>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LIVE PROJECT
                    <ExternalLink size={15} />
                  </a>
                ) : (
                  <span className="muted">
                    CASE STUDY
                    <ArrowUpRight size={15} />
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section
        id="skills"
        className="section skills cinematic-section"
      >
        <div className="section-label">
          03 — CAPABILITIES
        </div>

        <div className="skills-heading">
          <p className="eyebrow">
            THE TOOLKIT
          </p>

          <h2>
            A stack built for{" "}
            <span>shipping.</span>
          </h2>
        </div>

        <div className="skill-grid">
          {Object.entries(skills).map(
            ([category, values]) => (
              <div
                className="skill-card"
                key={category}
              >
                <div className="skill-card-head">
                  <span>{category}</span>
                </div>

                <div className="chips">
                  {values.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section className="section experience cinematic-section">
        <div className="section-label">
          04 — EXPERIENCE
        </div>

        <div className="experience-heading">
          <p className="eyebrow">
            BUILD · DEBUG · SHIP
          </p>

          <h2>
            From backend services to{" "}
            <em>scalable products.</em>
          </h2>
        </div>

        <div className="timeline">
          <div className="role">
            <div className="role-marker">
              <Code2 />
            </div>

            <div>
              <p className="date">
                JAN 2026 — MAY 2026
              </p>

              <h3>
                Full Stack Developer · Intern
              </h3>

              <h4>
                <a
                  href="https://kodnest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  KODNEST
                </a>
              </h4>

              <p>
                Developed scalable web applications using
                clean architecture and modular design principles.
                Optimized SQL queries for faster high-traffic
                endpoints and built responsive interfaces focused
                on usability and performance.
              </p>
            </div>
          </div>

          <div className="role">
            <div className="role-marker">
              <Server />
            </div>

            <div>
              <p className="date">
                SEP 2025 — JAN 2026
              </p>

              <h3>
                Full Stack Developer · Intern
              </h3>

              <h4>
                <a
                  href="https://netpy.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NETPY
                </a>
              </h4>

              <p>
                Developed scalable REST APIs and backend services
                using Python and Django. Implemented business
                logic, authentication, validation, API
                integrations, testing, debugging, and integration
                workflows using Git and Postman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EDUCATION
      ===================================================== */}

      <section className="section education cinematic-section">
        <div className="section-label">
          05 — EDUCATION
        </div>

        <div className="edu-heading">
          <p className="eyebrow">
            FOUNDATION
          </p>

          <h2>
            Computer science,{" "}
            <span>
              built from the ground up.
            </span>
          </h2>
        </div>

        <div className="edu">
          <div className="edu-card">
            <p className="date">
              2022 — 2026
            </p>

            <h3>
              B.E. in Computer Science
            </h3>

            <p>
              <a
                href="https://seacet.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                S.E.A College of Engineering
              </a>{" "}·
              CGPA 7.8
            </p>
          </div>

          <div className="edu-card">
            <p className="date">
              2022
            </p>

            <h3>
              Grade 12 · PCMB
            </h3>

            <p>
              <a
                href="https://apinorth.com/colleges/mahila-samaja-arts-science-commerce-and-management-studies-3660"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mahila Samaja P.U College
              </a>{" "}·
              85.83%
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          PUBLICATION
      ===================================================== */}

      <section className="section publication-section cinematic-section">
        <div className="section-label">
          06 — PUBLICATION
        </div>

        <a
          className="publication-card"
          href="https://www.jetir.org/papers/JETIR2505A61.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="publication-card-label">
            RESEARCH PUBLICATION
          </span>

          <h2>
            Presented at International Conference on
            <em> Multidisciplinary Research</em>
          </h2>

          <div className="publication-card-footer">
            <span>IITM ICMR</span>
            <span>
              VIEW PUBLICATION
              <ExternalLink size={16} />
            </span>
          </div>
        </a>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="contact cinematic-section"
      >
        <div className="contact-grid" />

        <p className="eyebrow">
          07 — GET IN TOUCH
        </p>

        <h2>
          Let&apos;s build something
          <br />
          <em>worth remembering.</em>
        </h2>

        <a
          className="email"
          href="mailto:rachithaammujk2004@gmail.com"
        >
          rachithaammujk2004@gmail.com
          <ArrowUpRight />
        </a>

        <div className="socials">
          <a
            href="https://www.linkedin.com/in/rachitha-k-8399b0363/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>

          <a
            href="https://github.com/Rachitha-krishnamurthyy"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>

          <a
            href="mailto:rachithaammujk2004@gmail.com"
            aria-label="Email"
          >
            <Mail />
          </a>

          <span>
            <a
              href="https://www.google.com/maps/place/C.M.R+Tomato+Market/@13.1199406,78.1099557,19z/data=!4m6!3m5!1s0x3badf07e53eb47bb:0xfaf2ad20b5767e18!8m2!3d13.1252733!4d78.1138498!16s%2Fg%2F11dz3rllyt?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin />
              Bengaluru, Karnataka
            </a>
          </span>
        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>
        <span>RACHITHA K</span>

        <span>
          © 2026 · Built with Intent.
        </span>
      </footer>
    </main>
  );
}
