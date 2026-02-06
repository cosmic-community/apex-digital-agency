import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 border-t border-white/10">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <span className="text-lg font-bold text-white">
                Apex<span className="text-accent-light">.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              We craft digital experiences that drive results. Strategy, design, and development — all under one roof.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-accent-light transition-colors">
                  Brand Strategy
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-accent-light transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-accent-light transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/team" className="text-sm text-gray-400 hover:text-accent-light transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-gray-400 hover:text-accent-light transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get in Touch</h3>
            <p className="text-sm text-gray-400">
              Ready to start a project?
            </p>
            <a
              href="mailto:hello@apexagency.com"
              className="inline-block mt-3 text-sm font-medium text-accent-light hover:text-white transition-colors"
            >
              hello@apexagency.com →
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {currentYear} Apex Digital Agency. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Powered by Cosmic CMS
          </p>
        </div>
      </div>
    </footer>
  )
}