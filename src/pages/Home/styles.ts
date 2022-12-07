import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  right: 0;

  min-width: 100vw;
  height: 100%;

  overflow: hidden;
  object-fit: cover;

  @media ${(props) => props.theme.screens.md} {
    height: auto;
  }
`

export const IntroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5.75rem 0;
`

export const IntroTitle = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.header};
  font-weight: 800;
  font-size: 3rem;

  color: ${(props) => props.theme.colors.title};
`

export const IntroDescription = styled.p`
  margin-top: 1rem;

  font-weight: 400;
  font-size: 1.25rem;
  font-stretch: 100;

  color: ${(props) => props.theme.colors.subtitle};
`

export const IntroItemsContainer = styled.div`
  margin-top: 4.25rem;

  display: grid;
  gap: 1.25rem 0rem;

  @media ${(props) => props.theme.screens.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const IntroItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  line-height: 0;
`

const BaseItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 2rem;
  height: 2rem;

  border-radius: 1000px;
  color: ${(props) => props.theme.colors.white};
`

export const ItemIconOne = styled(BaseItemIcon)`
  background: ${(props) => props.theme.colors['yellow-dark']};
`

export const ItemIconTwo = styled(BaseItemIcon)`
  background: ${(props) => props.theme.colors.text};
`

export const ItemIconThree = styled(BaseItemIcon)`
  background: ${(props) => props.theme.colors.yellow};
`

export const ItemIconFour = styled(BaseItemIcon)`
  background: ${(props) => props.theme.colors.purple};
`

export const IntroImage = styled.img`
  max-width: 0%;
  transition: max-width 0.3s ease-in-out;

  @media ${(props) => props.theme.screens.xl} {
    max-width: 100%;
    margin-left: 3.5rem;
  }
`

export const Heading = styled.h2`
  margin-bottom: 3.5rem;

  font-family: ${(props) => props.theme.fontFamily.header};
  font-weight: 800;
  font-size: 2rem;

  color: ${(props) => props.theme.colors.subtitle};
`

export const ProductList = styled.ul`
  display: grid;
  gap: 2.5rem 2rem;

  @media ${(props) => props.theme.screens.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.screens.lg} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${(props) => props.theme.screens.xl} {
    grid-template-columns: repeat(4, 1fr);
  }
`
