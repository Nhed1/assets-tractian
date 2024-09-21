import { AssetsHeader } from './AssetsHeader/AssetsHeader'
import { SearchForAsset } from './SearchForAsset'

export function Container() {
  return (
    <div className="h-full bg-white p-4">
      <AssetsHeader />

      <SearchForAsset />
    </div>
  )
}
