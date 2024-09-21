import { useComponentContext } from '../Container/providers'
import { EletricIcon } from './assets/EletricIcon'
import { MechanicIcon } from './assets/MechanicIcon'
import { InformationText } from './InformationText'

export function AssetPanel() {
  const { componentSelected } = useComponentContext()

  const getResponsible = () => {
    if (componentSelected?.sensorType === 'energy') {
      return {
        value: 'Elétrica',
        icon: <EletricIcon />
      }
    }

    if (componentSelected?.sensorType === 'vibration') {
      return {
        value: 'Mecânica',
        icon: <MechanicIcon />
      }
    } else
      return {
        value: '---',
        icon: null
      }
  }

  return (
    <div className="flex w-2/3 flex-col border border-gray-400">
      <p className="border-b border-gray-400 p-4 text-2xl font-semibold">
        {componentSelected?.name}
      </p>

      <div className="mt-4 flex h-80 space-x-6 p-6">
        <img src="" alt="" className="h-full w-96" />

        <div className="w-full space-y-8 self-center">
          <InformationText
            title="Tipo de Equipamento"
            value={
              componentSelected?.sensorType === 'energy'
                ? 'Motor Elétrico (Trifásico)'
                : 'Motor Mecânico'
            }
          />

          <div className="border-b border-gray-400"></div>

          <InformationText title="Responsáveis" {...getResponsible()} />
        </div>
      </div>

      <div className="flex w-full p-6">
        <div className="border-b border-gray-400"></div>

        <div className="flex w-1/2 justify-between">
          <InformationText title="Sensor" value={componentSelected?.sensorId} />
          <InformationText
            title="Receptor"
            value={componentSelected?.gatewayId}
          />
        </div>
      </div>
    </div>
  )
}
