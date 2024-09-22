import { TreeView } from 'components/TreeView'

import { useFormatAssetsTree } from './hooks/useFormatAssetsTree'
import { Loading } from 'components/Loading'
import { INode } from 'components/TreeView/interfaces/node'
import { useCompanyContext } from '../providers'
import { useComponentContext } from '../Container/providers'

export function SearchForAsset() {
  const { companySelected } = useCompanyContext()
  const { componentSelected, setComponentSelected } = useComponentContext()
  const { assetsTree, isLoadingTree } = useFormatAssetsTree(companySelected?.id)

  return (
    <div className="flex w-2/5 flex-col border border-gray-400">
      {isLoadingTree && (
        <div className="mt-6 flex flex-1 justify-center">
          <Loading />
        </div>
      )}

      {assetsTree && !isLoadingTree && (
        <TreeView
          initialData={assetsTree}
          selectNode={setComponentSelected as (component: INode) => void}
          node={componentSelected}
        />
      )}
    </div>
  )
}
