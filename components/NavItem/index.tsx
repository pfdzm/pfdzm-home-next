import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'

export default function NavItem({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  const { asPath } = useRouter()
  const isActive = href === asPath
  return (
    <div>
      <Link href={href}>
        <a
          className={cn(
            'text-2xl',
            'lg:text-3xl',
            'font-extrabold',
            'transition-all',
            'hover:bg-amber-50',
            'bg-opacity-20',
            'px-3',
            'py-1',
            'rounded',
            { hidden: isActive }
          )}
        >
          {children}
        </a>
      </Link>
    </div>
  )
}
