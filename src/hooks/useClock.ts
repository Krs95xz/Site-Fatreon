import { useEffect, useState } from 'react'

export function useClock() {
  const [now, setNow] = useState(() => new Date())
  const [viewportWidth, setViewportWidth] = useState(() => window.innerWidth)

  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth)
    const clock = window.setInterval(() => setNow(new Date()), 1000)

    window.addEventListener('resize', updateViewportWidth)
    return () => {
      window.clearInterval(clock)
      window.removeEventListener('resize', updateViewportWidth)
    }
  }, [])

  return { isCompact: viewportWidth < 536, now }
}