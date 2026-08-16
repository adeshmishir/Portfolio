import { achievements, cpStats } from "@/lib/data"
import { Reveal } from "./Reveal"

export function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <Reveal delay={300} distance={0} origin="bottom">
          <h2 className="section-title dark-blue-text">Achievements</h2>
        </Reveal>

        <Reveal delay={600} origin="bottom">
          <div className="achievements-stats">
            {cpStats.map((stat) => {
              const inner = (
                <>
                  <span className="achievements-stats__value">
                    {stat.value.toLocaleString()}
                    {stat.suffix ?? ""}
                  </span>
                  <span className="achievements-stats__label">{stat.label}</span>
                  <span className="achievements-stats__sub">{stat.sub}</span>
                </>
              )
              return stat.href ? (
                <a
                  key={stat.label}
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievements-stats__item"
                >
                  {inner}
                </a>
              ) : (
                <div key={stat.label} className="achievements-stats__item">
                  {inner}
                </div>
              )
            })}
          </div>
        </Reveal>

        <div className="achievements-list">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={800 + i * 200} origin="bottom">
              <div className="achievement">
                <span className="achievement__title">{item.title}</span>
                <p className="achievement__desc">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
