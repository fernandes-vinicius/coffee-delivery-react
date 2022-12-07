import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: grid;
  align-items: flex-start;
  gap: 2rem;

  @media ${(props) => props.theme.screens.lg} {
    grid-template-columns: 1fr 40%;
  }
`

export const AddressAndPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`

export const Title = styled.h2`
  margin-bottom: 1rem;

  font-family: ${(props) => props.theme.fontFamily.header};
  font-weight: 700;
  font-size: 1.125rem;

  color: ${(props) => props.theme.colors.subtitle};
`

export const SelectedCoffeesCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 1.5rem;

  background: ${(props) => props.theme.colors.card};
  border-radius: 6px 44px;
`

export const SelectedCoffee = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem 1.5rem;

  width: 100%;

  font-weight: 700;
  color: ${(props) => props.theme.colors.text};

  border-bottom: 1px solid ${(props) => props.theme.colors.button};

  img {
    width: 100%;
    max-width: 4rem;
  }
`

export const SelectedCoffeeInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;
`

export const SelectedCoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  > span {
    font-weight: 400;
    color: ${(props) => props.theme.colors.subtitle};
  }
`

export const SelectedCoffeeActionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`

export const ButtonRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.25rem;

  min-height: 2rem;

  background: ${(props) => props.theme.colors.button};
  border-radius: 6px;

  font-size: 0.75rem;
  text-transform: uppercase;

  transition: background 0.1s ease-in-out, color 0.1s ease-in-out;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  &:hover {
    svg {
      color: ${(props) => props.theme.colors['purple-dark']};
    }

    color: ${(props) => props.theme.colors.subtitle};
    background: ${(props) => props.theme.colors.hover};
  }
`

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;

  width: 100%;
`

export const OrderDetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  width: 100%;

  & > :not(strong):first-child {
    font-size: 0.875rem;
  }

  strong {
    font-size: 1.25rem;
  }
`

export const ButtonConfirmOrder = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;

  width: 368px;
  min-height: 2.875rem;

  background: ${(props) => props.theme.colors.yellow};
  border-radius: 6px;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.6;

  text-transform: uppercase;

  color: ${(props) => props.theme.colors.white};
  font-stretch: 100;

  transition: background 0.1s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.colors['yellow-dark']};
  }
`
