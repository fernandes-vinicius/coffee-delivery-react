import { useState } from 'react'

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
  onChangePaymentType: (paymentType: PaymentTypes) => void
}

export function Payment({ onChangePaymentType }: PaymentProps) {
  const [paymentType, setPaymentType] = useState<PaymentTypes | null>(null)

  function handleChangePaymentType(newPaymentType: PaymentTypes) {
    setPaymentType(newPaymentType)
    onChangePaymentType(newPaymentType)
  }

  const isCreditCardSelected = paymentType === 'credit_card'
  const isDebitCardSelected = paymentType === 'debit_card'
  const isMoneySelected = paymentType === 'money'

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
          onClick={() => handleChangePaymentType('credit_card')}
        >
          <CreditCard size={16} /> Cartão de crédito
        </PaymentOption>

        <PaymentOption
          selected={isDebitCardSelected}
          onClick={() => handleChangePaymentType('debit_card')}
        >
          <Bank size={16} /> Cartão de débito
        </PaymentOption>

        <PaymentOption
          selected={isMoneySelected}
          onClick={() => handleChangePaymentType('money')}
        >
          <Money size={16} /> Dinheiro
        </PaymentOption>
      </PaymentOptionsContainer>
    </PaymentContainer>
  )
}
