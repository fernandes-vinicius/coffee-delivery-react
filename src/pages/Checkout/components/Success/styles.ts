import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`

export const Title = styled.h2`
  font-family: ${(props) => props.theme.fontFamily.header};
  font-weight: 800;
  font-size: 2rem;

  color: ${(props) => props.theme.colors['yellow-dark']};
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.subtitle};
`

export const ContentBox = styled.div`
  margin-top: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    max-width: 0%;
  }

  @media ${(props) => props.theme.screens.xl} {
    gap: 6.375rem;

    > img {
      max-width: 100%;
    }
  }
`

export const OrderInfoContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  width: 100%;

  border-radius: 6px 36px;
  background: ${(props) => props.theme.colors.background};

  &::before {
    border-radius: 6px 36px;
    content: '';
    background-image: linear-gradient(
      to right,
      ${(props) => props.theme.colors.yellow} 0%,
      ${(props) => props.theme.colors.purple} 100%
    );
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    position: absolute;
    z-index: -1;
  }
`

export const OrderInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const OrderInfoIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  width: 2rem;
  height: 2rem;

  border-radius: 1000px;

  color: ${(props) => props.theme.colors.background};
`

export const OrderInfoIconLocal = styled(OrderInfoIcon)`
  background: ${(props) => props.theme.colors.purple};
`

export const OrderInfoIconTime = styled(OrderInfoIcon)`
  background: ${(props) => props.theme.colors.yellow};
`

export const OrderInfoIconPayment = styled(OrderInfoIcon)`
  background: ${(props) => props.theme.colors['yellow-dark']};
`
