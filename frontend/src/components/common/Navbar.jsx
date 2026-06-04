import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Brain, Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const navLinks = [
  { label: 'Home',                  path: '/'             },
  { label: 'How It Works',          path: '/how-it-works'  },
  { label: 'Would You Trust This?', path: '/trust'         },
  { label: 'Face Analysis Sandbox', path: '/sandbox'       },
]

export default function Navbar() {
  const location        = useLocation()
  const [open, setOpen] = useState(false)
  const { isDark, toggleTheme, colors } = useTheme()

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: colors.navBg,
        borderColor: colors.border,
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: '#6366f1' }}
          >
            <Brain size={20} color="white" />
          </div>
          <span className="text-xl font-bold tracking-tight" style={{ color: colors.text }}>
            Or<span style={{
              background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Vex</span>
          </span>
        </Link>

        {/* Desktop Links + Toggle */}
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
                  color: active ? 'white' : colors.textSub,
                  border: active ? 'none' : '1px solid transparent',
                }}
                onMouseEnter={e => {
                  if (!active) {
                    e.currentTarget.style.backgroundColor = colors.surface
                    e.currentTarget.style.color = colors.text
                    e.currentTarget.style.borderColor = colors.border
                  }
                }}
                onMouseLeave={e => {
                  if (!active) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = colors.textSub
                    e.currentTarget.style.borderColor = 'transparent'
                  }
                }}
              >
                {link.label}
              </Link>
            )
          })}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-3 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`,
              color: isDark ? '#fbbf24' : '#6366f1',
            }}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile buttons */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`,
              color: isDark ? '#fbbf24' : '#6366f1',
            }}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="p-2 rounded-lg"
            style={{ color: colors.textSub }}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-2"
          style={{ borderColor: colors.border, backgroundColor: colors.bg }}
        >
          {navLinks.map(link => {
            const active = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium"
                style={{
                  backgroundColor: active ? '#6366f1' : colors.surface,
                  color: active ? 'white' : colors.textSub,
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