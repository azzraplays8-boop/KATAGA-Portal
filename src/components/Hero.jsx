import { ArrowRight, User } from 'lucide-react';

// Count of attention items — could come from an API later
const PENDING_ITEMS = 3;

export default function Hero() {
  return (
    <section className="hero" aria-label="Welcome">
      <span className="hero-eyebrow">
        <span className="hero-eyebrow-dot" aria-hidden="true" />
        Member Home
      </span>

      <h1>
        <span className="greeting">Hello, Aira 👋</span>
        Your KATAGA journey
        <br />
        <span className="accent">continues here.</span>
      </h1>

      <p className="hero-copy">
        Stay informed, discover opportunities, participate in KATAGA activities,
        and access member support from one space.
      </p>

      <p className="hero-ping">
        <span className="hero-ping-count" aria-hidden="true">{PENDING_ITEMS}</span>
        things are waiting for you today.
      </p>

      <div className="hero-actions">
        <a href="#for-you" className="btn btn-primary">
          Explore My Space
          <ArrowRight size={17} className="btn-arrow" aria-hidden="true" />
        </a>
        <a href="#profile" className="btn btn-ghost">
          <User size={17} aria-hidden="true" />
          View Profile
        </a>
      </div>
    </section>
  );
}
