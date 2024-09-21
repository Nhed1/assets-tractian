import { IAsset } from 'features/Assets/interfaces/assets'
import { createContext, ReactNode, useState } from 'react'

interface IComponentContext {
  componentSelected: IAsset | undefined
  setComponentSelected: (company: IAsset | undefined) => void
}

export const ComponentContext = createContext<IComponentContext | undefined>(
  undefined
)

export function ComponentProvider({ children }: { children: ReactNode }) {
  const [componentSelected, setComponentSelected] = useState<
    IAsset | undefined
  >()

  return (
    <ComponentContext.Provider
      value={{ componentSelected, setComponentSelected }}
    >
      {children}
    </ComponentContext.Provider>
  )
}
