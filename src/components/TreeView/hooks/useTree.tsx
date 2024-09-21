import { INode, TreeAction } from '../interfaces/node'

export const useTree = () => {
  const toggleNode = (
    nodes: INode[],
    id: string,
    expanded: boolean
  ): INode[] => {
    return nodes.map((node) => {
      if (node.id === id) {
        return { ...node, isExpanded: expanded }
      }
      if (node.children) {
        return { ...node, children: toggleNode(node.children, id, expanded) }
      }

      return node
    })
  }

  const updateAllNodes = (nodes: INode[], isExpanded: boolean): INode[] => {
    return nodes.map((node) => {
      if (node.children) {
        return {
          ...node,
          isExpanded,
          children: updateAllNodes(node.children, isExpanded)
        }
      }
      return { ...node, isExpanded }
    })
  }

  const searchNodesAndUpdateHighlight = (
    nodes: INode[],
    query: string
  ): INode[] => {
    nodes.forEach((node) => {
      const shouldHighlight =
        query.length > 0
          ? node.name.toLowerCase().includes(query.toLowerCase())
          : false

      node.isHighlight = shouldHighlight

      if (node.children) {
        searchNodesAndUpdateHighlight(node.children, query)
        if (node.children.some((child) => child.isHighlight)) {
          node.isHighlight = true
        }
      }
    })

    return nodes
  }

  const treeReducer = (state: INode[], action: TreeAction) => {
    switch (action.type) {
      case 'INIT_DATA':
        return action.data
      case 'TOGGLE_NODE':
        return toggleNode(state, action.id, action.isExpanded)
      case 'EXPAND_ALL':
        return updateAllNodes(state, true)
      case 'COLLAPSE_ALL':
        return updateAllNodes(state, false)
      case 'SEARCH':
        return searchNodesAndUpdateHighlight(state, action.query)
      default:
        return state
    }
  }

  return {
    treeReducer
  }
}
