import styled from 'styled-components'

export const PaymentContainer = styled.div`
  margin-top: 0.75rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  background: ${(props) => props.theme.colors.card};
  border-radius: 6px;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  color: ${(props) => props.theme.colors.purple};
`

export const InfoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;

  span {
    color: ${(props) => props.theme.colors.subtitle};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.text};
  }
`

export const ListPaymentOptionsContainer = styled.div`
  display: grid;
  /* flex-wrap: wrap; */
  /* justify-content: center; */
  /* align-items: center; */
  gap: 0.75rem;

  @media ${(props) => props.theme.screens.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.screens.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const PaymentOption = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;

  background: ${(props) => props.theme.colors.button};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  span {
    font-size: 0.75rem;
    line-height: 1.6;

    text-transform: uppercase;
  }
`
