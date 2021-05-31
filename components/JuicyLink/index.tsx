import Link from 'next/link'

export default function JuicyLink({
  href,
  children,
  external,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) {
  return (
    <Link href={href}>
      <a
        className="flex items-center px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-md hover:shadow-xl text-xl md:text-2xl font-bold  bg-gradient-to-tr from-rose-100 to-amber-50 text-gray-800 hover:text-rose-400 transition-transform transform-gpu hover:scale-105"
        target={external ? '_blank' : undefined}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </Link>
  )
}
