import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App.tsx'
import About from './pages/Vans/About.tsx'
import Vans from './pages/Vans/Vans.tsx'
import { makeServer } from "./server.js";
import "./server.js";
import VanDetail from './pages/Vans/VanDetail.tsx'
import Layout from './components/Layout.tsx'
import Income from './pages/Host/Income.tsx'
import Reviews from './pages/Host/Reviews.tsx'
import HostLayout from './components/HostLayout.tsx'
import Dashboard from './pages/Host/Dashboard.tsx'
import NotFound from './components/NotFound.tsx'

if (process.env.NODE_ENV === "development") {
  makeServer();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<App />}/>
      <Route path='*' element={<NotFound />}/>
      <Route path='about' element={<About />}/>
      <Route path='van' element={<Vans />}/>
      <Route path='van/:id' element={<VanDetail />}/>
      <Route path='Host' element={<HostLayout />}>
      <Route path='' element={<Dashboard />}/>
      <Route path='Income' element={<Income />}/>
      <Route path='Reviews' element={<Reviews />}/>
      </Route>
      </Route>
     </Routes>
    </BrowserRouter>
  </StrictMode>,
)
