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
    nodes.forEach((node) => {
      let matchesFilter = true

      if (isStatusAlert) {
        matchesFilter = node.status === 'alert'
      }

      if (isSensorTypeEnergy) {
        matchesFilter = matchesFilter && node.sensorType === 'energy'
      }

      node.matchesFilter = matchesFilter

      if (node.matchesSearch === undefined) {
        node.matchesSearch = true
      }

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

  const searchNodesAndUpdateHighlight = (
    nodes: INode[],
    query: string
  ): INode[] => {
    nodes.forEach((node) => {
      const matchesSearch =
        query.length > 0
          ? node.name.toLowerCase().includes(query.toLowerCase())
          : true

      node.matchesSearch = matchesSearch

      if (node.matchesFilter === undefined) {
        node.matchesFilter = true
      }

      if (node.children) {
        searchNodesAndUpdateHighlight(node.children, query)
      }
    })

    return nodes
  }

  const updateHighlightBasedOnSearchAndFilter = (nodes: INode[]): INode[] => {
    nodes.forEach((node) => {
      node.isHighlight = node.matchesFilter && node.matchesSearch

      if (node.children) {
        updateHighlightBasedOnSearchAndFilter(node.children)
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

      case 'TOGGLE_NODE': {
        return toggleNode(state, action.id, action.isExpanded)
      }

      case 'SEARCH': {
        const searchedState = searchNodesAndUpdateHighlight(
          [...state],
          action.query
        )
        return updateHighlightBasedOnSearchAndFilter(searchedState)
      }

      case 'FILTER': {
        const filteredState = filterNodesByStatusAndSensorType(
          [...state],
          action.isStatusAlert,
          action.isSensorTypeEnergy
        )
        return updateHighlightBasedOnSearchAndFilter(filteredState)
      }

      default:
        return state
    }
  }

  return {
    treeReducer
  }
}
