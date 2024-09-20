import './style.css'
import { Header } from 'components/Header'
import { useState } from 'react'
import { ICompany } from 'interfaces/companies'
import { Container } from 'components/Assets/Container'

function App() {
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

export default App
