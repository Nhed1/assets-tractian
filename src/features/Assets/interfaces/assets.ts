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
  isHighlight?: boolean
  prefix?: ReactElement
  sufix?: ReactElement
}
