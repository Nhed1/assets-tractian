import { ReactElement, useReducer } from 'react'
import { useTree } from '../hooks/useTree'
import { TreeContext } from './useTreeContext'
import { INode } from '../interfaces/node'

export const TreeProvider = ({
  children,
  initialData,
  selectNode,
  node
}: {
  children: ReactElement
  initialData: INode[]
  selectNode: (node: INode) => void
  node?: INode
}) => {
  const { treeReducer } = useTree()
  const [state, dispatch] = useReducer(treeReducer, initialData)

  return (
    <TreeContext.Provider value={{ state, dispatch, selectNode, node }}>
      {children}
    </TreeContext.Provider>
  )
}
