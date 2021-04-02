/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Link from "./Link"
import "./layout.css"

const Flexed = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex: 1;
  margin: 0 auto 40px;
  max-width: 800px;
  padding: 2.45rem 2.45rem;
  border-radius: 15px;

  @media only screen and (min-width: 800px) {
    box-shadow: 5px 7px 24px -5px #ccc;
    min-width: 500px;
  }
`

const Footer = styled.footer`
  padding-bottom: 30px;
  text-align: center;

  & > * {
    padding: 9px;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Flexed>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Content>
        <main>{children}</main>
      </Content>
      <Footer>
        <Link target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/david3141">GitHub</Link>
        <Link target="_blank" rel="noopener noreferrer nofollow" href="https://www.linkedin.com/in/david-landry-7a31b118a/">LinkedIn</Link>
        <Link target="_blank" rel="noopener noreferrer nofollow" href="https://www.xing.com/profile/David_Landry4/cv">Xing</Link>
        <Link target="_blank" rel="noopener noreferrer nofollow" href="https://www.instagram.com/day_whid/">Instagram</Link>
      </Footer>
    </Flexed>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
