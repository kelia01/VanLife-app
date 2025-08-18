import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App.tsx'
import About from './pages/About.tsx'
import Vans from './pages/Vans.tsx'
import { makeServer } from "./server.js";
import "./server.js";
import VanDetail from './pages/VanDetail.tsx'

if (process.env.NODE_ENV === "development") {
  makeServer();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/vans' element={<Vans />}/>
      <Route path='/van/:id' element={<VanDetail />}/>
     </Routes>
    </BrowserRouter>
  </StrictMode>,
)
