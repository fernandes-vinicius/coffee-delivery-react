import styled from 'styled-components'

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 100%;
  min-height: 2rem;

  background: ${(props) => props.theme.colors.button};
  border-radius: 6px;

  > span {
    width: 100%;
    min-width: 1.25rem;

    text-align: center;
    color: ${(props) => props.theme.colors.title};
  }

  > button {
    color: ${(props) => props.theme.colors.purple};
    transition: color 0.1s ease-in-out;

    &:hover {
      color: ${(props) => props.theme.colors['purple-dark']};
    }
  }
`
