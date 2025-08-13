import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App.tsx'
import About from './pages/About.tsx'
import Vans from './pages/Vans.tsx'

if (process.env.NODE_ENV === "development") {
  import('./server').then(() => {
    console.log("Mock server started for development")
  })
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/vans' element={<Vans />}/>
     </Routes>
    </BrowserRouter>
  </StrictMode>,
)
