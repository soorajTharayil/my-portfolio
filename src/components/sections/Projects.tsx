import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Section from '../common/Section'
import SectionHeading from '../common/SectionHeading'
import { projects } from '../../data/content'

const Projects = () => (
  <Section id="projects" className="bg-white dark:bg-slate-950">
    <SectionHeading
      eyebrow="Projects"
      title="Selected projects that highlight impact and versatility."
      description="A snapshot of platforms I’ve architected and shipped—covering full-stack dashboards, internal tooling, and communication pipelines."
    />
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.title}
          className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-900"
        >
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-brand-500/20 via-brand-500/10 to-transparent">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.3),_transparent_60%)] text-center text-sm font-medium text-brand-500">
                Visual coming soon
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-col gap-6 p-6">
            <div>
              <h3 className="font-heading text-xl font-semibold text-slate-900 transition-colors duration-300 dark:text-slate-100">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-brand-500">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-brand-500/10 px-3 py-1"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-brand-500"
                >
                  <FiGithub className="h-4 w-4" />
                  GitHub
                </a>
              ) : null}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-brand-500"
                >
                  <FiExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  </Section>
)

export default Projects

