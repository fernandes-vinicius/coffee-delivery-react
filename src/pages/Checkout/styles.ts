import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  > form {
    display: grid;
    align-items: flex-start;
    gap: 2rem;
  }

  @media ${(props) => props.theme.screens.xl} {
    > form {
      grid-template-columns: 1fr 40%;
    }
  }
`

export const Title = styled.h2`
  margin-bottom: 1rem;

  font-family: ${(props) => props.theme.fontFamily.header};
  font-weight: 700;
  font-size: 1.125rem;

  color: ${(props) => props.theme.colors.subtitle};
`

export const SelectProductsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 1.5rem;

  width: 100%;

  background: ${(props) => props.theme.colors.card};
  border-radius: 6px 44px;
`

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem 1.5rem;

  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.button};

  @media ${(props) => props.theme.screens.lg} {
    flex-direction: row;
  }
`

export const ProductItemInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;

  flex-grow: 1;

  > img {
    width: 100%;
    max-width: 4rem;
  }
`

export const ProductItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  flex-grow: 1;

  > span {
    color: ${(props) => props.theme.colors.subtitle};
  }
`

export const ProductActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const ButtonRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 100%;
  min-height: 2rem;

  background: ${(props) => props.theme.colors.button};
  border-radius: 6px;

  font-size: 0.75rem;
  line-height: 1.6;
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

export const ProductPrice = styled.span`
  font-weight: 700;
  font-size: 1rem;
  text-align: right;

  width: 100%;

  color: ${(props) => props.theme.colors.text};

  @media ${(props) => props.theme.screens.lg} {
    width: auto;
  }
`

export const ButtonConfirmOrder = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;

  width: 100%;
  min-height: 2.875rem;

  background: ${(props) => props.theme.colors.yellow};
  border-radius: 6px;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.6;
  text-transform: uppercase;

  color: ${(props) => props.theme.colors.white};

  transition: background 0.1s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.colors['yellow-dark']};
  }
`
