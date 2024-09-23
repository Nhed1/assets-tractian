import { ICompany } from 'features/Assets/interfaces/companies'
import { CompanyIcon } from '../assets/CompanyIcon'
import { useCompanyContext } from 'features/Assets/providers'

interface IMenuButton {
  company: ICompany
}

export function MenuButton({ company }: IMenuButton) {
  const { companySelected, setCompanySelected } = useCompanyContext()
  const isSelected = companySelected?.id === company.id

  return (
    <button
      data-testid="company-button"
      onClick={() => setCompanySelected(company)}
      className={`${
        isSelected ? 'bg-blue-500' : 'bg-blue-700'
      } flex items-center space-x-2 rounded px-2 py-1 text-sm text-white`}
    >
      <CompanyIcon />

      <p>{company.name}</p>
    </button>
  )
}
