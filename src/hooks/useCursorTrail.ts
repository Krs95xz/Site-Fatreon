import { useEffect, useRef, useState } from 'react'
import type { TrailPoint, TrailSettings } from '../types/site'

const TRAIL_INTERVAL_MS = 35

function createTrailPoints({ quantity, characters }: TrailSettings): TrailPoint[] {
  const trailCharacters = Array.from(characters || 'X')
  const safeQuantity = Math.min(Math.max(quantity, 0), 100)

  return Array.from({ length: safeQuantity }, (_, index) => ({
    character: trailCharacters[index % trailCharacters.length],
    visible: false,
    x: 0,
    y: 0,
  }))
}

export function useCursorTrail({
  enabled,
  isPaused,
  settings,
}: {
  enabled: boolean
  isPaused: boolean
  settings: TrailSettings
}) {
  const [points, setPoints] = useState<TrailPoint[]>(() => createTrailPoints(settings))
  const trailCursor = useRef(0)
  const hideTrailTimer = useRef<number | undefined>(undefined)
  const lastTrailUpdate = useRef(0)

  useEffect(() => {
    setPoints(createTrailPoints(settings))
    trailCursor.current = 0
  }, [settings])

  useEffect(() => {
    if (!enabled || isPaused || settings.quantity === 0) {
      setPoints((currentPoints) =>
        currentPoints.map((point) => ({ ...point, visible: false })),
      )
      return
    }

    const hideTrail = () => {
      setPoints((currentPoints) =>
        currentPoints.map((point) => ({ ...point, visible: false })),
      )
    }

    const updateTrail = (x: number, y: number) => {
      const currentTime = performance.now()

      if (currentTime - lastTrailUpdate.current < TRAIL_INTERVAL_MS) {
        return
      }

      lastTrailUpdate.current = currentTime
      window.clearTimeout(hideTrailTimer.current)
      setPoints((currentPoints) => {
        if (currentPoints.length === 0) {
          return currentPoints
        }

        const nextIndex = trailCursor.current % currentPoints.length
        trailCursor.current += 1

        return currentPoints.map((point, index) =>
          index === nextIndex
            ? { ...point, visible: true, x, y }
            : point,
        )
      })
      hideTrailTimer.current = window.setTimeout(hideTrail, 300)
    }

    const updatePointerTrail = (event: PointerEvent) => {
      if (event.pointerType !== 'touch') {
        updateTrail(event.pageX, event.pageY)
      }
    }

    const updateTouchTrail = (event: TouchEvent) => {
      const touch = event.touches[0]

      if (touch) {
        updateTrail(touch.pageX, touch.pageY)
      }
    }

    window.addEventListener('pointermove', updatePointerTrail)
    window.addEventListener('touchmove', updateTouchTrail, { passive: true })
    return () => {
      window.removeEventListener('pointermove', updatePointerTrail)
      window.removeEventListener('touchmove', updateTouchTrail)
      window.clearTimeout(hideTrailTimer.current)
    }
  }, [enabled, isPaused, settings.quantity])

  return points
}