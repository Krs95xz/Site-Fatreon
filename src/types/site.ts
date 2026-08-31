export type ContentBlock =
  | { type: 'heading' | 'paragraph'; content: string }
  | { type: 'row' | 'space' }

export type TrailPoint = {
  character: string
  visible: boolean
  x: number
  y: number
}

export type TrailSettings = {
  quantity: number
  characters: string
}