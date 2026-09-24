import { Check, Circle } from 'lucide-react';

// Member journey actions — completed steps drive the progress percentage.
// Mature gamification: personal progress only, no XP or leaderboards.
const JOURNEY_STEPS = [
  { label: 'Membership profile verified', done: true },
  { label: 'Latest announcement acknowledged', done: true },
  { label: 'Checked scholarship opportunities', done: true },
  { label: 'Complete member interests', done: false, current: true },
  { label: 'Join an upcoming activity', done: false },
];

// KATAGA journey milestones — the member's long-term progression stages.
const MILESTONES = [
  { name: 'Start', sub: 'Member', reached: true },
  { name: 'Connected', sub: 'Participated', reached: true },
  { name: 'Informed', sub: 'Stayed Updated', reached: true, current: true },
  { name: 'Involved', sub: 'Joined Activities', reached: false },
  { name: 'Growing', sub: 'Development', reached: false },
];

const doneCount = JOURNEY_STEPS.filter((s) => s.done).length;
const percent = Math.round((doneCount / JOURNEY_STEPS.length) * 100);

export default function MemberJourney() {
  return (
    <aside className="journey-panel" aria-label="Your KATAGA journey">
      <div className="journey-card">
        <div className="journey-head">
          <div>
            <p className="journey-title">Your KATAGA Journey</p>
            <h3>{percent}% explored</h3>
          </div>
          <p className="journey-percent">
            <strong>{doneCount}</strong>
            <span>of {JOURNEY_STEPS.length} actions</span>
          </p>
        </div>

        {/* Segmented progress track — one segment per member action */}
        <div
          className="journey-track"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Member journey progress"
        >
          {JOURNEY_STEPS.map((step, i) => (
            <span className="journey-segment" key={step.label} aria-hidden="true">
              {i < doneCount && <span className="journey-segment-fill" />}
            </span>
          ))}
        </div>

        <p className="journey-meta">
          <span><strong>{doneCount} of {JOURNEY_STEPS.length}</strong> member actions completed</span>
          <span>keep going ✨</span>
        </p>

        <ul className="journey-steps">
          {JOURNEY_STEPS.map((step) => (
            <li
              key={step.label}
              className={
                step.done
                  ? 'journey-step done'
                  : step.current
                    ? 'journey-step current'
                    : 'journey-step'
              }
            >
              <span className="step-check" aria-hidden="true">
                {step.done ? <Check size={15} strokeWidth={3} /> : <Circle size={9} fill="currentColor" />}
              </span>
              <span className="step-label">{step.label}</span>
              {step.current && <span className="step-flag">Up next</span>}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export function MilestonePath() {
  return (
    <section className="milestones" aria-label="Journey milestones">
      <div className="section-head">
        <h2>Where you are</h2>
        <p>Your path through the KATAGA community</p>
      </div>

      <ol className="milestone-path">
        {MILESTONES.map((m) => (
          <li
            key={m.name}
            className={
              m.current ? 'milestone current' : m.reached ? 'milestone reached' : 'milestone'
            }
          >
            <span className="milestone-dot" aria-hidden="true" />
            <span className="milestone-copy">
              <p className="milestone-name">{m.name}</p>
              <p className="milestone-sub">{m.sub}</p>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
