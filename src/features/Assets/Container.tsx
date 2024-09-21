import { AssetPanel } from './AssetPanel/AssetPanel'
import { AssetsHeader } from './AssetsHeader/AssetsHeader'
import { SearchForAsset } from './SearchForAsset'

export function Container() {
  return (
    <div className="h-full bg-white p-4">
      <AssetsHeader />

      <div className="mt-4 flex h-[calc(100%-3rem)] w-full space-x-3 pb-4">
        <SearchForAsset />
        <AssetPanel />
      </div>
    </div>
  )
}
