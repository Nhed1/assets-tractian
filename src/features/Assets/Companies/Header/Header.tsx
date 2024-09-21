import { TractianIcon } from 'assets/icons/TractianIcon'
import { MenuButton } from './MenuButton'
import { useGetCompanies } from '../hooks'
import { Loading } from 'components/Loading'

export function Header() {
  const {
    data: companies = [],
    isPending,
    isError,
    refetch
  } = useGetCompanies()

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
          <MenuButton company={company} key={company.id} />
        ))}
      </div>
    </header>
  )
}
