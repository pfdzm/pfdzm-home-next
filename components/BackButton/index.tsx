import { useHistory } from 'hooks/useHistory'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function BackButton() {
  const router = useRouter()
  const history = useHistory()
  return history.canGoBack ? (
    <button
      aria-roledescription="back button"
      aria-label="button"
      role="button"
      onClick={router.back}
      className="mb-3 hover:text-rose-400 text-gray-800 font-extrabold flex items-center text-xl w-32 hover:scale-105 transform-gpu transition-all"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 flex-grow-0 mr-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.5}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      <span>Back</span>
    </button>
  ) : (
    <Link href="/projects">
      <a className="hover:text-rose-400 text-gray-800 font-extrabold flex items-center text-xl w-32 hover:scale-105 transform-gpu transition-all">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 flex-grow-0 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3.5}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span>Back</span>
      </a>
    </Link>
  )
}
