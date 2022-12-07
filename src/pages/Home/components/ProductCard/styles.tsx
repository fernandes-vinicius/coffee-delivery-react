import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${(props) => props.theme.colors.card};
  border-radius: 6px 36px;

  padding: 0 1.25rem 1.25rem;
  text-align: center;

  > img {
    margin-top: -1.5rem;
    display: inline-block;
  }
`

export const TagsList = styled.div`
  margin-top: 0.75rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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

export const CardTitle = styled.h2`
  margin-top: 1rem;

  font-family: ${(props) => props.theme.fontFamily.header};
  font-weight: 700;
  font-size: 1.25rem;

  color: ${(props) => props.theme.colors.subtitle};
`

export const CardDescription = styled.p`
  margin-top: 0.5rem;

  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.label};
`

export const CardFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  margin-top: 2rem;
`

export const ProductPrice = styled.div`
  flex-grow: 1;

  font-family: ${(props) => props.theme.fontFamily.header};
  font-weight: 800;
  font-size: 1.5rem;
  text-align: center;

  ::before {
    content: 'R$ ';

    font-family: ${(props) => props.theme.fontFamily.text};
    font-weight: 400;
    font-size: 0.875rem;
  }
`

export const ActionsContainer = styled.div`
  flex-grow: 1;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.5rem;

  width: 100%;
  min-height: 2rem;

  background: ${(props) => props.theme.colors['purple-dark']};
  border-radius: 6px;

  color: ${(props) => props.theme.colors.card};

  transition: background 0.1s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.colors.purple};
  }
`
