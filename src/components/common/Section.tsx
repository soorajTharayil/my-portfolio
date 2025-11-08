import type { ReactNode } from 'react'
import clsx from 'clsx'

type SectionProps = {
  id?: string
  className?: string
  children: ReactNode
}

const Section = ({ id, className, children }: SectionProps) => (
  <section
    id={id}
    className={clsx(
      'scroll-mt-24 py-16 md:py-24',
      'transition-colors duration-300 ease-out',
      className,
    )}
  >
    <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">{children}</div>
  </section>
)

export default Section

