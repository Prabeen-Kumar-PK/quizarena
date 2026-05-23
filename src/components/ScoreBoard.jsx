import { Activity, Gauge, Trophy } from 'lucide-react'
import { StatTile } from './StatTile'

export function ScoreBoard({ accuracy, answeredCount, score }) {
  const stats = [
    { icon: Trophy, label: 'Score', value: score },
    { icon: Activity, label: 'Answered', value: answeredCount },
    { icon: Gauge, label: 'Accuracy', value: `${accuracy}%` },
  ]

  return (
    <section className="score-board" aria-label="Quiz score">
      {stats.map((stat) => (
        <StatTile key={stat.label} {...stat} />
      ))}
    </section>
  )
}
