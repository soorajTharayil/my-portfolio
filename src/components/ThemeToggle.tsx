import { LuMoon, LuSun } from 'react-icons/lu'
import { useThemeContext } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useThemeContext()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
    >
      <span className="absolute inset-0 rounded-full bg-brand-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {isDark ? <LuSun className="h-5 w-5" /> : <LuMoon className="h-5 w-5" />}
    </button>
  )
}

export default ThemeToggle

