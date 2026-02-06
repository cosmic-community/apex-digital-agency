import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://imgix.cosmicjs.com/ecc0f290-0324-11f1-9dfe-db6d46dd5f02-photo-1460925895917-afdab827c52f-1770359254982.jpg?w=1920&h=1080&fit=crop&auto=format,compress&q=60"
          alt="Agency background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent-light text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-accent-light rounded-full animate-pulse" />
            Digital Agency
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            We build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-indigo-300">
              digital experiences
            </span>{' '}
            that drive results.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
            From brand strategy to web development and digital marketing — we help ambitious brands grow with data-driven design and cutting-edge technology.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-xl transition-colors duration-200 shadow-lg shadow-accent/25"
            >
              View Our Work
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-colors duration-200"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}