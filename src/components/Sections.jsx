import { about, journey, profile, projects, skills } from '../data/content'
import { spotlight } from '../hooks/useReveal'

function SectionHead({ eyebrow, title, sub }) {
  return (
    <div className="section__head" data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {sub && <p className="muted">{sub}</p>}
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead eyebrow="01 · About" title="Developer today, cloud architect tomorrow." />
        <div className="about glass card" data-reveal onMouseMove={spotlight}>
          {about.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead
          eyebrow="02 · Skills"
          title="What I work with"
          sub="From the browser down to the server, and up into the cloud."
        />
        <div className="grid grid--4">
          {skills.map((s, idx) => (
            <article
              key={s.group}
              className="glass card skill"
              data-reveal
              style={{ '--d': `${idx * 80}ms` }}
              onMouseMove={spotlight}
            >
              <div className="skill__icon" aria-hidden="true">
                {s.icon}
              </div>
              <h3>{s.group}</h3>
              <ul className="chips">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const statusLabel = { done: 'Passed', active: 'In progress', next: 'Up next' }

export function Journey() {
  return (
    <section id="journey" className="section">
      <div className="container">
        <SectionHead
          eyebrow="03 · Cloud Journey"
          title="The road to Azure Solutions Architect"
          sub="One cert per phase, each one backed by real projects."
        />
        <ol className="journey">
          {journey.map((j, idx) => (
            <li
              key={j.code}
              className={`journey__item is-${j.status}`}
              data-reveal
              style={{ '--d': `${idx * 90}ms` }}
            >
              <span className="journey__node" aria-hidden="true" />
              <div className="glass card journey__card" onMouseMove={spotlight}>
                <div className="journey__top">
                  <span className="journey__code">{j.code}</span>
                  <span className={`badge badge--${j.status}`}>{statusLabel[j.status]}</span>
                </div>
                <h3>{j.title}</h3>
                <p className="muted">{j.note}</p>
                <span className="journey__when">{j.when}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const projectLabel = { live: 'Live', building: 'Building', planned: 'Planned' }

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead
          eyebrow="04 · Projects"
          title="Things I'm building"
          sub="Each project adds one new piece of Azure to my toolkit."
        />
        <div className="grid grid--2">
          {projects.map((p, idx) => (
            <article
              key={p.title}
              className="glass card project"
              data-reveal
              style={{ '--d': `${idx * 80}ms` }}
              onMouseMove={spotlight}
            >
              <div className="project__top">
                <h3>{p.title}</h3>
                <span className={`badge badge--${p.status}`}>{projectLabel[p.status]}</span>
              </div>
              <p className="muted">{p.desc}</p>
              <ul className="chips">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {(p.repo || p.demo) && (
                <div className="project__links">
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      Code ↗
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer">
                      Live demo ↗
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact glass card" data-reveal onMouseMove={spotlight}>
          <span className="eyebrow">05 · Contact</span>
          <h2>
            Let&apos;s build something <span className="gradient-text">in the cloud.</span>
          </h2>
          <p className="muted">
            Open to internships, study groups, and project collabs. Hit me up.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a className="btn btn--ghost glass" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn btn--ghost glass" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="muted">
          © {year} {profile.name} · Built with React + Vite · Hosted on Azure Static Web
          Apps
        </p>
      </div>
    </footer>
  )
}
