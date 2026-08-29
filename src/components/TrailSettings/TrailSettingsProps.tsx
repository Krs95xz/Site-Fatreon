import type { TrailSettings as TrailSettingsValue } from '../../types/site'

export type TrailSettingsProps = {
  colorBottom: string
  colorTop: string
  enabled: boolean
  isOpen: boolean
  onColorBottomChange: (color: string) => void
  onColorTopChange: (color: string) => void
  onEnabledChange: (enabled: boolean) => void
  onOpenChange: (isOpen: boolean) => void
  onPauseChange: (isPaused: boolean) => void
  onSave: () => void
  onSettingsChange: (settings: TrailSettingsValue) => void
  settings: TrailSettingsValue
}