import { ArrowRight, AlarmClock } from 'lucide-react';

export default function PriorityMission() {
  return (
    <section className="priority-mission" aria-label="Priority mission">
      <div className="priority-left">
        <span className="priority-icon" aria-hidden="true">
          <AlarmClock size={20} />
        </span>
        <span className="priority-badge">
          <AlarmClock size={14} aria-hidden="true" /> 2 days left
        </span>
      </div>
      <div className="priority-body">
        <h2 className="priority-title">Scholarship Application Deadline</h2>
        <p className="priority-sub">
          Check your potential eligibility before the application closes.
        </p>
      </div>
      <a href="#home" className="priority-cta">
        View Opportunity <ArrowRight size={16} aria-hidden="true" />
      </a>
    </section>
  );
}
