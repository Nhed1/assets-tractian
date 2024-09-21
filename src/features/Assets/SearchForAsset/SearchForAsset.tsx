import { TreeView } from 'components/TreeView'
import { LocationIcon } from '../assets/LocationIcon'
import { Status } from '../assets/Status'
import { Input } from 'components/Input'
import { SearchIcon } from '../assets/SearchIcon'

const data = [
  {
    id: '1',
    name: 'NBA',
    children: [
      {
        id: '2',
        prefix: <LocationIcon />,
        sufix: <Status />,
        name: 'Teams',
        children: [
          {
            id: '3',
            name: 'Eastern Conference'
          }
        ]
      }
    ]
  }
]

export function SearchForAsset() {
  return (
    <div className="flex w-1/3 flex-col border border-gray-400">
      <Input
        type="text"
        placeholder="Buscar Ativo ou Local"
        sufix={<SearchIcon />}
      />

      <TreeView initialData={data} />
    </div>
  )
}
