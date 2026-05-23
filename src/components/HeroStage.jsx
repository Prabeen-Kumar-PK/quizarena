import { ArrowRight, ImagePlus, PlayCircle } from 'lucide-react'
import { ActionButton } from './ActionButton'
import { ImageFrame } from './ImageFrame'
import { QuizPanel } from './QuizPanel'
import { ScoreBoard } from './ScoreBoard'

export function HeroStage({ quiz }) {
  return (
    <section className="hero-stage reveal-section">
      <div className="hero-copy">
        <span className="eyebrow"> Quiz Arena</span>
        <h1>Cultivate your expertise through specialized, AI-driven intellectual challenges, </h1>
        <p>
          Accelerate your global knowledge base by engaging with precision-engineered AI prompts, seamlessly expanding your intellectual boundaries inside a polished, dynamic interface.Register locally, answer four-option AI-style prompts, and keep your
          score moving inside a polished React interface.
        </p>

        <div className="hero-actions">
          <ActionButton href="#quiz-lab" icon={PlayCircle}>
            Start quiz
          </ActionButton>
          <ActionButton href="#register" icon={ArrowRight} variant="ghost">
            Register
          </ActionButton>
        </div>

        <ImageFrame
          image={quiz.profile.heroImage}
          label={quiz.profile.fullName || 'Guest player'}
          title="Hero image URL slot"
          icon={ImagePlus}
          compact
        />
      </div>

      <div className="hero-workspace" id="quiz-lab">
        <QuizPanel quiz={quiz} />
        <ScoreBoard
          accuracy={quiz.accuracy}
          answeredCount={quiz.answeredCount}
          score={quiz.score}
        />
      </div>
    </section>
  )
}
