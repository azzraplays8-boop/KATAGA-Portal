import { useState } from 'react';
import { Bell, ChevronDown, Menu, X } from 'lucide-react';

const NAV_LINKS = ['Home', 'Announcements', 'Calendar', 'Scholarships', 'Help Desk'];

function LogoMark() {
  return (
    <svg viewBox="0 0 40 40" width="38" height="38" aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="#4A2C2A" />
      <path d="M20 9 L31 29 H25.5 L20 17.5 L14.5 29 H9 Z" fill="#F9E5E5" />
      <circle cx="20" cy="31.5" r="2.4" fill="#B8323A" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home">
          <LogoMark />
          <span className="brand-text">
            <span className="brand-name">KATAGA</span>
            <span className="brand-sub">Kapatiran ng Talino at Galing</span>
          </span>
        </a>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#home"
              className={`nav-link ${link === 'Home' ? 'is-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button type="button" className="icon-btn" aria-label="Notifications">
            <Bell size={19} />
            <span className="notif-dot" aria-hidden="true" />
          </button>
          <button type="button" className="member-chip">
            <span className="member-avatar" aria-hidden="true">A</span>
            <span className="member-name">Aira</span>
            <ChevronDown size={16} />
          </button>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
