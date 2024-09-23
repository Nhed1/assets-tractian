import { INode } from './interfaces/node'
import { TreeProvider } from './providers/TreeProvider'
import { TFilter } from 'features/Assets/interfaces/filter'
import { TreeContent } from './TreeContent'

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
      <TreeContent filter={filter} />
    </TreeProvider>
  )
}
