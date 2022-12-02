import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  background: ${(props) => props.theme.colors.background};
`

export const ActionsBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
`

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  cursor: default;

  background: ${(props) => props.theme.colors['purple-light']};
  border-radius: 6px;

  font-size: 0.875rem;
  color: ${(props) => props.theme.colors['purple-dark']};
`

interface CartProps {
  counter: number
}

export const Cart = styled.button<CartProps>`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  isolation: isolate;

  width: 2.375rem;
  height: 2.375rem;

  background: ${(props) => props.theme.colors['yellow-light']};
  border-radius: 6px;

  color: ${(props) => props.theme.colors['yellow-dark']};

  /* Counter */
  &::after {
    content: ${(props) => `"${props.counter}"`};

    transform: ${(props) => (props.counter > 0 ? 'scale(1)' : 'scale(0)')};
    transition: transform 0.3s ease-in-out;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: -0.5rem;
    right: -0.522rem;
    width: 1.25rem;
    height: 1.25rem;

    background: ${(props) => props.theme.colors['yellow-dark']};
    border-radius: 1000px;

    font-weight: 700;
    font-size: 0.75rem;
    text-align: center;
    letter-spacing: -0.06em;

    color: ${(props) => props.theme.colors.white};
  }
`
