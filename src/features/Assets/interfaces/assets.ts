import { ReactElement } from 'react'

export interface IAsset {
  id: string
  name: string
  sensorId: string
  sensorType: string
  status: string
  gatewayId: string
  parentId?: string
  locationId?: string
  prefix?: ReactElement
  sufix?: ReactElement
}
