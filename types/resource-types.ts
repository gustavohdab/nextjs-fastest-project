export type Resource = {
  _id: string
  title: string
  image: string
  views: number
  slug: {
    current: string
    _type: string
  }
  category: string
  downloadLink: string
}

export type ResourcePlaylist = {
  _id: string
  title: string
  resources: Resource[]
}
