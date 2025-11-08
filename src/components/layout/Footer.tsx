const Footer = () => (
  <footer className="border-t border-slate-200 bg-white py-8 text-sm text-slate-600 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left lg:px-8">
      <p className="font-medium">&copy; {new Date().getFullYear()} Sooraj T S. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a
          href="#home"
          className="transition-colors duration-300 hover:text-brand-500"
        >
          Home
        </a>
        <a
          href="#projects"
          className="transition-colors duration-300 hover:text-brand-500"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="transition-colors duration-300 hover:text-brand-500"
        >
          Contact
        </a>
      </div>
    </div>
  </footer>
)

export default Footer

