import { TractianIcon } from 'assets/icons/TractianIcon'
import { MenuButton } from './MenuButton'
import { ICompany } from 'features/Assets/interfaces/companies'
import { Dispatch, SetStateAction } from 'react'
import { useGetCompanies } from '../hooks'
import { Loading } from 'components/Loading'

interface IHeader {
  companySelected: ICompany | undefined
  setCompanySelected: Dispatch<SetStateAction<ICompany | undefined>>
}

export function Header({ companySelected, setCompanySelected }: IHeader) {
  const {
    data: companies = [],
    isPending,
    isError,
    refetch
  } = useGetCompanies()

  const selectCompany = (company: ICompany) => {
    setCompanySelected(company)
  }

  return (
    <header className="flex h-12 items-center justify-between bg-blue-900 px-4 py-8 text-white">
      <TractianIcon />

      <div className="flex gap-3">
        {isPending && <Loading />}

        {isError && (
          <button
            className="rounded border border-white p-2 font-bold"
            onClick={() => refetch()}
          >
            Tente novamente
          </button>
        )}

        {companies.map((company) => (
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
