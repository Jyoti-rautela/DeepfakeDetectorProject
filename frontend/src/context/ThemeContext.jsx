import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true)
  const toggleTheme = () => setIsDark(prev => !prev)

  const theme = {
    isDark,
    toggleTheme,
    colors: isDark ? {
      bg        : '#0a0a0f',
      surface   : '#12121a',
      border    : '#1e1e2e',
      text      : '#f1f5f9',
      textSub   : '#94a3b8',
      textMuted : '#64748b',
      textFaint : '#334155',
      navBg     : 'rgba(10, 10, 15, 0.9)',
    } : {
      bg        : '#f8fafc',
      surface   : '#ffffff',
      border    : '#e2e8f0',
      text      : '#0f172a',
      textSub   : '#475569',
      textMuted : '#64748b',
      textFaint : '#94a3b8',
      navBg     : 'rgba(248, 250, 252, 0.9)',
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ backgroundColor: theme.colors.bg, minHeight: '100vh' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(ThemeContext)
}