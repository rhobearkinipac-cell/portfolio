import { useEffect, useState } from 'react'
import { profile, stats } from '../data/content'

// Types out each role, pauses, deletes it, then moves to the next.
function useTypewriter(words, speed = 70, pause = 1600) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    let t
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      t = setTimeout(() => {
        setDeleting(false)
        setI((n) => n + 1)
      }, 250)
    } else {
      t = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? speed / 2 : speed,
      )
    }
    return () => clearTimeout(t)
  }, [text, deleting, i, words, speed, pause])

  return text
}

export default function Hero() {
  const role = useTypewriter(profile.roles)

  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy" data-reveal>
          <span className="pill glass">
            <span className="pulse" aria-hidden="true" /> Studying for AZ-900 · Dec 2026
          </span>
          <h1>
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
            <br />
            <span className="hero__role">
              {role}
              <span className="caret" aria-hidden="true" />
            </span>
          </h1>
          <p className="lead">{profile.tagline}</p>
          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              See my projects
            </a>
            <a href="#journey" className="btn btn--ghost glass">
              My cloud roadmap →
            </a>
          </div>
        </div>

        <div className="hero__card glass" data-reveal style={{ '--d': '120ms' }}>
          <div className="term__bar">
            <span /> <span /> <span />
            <code>cloud-shell — bash</code>
          </div>
          <pre className="term__body">
            <code>
              <span className="t-prompt">arkin@azure:~$</span> az login{'\n'}
              <span className="t-ok">✔ Signed in to Azure for Students</span>
              {'\n\n'}
              <span className="t-prompt">arkin@azure:~$</span> az group create \{'\n'}
              {'    '}--name rg-portfolio --location southeastasia{'\n'}
              <span className="t-ok">✔ Provisioned</span>
              {'\n\n'}
              <span className="t-prompt">arkin@azure:~$</span> git push origin main{'\n'}
              <span className="t-info">↳ GitHub Actions → Static Web Apps</span>
              {'\n'}
              <span className="t-ok">✔ Deployed. You&apos;re looking at it.</span>
            </code>
          </pre>
        </div>
      </div>

      <div className="container stats" data-reveal style={{ '--d': '200ms' }}>
        {stats.map((s) => (
          <div key={s.label} className="stat glass">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
