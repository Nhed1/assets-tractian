import { useQuery } from '@tanstack/react-query'
import { ICompany } from 'features/Assets/interfaces/companies'
import { tractianApi } from 'service/tractianApi'

const COMPANIES_QUERY_KEY = 'companies'

async function getCompanies() {
  const companies = await tractianApi.get('/companies')

  return companies.data
}

export function useGetCompanies() {
  return useQuery<ICompany[]>({
    queryKey: [COMPANIES_QUERY_KEY],
    queryFn: getCompanies
  })
}
