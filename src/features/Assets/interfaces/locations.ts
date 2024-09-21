import { ReactElement } from 'react'

export interface ILocation {
  id: string
  name: string
  parentId?: string
  prefix?: ReactElement
}
