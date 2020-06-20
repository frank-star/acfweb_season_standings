import { createGlobalStyle } from 'styled-components'

import { colors } from './'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 1rem = 10px
  }

  body {
    background-color: ${colors.gray};
    font: 400 1.4rem 'Roboto', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
