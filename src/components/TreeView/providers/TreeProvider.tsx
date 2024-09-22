import { ReactElement, useEffect, useReducer, useRef } from 'react'
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
  const prevDataRef = useRef<INode[]>([])

  useEffect(() => {
    const refKeys = Object.keys(prevDataRef.current)
    const initialDataKeys = Object.keys(initialData)

    if (refKeys.length !== initialDataKeys.length) {
      dispatch({ type: 'INIT_DATA', data: initialData })
      prevDataRef.current = initialData
    }
  }, [initialData])

  return (
    <TreeContext.Provider value={{ state, dispatch, selectNode, node }}>
      {children}
    </TreeContext.Provider>
  )
}
