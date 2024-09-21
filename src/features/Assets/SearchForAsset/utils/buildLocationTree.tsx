import { AssetIcon } from 'features/Assets/assets/AssetIcon'
import { ComponentIcon } from 'features/Assets/assets/ComponentIcon'
import { LocationIcon } from 'features/Assets/assets/LocationIcon'
import { PowerStatusIcon } from 'features/Assets/assets/PowerStatusIcon'
import { StatusIcon } from 'features/Assets/assets/StatusIcon'
import { IAsset } from 'features/Assets/interfaces/assets'
import { ILocation } from 'features/Assets/interfaces/locations'

interface ILocationTree extends ILocation {
  children?: ILocationTree[]
}

interface IAssetTree extends IAsset {
  children?: IAssetTree[]
}

export function buildLocationAssetsTree(
  locations?: ILocation[],
  assets?: IAsset[]
): ILocationTree[] | undefined {
  if (!locations || !assets) return undefined

  const rootLocations: ILocationTree[] = []

  const locationMap: { [key: string]: ILocationTree } = {}
  const assetMap: { [key: string]: IAssetTree } = {}

  locations.forEach((location) => {
    locationMap[location.id] = {
      ...location,
      prefix: <LocationIcon />,
      children: []
    }
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

  assets?.forEach((asset) => {
    assetMap[asset.id] = { ...asset, children: [] }

    if (asset.sensorType) {
      assetMap[asset.id].prefix = <ComponentIcon />

      if (asset.sensorType === 'energy') {
        assetMap[asset.id].sufix = (
          <PowerStatusIcon isError={asset.status === 'alert'} />
        )
      }

      if (asset.sensorType === 'vibration') {
        assetMap[asset.id].sufix = (
          <StatusIcon isError={asset.status === 'alert'} />
        )
      }
    } else {
      assetMap[asset.id].prefix = <AssetIcon />
    }

    if (!asset.locationId && !asset.parentId) {
      rootLocations.push(assetMap[asset.id] as ILocationTree)
    }
  })

  assets?.forEach((asset) => {
    if (asset.locationId && !asset.sensorType) {
      const parentLocation = locationMap[asset.locationId]
      if (parentLocation) {
        parentLocation.children?.push(assetMap[asset.id] as ILocationTree)
      }
    }

    if (asset.parentId && !asset.sensorType) {
      const parentAsset = assetMap[asset.parentId]
      if (parentAsset) {
        parentAsset.children?.push(assetMap[asset.id])
      }
    }

    if (asset.sensorType) {
      if (asset.locationId) {
        const parentLocation = locationMap[asset.locationId]
        if (parentLocation) {
          parentLocation.children?.push(assetMap[asset.id] as ILocationTree)
        }
      } else if (asset.parentId) {
        const parentAsset = assetMap[asset.parentId]
        if (parentAsset) {
          parentAsset.children?.push(assetMap[asset.id])
        }
      }
    }
  })

  return rootLocations
}
