import { ReactElement } from 'react'
import { PowerIcon } from './assets/PowerIcon'
import { CriticalIcon } from './assets/CriticalIcon'

type AssetType = 'powerSensor' | 'critical'

interface IAssetStatus {
  isActive?: boolean
  type: AssetType
}

export function AssetStatus({ isActive, type = 'powerSensor' }: IAssetStatus) {
  const ASSET_TYPE: Record<
    AssetType,
    { text: string; component: ReactElement }
  > = {
    critical: { text: 'Crítico', component: <CriticalIcon /> },
    powerSensor: {
      text: 'Sensor de energia',
      component: <PowerIcon />
    }
  }

  return (
    <div
      className={` flex items-center justify-center space-x-2 border
        border-gray-400 font-semibold
        ${isActive ? 'bg-blue-500 text-white' : 'text-gray-600'}
        rounded p-2
      `}
    >
      <div className={`${!isActive && 'text-blue-500'}`}>
        {ASSET_TYPE[type].component}
      </div>
      <p>{ASSET_TYPE[type].text}</p>
    </div>
  )
}
