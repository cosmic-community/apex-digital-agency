import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import ProjectCard from '@/components/ProjectCard'
import TeamCard from '@/components/TeamCard'
import { getServices, getProjects, getTeamMembers } from '@/lib/cosmic'
import Link from 'next/link'

export default async function HomePage() {
  const [services, projects, teamMembers] = await Promise.all([
    getServices(),
    getProjects(),
    getTeamMembers(),
  ])

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Services Section */}
      <section className="section-padding bg-navy-950">
        <div className="container-max">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-accent-light text-sm font-semibold uppercase tracking-wider mb-3">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Our Services
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              We offer end-to-end digital solutions to help your brand stand out, grow, and succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-accent-light border border-accent/30 hover:bg-accent/10 rounded-xl transition-colors"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-navy-900/30">
        <div className="container-max">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-accent-light text-sm font-semibold uppercase tracking-wider mb-3">
              Our Work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Featured Projects
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Real results for real brands. Explore our latest case studies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-accent-light border border-accent/30 hover:bg-accent/10 rounded-xl transition-colors"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-navy-950">
        <div className="container-max">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-accent-light text-sm font-semibold uppercase tracking-wider mb-3">
              Our Team
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Meet the People Behind Apex
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Talented strategists, designers, and developers who bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/team"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-accent-light border border-accent/30 hover:bg-accent/10 rounded-xl transition-colors"
            >
              View Full Team →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent-dark via-accent to-indigo-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        <div className="container-max text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready to start your next project?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Let&apos;s create something extraordinary together. Get in touch and tell us about your vision.
          </p>
          <a
            href="mailto:hello@apexagency.com"
            className="inline-flex items-center mt-8 px-8 py-4 text-base font-semibold bg-white text-accent-dark hover:bg-gray-100 rounded-xl transition-colors shadow-xl"
          >
            Get in Touch
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}