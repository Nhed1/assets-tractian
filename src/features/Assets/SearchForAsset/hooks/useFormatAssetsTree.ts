import { ILocation } from 'features/Assets/interfaces/locations'
// import { useGetAssets } from './useGetAssets'
import { useGetLocations } from './useGetLocations'

interface ILocationTree extends ILocation {
  children?: ILocationTree[]
}

export function useFormatAssetsTree(companyId?: string) {
  const { data: locations } = useGetLocations(companyId)

  function buildLocationTree(
    locations?: ILocation[]
  ): ILocationTree[] | undefined {
    if (!locations) return undefined

    const locationMap: { [key: string]: ILocationTree } = {}
    const rootLocations: ILocationTree[] = []

    locations.forEach((location) => {
      locationMap[location.id] = { ...location, children: [] }
    })

    locations.forEach((location) => {
      if (location.parentId) {
        const parent = locationMap[location.parentId]
        if (parent) {
          parent.children?.push(locationMap[location.id])
        }
      } else {
        rootLocations.push(locationMap[location.id])
      }
    })

    return rootLocations
  }

  const locationsTree = buildLocationTree(locations)

  return {
    locationsTree
  }
}
