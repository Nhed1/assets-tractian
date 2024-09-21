import { INode } from './interfaces/node'
import { TreeProvider } from './providers/TreeProvider'
import { useTreeContext } from './providers/useTreeContext'

export function TreeView({ initialData }: { initialData: INode[] }) {
  return (
    <TreeProvider initialData={initialData}>
      <TreeViewContent />
    </TreeProvider>
  )
}

const TreeViewContent = () => {
  const { state } = useTreeContext()

  return (
    <div>
      {state.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  )
}

const TreeNode = ({ node }: { node: INode }) => {
  const { dispatch } = useTreeContext()

  return (
    <div style={{ color: node.isHighlight ? 'red' : 'initial' }}>
      {node.children && (
        <button
          onClick={() =>
            dispatch({
              type: 'TOGGLE_NODE',
              id: node.id,
              isExpanded: !node.isExpanded
            })
          }
        >
          {node.isExpanded ? '⮝' : '⮟'}
        </button>
      )}
      <span>{node.name}</span>
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
