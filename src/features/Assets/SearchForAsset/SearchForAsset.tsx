import { TreeView } from 'components/TreeView'

import { Input } from 'components/Input'
import { SearchIcon } from '../assets/SearchIcon'
import { useCompanyContext } from '../providers'
import { useFormatAssetsTree } from './hooks/useFormatAssetsTree'

export function SearchForAsset() {
  const { companySelected } = useCompanyContext()
  const { locationsTree } = useFormatAssetsTree(companySelected?.id)

  return (
    <div className="flex w-1/3 flex-col border border-gray-400">
      <Input
        type="text"
        placeholder="Buscar Ativo ou Local"
        sufix={<SearchIcon />}
      />

      {locationsTree && <TreeView initialData={locationsTree} />}
    </div>
  )
}
