import { useComponentContext } from '../Container/providers'
import { GatewayIcon } from './assets/GatewayIcon'
import { ImageIcon } from './assets/ImageIcon'
import { SensorIcon } from './assets/SensorIcon'
import { useFormatComponentSelected } from './hooks/useFormatComponentSelected'
import { InformationText } from './InformationText'

export function AssetPanel() {
  const { componentSelected } = useComponentContext()
  const { componentFormatted } = useFormatComponentSelected(componentSelected)
  return (
    <div className="flex w-2/3 flex-col border border-gray-400">
      <p className="flex items-center space-x-2 border-b border-gray-400 p-4 text-2xl font-semibold">
        <p>{componentSelected?.name}</p>
        {componentSelected?.sufix}
      </p>

      <div className="mt-4 flex h-80 space-x-6 p-6">
        <div className="flex h-full  w-[500px] items-center justify-center border border-dashed border-blue-500 bg-blue-50 text-blue-400">
          <div className="flex flex-col items-center">
            <ImageIcon />
            <p className="text-center">Adicionar imagem do Ativo</p>
          </div>
        </div>

        <div className="w-full space-y-8 self-center">
          <InformationText
            title="Tipo de Equipamento"
            value={componentFormatted.equipmentType}
          />

          <div className="border-b border-gray-400"></div>

          <InformationText
            title="Responsáveis"
            {...componentFormatted.responsible}
          />
        </div>
      </div>

      <div className="flex w-full flex-col px-6">
        <div className="mb-4 border-b border-gray-400"></div>

        <div className="flex w-full gap-80">
          <InformationText
            icon={<SensorIcon />}
            title="Sensor"
            value={componentFormatted.sensor}
          />
          <InformationText
            icon={<GatewayIcon />}
            title="Receptor"
            value={componentFormatted.gateway}
          />
        </div>
      </div>
    </div>
  )
}
