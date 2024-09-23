import { INode, TreeAction } from '../interfaces/node'

interface INodeAsset extends INode {
  status?: 'alert'
  sensorType?: 'energy'
}

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

  const filterNodesByStatusAndSensorType = (
    nodes: INodeAsset[],
    isStatusAlert: boolean,
    isSensorTypeEnergy: boolean
  ): INode[] => {
    if (!isStatusAlert && !isSensorTypeEnergy) {
      nodes.forEach((node) => {
        node.isHighlight = true
        if (node.children) {
          filterNodesByStatusAndSensorType(
            node.children,
            isStatusAlert,
            isSensorTypeEnergy
          )
        }
      })
      return nodes
    }

    nodes.forEach((node) => {
      let shouldHighlight = false

      if (isStatusAlert) {
        shouldHighlight = node.status === 'alert'
      }

      if (isSensorTypeEnergy) {
        shouldHighlight = node.sensorType === 'energy'
      }

      node.isHighlight = shouldHighlight

      if (node.children) {
        filterNodesByStatusAndSensorType(
          node.children,
          isStatusAlert,
          isSensorTypeEnergy
        )
        if (node.children.some((child) => child.isHighlight)) {
          node.isHighlight = true
        }
      }
    })

    return nodes
  }

  const searchNodesAndUpdateHighlight = (
    nodes: INode[],
    query: string
  ): INode[] => {
    if (!query) {
      nodes.forEach((node) => {
        node.isHighlight = true
        if (node.children) {
          searchNodesAndUpdateHighlight(node.children, query)
        }
      })
      return nodes
    }

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
      case 'SEARCH':
        return searchNodesAndUpdateHighlight(state, action.query)
      case 'FILTER':
        return filterNodesByStatusAndSensorType(
          [...state],
          action.isStatusAlert,
          action.isSensorTypeEnergy
        )
      default:
        return state
    }
  }

  return {
    treeReducer
  }
}
