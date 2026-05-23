import { Mail, UserRound } from 'lucide-react'

export function ProfileCard({ profile }) {
  return (
    <aside className="profile-card">
      <div className="profile-avatar">
        <UserRound aria-hidden="true" size={28} />
      </div>
      <div>
        <span className="eyebrow">Player</span>
        <h3>{profile.fullName || 'Guest player'}</h3>
        <p>
          <Mail aria-hidden="true" size={16} />
          {profile.email || 'No email saved'}
        </p>
      </div>
    </aside>
  )
}
