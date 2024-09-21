import { useQuery } from '@tanstack/react-query'
import { IAsset } from 'features/Assets/interfaces/assets'
import { tractianApi } from 'service/tractianApi'

const ASSETS_QUERY_KEY = 'assets'

async function getAssets(companyId?: string) {
  const companies = await tractianApi.get(`${companyId}/assets`)

  return companies.data
}

export function useGetAssets(companyId?: string) {
  return useQuery<IAsset[]>({
    queryKey: [ASSETS_QUERY_KEY],
    queryFn: () => getAssets(companyId),
    enabled: !!companyId
  })
}
