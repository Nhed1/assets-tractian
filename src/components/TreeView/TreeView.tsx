import { ArrowIcon } from './assets/ArrowIcon'
import { INode } from './interfaces/node'
import { TreeProvider } from './providers/TreeProvider'
import { useTreeContext } from './providers/useTreeContext'

export function TreeView({
  initialData,
  selectNode,
  node
}: {
  initialData: INode[]
  selectNode: (node: INode) => void
  node?: INode
}) {
  return (
    <TreeProvider initialData={initialData} selectNode={selectNode} node={node}>
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
  const { dispatch, selectNode, node: nodeSelected } = useTreeContext()

  return (
    <div className="flex-col py-1">
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
