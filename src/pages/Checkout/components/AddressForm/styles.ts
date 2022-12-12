import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 2.5rem;
  gap: 1rem;

  background: ${(props) => props.theme.colors.card};
  border-radius: 6px;
`

interface FormItemProps {
  colSpan?: number
}

export const FormItem = styled.div<FormItemProps>`
  grid-column: span 12;

  @media ${(props) => props.theme.screens.sm} {
    grid-column: span ${(props) => props.colSpan ?? 12};
  }
`

export const Input = styled.input`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  gap: 0.25rem;

  width: 100%;
  min-height: 2.625rem;

  background: ${(props) => props.theme.colors.input};
  border: 1px solid ${(props) => props.theme.colors.button};
  border-radius: 4px;

  font-size: 0.875rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme.colors['yellow-dark']};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.label};
  }
`
