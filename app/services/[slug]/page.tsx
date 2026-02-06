// app/services/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getServiceBySlug, getProjectsByService } from '@/lib/cosmic'
import MarkdownContent from '@/components/MarkdownContent'
import ProjectCard from '@/components/ProjectCard'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = await getServiceBySlug(slug)

  if (!service) {
    return { title: 'Service Not Found' }
  }

  return {
    title: `${service.title} — Apex Digital Agency`,
    description: service.metadata?.description || '',
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const relatedProjects = await getProjectsByService(service.id)
  const featuredImage = service.metadata?.featured_image
  const content = service.metadata?.content
  const icon = service.metadata?.icon || '🚀'

  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero */}
      <section className="relative">
        {featuredImage && (
          <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
            <img
              src={`${featuredImage.imgix_url}?w=1920&h=800&fit=crop&auto=format,compress`}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30" />
          </div>
        )}
        <div className={`container-max px-4 sm:px-6 lg:px-8 ${featuredImage ? '-mt-32 relative z-10' : 'pt-16'} pb-12`}>
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-accent-light transition-colors mb-6"
          >
            <svg className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>

          <div className="text-5xl mb-4">{icon}</div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {service.title}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl">
            {service.metadata?.description || ''}
          </p>
        </div>
      </section>

      {/* Content */}
      {content && (
        <section className="section-padding bg-navy-950">
          <div className="container-max max-w-4xl">
            <MarkdownContent content={content} />
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-padding bg-navy-900/30">
          <div className="container-max">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}