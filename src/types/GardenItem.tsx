export type GardenItem = {
  gardenId: string,
  user: {
    id: string
    username: string
    hibernateLazyInitializer: Object
    new: boolean
  }
  plantIdentifier: string,
  plant: {
    id: string,
    name: string,
    plantRarity: string
  }
  seedIdentifier: string
  quantity: number
}