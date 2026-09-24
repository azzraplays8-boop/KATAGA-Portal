import { ShieldCheck, UserRound } from 'lucide-react';

// Sample member data — will come from the member profile later.
const MEMBER = {
  firstName: 'Aira',
  lastName: 'Santos',
  course: 'BS Entrepreneurship',
  year: '3rd Year',
  academicYear: 'AY 2026–2027',
  memberId: 'KATGA-2026-0417',
};

export default function MemberCard() {
  return (
    <section className="member-card-wrap" id="profile" aria-label="Digital member card">
      <div className="member-card">
        <div className="mc-top">
          <span className="mc-brand">KATAGA</span>
          <span className="mc-badge">
            <ShieldCheck size={13} aria-hidden="true" />
            Verified Member
          </span>
        </div>

        <h3 className="mc-name">
          {MEMBER.firstName} {MEMBER.lastName}
        </h3>
        <p className="mc-course">
          {MEMBER.course} · {MEMBER.year}
        </p>

        <div className="mc-bottom">
          <div className="mc-field">
            Member ID
            <strong>{MEMBER.memberId}</strong>
          </div>
          <div className="mc-field">
            <strong>{MEMBER.academicYear}</strong>
          </div>
          <span className="mc-avatar" aria-hidden="true">
            <UserRound size={20} />
          </span>
        </div>
      </div>
    </section>
  );
}
