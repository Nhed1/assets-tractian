import { ReactElement, useReducer } from 'react'
import { useTree } from '../hooks/useTree'
import { TreeContext } from './useTreeContext'
import { INode } from '../interfaces/node'

export const TreeProvider = ({
  children,
  initialData
}: {
  children: ReactElement
  initialData: INode[]
}) => {
  const { treeReducer } = useTree()
  const [state, dispatch] = useReducer(treeReducer, initialData)

  return (
    <TreeContext.Provider value={{ state, dispatch }}>
      {children}
    </TreeContext.Provider>
  )
}
