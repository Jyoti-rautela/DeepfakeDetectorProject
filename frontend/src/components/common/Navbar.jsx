import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Brain, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home',                 path: '/'            },
  { label: 'How It Works',         path: '/how-it-works' },
  { label: 'Would You Trust This?', path: '/trust'        },
  { label: 'Face Analysis Sandbox', path: '/sandbox'      },
]

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: 'rgba(10, 10, 15, 0.85)',
        borderColor: '#1e1e2e',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: '#6366f1' }}
          >
            <Brain size={18} color="white" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">
            Or<span style={{ color: '#6366f1' }}>Vex</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => {
            const active = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: active ? '#6366f1' : 'transparent',
                  color: active ? 'white' : '#94a3b8',
                }}
                onMouseEnter={e => {
                  if (!active) {
                    e.target.style.backgroundColor = '#1e1e2e'
                    e.target.style.color = '#f1f5f9'
                  }
                }}
                onMouseLeave={e => {
                  if (!active) {
                    e.target.style.backgroundColor = 'transparent'
                    e.target.style.color = '#94a3b8'
                  }
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: '#94a3b8' }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-2"
          style={{ borderColor: '#1e1e2e', backgroundColor: '#0a0a0f' }}
        >
          {navLinks.map(link => {
            const active = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium"
                style={{
                  backgroundColor: active ? '#6366f1' : '#12121a',
                  color: active ? 'white' : '#94a3b8',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}