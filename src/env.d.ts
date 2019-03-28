export interface IImage {
  id: string
  url: string
  width: number
  height: number
  breeds: Array<IBreed>
}

export interface IImageAnalysisLabel {
  Name: string
  Confidence: number
}

export interface IImageAnalysis {
  created_at: string
  image_id: string
  labels: Array<IImageAnalysisLabel>
  moderation_labels: Array<any>
  vendor: string
}

export interface IVotesElement {
  country_code: string
  created_at: string
  id: string
  image_id: string
  sub_id: string
  value: number
}

export interface IVote {
  country_code: string
  created_at: string
  id: string
  image_id: string
  sub_id: string
  user_id: string
  value: number
}

export interface IFavouritesElement {
  created_at: string
  id: string
  image: {
    id: string
    url: string
  }
  image_id: string
  sub_id: string
  user_id: string
}

export interface IFavourite {
  id: string
  image_id: string
  sub_id: string
  user_id: string
}

export interface IBreed {
  adaptability: number
  affection_level: number
  alt_names: string
  cfa_url: string
  child_friendly: number
  country_code: string
  country_codes: string
  description: string
  dog_friendly: number
  energy_level: number
  experimental: number
  grooming: number
  hairless: number
  health_issues: number
  hypoallergenic: number
  id: string
  indoor: number
  intelligence: number
  lap: number
  life_span: string
  name: string
  natural: number
  origin: string
  rare: number
  rex: number
  shedding_level: number
  short_legs: number
  social_needs: number
  stranger_friendly: number
  suppressed_tail: number
  temperament: string
  vcahospitals_url: string
  vetstreet_url: string
  vocalisation: number
  weight: {
    imperial: string
    metric: string
  }
  wikipedia_url: string
}

export interface ICategory {
  id: string
  name: string
}

export interface ISource {
  breed_id: string
  id: string
  name: string
  url: string
}
