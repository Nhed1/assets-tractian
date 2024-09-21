import { useCompanyContext } from '../providers'
import { AssetStatus } from './AssetStatus'

export function AssetsHeader() {
  const { companySelected } = useCompanyContext()

  return (
    <header className="flex h-12 items-center justify-between">
      <div className="flex items-center space-x-2">
        <p className="text-lg font-semibold">Ativos</p>
        {companySelected && (
          <p className="text-gray-600">/ {companySelected?.name}</p>
        )}
      </div>

      <div className="flex space-x-2">
        <AssetStatus type="powerSensor" isActive />
        <AssetStatus type="critical" />
      </div>
    </header>
  )
}
