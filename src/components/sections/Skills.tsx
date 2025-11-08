import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import { skills } from '../../data/content'

const Skills = () => (
  <Section id="skills" className="bg-slate-50 dark:bg-slate-950/80">
    <SectionHeading
      eyebrow="Skills"
      title="A toolkit tailored for high-impact web products."
      description="From backend frameworks to front-end polish, I work across the stack to ship resilient, maintainable experiences."
    />
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill) => {
        const Icon = skill.icon
        return (
          <article
            key={skill.name}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-900"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 via-brand-500/0 to-brand-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-400 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-slate-900 transition-colors duration-300 dark:text-slate-100">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-slate-500 transition-colors duration-300 dark:text-slate-400">
                    {skill.description}
                  </p>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-500 transition-colors duration-300 dark:text-slate-400">
                {skill.level}%
              </span>
            </div>
            <div className="relative mt-6 h-2 w-full overflow-hidden rounded-full bg-slate-200/70 dark:bg-slate-700/80">
              <span
                className="absolute inset-y-0 left-0 rounded-full bg-brand-500 transition-all duration-700 ease-out group-hover:bg-brand-400"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </article>
        )
      })}
    </div>
  </Section>
)

export default Skills

