import { LifeBuoy, CalendarDays, GraduationCap, CreditCard } from 'lucide-react';

const QUICK_ACTIONS = [
  { label: 'Ask for Help', icon: LifeBuoy },
  { label: 'View Calendar', icon: CalendarDays },
  { label: 'Find Scholarship', icon: GraduationCap },
  { label: 'View Digital ID', icon: CreditCard },
];

export default function QuickActions() {
  return (
    <section className="quick-panel" aria-label="Quick actions">
      <h3>Quick Actions</h3>
      <p className="quick-sub">Jump straight to what you need</p>

      <div className="quick-list">
        {QUICK_ACTIONS.map(({ label, icon: Icon }) => (
          <button type="button" className="quick-action" key={label}>
            <span className="qa-icon" aria-hidden="true">
              <Icon size={17} />
            </span>
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}
