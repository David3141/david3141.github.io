import React from 'react'
import styled from 'styled-components'

const Wave = ({ fill, intensity, startY=0 }) =>
  <path
    d={`
      M 0,0
      L 0,${startY}
      C 30,${intensity} 60,0 100,12
      L 100,0
    `}
    fill={fill}
  />

const LinearGradient = ({ fromColor, id, toColor }) =>
  <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" style={{ stopColor: fromColor }} />
    <stop offset="100%" style={{ stopColor: toColor, stopOpacity: 1 }} />
  </linearGradient>


const StylableSvg = styled.svg`

`

const WavyHeaderAppendix = () =>
  <StylableSvg width='100%' viewBox='0 0 100 13'>
    <defs>
      <LinearGradient fromColor='#E8306C' id='gradRed' toColor='#FF3F34' />
      <LinearGradient fromColor='#23ef4a' id='gradBlue' toColor='#1cf' />
    </defs>

    <Wave startY='1' intensity='25.5' fill='#333333'/>
    <Wave startY='0.7' intensity='24' fill='url(#gradRed)'/>
    <Wave startY='0.3' intensity='23' fill='url(#gradBlue)'/>
    <Wave intensity='20' fill='url(#gradRed)'/>
  </StylableSvg>

export default WavyHeaderAppendix
