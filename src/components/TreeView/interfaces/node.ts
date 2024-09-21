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
  | { type: 'EXPAND_ALL' }
  | { type: 'COLLAPSE_ALL' }
  | { type: 'SEARCH'; query: string }
