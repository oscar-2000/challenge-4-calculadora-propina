import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@components/App'
import DatosProvider from '@context/DatosProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DatosProvider>
      <App />
    </DatosProvider>
  </StrictMode>,
)
