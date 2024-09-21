import { useGetLocations } from './useGetLocations'
import { useGetAssets } from './useGetAssets'
import { buildLocationAssetsTree } from '../utils/buildLocationTree'

export function useFormatAssetsTree(companyId?: string) {
  const { data: locations } = useGetLocations(companyId)
  const { data: assets } = useGetAssets(companyId)

  const assetsTree = buildLocationAssetsTree(locations, assets)

  return {
    assetsTree
  }
}
