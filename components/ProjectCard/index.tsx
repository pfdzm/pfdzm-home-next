import Image from 'next/image'
import Link from 'next/link'
import { ProjectDataType } from './types'

export default function ProjectCard({
  project: { slug, title, img },
}: {
  project: ProjectDataType
}) {
  return (
    <div className="ml-3 md:ml-6">
      <Link href={`/projects/${slug}`}>
        <a className="bg-gradient-to-tr from-rose-100 hover:from-rose-50 min-w-xs hover:to-amber-50 rounded shadow flex flex-col items-center text-3xl text-center font-bold text-gray-800 hover:text-rose-400 transition-all transform-gpu hover:scale-105 mb-5">
          <div className="relative w-full">
            <div className="mb-4 h-40 w-full">
              <Image // 384 x 288
                layout="fill"
                className="rounded-tr rounded-tl relative z-0"
                src={img.url}
                alt={img.alt}
                objectFit="cover"
                objectPosition="center top"
                // width="384"
                // height="288"
              />
            </div>
          </div>
          <div className="bg-opacity-0 bg-amber-50 z-10 w-full py-6 px-3">
            <h2>{title}</h2>
          </div>
        </a>
      </Link>
    </div>
  )
}
