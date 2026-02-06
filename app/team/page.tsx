import type { Metadata } from 'next'
import TeamCard from '@/components/TeamCard'
import { getTeamMembers } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'Our Team — Apex Digital Agency',
  description: 'Meet the talented strategists, designers, and developers who make Apex great.',
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers()

  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero */}
      <section className="section-padding bg-navy-950">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-accent-light text-sm font-semibold uppercase tracking-wider mb-3">
              Our Team
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              The People Behind Apex
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
              We&apos;re a tight-knit team of strategists, designers, and developers who are passionate about building great digital products and experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-navy-900/30">
        <div className="container-max">
          {teamMembers.length === 0 ? (
            <p className="text-center text-gray-400">No team members found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-navy-950">
        <div className="container-max">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Results-Driven',
                description: 'Every decision we make is tied to measurable business outcomes. No vanity metrics.',
              },
              {
                icon: '🤝',
                title: 'Collaborative',
                description: 'We work as an extension of your team, not a black box. Transparency is in our DNA.',
              },
              {
                icon: '🚀',
                title: 'Innovation-First',
                description: 'We stay ahead of industry trends so your brand is always one step ahead of the competition.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="text-center p-8 bg-navy-900/50 border border-white/5 rounded-2xl"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}