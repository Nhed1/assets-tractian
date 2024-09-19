import { TractianIcon } from 'assets/icons'

export function Header() {
  return (
    <header className="flex h-12 items-center justify-between bg-blue-900 px-4 py-[16px] text-white">
      <TractianIcon />

      <div className="flex gap-3">companies</div>
    </header>
  )
}
