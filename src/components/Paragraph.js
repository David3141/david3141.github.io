import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'

const Paragraph = styled.div`
  line-height: 1.8rem;
`

const ParagraphWrapper = ({ children }) => <Paragraph>{children}</Paragraph>

export default ParagraphWrapper
