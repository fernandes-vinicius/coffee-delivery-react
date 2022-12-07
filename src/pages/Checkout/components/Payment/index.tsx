import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import {
  InfoContainer,
  InfoDetailsContainer,
  ListPaymentOptionsContainer,
  PaymentContainer,
  PaymentOption,
} from './styles'

export function Payment() {
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

      <ListPaymentOptionsContainer>
        <PaymentOption>
          <CreditCard size={16} />
          <span>Cartão de crédito</span>
        </PaymentOption>

        <PaymentOption>
          <Bank size={16} />
          <span>Cartão de crédito</span>
        </PaymentOption>

        <PaymentOption>
          <Money size={16} />
          <span>Cartão de crédito</span>
        </PaymentOption>
      </ListPaymentOptionsContainer>
    </PaymentContainer>
  )
}
