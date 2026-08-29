import { useState } from 'react'
import { AboutSection } from './components/AboutSection/AboutSection'
import { CursorTrail } from './components/CursorTrail/CursorTrail'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { TrailSettings } from './components/TrailSettings/TrailSettings'
import { VideoModal } from './components/VideoModal/VideoModal'
import { useClock } from './hooks/useClock'
import { useCursorTrail } from './hooks/useCursorTrail'
import type { TrailSettings as TrailSettingsValue } from './types/site'

function App() {
  const { isCompact, now } = useClock()
  const [isToolOpen, setIsToolOpen] = useState(false)
  const [isTrailEnabled, setIsTrailEnabled] = useState(false)
  const [isTrailPaused, setIsTrailPaused] = useState(false)
  const [trailSettings, setTrailSettings] = useState<TrailSettingsValue>({
    characters: 'X',
    quantity: 10,
  })
  const [savedTrailSettings, setSavedTrailSettings] = useState<TrailSettingsValue>(trailSettings)
  const [trailColorTop, setTrailColorTop] = useState('#ff8400')
  const [trailColorBottom, setTrailColorBottom] = useState('#ff8400')
  const [backgroundOpacity, setBackgroundOpacity] = useState(1)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const trailPoints = useCursorTrail({
    enabled: isTrailEnabled,
    isPaused: isTrailPaused,
    settings: savedTrailSettings,
  })

  const saveTrailSettings = () => {
    setSavedTrailSettings(trailSettings)
  }

  const setTrailEnabled = (enabled: boolean) => {
    setIsTrailEnabled(enabled)
    if (enabled) {
      saveTrailSettings()
    }
  }

  return (
    <>
      <Header isBlurred={isVideoOpen} isCompact={isCompact} now={now} />

      <main
        className={`${isToolOpen ? 'tool-aberto ' : ''}${isVideoOpen ? 'borrado' : ''}`}
        id="areaPrincipal"
      >
        <TrailSettings
          colorBottom={trailColorBottom}
          colorTop={trailColorTop}
          enabled={isTrailEnabled}
          isOpen={isToolOpen}
          onColorBottomChange={setTrailColorBottom}
          onColorTopChange={setTrailColorTop}
          onEnabledChange={setTrailEnabled}
          onOpenChange={setIsToolOpen}
          onPauseChange={setIsTrailPaused}
          onSave={saveTrailSettings}
          onSettingsChange={setTrailSettings}
          settings={trailSettings}
        />
        <AboutSection
          isDimmed={isVideoOpen}
          onOpacityChange={setBackgroundOpacity}
          onOpenVideo={() => setIsVideoOpen(true)}
          opacity={backgroundOpacity}
        />
      </main>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      <CursorTrail colorBottom={trailColorBottom} colorTop={trailColorTop} points={trailPoints} />
      <Footer isBlurred={isVideoOpen} />
    </>
  )
}

export default App