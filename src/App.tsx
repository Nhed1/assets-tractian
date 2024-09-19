import './style.css'
import { Header } from 'components/Header'
import { useState } from 'react'
import { ICompany } from 'interfaces/companies'

function App() {
  const [companySelected, setCompanySelected] = useState<ICompany | undefined>()

  return (
    <div>
      <Header
        companySelected={companySelected}
        setCompanySelected={setCompanySelected}
      />
    </div>
  )
}

export default App
