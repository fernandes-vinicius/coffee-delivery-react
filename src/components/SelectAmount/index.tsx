import { useState } from 'react'

import { Minus, Plus } from 'phosphor-react'

import { SelectContainer } from './styles'

interface SelectAmountProps {
  defaultValue?: number
  onChange: (currentValue: number) => void
}

const MIN_VALUE = 1

export function SelectAmount(props: SelectAmountProps) {
  const { defaultValue = MIN_VALUE, onChange } = props

  const [currentValue, setCurrentValue] = useState(defaultValue)

  function handleDecrement() {
    const decrementedValue =
      currentValue <= MIN_VALUE ? defaultValue : currentValue - 1
    setCurrentValue(decrementedValue)

    onChange(decrementedValue)
  }

  function handleIncrement() {
    const incrementedValue = currentValue + 1
    setCurrentValue(incrementedValue)

    onChange(incrementedValue)
  }

  return (
    <SelectContainer>
      <button onClick={handleDecrement}>
        <Minus size={14} weight="bold" />
      </button>

      <span>{currentValue}</span>

      <button onClick={handleIncrement}>
        <Plus size={14} weight="bold" />
      </button>
    </SelectContainer>
  )
}
