import Content from 'components/Content'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import { GetStaticProps } from 'next'
import projects from 'data/projects.json'
import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
  return (
    <Content>
      <div className="mb-6">
        <Heading>Selected projects</Heading>
      </div>
      <Paragraph>
        Here you can see some of my work. You can click on each project card for
        more information, including links to the repository as well as the
        deployed app.
      </Paragraph>
      <div className="flex flex-wrap justify-around">
        {projects.map(({ title, slug, img }) => {
          return (
            <div key={slug}>
              <Link href={`/projects/${slug}`}>
                <a className="bg-amber-50 py-6 px-3 rounded shadow flex flex-col items-center text-3xl text-center font-bold text-rose-400 hover:text-blue-500 transition-all transform-gpu hover:scale-105 mb-5">
                  <div className="mb-4">
                    <Image
                      src={img.url}
                      alt={img.alt}
                      width="160"
                      height="125"
                    />
                  </div>
                  <h3>{title}</h3>
                </a>
              </Link>
            </div>
          )
        })}
      </div>
    </Content>
  )
}
