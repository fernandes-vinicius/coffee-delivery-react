import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 0 2rem 2rem;

  @media ${(props) => props.theme.screens.lg} {
    max-width: 74rem;
  }
`
