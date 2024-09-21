import { ArrowIcon } from './assets/ArrowIcon'
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
    <div className="flex-col py-3">
      <div className="flex items-center space-x-1 pl-2">
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
            <ArrowIcon isUp={node.isExpanded} />
          </button>
        )}

        {node.prefix}
        <p>{node.name}</p>
        <div className="pl-1 pt-1">{node.sufix}</div>
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
