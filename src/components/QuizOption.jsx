import { CheckCircle2, Circle, XCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function QuizOption({ answer, disabled, onSelect, option, selectedAnswer }) {
  const isChosen = selectedAnswer === option
  const isCorrect = option === answer
  const showCorrect = selectedAnswer && isCorrect
  const showWrong = isChosen && !isCorrect
  const Icon = showCorrect ? CheckCircle2 : showWrong ? XCircle : Circle

  return (
    <motion.button
      className={[
        'quiz-option',
        isChosen ? 'is-chosen' : '',
        showCorrect ? 'is-correct' : '',
        showWrong ? 'is-wrong' : '',
      ].join(' ')}
      disabled={disabled}
      onClick={() => onSelect(option)}
      type="button"
      whileHover={!disabled ? { x: 4 } : undefined}
      whileTap={!disabled ? { scale: 0.99 } : undefined}
    >
      <span>{option}</span>
      <Icon aria-hidden="true" size={20} />
    </motion.button>
  )
}
