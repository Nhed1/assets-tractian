import { Header } from './Companies/Header'
import { Container } from './Container'
import { CompanyProvider } from './providers'

export function Assets() {
  return (
    <CompanyProvider>
      <div className="flex h-screen flex-col">
        <Header />

        <div className="flex-1 bg-gray-400 p-4">
          <Container />
        </div>
      </div>
    </CompanyProvider>
  )
}
