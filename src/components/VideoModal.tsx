import { useEffect, useRef } from 'react'

export function VideoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!isOpen || !videoRef.current) {
      return
    }

    videoRef.current.volume = 0.55
    void videoRef.current.play().catch(() => undefined)
  }, [isOpen])

  const closeVideo = () => {
    videoRef.current?.pause()
    onClose()
  }

  return (
    <div
      aria-label="Gameplay do Fatreon"
      aria-modal="true"
      className={`popUps${isOpen ? ' exibido aberto' : ''}`}
      id="modalVideoGameplay"
      role="dialog"
    >
      <button aria-label="Fechar vídeo" id="fecharVideoGameplay" onClick={closeVideo} type="button">
        ×
      </button>
      <video controls id="gameplayFatreon" loop ref={videoRef}>
        <source src="/assets/videos/GameplayFatreon.mp4" type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeo.
      </video>
    </div>
  )
}