import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useRevealAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal-section').forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              start: 'top 84%',
              trigger: section,
            },
            y: 0,
          },
        )
      })

      gsap.to('.signal-grid', {
        backgroundPosition: '96px 96px',
        ease: 'none',
        scrollTrigger: {
          end: 'bottom bottom',
          scrub: true,
          start: 'top top',
          trigger: '.app-shell',
        },
      })

      gsap.to('.scan-line', {
        ease: 'none',
        scrollTrigger: {
          end: 'bottom bottom',
          scrub: true,
          start: 'top top',
          trigger: '.app-shell',
        },
        xPercent: 28,
      })
    })

    return () => ctx.revert()
  }, [])
}
