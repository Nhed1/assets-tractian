import { TreeView } from 'components/TreeView'
import { LocationIcon } from '../assets/LocationIcon'
import { Status } from '../assets/Status'

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
    <div className="flex h-[calc(100%-3rem)] w-1/3 flex-col border border-gray-400">
      <TreeView initialData={data} />
    </div>
  )
}
