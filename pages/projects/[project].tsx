import Content from 'components/Content'
import Heading from 'components/Heading'
import JuicyLink from 'components/JuicyLink'
import Paragraph from 'components/Paragraph'
import projects from 'data/projects.json'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  project: {
    title: string
    slug: string
    img: {
      url: string
      alt: string
    }
    description: string
    repo: string
    deploy: string
  }
}

export default function Project({ project }: Props) {
  return (
    <>
      <Head>
        <title>pfdzm | {project.title}</title>
      </Head>
      <Content>
        <div className="-mt-3">
          <button
            aria-roledescription="return to projects overview"
            aria-label="button"
            role="button"
            className="mb-3"
          >
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
          </button>
        </div>
        <div className="flex mb-9 flex-col items-center sm:flex-row sm:items-start">
          <div className="sm:mr-9">
            <div className="mb-6">
              <Heading>{project.title}</Heading>
            </div>
            <Paragraph>{project.description}</Paragraph>
          </div>
          <div className="justify-center flex-grow-0 flex-shrink-0">
            <Image
              className="rounded"
              src={project.img.url}
              alt={project.img.alt}
              width="320"
              height="250"
            />
          </div>
        </div>
        <div className="flex justify-around">
          <JuicyLink href={project.repo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <span>Code</span>
          </JuicyLink>
          <JuicyLink href={project.deploy}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            <span>Live Demo</span>
          </JuicyLink>
        </div>
      </Content>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: {
      project: project.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const project = projects.find((project) => project.slug === params.project)
  return { props: { project } }
}
