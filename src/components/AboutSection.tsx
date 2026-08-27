import { useEffect, useRef, useState } from 'react'
import { aboutBlocks } from '../data/about'
import { AnimatedText } from './AnimatedText'

const totalLetters = aboutBlocks.reduce(
  (total, block) => total + ('content' in block ? Array.from(block.content).length : 0),
  0,
)

export function AboutSection({
  isDimmed,
  onOpenVideo,
  opacity,
  onOpacityChange,
}: {
  isDimmed: boolean
  onOpenVideo: () => void
  opacity: number
  onOpacityChange: (opacity: number) => void
}) {
  const [activeLetter, setActiveLetter] = useState<number | null>(null)
  const animationRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    return () => window.clearInterval(animationRef.current)
  }, [])

  const animateLetters = () => {
    if (activeLetter !== null) {
      return
    }

    let letter = 0
    animationRef.current = window.setInterval(() => {
      setActiveLetter(letter)
      letter += 1

      if (letter > totalLetters + 5) {
        window.clearInterval(animationRef.current)
        setActiveLetter(null)
      }
    }, 40)
  }

  let textOffset = 0

  return (
    <div className={isDimmed ? 'atenuado' : ''} id="principal">
      <div id="valoresText">
        <input
          aria-label="Opacidade do conteúdo"
          className="slider"
          id="opacidadeFundo"
          max="1"
          min="0.4"
          onChange={(event) => onOpacityChange(Number(event.target.value))}
          step="0.05"
          type="range"
          value={opacity}
        />
        <button className="confirmacao" onClick={animateLetters} type="button">
          Animar
        </button>
      </div>
      <section
        className={opacity <= 0.6 ? 'translucido' : ''}
        id="sobre"
        style={{ opacity }}
      >
        {aboutBlocks.map((block, index) => {
          if (block.type === 'rule') return <hr key={index} />
          if (block.type === 'space') return <br key={index} />
          if (!('content' in block)) return null

          const startIndex = textOffset
          textOffset += Array.from(block.content).length
          return (
            <AnimatedText
              activeLetter={activeLetter}
              as={block.type === 'heading' ? 'h3' : 'p'}
              content={block.content}
              key={index}
              startIndex={startIndex}
            />
          )
        })}
        <div className="botoes">
          <button className="confirmacao" onClick={onOpenVideo} type="button">
            Assistir
          </button>
        </div>
      </section>
    </div>
  )
}