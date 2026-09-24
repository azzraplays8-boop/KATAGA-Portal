import { Megaphone, GraduationCap, LifeBuoy, ArrowRight, Clock } from 'lucide-react';

// Personalized "For You" items — replace statuses/links with API data later.
const FOR_YOU_ITEMS = [
  {
    tag: 'Announcement',
    tone: 'announcement',
    icon: Megaphone,
    title: 'General Assembly 2026',
    status: 'Needs acknowledgment',
    statusDot: 'attention',
    link: 'View',
  },
  {
    tag: 'Scholarship',
    tone: 'scholarship',
    icon: GraduationCap,
    title: 'CHED Scholarship Opportunity',
    status: 'Potential match',
    statusDot: 'good',
    link: 'Check eligibility',
  },
  {
    tag: 'Help Desk',
    tone: 'desk',
    icon: LifeBuoy,
    title: 'Certificate Request',
    status: 'In progress',
    statusDot: 'progress',
    link: 'View request',
  },
];

export function ForYouToday() {
  return (
    <section className="foryou" id="for-you" aria-label="For you today">
      <div className="section-head">
        <h2>For You Today</h2>
        <p>Only what matters to you right now</p>
      </div>

      <div className="foryou-grid">
        {FOR_YOU_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <article className="for-you-card" key={item.title}>
              <div className="fyc-top">
                <span className={`fyc-tag ${item.tone}`}>{item.tag}</span>
                <span className="fyc-icon" aria-hidden="true">
                  <Icon size={18} />
                </span>
              </div>

              <h3 className="fyc-title">{item.title}</h3>

              <p className="fyc-status">
                <span className={`status-dot ${item.statusDot}`} aria-hidden="true" />
                {item.status}
              </p>

              <a href="#" className="fyc-link">
                {item.link}
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

// One prominent deadline — a "mission card" for the most urgent item.
export function PriorityDeadline() {
  return (
    <article className="deadline-card" aria-label="Priority deadline">
      <span className="deadline-count">
        <Clock size={14} aria-hidden="true" />
        2 days left
      </span>

      <h3 className="deadline-title">Scholarship application closes soon</h3>

      <p className="deadline-date">September 26 · CHED Scholarship Opportunity</p>

      <a href="#" className="btn btn-primary">
        View opportunity
        <ArrowRight size={16} className="btn-arrow" aria-hidden="true" />
      </a>
    </article>
  );
}
