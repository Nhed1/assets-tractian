import { ReactElement } from 'react'

export interface IAsset {
  id: string
  name: string
  sensorId: string
  sensorType: 'vibration' | 'energy'
  status: 'operating ' | 'alert'
  gatewayId: string
  parentId?: string
  locationId?: string
  prefix?: ReactElement
  sufix?: ReactElement
}
