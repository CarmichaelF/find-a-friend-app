export interface Age {
  puppy: string
  adult: string
}

export interface PetSize {
  small: string
  medium: string
  big: string
}

export interface EnergyLevel {
  low: string
  medium: string
  high: string
}

export interface IndependencyLevel {
  low: string
  medium: string
  high: string
}

export interface Environment {
  small: string
  medium: string
  big: string
}

export interface PetType {
  dog: string
  cat: string
}

export interface Filters {
  age: Age
  petSize: PetSize
  energyLevel: EnergyLevel
  independencyLevel: IndependencyLevel
  environment: Environment
  petType: PetType
}

export interface PetFilters {
  filters: Filters
}
