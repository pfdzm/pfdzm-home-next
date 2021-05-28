import Content from 'components/Content'
import Heading from 'components/Heading'
import JuicyLink from 'components/JuicyLink'
import Paragraph from 'components/Paragraph'
import TechIcon from 'components/TechIcon'

export default function Home() {
  return (
    <Content>
      <div className="mb-6">
        <Heading>Hi, I'm Pablo</Heading>
      </div>
      <div>
        <Paragraph>
          I am a Fullstack Software Engineer based in Berlin, Germany. I hail
          from Madrid, Spain but have lived in Berlin since 2009. I currently
          work for Enpal GmbH in the Marketing & Sales Tech (aka Growth Tech)
          team, helping to build and scale the future of green tech. I love
          games, music, cycling, and languages.
        </Paragraph>
        <Paragraph>
          I fell in love with technology at a young age, building hobby websites
          for my hobbies (duh!), my friends and my family. I ended up studying
          Civil Engineering at the Berlin Institute of Technology (TU Berlin)
          and working various jobs before enrolling in a 6-month Fullstack Web
          Dev bootcamp. I absolutely love coding!
        </Paragraph>
        <Paragraph>
          I love learning new things (I often read Wikipedia for fun!) and am
          not afraid to tackle new, exciting challenges. If you want to reach
          me, you can do so on GitHub or LinkedIn:
        </Paragraph>
      </div>
      <div className="flex">
        <div className="mr-3 md:mr-6">
          <JuicyLink href="https://github.com/pfdzm" external>
            <TechIcon
              className="w-6 h-6 md:w-8 md:h-8 inline-block mr-2 md:mr-3"
              tech={'GitHub'}
            />
            <span>GitHub</span>
          </JuicyLink>
        </div>
        <div>
          <JuicyLink href="https://www.linkedin.com/in/pablofdezm/" external>
            <TechIcon
              className="w-6 h-6 md:w-8 md:h-8 inline-block mr-3 md:mr-6"
              tech={'LinkedIn'}
            />
            LinkedIn
          </JuicyLink>
        </div>
      </div>
    </Content>
  )
}
