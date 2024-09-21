import { useComponentContext } from '../Container/providers'

export function AssetPanel() {
  const { componentSelected } = useComponentContext()
  console.log(componentSelected)
  return (
    <div className="flex w-2/3 flex-col border border-gray-400">
      <p className="border-b border-gray-400 p-4 text-2xl font-semibold">
        MOTOR RT COAL AF01
      </p>

      <div className="mt-4 flex h-80 space-x-6 p-6">
        <img src="" alt="" className="h-full w-96" />

        <div className="w-full space-y-8 self-center">
          <div>
            <p className="text-lg font-semibold">Tipo do Equipamento</p>
            <p className="text-lg text-gray-700">Motor eletrico</p>
          </div>

          <div className="border-b border-gray-400"></div>

          <div>
            <p className="text-lg font-semibold">Tipo do Equipamento</p>
            <p className="text-lg text-gray-700">Motor eletrico</p>
          </div>
        </div>
      </div>

      <div className="flex w-full p-6">
        <div className="border-b border-gray-400"></div>

        <div className="flex w-1/2 justify-between">
          <div>
            <p className="text-lg font-semibold">Sensor </p>
            <p className="text-lg text-gray-700">HIO4510</p>
          </div>

          <div>
            <p className="text-lg font-semibold">Receptor </p>
            <p className="text-lg text-gray-700">HIO4510</p>
          </div>
        </div>
      </div>
    </div>
  )
}
