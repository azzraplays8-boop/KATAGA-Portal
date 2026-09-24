import { LifeBuoy, CalendarDays, GraduationCap, IdCard } from 'lucide-react';

const ACTIONS = [
  {
    label: 'Ask for Help',
    hint: 'Send a request',
    icon: <LifeBuoy size={20} />,
    href: '#help-desk',
  },
  {
    label: 'Open Calendar',
    hint: 'View deadlines',
    icon: <CalendarDays size={20} />,
    href: '#calendar',
  },
  {
    label: 'Find Scholarships',
    hint: 'Browse matches',
    icon: <GraduationCap size={20} />,
    href: '#scholarships',
  },
  {
    label: 'Digital Member ID',
    hint: 'View your ID',
    icon: <IdCard size={20} />,
    href: '#digital-id',
  },
];

export default function QuickActions() {
  return (
    <section className="quick-actions" aria-label="Quick actions">
      <div className="quick-grid">
        {ACTIONS.map((action) => (
          <a key={action.label} href={action.href} className="quick-item">
            <span className="quick-icon" aria-hidden="true">{action.icon}</span>
            <span className="quick-text">
              <span className="quick-label">{action.label}</span>
              <span className="quick-hint">{action.hint}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
