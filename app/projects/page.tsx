import type { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'
import { getProjects } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'Projects — Apex Digital Agency',
  description: 'Explore our portfolio of work across brand strategy, web development, and digital marketing.',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero */}
      <section className="section-padding bg-navy-950">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-accent-light text-sm font-semibold uppercase tracking-wider mb-3">
              Our Work
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Projects
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
              Real results for real brands. Browse our portfolio to see how we&apos;ve helped businesses grow through strategy, design, and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-navy-900/30">
        <div className="container-max">
          {projects.length === 0 ? (
            <p className="text-center text-gray-400">No projects found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}