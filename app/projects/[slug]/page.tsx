// app/projects/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProjectBySlug } from '@/lib/cosmic'
import MarkdownContent from '@/components/MarkdownContent'
import ImageGallery from '@/components/ImageGallery'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: `${project.title} — Apex Digital Agency`,
    description: project.metadata?.description || '',
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const featuredImage = project.metadata?.featured_image
  const content = project.metadata?.content
  const gallery = project.metadata?.gallery || []
  const service = project.metadata?.service
  const teamLead = project.metadata?.team_lead
  const websiteUrl = project.metadata?.website_url
  const client = project.metadata?.client || ''

  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero Image */}
      {featuredImage && (
        <section className="relative h-64 sm:h-80 lg:h-[28rem] overflow-hidden">
          <img
            src={`${featuredImage.imgix_url}?w=1920&h=900&fit=crop&auto=format,compress`}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
        </section>
      )}

      {/* Project Info */}
      <section className={`container-max px-4 sm:px-6 lg:px-8 ${featuredImage ? '-mt-32 relative z-10' : 'pt-16'} pb-12`}>
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-accent-light transition-colors mb-6"
        >
          <svg className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Service Badge */}
        {service && (
          <div className="mb-4">
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-xs font-medium text-accent-light hover:bg-accent/20 transition-colors"
            >
              {service.metadata?.icon && <span className="mr-1.5">{service.metadata.icon}</span>}
              {service.title}
            </Link>
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          {project.title}
        </h1>

        <p className="mt-2 text-lg text-accent-light font-medium">{client}</p>

        <p className="mt-4 text-lg text-gray-300 max-w-3xl">
          {project.metadata?.description || ''}
        </p>

        {/* Meta Info */}
        <div className="mt-8 flex flex-wrap items-center gap-6">
          {teamLead && (
            <div className="flex items-center gap-3">
              {teamLead.metadata?.photo && (
                <img
                  src={`${teamLead.metadata.photo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                  alt={teamLead.title}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-accent/30"
                  width={40}
                  height={40}
                />
              )}
              <div>
                <p className="text-sm font-medium text-white">{teamLead.title}</p>
                <p className="text-xs text-gray-400">{teamLead.metadata?.role || 'Team Lead'}</p>
              </div>
            </div>
          )}

          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-light hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Visit Website
            </a>
          )}
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

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="section-padding bg-navy-900/30">
          <div className="container-max max-w-5xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Project Gallery
            </h2>
            <ImageGallery images={gallery} projectTitle={project.title} />
          </div>
        </section>
      )}
    </div>
  )
}