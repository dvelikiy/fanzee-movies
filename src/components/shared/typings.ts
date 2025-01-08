export type TagType = 'score' | 'genre' | 'duration'

export type MovieCardType = {
  id: number
  name: string
  description: string
  duration: string
  rating: number
  poster: string
  genre: string
}

export type MovieTagType = {
  type: TagType
  value: string | number
}
