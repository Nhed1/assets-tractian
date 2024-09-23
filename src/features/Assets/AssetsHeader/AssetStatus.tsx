import { ReactElement } from 'react'
import { PowerIcon } from './assets/PowerIcon'
import { CriticalIcon } from './assets/CriticalIcon'

interface IAssetStatus {
  isActive?: boolean
  type: 'alert' | 'energy'
  onClick: () => void
}

export function AssetStatus({ isActive, type, onClick }: IAssetStatus) {
  const ASSET_TYPE: Record<
    'alert' | 'energy',
    { text: string; component: ReactElement }
  > = {
    alert: { text: 'Crítico', component: <CriticalIcon /> },
    energy: {
      text: 'Sensor de energia',
      component: <PowerIcon />
    }
  }

  return (
    <button
      onClick={onClick}
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
    </button>
  )
}
