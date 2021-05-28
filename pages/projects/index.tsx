import Content from 'components/Content'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import projects from 'data/projects.json'
import Head from 'next/head'
import ProjectCard from 'components/ProjectCard'

export default function Projects() {
  return (
    <>
      <Head>
        <title>pfdzm | projects</title>
      </Head>
      <Content>
        <div className="mb-6">
          <Heading>Selected projects</Heading>
        </div>
        <Paragraph>
          Here you can see some of my work. You can click on each project card
          for more information, including a brief description, tech stack, and
          links to the repository and deployment.
        </Paragraph>
        <div className="flex flex-wrap justify-center -ml-3 md:-ml-6">
          {projects.slice(0, 6).map((proj) => (
            <ProjectCard key={proj.slug} project={proj} />
          ))}
        </div>
      </Content>
    </>
  )
}
