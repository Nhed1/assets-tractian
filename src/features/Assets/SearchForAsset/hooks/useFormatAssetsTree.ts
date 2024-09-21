import { useGetLocations } from './useGetLocations'
import { useGetAssets } from './useGetAssets'
import { buildLocationAssetsTree } from '../utils/buildLocationTree'

export function useFormatAssetsTree(companyId?: string) {
  const { data: locations, isLoading: isLoadingLocations } =
    useGetLocations(companyId)
  const { data: assets, isLoading: isLoadingAssets } = useGetAssets(companyId)

  const assetsTree = buildLocationAssetsTree(locations, assets)

  return {
    assetsTree,
    isLoadingTree: isLoadingLocations || isLoadingAssets
  }
}
