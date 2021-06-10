import { createGlobalStyle } from "styled-components"
import { fonts, colors } from './stylesVariables'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: ${fonts.font_system};
  }
  h1 {
    font-size: ${fonts.h1};
    color: ${colors.black};
    font-weight: normal;
  }
	h2 {
    font-size: ${fonts.h2};
    color: ${colors.black};
    font-weight: bold;
  }
	h3 {
    font-size: ${fonts.h3};
    color: ${colors.black};
    font-weight: bold;
  }
	p {
    font-size: ${fonts.p};
    color: ${colors.black};
  }
	small {
    font-size: ${fonts.small};
    color: ${colors.black};
  }
  ul {
    font-size: ${fonts.p};
    color: ${colors.black};
  }
`