import { TractianIcon } from 'assets/icons'
import { MenuButton } from './MenuButton'
import { ICompany } from 'interfaces/companies'
import { Dispatch, SetStateAction } from 'react'

interface IHeader {
  companySelected: ICompany | undefined
  setCompanySelected: Dispatch<SetStateAction<ICompany | undefined>>
}

const COMPANIES = [
  {
    id: '662fd0ee639069143a8fc387',
    name: 'Jaguar'
  },
  {
    id: '662fd0fab3fd5656edb39af5',
    name: 'Tobias'
  },
  {
    id: '662fd100f990557384756e58',
    name: 'Apex'
  }
]

export function Header({ companySelected, setCompanySelected }: IHeader) {
  const selectCompany = (company: ICompany) => {
    setCompanySelected(company)
  }

  return (
    <header className="flex h-12 items-center justify-between bg-blue-900 px-4 py-8 text-white">
      <TractianIcon />

      <div className="flex gap-3">
        {COMPANIES.map((company) => (
          <MenuButton
            selectCompany={selectCompany}
            company={company}
            key={company.id}
            isSelected={company.id === companySelected?.id}
          />
        ))}
      </div>
    </header>
  )
}
