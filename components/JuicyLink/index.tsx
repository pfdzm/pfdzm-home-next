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
        className="flex items-center px-5 py-2 rounded shadow text-xl sm:text-3xl font-bold bg-amber-50 text-gray-800 mr-5 hover:text-rose-400 transition-all transform-gpu hover:scale-105"
        target={external ? '_blank' : undefined}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </Link>
  )
}
