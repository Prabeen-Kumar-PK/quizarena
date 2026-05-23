import { useMemo, useState } from 'react'
import { buildQuestion, loadStoredProfile, saveStoredProfile } from '../utils/quiz'

export function useQuizGame() {
  const [profile, setProfile] = useState(loadStoredProfile)
  const [questionHistory, setQuestionHistory] = useState(() => [
    {
      question: buildQuestion(),
      selectedAnswer: '',
      feedback: '',
      lastResult: null,
    },
  ])
  const [historyIndex, setHistoryIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answeredCount, setAnsweredCount] = useState(0)

  const currentEntry = questionHistory[historyIndex]
  const { question, selectedAnswer, feedback, lastResult } = currentEntry

  const accuracy = useMemo(() => {
    if (!answeredCount) {
      return 0
    }

    return Math.round((score / answeredCount) * 100)
  }, [answeredCount, score])

  const saveProfile = (values) => {
    saveStoredProfile(values)
    setProfile(values)
  }

  const updateCurrentEntry = (updates) => {
    setQuestionHistory((current) =>
      current.map((entry, index) =>
        index === historyIndex ? { ...entry, ...updates } : entry,
      ),
    )
  }

  const selectAnswer = (option) => {
    if (selectedAnswer) {
      return
    }

    const isCorrect = option === question.answer
    updateCurrentEntry({
      selectedAnswer: option,
      lastResult: isCorrect,
      feedback: isCorrect
        ? question.insight
        : `Correct answer: ${question.answer}. ${question.insight}`,
    })

    setAnsweredCount((current) => current + 1)

    if (isCorrect) {
      setScore((current) => current + 1)
    }
  }

  const nextQuestion = () => {
    if (historyIndex < questionHistory.length - 1) {
      setHistoryIndex((current) => current + 1)
      return
    }

    const next = buildQuestion(question.id)
    setQuestionHistory((current) => [
      ...current,
      {
        question: next,
        selectedAnswer: '',
        feedback: '',
        lastResult: null,
      },
    ])
    setHistoryIndex((current) => current + 1)
  }

  const prevQuestion = () => {
    if (historyIndex === 0) {
      return
    }

    setHistoryIndex((current) => current - 1)
  }

  return {
    accuracy,
    answeredCount,
    feedback,
    hasPrevious: historyIndex > 0,
    lastResult,
    nextQuestion,
    prevQuestion,
    profile,
    question,
    saveProfile,
    score,
    selectAnswer,
    selectedAnswer,
  }
}
