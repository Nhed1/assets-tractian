import { useState } from 'react'
import { AssetPanel } from '../AssetPanel/AssetPanel'
import { AssetsHeader } from '../AssetsHeader/AssetsHeader'
import { SearchForAsset } from '../SearchForAsset'
import { ComponentProvider } from './providers'

export function Container() {
  const [filter, setFilter] = useState<'energy' | 'alert' | null>(null)

  return (
    <div className="h-full bg-white p-4">
      <AssetsHeader filter={filter} setFilter={setFilter} />

      <div className="mt-4 flex h-[calc(100vh-12rem)] w-full space-x-3 pb-4">
        <ComponentProvider>
          <SearchForAsset filter={filter} />
          <AssetPanel />
        </ComponentProvider>
      </div>
    </div>
  )
}
