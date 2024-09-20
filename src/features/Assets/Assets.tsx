import { useState } from 'react'
import { Header } from './Companies/Header'
import { ICompany } from './interfaces/companies'
import { Container } from './Container'

export function Assets() {
  const [companySelected, setCompanySelected] = useState<ICompany | undefined>()

  return (
    <div className="flex h-screen flex-col">
      <Header
        companySelected={companySelected}
        setCompanySelected={setCompanySelected}
      />

      <div className="flex-1 bg-gray-400 p-4">
        <Container />
      </div>
    </div>
  )
}
