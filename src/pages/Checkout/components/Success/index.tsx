import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import deliveryIllustrationImg from '~/assets/delivery-illustration.svg'

import { AddressFormData } from '~/pages/Checkout'

import {
  SuccessContainer,
  ContentBox,
  OrderInfoContainer,
  OrderInfoIconLocal,
  OrderInfoIconPayment,
  OrderInfoIconTime,
  OrderInfoItem,
  Subtitle,
  Title,
} from './styles'

interface SuccessProps {
  address: AddressFormData
}

export default function Success({ address }: SuccessProps) {
  return (
    <SuccessContainer>
      <Title>Uhu! Pedido confirmado</Title>
      <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>

      <ContentBox>
        <OrderInfoContainer>
          <OrderInfoItem>
            <OrderInfoIconLocal>
              <MapPin size={16} weight="fill" />
            </OrderInfoIconLocal>
            <span>
              Entrega em{' '}
              <b>
                {address.street}, {address.number}
              </b>{' '}
              <br />
              {address.district} - {address.city}, {address.state}
            </span>
          </OrderInfoItem>

          <OrderInfoItem>
            <OrderInfoIconTime>
              <Timer size={16} weight="fill" />
            </OrderInfoIconTime>
            <span>
              Previsão de entrega <br />
              <b>20 min - 30 min</b>
            </span>
          </OrderInfoItem>

          <OrderInfoItem>
            <OrderInfoIconPayment>
              <CurrencyDollar size={16} weight="fill" />
            </OrderInfoIconPayment>
            <span>
              Pagamento na entrega <br />
              <b>Cartão de Crédito</b>
            </span>
          </OrderInfoItem>
        </OrderInfoContainer>

        <img src={deliveryIllustrationImg} alt="" />
      </ContentBox>
    </SuccessContainer>
  )
}
