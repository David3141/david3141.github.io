import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const textStyle = css`
  color: #E8306C;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #FF3F34;
  }
`

const StyledLink = styled(Link)`
  ${textStyle}
`

const StyledHtmlLink = styled.a.attrs({
  target: '_blank',
  rel: 'noreferrer'
})`
  ${textStyle}
`

export default ({ children, href, to, ...rest }) => {
  if (to) return <StyledLink to={to} {...rest}>{children}</StyledLink>
  return <StyledHtmlLink href={href} {...rest}>{children}</StyledHtmlLink>
}
