import styled from 'styled-components'

export const PaymentContainer = styled.div`
  margin-top: 0.75rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  gap: 2rem;

  background: ${(props) => props.theme.colors.card};
  border-radius: 6px;

  @media ${(props) => props.theme.screens.lg} {
    padding: 2.5rem;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`

export const InfoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;

  width: 100%;

  > span {
    color: ${(props) => props.theme.colors.subtitle};
  }

  > p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.text};
  }
`

export const PaymentOptionsContainer = styled.div`
  display: grid;
  gap: 0.75rem;

  width: 100%;

  @media ${(props) => props.theme.screens.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.screens.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`

interface PaymentOptionProps {
  selected?: boolean
}

export const PaymentOption = styled.div<PaymentOptionProps>`
  cursor: pointer;

  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;

  background: ${(props) => {
    if (props.selected) return props.theme.colors['purple-light']
    return props.theme.colors.button
  }};
  border-radius: 6px;
  border: 1px solid transparent;
  border-color: ${(props) => props.selected && props.theme.colors.purple};

  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text};

  transition: background 0.1s ease-in-out;

  :hover {
    background: ${(props) => !props.selected && props.theme.colors.hover};
  }

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`
