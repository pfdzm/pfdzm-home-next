import Link from 'next/link'
import Image from 'next/image'
import NavItem from 'components/NavItem'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-body flex flex-col min-h-screen mx-auto md:px-10 px-1 bg-gradient-to-t from-rose-400 to-amber-50 text-gray-800 text-lg">
      <header className="text-blue-500 transition-colors text-5xl flex-grow-0 pt-6 pb-3 md:pb-6">
        <nav className="flex flex-col md:flex-row items-center">
          <div className="hover:text-rose-400 transition-all pb-6 md:pb-0">
            <Link href="/">
              <a className="flex items-start font-extrabold">
                <div className="w-14 h-14 mr-5">
                  <Image
                    alt="picture of Pablo"
                    className="rounded-full"
                    src="/assets/me.jpg"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div>pfdzm</div>
              </a>
            </Link>
          </div>
          <div className="md:ml-auto text-base space-x-3 text-rose-400 transition-all flex">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/projects">Projects</NavItem>
          </div>
        </nav>
      </header>
      <main className="flex-grow rounded-xl shadow-md bg-white bg-opacity-30 md:px-5 px-3 mb-5">
        {children}
      </main>
      <footer className="flex-grow-0 flex justify-center font-semibold text-amber-50 py-3">
        Made with&nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
        ️ in Berlin
      </footer>
    </div>
  )
}
