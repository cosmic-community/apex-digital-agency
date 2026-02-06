import Link from 'next/link'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const featuredImage = project.metadata?.featured_image
  const service = project.metadata?.service
  const client = project.metadata?.client || ''

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-navy-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {featuredImage ? (
          <img
            src={`${featuredImage.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            width={400}
            height={250}
          />
        ) : (
          <div className="w-full h-full bg-navy-800 flex items-center justify-center">
            <span className="text-4xl">💼</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

        {/* Service Badge */}
        {service && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 bg-navy-950/70 backdrop-blur-sm border border-white/10 rounded-full text-xs font-medium text-gray-200">
              {service.metadata?.icon && <span className="mr-1">{service.metadata.icon}</span>}
              {service.title}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs font-medium text-accent-light uppercase tracking-wider mb-1">
          {client}
        </p>
        <h3 className="text-lg font-bold text-white group-hover:text-accent-light transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-gray-400 line-clamp-2">
          {project.metadata?.description || ''}
        </p>
      </div>
    </Link>
  )
}