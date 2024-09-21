import { createContext, ReactNode, useState } from 'react'
import { ICompany } from '../interfaces/companies'

interface ICompanyContext {
  companySelected: ICompany | undefined
  setCompanySelected: (company: ICompany | undefined) => void
}

export const CompanyContext = createContext<ICompanyContext | undefined>(
  undefined
)

export function CompanyProvider({ children }: { children: ReactNode }) {
  const [companySelected, setCompanySelected] = useState<ICompany | undefined>()

  return (
    <CompanyContext.Provider value={{ companySelected, setCompanySelected }}>
      {children}
    </CompanyContext.Provider>
  )
}
