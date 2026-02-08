import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {DarkProvider} from "./context/context.jsx"

createRoot(document.getElementById('root')).render(
   <DarkProvider>
     <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>
   </DarkProvider>
   
)
