import { useQuery } from '@tanstack/react-query'
import { ILocation } from 'features/Assets/interfaces/locations'
import { tractianApi } from 'service/tractianApi'

const LOCATIONS_QUERY_KEY = 'locations'

async function getLocations(companyId?: string) {
  const companies = await tractianApi.get(`${companyId}/locations`)

  return companies.data
}

export function useGetLocations(companyId?: string) {
  return useQuery<ILocation[]>({
    queryKey: [LOCATIONS_QUERY_KEY],
    queryFn: () => getLocations(companyId),
    enabled: !!companyId
  })
}
