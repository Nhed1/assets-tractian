import { useContext } from 'react'
import { ComponentContext } from './ComponentProvider'

export function useComponentContext() {
  const context = useContext(ComponentContext)

  if (!context) {
    throw new Error('useComponentContext must be used within a CompanyProvider')
  }

  return context
}
