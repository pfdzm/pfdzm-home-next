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
    <div className="flex">
      <Link href={href}>
        <a
          className={cn(
            'text-2xl',
            'lg:text-3xl',
            'font-extrabold',
            'transition-all',
            'px-3',
            'py-1',
            'rounded',
            'bg-gradient-to-tr',
            'from-transparent',
            'to-transparent',
            'hover:from-rose-100',
            'hover:to-amber-50',
            'hover:shadow',
            'transform-gpu',
            'hover:scale-105',
            { hidden: isActive }
          )}
        >
          {children}
        </a>
      </Link>
    </div>
  )
}
