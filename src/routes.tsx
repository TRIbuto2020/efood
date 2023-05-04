import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LaDolce from './pages/LaDolceVita'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ladolcevitatrattoria" element={<LaDolce />} />
  </Routes>
)

export default Rotas
