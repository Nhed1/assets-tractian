import { ReactElement } from 'react'

export interface INode {
  id: string
  name: string
  sufix?: ReactElement
  prefix?: ReactElement
  isHighlight?: boolean
  isExpanded?: boolean
  children?: INode[]
}

export type TreeAction =
  | { type: 'INIT_DATA'; data: INode[] }
  | { type: 'TOGGLE_NODE'; id: string; isExpanded: boolean }
  | { type: 'SEARCH'; query: string }
  | { type: 'FILTER'; isStatusAlert: boolean; isSensorTypeEnergy: boolean }
