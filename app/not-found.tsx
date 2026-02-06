import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-20 sm:pt-24 min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-accent-light text-sm font-semibold uppercase tracking-wider mb-3">
          404 Error
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-400 max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-4 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-xl transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}