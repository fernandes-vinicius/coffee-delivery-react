import styled from 'styled-components'

import backgroundImg from '~/assets/background.svg'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const IntroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0rem;

  padding: 5.75rem 0;

  h1 {
    margin-bottom: 1rem;

    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;

    color: ${(props) => props.theme.colors.title};
  }

  p {
    font-weight: 400;
    font-size: 1.25rem;
    font-stretch: 100;

    color: ${(props) => props.theme.colors.subtitle};
  }

  img {
    visibility: hidden;
    max-width: 0%;
  }

  @media ${(props) => props.theme.screens.lg} {
    gap: 3.5rem;

    img {
      visibility: visible;
      max-width: 100%;
    }
  }
`

export const GridItems = styled.div`
  margin-top: 4.25rem;

  display: grid;
  gap: 1.25rem 0rem;

  @media ${(props) => props.theme.screens.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const GridItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 1rem;

  color: ${(props) => props.theme.colors.text};
`

const BaseGridItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 2rem;
  height: 2rem;

  border-radius: 1000px;
  color: ${(props) => props.theme.colors.white};

  font-size: 1rem;
`

export const GridItemIconOne = styled(BaseGridItemIcon)`
  background: ${(props) => props.theme.colors['yellow-dark']};
`

export const GridItemIconTwo = styled(BaseGridItemIcon)`
  background: ${(props) => props.theme.colors.text};
`

export const GridItemIconThree = styled(BaseGridItemIcon)`
  background: ${(props) => props.theme.colors.yellow};
`

export const GridItemIconFour = styled(BaseGridItemIcon)`
  background: ${(props) => props.theme.colors.purple};
`
