import type { TeamMember } from '@/types'

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  const photo = member.metadata?.photo
  const role = member.metadata?.role || ''
  const linkedin = member.metadata?.linkedin_url
  const email = member.metadata?.email

  return (
    <div className="group bg-navy-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300">
      {/* Photo */}
      <div className="relative aspect-[3/4] overflow-hidden">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=600&h=800&fit=crop&auto=format,compress`}
            alt={member.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            width={300}
            height={400}
          />
        ) : (
          <div className="w-full h-full bg-navy-800 flex items-center justify-center">
            <span className="text-6xl">👤</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />

        {/* Social Links Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-accent/30 transition-colors"
              aria-label={`${member.title} LinkedIn`}
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-accent/30 transition-colors"
              aria-label={`Email ${member.title}`}
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white">{member.title}</h3>
        <p className="text-sm text-accent-light font-medium">{role}</p>
      </div>
    </div>
  )
}