import { Megaphone, GraduationCap, LifeBuoy, ArrowRight } from 'lucide-react';

const MISSIONS = [
  {
    number: '01',
    category: 'Announcement',
    icon: <Megaphone size={20} />,
    title: 'General Assembly 2026',
    status: 'Needs acknowledgment',
    statusTone: 'is-red',
    action: 'Open',
    tone: 'red',
  },
  {
    number: '02',
    category: 'Scholarship',
    icon: <GraduationCap size={20} />,
    title: 'Scholarship Opportunity',
    status: 'Potential match',
    statusTone: 'is-brown',
    action: 'Check',
    tone: 'sand',
  },
  {
    number: '03',
    category: 'Help Desk',
    icon: <LifeBuoy size={20} />,
    title: 'Certificate Request',
    status: 'In progress',
    statusTone: 'is-green',
    action: 'Track',
    tone: 'green',
  },
];

export default function ForYouToday() {
  return (
    <section className="for-you" id="announcements">
      <div className="section-head">
        <h2 className="section-title">For You Today</h2>
        <p className="section-sub">Three missions picked just for you</p>
      </div>

      <div className="for-you-grid">
        {MISSIONS.map((mission) => (
          <a
            key={mission.number}
            href="#home"
            className={`mission-card is-${mission.tone}`}
            aria-label={`Mission ${mission.number}: ${mission.category} — ${mission.title}, ${mission.status}`}
          >
            <div className="mission-top">
              <span className="mission-icon" aria-hidden="true">
                {mission.icon}
              </span>
              <span className="mission-number" aria-hidden="true">
                {mission.number}
              </span>
            </div>

            <p className="mission-category">{mission.category}</p>
            <h3 className="mission-title">{mission.title}</h3>

            <p className="mission-status-row">
              <span className={`mission-status ${mission.statusTone}`}>
                {mission.status}
              </span>
            </p>

            <span className="mission-action">
              {mission.action} <ArrowRight size={15} aria-hidden="true" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
