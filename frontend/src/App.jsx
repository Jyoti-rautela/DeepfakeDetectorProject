import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import TrustQuiz from './pages/TrustQuiz'
import Sandbox from './pages/Sandbox'

function App() {
  return (
    <Router>
      <div className="min-h-screen" style={{ backgroundColor: '#0a0a0f' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/trust" element={<TrustQuiz />} />
          <Route path="/sandbox" element={<Sandbox />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App