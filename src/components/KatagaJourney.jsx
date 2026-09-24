const MILESTONES = [
  { stage: 'START', title: 'Member', state: 'done' },
  { stage: 'CONNECTED', title: 'Participated', state: 'done' },
  { stage: 'INFORMED', title: 'Stayed Updated', state: 'done' },
  { stage: 'INVOLVED', title: 'Joined Activities', state: 'current' },
  { stage: 'GROWING', title: 'Development', state: 'future' },
];

function Milestone({ stage, title, state, index }) {
  return (
    <div className={`milestone is-${state}`} tabIndex={0}>
      <span className="milestone-node" aria-hidden="true">
        {state === 'done' && <span className="milestone-check">✓</span>}
      </span>
      {index < MILESTONES.length - 1 && (
        <span className={`milestone-line ${state === 'done' ? 'is-filled' : ''}`} aria-hidden="true" />
      )}
      <div className="milestone-text">
        <p className="milestone-stage">{stage}</p>
        <p className="milestone-title">{title}</p>
      </div>
    </div>
  );
}

export default function KatagaJourney() {
  return (
    <section className="milestones" aria-label="Member milestone path">
      <div className="section-head">
        <h2 className="section-title">Member Journey</h2>
        <p className="section-sub">Where you are in the KATAGA experience</p>
      </div>
      <div className="milestone-path">
        {MILESTONES.map((m, index) => (
          <Milestone key={m.stage} {...m} index={index} />
        ))}
      </div>
    </section>
  );
}
