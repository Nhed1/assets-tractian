import { render, screen, fireEvent } from '@testing-library/react'
import { useTreeContext } from 'components/TreeView/providers/useTreeContext'
import { TreeContent } from 'components/TreeView/TreeContent'
import { Mock } from 'vitest'

vi.mock('components/TreeView/providers/useTreeContext')

describe('TreeContent', () => {
  const mockDispatch = vi.fn()

  const mockState = [
    { id: 1, name: 'Asset 1' },
    { id: 2, name: 'Asset 2' }
  ]

  beforeEach(() => {
    ;(useTreeContext as Mock).mockReturnValue({
      state: mockState,
      dispatch: mockDispatch
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should render search input and tree nodes', () => {
    render(<TreeContent filter="energy" />)

    expect(
      screen.getByPlaceholderText('Buscar Ativo ou Local')
    ).toBeInTheDocument()

    expect(screen.getByText('Asset 1')).toBeInTheDocument()
    expect(screen.getByText('Asset 2')).toBeInTheDocument()
  })

  it('should dispatch search query when typing in search input', () => {
    render(<TreeContent filter="energy" />)

    const searchInput = screen.getByPlaceholderText('Buscar Ativo ou Local')

    fireEvent.change(searchInput, { target: { value: 'Asset 1' } })

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'SEARCH',
      query: 'Asset 1'
    })
  })

  it('should toggle nodes when clicked', () => {
    render(<TreeContent filter="alert" />)
    const toggleNode = screen.getAllByTestId('toggle-node')

    fireEvent.click(toggleNode[0])

    screen.debug()

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'TOGGLE_NODE',
      id: 1,
      isExpanded: true
    })
  })
})
