import { useEffect, useState } from 'react'
import { useTreeContext } from './providers/useTreeContext'
import { TFilter } from 'features/Assets/interfaces/filter'
import { Input } from 'components/Input'
import { SearchIcon } from 'features/Assets/assets/SearchIcon'
import { TreeNode } from './TreeNode'

export function TreeContent({ filter }: { filter: TFilter }) {
  const { state, dispatch } = useTreeContext()
  const [search, setSearch] = useState('')
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value
    setSearch(search)

    dispatch({ type: 'SEARCH', query: search })
  }

  useEffect(() => {
    dispatch({
      type: 'FILTER',
      isSensorTypeEnergy: filter === 'energy',
      isStatusAlert: filter === 'alert'
    })
  }, [filter, dispatch])

  return (
    <div>
      <Input
        type="text"
        value={search}
        placeholder="Buscar Ativo ou Local"
        onChange={handleSearch}
        sufix={<SearchIcon />}
      />

      <div>
        {state.map((node) => (
          <TreeNode key={node.id} node={node} />
        ))}
      </div>
    </div>
  )
}
