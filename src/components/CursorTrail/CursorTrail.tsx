import type { CursorTrailProps } from './CursorTrailProps.tsx'
import './CursorTrail.css'

export function CursorTrail({
  colorBottom,
  colorTop,
  points,
}: CursorTrailProps) {
  return points.map((point, index) => (
    <div
      className={`pontos${point.visible ? ' visivel' : ''}`}
      key={index}
      style={{
        background: `linear-gradient(${colorTop}, ${colorBottom})`,
        left: point.x,
        top: point.y,
      }}
    >
      {point.character}
    </div>
  ))
}