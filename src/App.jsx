import {
  FeatureCarousel,
  Footer,
  GallerySection,
  HeroStage,
  ProfileSection,
  SignalBackdrop,
  TopBar,
} from './components'
import { useQuizGame } from './hooks/useQuizGame'
import { useRevealAnimations } from './hooks/useRevealAnimations'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  const quiz = useQuizGame()

  useSmoothScroll()
  useRevealAnimations()

  return (
    <div className="app-shell">
      <SignalBackdrop />
      <TopBar profile={quiz.profile} />

      <main className="app-main">
        <HeroStage quiz={quiz} />
        <FeatureCarousel />
        <ProfileSection profile={quiz.profile} onSaveProfile={quiz.saveProfile} />
        <GallerySection profile={quiz.profile} />
        <Footer />
      </main>
    </div>
  )
}

export default App
