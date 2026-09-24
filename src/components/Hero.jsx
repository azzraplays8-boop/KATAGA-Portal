import { ArrowRight, Check, CircleDot } from 'lucide-react';

const JOURNEY_STEPS = [
  { label: 'Membership verified', done: true },
  { label: 'Latest announcement acknowledged', done: true },
  { label: 'Scholarship opportunities checked', done: true },
  { label: 'Complete member interests', done: false },
  { label: 'Join an upcoming activity', done: false },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="eyebrow">Member Home</p>
        <h1 className="hero-title">
          Hello, Aira <span aria-hidden="true">👋</span>
          <br />
          Your KATAGA journey
          <br />
          continues here.
        </h1>
        <p className="hero-sub">
          Stay informed, discover opportunities, participate in activities, and
          access the support you need from one member space.
        </p>
        <div className="hero-buttons">
          <a href="#home" className="btn btn-primary">
            Explore My Space <ArrowRight size={17} />
          </a>
          <a href="#home" className="btn btn-secondary">
            View Profile
          </a>
        </div>
        <p className="hero-attention">
          <span className="attention-dot" aria-hidden="true" />
          3 things need your attention today
        </p>
      </div>

      <aside className="hero-right" aria-label="Your KATAGA journey">
        <div className="journey-panel">
          <div className="journey-head">
            <h2>Your Kataga Journey</h2>
            <p className="journey-count">
              <strong>3 of 5</strong> actions completed · 60% of today’s journey
            </p>
            <div
              className="journey-progress"
              role="progressbar"
              aria-valuenow={60}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Journey progress: 60 percent"
            >
              {[0, 1, 2, 3, 4].map((segment) => (
                <span
                  key={segment}
                  className={`journey-segment ${segment < 3 ? 'is-filled' : ''}`}
                  style={{ animationDelay: `${segment * 90}ms` }}
                />
              ))}
            </div>
          </div>
          <ol className="journey-list">
            {JOURNEY_STEPS.map((step, index) => (
              <li
                key={step.label}
                className={`journey-item ${step.done ? 'is-done' : ''} ${
                  index === 3 ? 'is-current' : ''
                }`}
                tabIndex={0}
              >
                <span className="journey-node" aria-hidden="true">
                  {step.done ? (
                    <Check size={13} strokeWidth={3} />
                  ) : index === 3 ? (
                    <CircleDot size={13} strokeWidth={2.5} />
                  ) : null}
                </span>
                <span className="journey-label">
                  {step.label}
                  {index === 3 && <em className="journey-now">Up next</em>}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </aside>
    </section>
  );
}
