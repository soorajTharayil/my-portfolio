import { heroContent } from '../../data/content'

const Hero = () => (
  <section
    id="home"
    className="relative flex min-h-[80vh] items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24 text-white transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800"
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35),_transparent_55%)]" />
    <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <div className="max-w-3xl">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
          {heroContent.role}
        </span>
        <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          {heroContent.name}
        </h1>
        <p className="mt-6 text-xl text-slate-200">{heroContent.tagline}</p>
        <p className="mt-4 text-base leading-relaxed text-slate-300 md:max-w-2xl">
          {heroContent.summary}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={heroContent.resumeLink}
            className="group inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:bg-brand-400"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
          <a
            href={heroContent.contactLink}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="relative flex w-full max-w-sm items-center justify-center self-end rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-md">
        {heroContent.image ? (
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10">
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
            <img
              src={heroContent.image}
              alt={heroContent.imageAlt ?? heroContent.name}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="flex aspect-square w-full flex-col items-center justify-center rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.45),rgba(30,41,59,0.85))] p-6 text-center text-slate-100">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
              Your Photo
            </span>
            <span className="font-heading text-4xl font-bold">{heroContent.name.split(' ')[0]}</span>
            <span className="text-sm text-slate-300">Drop your portrait in `public/images/sooraj-ts.jpg`.</span>
          </div>
        )}
      </div>
    </div>
  </section>
)

export default Hero

