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

interface ORG {
  id: string
  name: string
  email: string
  phone: string
  password_hash: string
  addressId: string
}

interface Pet {
  id: string
  name: string
  description: string
  oRGId: string
  org: ORG
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
