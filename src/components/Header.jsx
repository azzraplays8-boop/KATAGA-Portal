import { Bell, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

// Simple nav data — easy to edit later
const NAV_LINKS = [
  { label: 'Home', href: '#', active: true },
  { label: 'Announcements', href: '#announcements' },
  { label: 'Calendar', href: '#calendar' },
  { label: 'Scholarships', href: '#scholarships' },
  { label: 'Help Desk', href: '#help-desk' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Left: brand */}
        <a href="#" className="brand-block" aria-label="KATAGA home">
          <span className="brand-mark" aria-hidden="true">K</span>
          <span className="brand-copy">
            <span className="brand-name">KATAGA</span>
            <small>Kapatiran ng Talino at Galing</small>
          </span>
        </a>

        {/* Center: navigation */}
        <nav className="site-nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={link.active ? 'nav-link is-active' : 'nav-link'}
              aria-current={link.active ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: actions */}
        <div className="header-actions">
          <button type="button" className="icon-button" aria-label="Notifications, 1 unread">
            <Bell size={19} />
            <span className="notif-dot" aria-hidden="true" />
          </button>

          <button type="button" className="profile-button" aria-label="Open member menu for Aira">
            <span className="profile-avatar" aria-hidden="true">A</span>
            <span className="profile-name">Aira</span>
            <ChevronDown size={15} className="profile-caret" aria-hidden="true" />
          </button>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={link.active ? 'mobile-link is-active' : 'mobile-link'}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
