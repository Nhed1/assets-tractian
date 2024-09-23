import { Mock } from 'vitest'
import { Header } from 'features/Assets/Companies/Header'
import { screen, render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CompanyProvider } from 'features/Assets/providers'

vi.mock('features/Assets/Companies/hooks', () => ({
  useGetCompanies: vi.fn()
}))

vi.mock('assets/icons/TractianIcon', () => ({
  TractianIcon: () => <svg data-testid="tractian-icon" />
}))

const mockCompanies = async (
  companies: { id: string; name: string }[],
  isPending?: boolean
) => {
  const { useGetCompanies } = await import('features/Assets/Companies/hooks')

  const mockUseGetCompanies = useGetCompanies as Mock

  mockUseGetCompanies.mockReturnValue({
    data: companies,
    isPending: isPending,
    isError: false,
    refetch: vi.fn()
  })
}

const queryClient = new QueryClient()
const renderHeader = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <CompanyProvider>
        <Header />
      </CompanyProvider>
    </QueryClientProvider>
  )

describe('Header', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should render Tractian Icon', async () => {
    await mockCompanies([
      { id: '1', name: 'company 1' },
      { id: '2', name: 'company 2' },
      { id: '3', name: 'company 3' }
    ])

    renderHeader()

    screen.debug()

    expect(screen.getByTestId('tractian-icon')).toBeInTheDocument()
  })

  it('should render companies buttons', async () => {
    await mockCompanies([
      { id: '1', name: 'company 1' },
      { id: '2', name: 'company 2' },
      { id: '3', name: 'company 3' }
    ])

    renderHeader()

    const buttons = screen.getAllByTestId('company-button')
    expect(buttons).toHaveLength(3)
  })

  it('should show loading icon when companies are still loading', async () => {
    await mockCompanies([{ id: '1', name: 'company 1' }], true)

    renderHeader()

    const loading = screen.getByRole('status')
    expect(loading).toBeInTheDocument()
  })
})
