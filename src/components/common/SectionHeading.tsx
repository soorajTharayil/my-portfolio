import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
}

const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <div className="mb-10 text-center lg:text-left">
    {eyebrow ? (
      <span className="mb-4 inline-block rounded-full bg-brand-500/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
        {eyebrow}
      </span>
    ) : null}
    <h2 className="font-heading text-3xl font-bold text-slate-900 transition-colors duration-300 ease-out dark:text-slate-100 lg:text-4xl">
      {title}
    </h2>
    {description ? (
      <p className="mt-4 max-w-3xl text-base text-slate-600 transition-colors duration-300 ease-out dark:text-slate-300">
        {description}
      </p>
    ) : null}
  </div>
)

export default SectionHeading

