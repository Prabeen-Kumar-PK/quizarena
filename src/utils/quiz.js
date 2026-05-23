import { DEFAULT_PROFILE, QUESTION_BANK } from '../data/quizContent'

const STORAGE_KEY = 'quizgame-profile'

export function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5)
}

export function buildQuestion(previousId) {
  const available = QUESTION_BANK.filter((item) => item.id !== previousId)
  const source = available.length ? available : QUESTION_BANK
  const picked = source[Math.floor(Math.random() * source.length)]

  return {
    ...picked,
    badge: `AI quiz pulse | ${picked.category}`,
    options: shuffle(picked.options),
  }
}

export function loadStoredProfile() {
  if (typeof window === 'undefined') {
    return DEFAULT_PROFILE
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)

  if (!stored) {
    return DEFAULT_PROFILE
  }

  try {
    return { ...DEFAULT_PROFILE, ...JSON.parse(stored) }
  } catch {
    return DEFAULT_PROFILE
  }
}

export function saveStoredProfile(values) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values))
}
