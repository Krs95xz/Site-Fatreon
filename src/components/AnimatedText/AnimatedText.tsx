import './AnimatedText.css'
import type { AnimatedTextProps } from './AnimatedTextProps.tsx'

export function AnimatedText({
  as: Tag,
  content,
  startIndex,
  activeLetter,
}: AnimatedTextProps) {
  return (
    <Tag className="textos">
      {Array.from(content).map((character, index) => {
        if (character === '\n') {
          return <br key={index} />
        }
        if (character === ' ') {
          return character
        }

        const letterIndex = startIndex + index
        const isAnimated =
          activeLetter !== null &&
          letterIndex <= activeLetter &&
          letterIndex > activeLetter - 6

        return (
          <span className={`letras${isAnimated ? ' animado' : ''}`} key={index}>
            {character}
          </span>
        )
      })}
    </Tag>
  )
}