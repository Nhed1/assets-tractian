import { TractianIcon } from 'assets/icons'
import { MenuButton } from './MenuButton'

export function Header() {
  return (
    <header className="flex h-12 items-center justify-between bg-blue-900 px-4 py-8 text-white">
      <TractianIcon />

      <div className="flex gap-3">
        {['company 1', 'company 2'].map((company) => (
          <MenuButton name={company} key={company} />
        ))}
      </div>
    </header>
  )
}
