interface Address {
  id: string
  zipcode: string
  address: string
  city: string
  latitude: string
  longitude: string
}

interface Requirement {
  id: string
  description: string
  petId: string
}

interface Pet {
  id: string
  name: string
  description: string
  oRGId: string
  addressId: string
  age: string
  petSize: string
  energyLevel: number
  independencyLevel: number
  environment: string
  images: string[]
  address: Address
  requirements: Requirement[]
}
