import gsap from 'gsap'
import { useEffect, useState } from 'react'

export const Loading = () => {
  const originalText = 'CLONING NODEFLAIR'
  const [displayText, setDisplayText] = useState(originalText)
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  useEffect(() => {
    let iteration = 0
    let timer = 0
    let paused = false

    gsap.fromTo(
      '.loading',
      {
        autoAlpha: 0,
        filter: 'blur(10px)',
        y: 40,
      },
      {
        autoAlpha: 1,
        filter: 'blur(0px)',
        y: 0,
        ease: 'Expo.easeOut',
        duration: 1,
      },
    )

    const interval = setInterval(() => {
      setDisplayText(
        displayText
          .split('')
          .map((_, index) => {
            if (index < iteration) return originalText[index]
            return letters[Math.floor(Math.random() * letters.length)]
          })
          .join(''),
      )

      if (iteration >= originalText.length) {
        paused = true
      }

      if (paused) {
        if (timer >= 300) {
          paused = false
          iteration = 0
          timer = 0
        }

        timer += Number(interval)
        return
      }

      iteration += 0.5
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="loading"
      style={{
        paddingTop: '45vh',
        paddingBottom: '10px',
        fontFamily: 'Roboto Mono',
        fontWeight: '700',
        fontSize: '30px',
        color: '#1FC76A',
        margin: 'auto',
      }}>
      {displayText}
    </div>
  )
}
