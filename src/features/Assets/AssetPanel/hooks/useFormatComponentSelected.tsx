import { IAsset } from 'features/Assets/interfaces/assets'
import { MechanicIcon } from '../assets/MechanicIcon'
import { EletricIcon } from '../assets/EletricIcon'

export function useFormatComponentSelected(
  componentSelected: IAsset | undefined
) {
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

  const componentFormatted = {
    responsible: getResponsible(),
    equipmentType:
      componentSelected?.sensorType === 'energy'
        ? 'Motor Elétrico (Trifásico)'
        : '---',
    sensor: componentSelected?.sensorId,
    gateway: componentSelected?.gatewayId
  }

  return {
    componentFormatted
  }
}
