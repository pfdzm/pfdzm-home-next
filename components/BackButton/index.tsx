import Link from 'next/link'

const className =
  'bg-gradient-to-tr from-rose-100 to-amber-50 px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-md hover:shadow-xl hover:text-rose-400 text-gray-800 font-extrabold flex items-center text-xl w-32 hover:scale-105 transform-gpu transition-transform'

const BackButton = () => <Link href="/projects" className={className}>
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
</Link>

export default BackButton;