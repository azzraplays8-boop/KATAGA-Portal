import { BadgeCheck, IdCard } from 'lucide-react';

export default function MemberCard() {
  return (
    <section className="member-card-section" id="digital-id">
      <div className="section-head">
        <h2 className="section-title">Digital Member Card</h2>
        <p className="section-sub">Your proof of membership, always with you</p>
      </div>

      <div className="member-card" role="img" aria-label="KATAGA digital member card for Aira Santos, verified member">
        <span className="card-pattern" aria-hidden="true" />
        <div className="card-top">
          <span className="card-brand">
            <IdCard size={16} aria-hidden="true" /> KATAGA
          </span>
          <span className="card-verified">
            <BadgeCheck size={15} aria-hidden="true" /> Verified Member
          </span>
        </div>

        <div className="card-middle">
          <h3 className="card-name">Aira Santos</h3>
          <p className="card-course">BS Entrepreneurship · 3rd Year</p>
          <p className="card-year">AY 2026–2027</p>
        </div>

        <div className="card-bottom">
          <div className="card-id-block">
            <span className="card-id-label">Member No.</span>
            <span className="card-id">KATAGA-26-001</span>
          </div>
          <span className="card-qr" aria-hidden="true">
            <span className="card-qr-inner" />
          </span>
        </div>
        <span className="card-accent" aria-hidden="true" />
      </div>
    </section>
  );
}
