import { TreeView } from 'components/TreeView'

import { Input } from 'components/Input'
import { SearchIcon } from '../assets/SearchIcon'
import { useCompanyContext } from '../providers'
import { useFormatAssetsTree } from './hooks/useFormatAssetsTree'
import { Loading } from 'components/Loading'
import { useState } from 'react'
import { INode } from 'components/TreeView/interfaces/node'

export function SearchForAsset() {
  const { companySelected } = useCompanyContext()
  const { assetsTree, isLoadingTree } = useFormatAssetsTree(companySelected?.id)
  const [node, setNode] = useState<INode>()

  return (
    <div className="flex w-2/5 flex-col border border-gray-400">
      <Input
        type="text"
        placeholder="Buscar Ativo ou Local"
        sufix={<SearchIcon />}
      />

      {isLoadingTree && (
        <div className="mt-6 flex flex-1 justify-center">
          <Loading />
        </div>
      )}

      {assetsTree && !isLoadingTree && (
        <TreeView initialData={assetsTree} selectNode={setNode} node={node} />
      )}
    </div>
  )
}
