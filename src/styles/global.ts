import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.yellow};
  }

  body {
    overflow-x: hidden;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }

  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  img {
    user-select: none;
    pointer-events: none;
  }

  a:focus {
    outline: transparent;
    box-shadow: none;
  }
`
