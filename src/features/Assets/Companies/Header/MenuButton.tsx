import { ICompany } from 'features/Assets/interfaces/companies'
import { CompanyIcon } from '../assets/CompanyIcon'

interface IMenuButton {
  company: ICompany
  isSelected?: boolean
  selectCompany: (company: ICompany) => void
}

export function MenuButton({
  company,
  isSelected,
  selectCompany
}: IMenuButton) {
  return (
    <button
      onClick={() => selectCompany(company)}
      className={`${
        isSelected ? 'bg-blue-500' : 'bg-blue-700'
      } flex items-center space-x-2 rounded px-2 py-1 text-sm text-white`}
    >
      <CompanyIcon />

      <p>{company.name}</p>
    </button>
  )
}
