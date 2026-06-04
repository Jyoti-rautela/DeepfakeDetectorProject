import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import TrustQuiz from './pages/TrustQuiz'
import Sandbox from './pages/Sandbox'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"             element={<Home />}       />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/trust"        element={<TrustQuiz />}  />
          <Route path="/sandbox"      element={<Sandbox />}    />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App