import { CompanyIcon } from 'assets/icons'

interface IMenuButton {
  name: string
  isSelected?: boolean
}

export function MenuButton({ name, isSelected }: IMenuButton) {
  return (
    <button
      className={`${
        isSelected ? 'bg-blue-500' : 'bg-blue-700'
      } flex items-center space-x-2 rounded px-2 py-1 text-sm text-white`}
    >
      <CompanyIcon />

      <p>{name}</p>
    </button>
  )
}
