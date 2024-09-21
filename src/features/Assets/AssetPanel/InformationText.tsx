import { ReactNode } from 'react'

export function InformationText({
  title,
  value,
  icon
}: {
  title: string
  value?: string
  icon?: ReactNode
}) {
  return (
    <div>
      <p className="text-lg font-semibold">{title}</p>

      <div className="flex space-x-2">
        {icon}
        <p className="text-lg text-gray-700">{value}</p>
      </div>
    </div>
  )
}
