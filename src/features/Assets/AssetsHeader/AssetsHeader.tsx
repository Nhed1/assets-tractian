import { AssetStatus } from './AssetStatus'

export function AssetsHeader() {
  return (
    <header className="flex h-12 items-center justify-between">
      <div className="flex items-center">
        <p className="text-lg font-semibold">Ativos</p>
        <p>/ company name</p>
      </div>

      <div className="flex space-x-2">
        <AssetStatus type="powerSensor" isActive />
        <AssetStatus type="critical" />
      </div>
    </header>
  )
}
