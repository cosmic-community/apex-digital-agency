import type { Metadata } from 'next'
import ServiceCard from '@/components/ServiceCard'
import { getServices } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'Services — Apex Digital Agency',
  description: 'Explore our full range of digital services including brand strategy, web development, and digital marketing.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero */}
      <section className="section-padding bg-navy-950">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="text-accent-light text-sm font-semibold uppercase tracking-wider mb-3">
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              What We Do
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
              From strategy to execution, we offer a complete suite of digital services designed to help your brand grow and thrive in the modern landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-navy-900/30">
        <div className="container-max">
          {services.length === 0 ? (
            <p className="text-center text-gray-400">No services found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}