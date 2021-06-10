import { css, keyframes } from 'styled-components'

import { colors } from './stylesVariables'

// from black to white  ----------------------------
const blackToWhiteFrames = keyframes`
  from {
    color: ${colors.black}
  }
  to {
    color: ${colors.white}
  }
`

export const blackToWhite = ({ time = '0.5s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${blackToWhiteFrames} ${type};
    animation-fill-mode: forwards;
  `



// from white to black ----------------------------
const whiteToBlackFrames = keyframes`
from {
  color: ${colors.white}
}
to {
  color: ${colors.black}
}
`

export const whiteToBlack = ({ time = '0.5s', type = 'ease' } = {}) =>
css`
  animation: ${time} ${whiteToBlackFrames} ${type};
  animation-fill-mode: forwards;
`


//transform from white to main  ----------------------------
const whiteToMainFrames = keyframes`
  from {
    color: ${colors.white}
  }
  to {
    color: ${colors.main}
  }
`

export const whiteToMain = ({ time = '0.5s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${whiteToMainFrames} ${type};
    animation-fill-mode: forwards;
  `


// from black to main  ----------------------------
const blackToMainFrames = keyframes`
  from {
    color: ${colors.black}
  }
  to {
    color: ${colors.main}
  }
`

export const blackToMain = ({ time = '0.5s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${blackToMainFrames} ${type};
    animation-fill-mode: forwards;
  `
