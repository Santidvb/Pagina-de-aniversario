import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import '../componentes/css/FondoCorazon.css'
import App from './App.tsx'
import Data from "../componentes/data.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Data>
      <App />
    </Data>
  </StrictMode>,
)
