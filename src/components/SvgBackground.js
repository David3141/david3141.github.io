import React from 'react'
import styled from 'styled-components'

const HorizontalWave = ({ barHeightLeft, barHeightRight, fill, intensity }) =>
  <path
    d={`
      M 0,0
      L 0,${barHeightLeft}
      C 28,${intensity} 54,${barHeightLeft - 5} 100,${barHeightRight}
      L 100,0
    `}
    fill={fill}
  />

const LinearGradient = ({ fromColor, id, toColor }) =>
  <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" style={{ stopColor: fromColor }} />
    <stop offset="100%" style={{ stopColor: toColor, stopOpacity: 1 }} />
  </linearGradient>

const Definitions = () =>
  <defs>
    <LinearGradient fromColor='#E8306C' id='gradRed' toColor='#FF3F34' />
    <LinearGradient fromColor='#23ef4a' id='gradGreen' toColor='#1cf' />
  </defs>

const Container = styled.svg`
  border: none;
  box-sizing: content-box;
  margin-top: -1px;
  width: 100%;
  z-index: -1;
`

const BASE_INTENSITY = 13
const BASE_BAR_HEIGHT_LEFT = 0
const BASE_BAR_HEIGHT_RIGHT = 8

const SvgBackground = () =>
  <Container viewBox='0 0 100 11'>
    <Definitions />

    <HorizontalWave
      barHeightLeft={BASE_BAR_HEIGHT_LEFT + 1}
      barHeightRight={BASE_BAR_HEIGHT_RIGHT + 0.5}
      fill='#333333'
      intensity={BASE_INTENSITY + 6}
    />
    <HorizontalWave
      barHeightLeft={BASE_BAR_HEIGHT_LEFT + 0.3}
      barHeightRight={BASE_BAR_HEIGHT_RIGHT}
      fill='url(#gradRed)'
      intensity={BASE_INTENSITY + 5}
    />
    <HorizontalWave
      barHeightLeft={BASE_BAR_HEIGHT_LEFT + 0.3}
      barHeightRight={BASE_BAR_HEIGHT_RIGHT}
      fill='url(#gradGreen)'
      intensity={BASE_INTENSITY + 3.2}
    />
    <HorizontalWave
      barHeightLeft={BASE_BAR_HEIGHT_LEFT}
      barHeightRight={BASE_BAR_HEIGHT_RIGHT}
      fill='url(#gradRed)'
      intensity={BASE_INTENSITY}
    />
  </Container>

export default SvgBackground
