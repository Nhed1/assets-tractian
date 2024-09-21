import { createContext, Dispatch, useContext } from 'react'
import { INode, TreeAction } from '../interfaces/node'

interface ITreeContext {
  state: INode[]
  dispatch: Dispatch<TreeAction>
}

export const TreeContext = createContext<ITreeContext | null>(null)

export const useTreeContext = () => {
  const context = useContext(TreeContext)

  if (!context) {
    throw new Error('useTreeContext must be used within a TreeProvider')
  }

  return context
}
