import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

import SvgBackground from "./SvgBackground"

const HeaderContainer = styled.div`
  background: linear-gradient(to right, #E8306C, #FF3F34);
  color: white;
  padding-top: 4%;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

const Heading = styled.h1`
  font-size: 1.7em;
  margin: 0;
  margin-right: 14px;
`

const NavLink = styled(Link)`
  color: #333333;
  display: block;
  font-weight: bold;
  text-transform: uppercase;
  transition: color 140ms ease-in;

  transform: translateX(${props => props.marginLeft});

  &:hover {
    color: white;
  }
`

const Header = ({ siteTitle }) => (
  <header>
    <HeaderContainer>
      <Row>
        <Heading>
          {siteTitle}
        </Heading>
        <div>
          <NavLink
            marginLeft='4vw'
            to='/'
          >
            About
          </NavLink>

          <NavLink
            marginLeft='2vw'
            to='/music/'
          >
            Music
          </NavLink>

          <NavLink
            marginLeft='0'
            href='https://github.com/david3141'
          >
            GitHub
          </NavLink>
        </div>
      </Row>
    </HeaderContainer>
    <SvgBackground />
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
