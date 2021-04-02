import * as React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from '../components/Link'
import Paragraph from '../components/Paragraph'

const COMPEON_LINK = 'https://www.compeon.de'

const dotSize = 10
const ListElement = styled.li`
  position: relative;
  margin: 15px;
  line-height: 120%;

  &::before {
    background: #E8306C;
    border-radius: 50%;
    content: '';
    height: ${dotSize}px;
    left: -30px;
    position: absolute;
    top: calc(50% - ${dotSize / 2}px);
    width: ${dotSize}px;
  }
`

const Ruby = ({ children, rubyText }) =>
  <ruby>
    {children}
    <rp>(</rp>
    <rt>{rubyText}</rt>
    <rp>)</rp>
  </ruby>

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>About</h1>
    <Paragraph>
      Hi, my name's David.
      I'm a web developer and team lead at <Link href={COMPEON_LINK}>Compeon</Link> in Düsseldorf.
      Next to web development with React, my hobbies include music production, digital painting, and learning new programming languages.
      While time's usally on the short side for all the stuf I'd like to do,
      I generally love learning new stuff and improving myself,
      as well as trying my best to help and teach others.
    </Paragraph>

    <Paragraph>
      <h2>Technologies, Frameworks, ...</h2>
      <ul>
        <ListElement>
          Programming Languages: JS, Ruby, NodeJS, TypeScript, Java (ugh), some Python, some Go,
          some C/C++, Elm, currently learning Haskell
        </ListElement>
        <ListElement>
          In the frontend: React, Styled Components, Redux, Elm, CSS/SCSS, ...
          <br />
          In the backend: Rails, Node, AWS Cloudformation, Lambda, ...
          <br />
          In the... soft-end: Agile (Scrum), Kanban
        </ListElement>
        <ListElement>
          I love functional programming.
        </ListElement>
        <ListElement>I like CSS / SCSS, or styling in general.</ListElement>
        <ListElement>I dislike Java.</ListElement>
        <ListElement>
          I dislike <Ruby rubyText='/ˈkænsə(r)/'>Electron</Ruby> (and try to avoid most Electron apps, hehe).
        </ListElement>
      </ul>
    </Paragraph>

    <Paragraph>
      <h2>Other stuff worth mentioning (or maybe not)</h2>
      <ul>
        <ListElement>
          I finished my Bachelor's Degree in Applied Informatics at
          the <Link href="https://www.htwsaar.de/en">htwsaar</Link> in Saarbrücken,
          and my Master's Degree in Media Informatics at
          the <Link href="https://www.hs-duesseldorf.de/en">HSD</Link> in Düsseldorf.
        </ListElement>
        <ListElement>
          For music production, I use Ableton Live, which I love, though sometimes I envy Logic and Cubase users.
        </ListElement>
        <ListElement>
          For painting, I use Procreate on an iPad Pro.
        </ListElement>
        <ListElement>
          I do the <Link href="https://adventofcode.com/">Advent of Code</Link> to learn Haskell, but I never finish it...
        </ListElement>
        <ListElement>
          Even though this is a static site, I created it using React
          (with <Link href="https://www.gatsbyjs.com/">Gatsby</Link>)
          to make working with SVG easier.
        </ListElement>
      </ul>
    </Paragraph>

  </Layout>
)

export default IndexPage
