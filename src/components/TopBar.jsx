import { BrainCircuit, PlayCircle, UserRound } from 'lucide-react'
import { ActionButton } from './ActionButton'

export function TopBar({ profile }) {
  return (
    <header className="top-bar">
      <a className="brand-lockup" href="#quiz-lab" aria-label="AI Quiz Arena home">
        <BrainCircuit aria-hidden="true" size={24} />
        <span>Quiz Arena</span>
      </a>

      <nav aria-label="Primary navigation">
        <a href="#features">Features</a>
        <a href="#register">Register</a>
        <a href="#gallery">Gallery</a>
      </nav>

      <div className="top-actions">
        <span className="player-chip">
          <UserRound aria-hidden="true" size={16} />
          {profile.fullName || 'Guest'}
        </span>
        <ActionButton href="#quiz-lab" icon={PlayCircle} variant="secondary">
          Play
        </ActionButton>
      </div>
    </header>
  )
}
