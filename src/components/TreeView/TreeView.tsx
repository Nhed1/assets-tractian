import { Input } from 'components/Input'
import { ArrowIcon } from './assets/ArrowIcon'
import { INode } from './interfaces/node'
import { TreeProvider } from './providers/TreeProvider'
import { useTreeContext } from './providers/useTreeContext'
import { SearchIcon } from 'features/Assets/assets/SearchIcon'
import { useEffect, useState } from 'react'
import { TFilter } from 'features/Assets/interfaces/filter'

export function TreeView({
  initialData,
  selectNode,
  node,
  filter
}: {
  initialData: INode[]
  selectNode: (node: INode) => void
  node?: INode
  filter: TFilter
}) {
  return (
    <TreeProvider initialData={initialData} selectNode={selectNode} node={node}>
      <TreeViewContent filter={filter} />
    </TreeProvider>
  )
}

const TreeViewContent = ({ filter }: { filter: TFilter }) => {
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

      <div className="max-h-[500px] overflow-auto">
        {state.map((node) => (
          <TreeNode key={node.id} node={node} />
        ))}
      </div>
    </div>
  )
}

const TreeNode = ({ node }: { node: INode }) => {
  const { dispatch, selectNode, node: nodeSelected } = useTreeContext()

  return (
    <div className={`flex-col py-1 ${!node.isHighlight && 'hidden'}`}>
      <div className="flex items-center space-x-1 pl-2">
        {node.children?.length !== 0 && (
          <button
            onClick={() =>
              dispatch({
                type: 'TOGGLE_NODE',
                id: node.id,
                isExpanded: !node.isExpanded
              })
            }
          >
            <ArrowIcon isUp={node.isExpanded} />
          </button>
        )}

        <div
          className={`flex w-full items-center pt-1  ${
            node.sufix && 'cursor-pointer '
          } ${nodeSelected?.id === node.id && 'bg-blue-500 text-white'}`}
          onClick={() => {
            if (node.sufix) selectNode(node)
          }}
        >
          <div
            className={`${
              node.sufix && nodeSelected?.id === node.id
                ? 'text-white'
                : 'text-blue-500'
            }`}
          >
            {node.prefix}
          </div>
          <p>{node.name}</p>
          <div className="pl-2">{node.sufix}</div>
        </div>
      </div>
      {node.isExpanded && (
        <div style={{ marginLeft: '20px' }}>
          {node.children?.map((child) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  )
}
