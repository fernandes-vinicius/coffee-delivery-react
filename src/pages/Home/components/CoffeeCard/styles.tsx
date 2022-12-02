import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${(props) => props.theme.colors.card};
  border-radius: 6px 36px;

  width: 100%;
  max-height: 19.375rem;
  padding: 0 1.5rem 1.25rem;

  text-align: center;

  img {
    margin-top: -1.5rem;
  }

  h2 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;

    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;

    color: ${(props) => props.theme.colors.subtitle};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.label};
  }
`

export const TagsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`

export const Tag = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;

  background: ${(props) => props.theme.colors['yellow-light']};
  border-radius: 100px;

  font-weight: 700;
  font-size: 0.625rem;

  text-transform: uppercase;

  color: ${(props) => props.theme.colors['yellow-dark']};
`

export const CardFooter = styled.footer`
  display: flex;
  align-items: center;

  margin-top: 2rem;
`

export const CoffeeAmount = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  text-align: right;

  color: ${(props) => props.theme.colors.text};

  span {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
  }
`
