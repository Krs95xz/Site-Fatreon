import type { TrailPoint } from '../types/site'

export function CursorTrail({
  colorBottom,
  colorTop,
  points,
}: {
  colorBottom: string
  colorTop: string
  points: TrailPoint[]
}) {
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