import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, BrainCircuit } from 'lucide-react'
import { ActionButton } from './ActionButton'
import { QuizOption } from './QuizOption'

export function QuizPanel({ quiz }) {
  const {
    feedback,
    hasPrevious,
    lastResult,
    nextQuestion,
    prevQuestion,
    question,
    selectAnswer,
    selectedAnswer,
  } = quiz

  return (
    <section className="quiz-panel" aria-labelledby="current-question">
      <div className="panel-header">
        <div>
          <span className="eyebrow">Live prompt</span>
          <p>{question.badge}</p>
        </div>
        <BrainCircuit aria-hidden="true" size={30} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.32 }}
        >
          <span className="category-chip">{question.category}</span>
          <h2 id="current-question">{question.question}</h2>

          <div className="quiz-options">
            {question.options.map((option) => (
              <QuizOption
                answer={question.answer}
                disabled={Boolean(selectedAnswer)}
                key={option}
                onSelect={selectAnswer}
                option={option}
                selectedAnswer={selectedAnswer}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <footer className="quiz-footer">
        <p className={lastResult === false ? 'status-wrong' : 'status-copy'}>
          {feedback || 'Question loaded. Choose one option.'}
        </p>

        <div className="quiz-footer-actions">
          <ActionButton
            disabled={!hasPrevious}
            icon={ArrowLeft}
            onClick={prevQuestion}
            variant="secondary"
          >
            Previous
          </ActionButton>

          <ActionButton icon={ArrowRight} onClick={nextQuestion} variant="secondary">
            Next
          </ActionButton>
        </div>
      </footer>
    </section>
  )
}
