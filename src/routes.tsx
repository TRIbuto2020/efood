import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LaDolce from './pages/LaDolceVita'
import HiokiSushi from './pages/HiokiSushi'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ladolcevitatrattoria" element={<LaDolce />} />
    <Route path="/hiokisushi" element={<HiokiSushi />} />
  </Routes>
)

export default Rotas
