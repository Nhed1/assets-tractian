import { TFilter } from '../interfaces/filter'
import { useCompanyContext } from '../providers'
import { AssetStatus } from './AssetStatus'

export function AssetsHeader({
  filter,
  setFilter
}: {
  filter: TFilter
  setFilter: (filter: TFilter) => void
}) {
  const { companySelected } = useCompanyContext()

  const handleFilterClick = (type: TFilter) => {
    setFilter(filter === type ? null : type)
  }

  return (
    <header className="flex h-12 items-center justify-between">
      <div className="flex items-center space-x-2">
        <p className="text-lg font-semibold">Ativos</p>
        {companySelected && (
          <p className="text-gray-600">/ {companySelected?.name}</p>
        )}
      </div>

      <div className="flex space-x-2">
        <AssetStatus
          type="energy"
          isActive={filter === 'energy'}
          onClick={() => handleFilterClick('energy')}
        />

        <AssetStatus
          type="alert"
          isActive={filter === 'alert'}
          onClick={() => handleFilterClick('alert')}
        />
      </div>
    </header>
  )
}
