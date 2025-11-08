import type { ReactNode } from 'react'
import { FiLinkedin, FiGithub, FiMail, FiMapPin, FiExternalLink, FiCalendar } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi2'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import { contactContent } from '../../data/content'

const socialIcons: Record<string, ReactNode> = {
  LinkedIn: <FiLinkedin className="h-4 w-4" />,
  GitHub: <FiGithub className="h-4 w-4" />,
}

const Contact = () => (
  <Section id="contact" className="bg-white dark:bg-slate-950">
    <div className="grid gap-12 lg:grid-cols-[1fr,1.1fr]">
      <div>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s collaborate or swap ideas."
          description="Reach out directly via email or connect on your preferred platform. I share weekly build notes, explore data-driven experiments, and always enjoy conversations around sustainable product growth."
        />
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50/60 p-6 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/40">
          <p className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 text-brand-500">
              <FiMail className="h-5 w-5" />
            </span>
            <a
              href={`mailto:${contactContent.email}`}
              className="font-medium underline-offset-4 hover:underline"
            >
              {contactContent.email}
            </a>
          </p>
          <p className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 text-brand-500">
              <FiMapPin className="h-5 w-5" />
            </span>
            {contactContent.location}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
            {contactContent.social.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:text-brand-500 dark:border-slate-700"
              >
                {socialIcons[item.label] ?? <FiExternalLink className="h-4 w-4" />}
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-900">
        <div className="flex items-start gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 text-brand-500">
            <FiCalendar className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-heading text-lg font-semibold text-slate-900 dark:text-slate-100">
              Collaboration cadence
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Available for new product initiatives, platform refactors, and integration projects starting this month. Let’s schedule a 20-minute discovery call to explore fit.
            </p>
            <a
              href="mailto:sooraj.ts.dev@gmail.com?subject=Collaboration%20with%20Sooraj"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-500 transition-colors duration-300 hover:bg-brand-500/20"
            >
              Book a quick call
            </a>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 text-brand-500">
            <HiOutlineSparkles className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-heading text-lg font-semibold text-slate-900 dark:text-slate-100">
              What you receive
            </h3>
            <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>• Roadmaps tailored for modernising PHP / CodeIgniter stacks.</li>
              <li>• Technical specs for integrating DigiMiles, ZeptoMail, or AiSensy.</li>
              <li>• UI audits with actionable accessibility and performance insights.</li>
            </ul>
          </div>
        </div>
        <div className="rounded-2xl border border-dashed border-brand-500/40 bg-brand-500/5 p-5 text-sm text-slate-600 dark:text-slate-300">
          Prefer async? Share a Loom, GitHub repo, or problem statement. I’ll review and respond with next steps within 48 hours.
        </div>
      </div>
    </div>
  </Section>
)

export default Contact
