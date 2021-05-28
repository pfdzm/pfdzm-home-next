import BackButton from 'components/BackButton'
import Content from 'components/Content'
import Heading from 'components/Heading'
import JuicyLink from 'components/JuicyLink'
import Paragraph from 'components/Paragraph'
import { ProjectDataType } from 'components/ProjectCard/types'
import projects from 'data/projects.json'
import { GetStaticPaths, GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
const TechIcon = dynamic(() => import('components/TechIcon'))

type Props = {
  project: ProjectDataType
}

export default function Project({ project }: Props) {
  return (
    <>
      <Head>
        <title>pfdzm | {project.title}</title>
      </Head>
      <Content>
        <div className="-mt-3 mb-3">
          <BackButton />
        </div>
        <div className="flex mb-9 flex-col-reverse items-center md:flex-row md:items-start">
          <div className="md:mr-6 md:mb-0">
            <div className="md:mr-9">
              <div className="mb-6">
                <Heading>{project.title}</Heading>
              </div>
              {project.description.map((desc, key) => (
                <Paragraph key={key}>{desc}</Paragraph>
              ))}
            </div>

            <div className="flex-grow-0 flex-shrink-0 text-gray-800 text-xs font-bold">
              <div className="mb-3">
                <h2 className="font-extrabold text-2xl">Tech Stack</h2>
              </div>
              <ul className="flex justify-start -ml-3 md:-ml-6 items-center flex-wrap">
                {project.technologies.map((tech, key) => (
                  <li
                    className="mb-3 ml-3 md:ml-6 flex flex-col items-center"
                    key={key}
                  >
                    <div className="h-6 w-6 md:h-8 md:w-8 mb-3">
                      <TechIcon tech={tech} />
                    </div>
                    <div>{tech}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-grow-0 flex-shrink-0 mb-6">
            <div className="mb-6 flex justify-center relative h-56">
              <Image
                className="rounded flex-grow-0"
                src={project.img.url}
                alt={project.img.alt}
                // width="320"
                // height="250"
                objectFit="cover"
                objectPosition="top center"
                layout="fill"
              />
            </div>

            <div className="flex justify-between">
              <div>
                <JuicyLink href={project.repo} external>
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
              </div>
              <div className="ml-3">
                <JuicyLink href={project.deploy} external>
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
            </div>
          </div>
        </div>
      </Content>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.slice(0, 6).map((project) => ({
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
