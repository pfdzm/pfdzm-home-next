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
      <Link href={href}
        className={cn(
          { 'text-gray-800': !isActive },
          'hover:text-rose-400',
          'text-2xl',
          'lg:text-3xl',
          'font-extrabold',
          'rounded-xl',
          'bg-gradient-to-tr',
          'from-transparent',
          'to-transparent',
          'hover:from-rose-100',
          'hover:to-amber-50',
          'hover:shadow-xl',
          'transition-transform',
          'transform-gpu',
          'hover:scale-105',
          'px-4',
          'py-2',
          'md:px-6',
          'md:py-3 ',
          { 'shadow-md': isActive },
          {
            'from-rose-100': isActive,
          },
          { 'to-amber-50': isActive },
          { 'text-rose-400': isActive }
        )}
      >
        {children}
      </Link>
    </div >
  )
}
