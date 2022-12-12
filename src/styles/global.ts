import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, button {
    font-family:  ${(props) => props.theme.fontFamily.text};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }

  button {
    border: 0;
    background: transparent;
    line-height: 0;
    cursor: pointer;
  }

  img {
    user-select: none;
    pointer-events: none;
  }
`
