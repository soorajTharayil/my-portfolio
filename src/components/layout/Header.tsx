import { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import clsx from 'clsx'
import ThemeToggle from '../ThemeToggle'

const NAV_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#home"
          className="font-heading text-lg font-bold tracking-tight text-slate-900 transition-colors duration-300 dark:text-slate-100"
        >
          SOORAJ T S
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 transition-colors duration-300 lg:flex dark:text-slate-300">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition-all duration-300 hover:bg-brand-500/10 hover:text-brand-500"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg lg:hidden dark:border-slate-700 dark:text-slate-200"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <HiOutlineX className="h-5 w-5" />
            ) : (
              <HiOutlineMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div
        className={clsx(
          "border-t border-slate-100 bg-white transition-all duration-300 ease-out dark:border-slate-800 dark:bg-slate-950 lg:hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-2 px-6 py-4 text-sm font-medium text-slate-700 dark:text-slate-200">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition-colors duration-300 hover:bg-brand-500/10 hover:text-brand-500"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header

