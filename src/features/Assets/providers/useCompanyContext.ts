import { useContext } from 'react'
import { CompanyContext } from './CompanyProvider'

export function useCompanyContext() {
  const context = useContext(CompanyContext)

  if (!context) {
    throw new Error('useCompanyContext must be used within a CompanyProvider')
  }

  return context
}
