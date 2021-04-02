import * as React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from '../components/Link'
import Paragraph from '../components/Paragraph'


const AVARTEQ_LINK = 'https://www.avarteq.de/'
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
      My name's David. <br/> I...
      <ul>
        <ListElement>
          like (web) development: JS, Ruby, NodeJS, Java (ugh), some Python, some Go,
          some C/C++, currently learning Haskell and Elm
        </ListElement>
        <ListElement>
          work as a web developer and team lead at <Link href={COMPEON_LINK}>Compeon</Link> in Düsseldorf,
          previously worked as a student employee at <Link href={AVARTEQ_LINK}>Avarteq</Link> in
          Saarbrücken
        </ListElement>
        <ListElement>
          finished my Master's Degree in Media Informatics at the HSD in Düsseldorf
        </ListElement>
        <ListElement>
          love learning new stuff and improving myself as well as trying my best to help and
          teach others
        </ListElement>
        <ListElement>dislike Java</ListElement>
        <ListElement>dislike <Ruby rubyText='/ˈkænsə(r)/'>Electron</Ruby> (and most Electron apps, hehe),</ListElement>
        <ListElement>adore making <Link to='/music'>music</Link></ListElement>
      </ul>
    </Paragraph>

  </Layout>
)

export default IndexPage
