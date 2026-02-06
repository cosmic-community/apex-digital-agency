import Link from 'next/link'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const icon = service.metadata?.icon || '🚀'
  const description = service.metadata?.description || ''
  const featuredImage = service.metadata?.featured_image

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative block bg-navy-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300"
    >
      {/* Image */}
      {featuredImage && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            width={400}
            height={200}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="text-3xl mb-3">{icon}</div>
        <h3 className="text-xl font-bold text-white group-hover:text-accent-light transition-colors">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-gray-400 line-clamp-3">
          {description}
        </p>
        <div className="mt-4 inline-flex items-center text-sm font-medium text-accent-light group-hover:gap-2 transition-all">
          Learn More
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}