import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import { PaymentTypes } from '~/pages/Checkout'

import {
  InfoContainer,
  InfoDetailsContainer,
  PaymentContainer,
  PaymentOption,
  PaymentOptionsContainer,
} from './styles'

interface PaymentProps {
  value: `${PaymentTypes}` | null
  onChange: (paymentType: `${PaymentTypes}`) => void
}

export function Payment({ value: paymentType, onChange }: PaymentProps) {
  function handleChangePaymentType(newPaymentType: `${PaymentTypes}`) {
    onChange(newPaymentType)
  }

  const isCreditCardSelected = paymentType === 'Cartão de Crédito'
  const isDebitCardSelected = paymentType === 'Cartão de Débito'
  const isMoneySelected = paymentType === 'Dinheiro'

  return (
    <PaymentContainer>
      <InfoContainer>
        <CurrencyDollar size={22} />

        <InfoDetailsContainer>
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </InfoDetailsContainer>
      </InfoContainer>

      <PaymentOptionsContainer>
        <PaymentOption
          selected={isCreditCardSelected}
          onClick={() => handleChangePaymentType('Cartão de Crédito')}
        >
          <CreditCard size={16} /> Cartão de crédito
        </PaymentOption>

        <PaymentOption
          selected={isDebitCardSelected}
          onClick={() => handleChangePaymentType('Cartão de Débito')}
        >
          <Bank size={16} /> Cartão de débito
        </PaymentOption>

        <PaymentOption
          selected={isMoneySelected}
          onClick={() => handleChangePaymentType('Dinheiro')}
        >
          <Money size={16} /> Dinheiro
        </PaymentOption>
      </PaymentOptionsContainer>
    </PaymentContainer>
  )
}
