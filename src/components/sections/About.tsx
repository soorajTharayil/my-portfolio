import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import { aboutContent } from '../../data/content'

const About = () => (
  <Section id="about" className="bg-white dark:bg-slate-950">
    <div className="grid gap-12 lg:grid-cols-[1fr,1.1fr] lg:items-center">
      <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl transition-transform duration-500 hover:-translate-y-2 dark:border-slate-800 dark:bg-slate-900">
        <img
          src={aboutContent.image}
          alt={aboutContent.imageAlt}
          className="h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
            const fallback = event.currentTarget.nextElementSibling as HTMLDivElement | null
            if (fallback) {
              fallback.style.display = 'flex'
            }
          }}
        />
        <div className="hidden h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-500/20 via-brand-500/10 to-transparent p-6 text-center text-slate-600 dark:text-slate-300">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">
            Photo Placeholder
          </span>
          <p className="text-sm">Add your portrait at `public/images/sooraj-ts.jpg` to replace this block.</p>
        </div>
      </div>
      <div>
        <SectionHeading
          eyebrow="About Me"
          title="Software developer crafting dependable digital experiences."
          description={aboutContent.headline}
        />
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">{aboutContent.bio}</p>
        <ul className="mt-8 grid gap-4 text-sm text-slate-600 dark:text-slate-300">
          {aboutContent.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-3 rounded-2xl border border-slate-200/60 bg-white/50 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-lg dark:border-slate-700/70 dark:bg-slate-900/40"
            >
              <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-brand-500" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
)

export default About

