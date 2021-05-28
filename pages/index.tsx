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
          I am a Fullstack Software Engineer based in Berlin, Germany.
          Originally from Madrid, Spain, but have called myself a Berliner since
          2009. I currently work for Enpal GmbH in the Marketing & Sales Tech
          (Growth Tech) team, building the future of green tech.
        </Paragraph>
        <Paragraph>
          My love affair with technology started at a young age - building hobby
          websites and hacking around fixing, upgrading and (of course) breaking
          any systems I had at my disposal. My educational background is in
          Civil Engineering and have professional experience in varied (usually
          customer-facing) roles. My strong suit is a deep curiosity for how
          things work paired with strong communication skills.
        </Paragraph>
        <Paragraph>
          Most of my programming experience to-date is related to fullstack web
          development and, while I specialize in frontend work at my day job, I
          certainly do not shy away from backend related tasks. DevOps and
          infrastructure are two special interests of mine, and I make a special
          effort to continue learning in that area and sharing my knowledge with
          colleagues. I have done presentations at Enpal's bi-weekly
          Tech/Architecture meeting related to CI/CD and Infrastructure-as-Code
          (on Azure).
        </Paragraph>
        <Paragraph>
          I generally love learning new things (I <em>very</em> often read
          Wikipedia for fun!) and am not afraid to tackle new challenges. If you
          want to reach me, you can do so on GitHub or LinkedIn:
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
