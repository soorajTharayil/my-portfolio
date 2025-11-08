import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import { experience } from '../../data/content'

const Experience = () => (
  <Section id="experience" className="bg-slate-50 dark:bg-slate-950/80">
    <SectionHeading
      eyebrow="Experience"
      title="Building products end-to-end with cross-functional teams."
      description="A timeline of roles that sharpened my ability to design scalable architectures, streamline internal tooling, and mentor team members."
    />
    <div className="relative space-y-12">
      <span className="absolute left-[12px] top-0 h-full w-0.5 bg-gradient-to-b from-brand-500 via-brand-500/40 to-transparent dark:from-brand-400 dark:via-brand-400/40" />
      {experience.map((item, index) => (
        <article key={`${item.company}-${item.role}`} className="relative pl-12">
          <span className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-brand-200 bg-white text-brand-500 dark:border-brand-500/70 dark:bg-slate-900">
            {index + 1}
          </span>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-900">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-heading text-xl font-semibold text-slate-900 dark:text-slate-100">
                {item.role}
              </h3>
              <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-500">
                {item.period}
              </span>
            </div>
            <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
              {item.company} · {item.location}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </Section>
)

export default Experience

