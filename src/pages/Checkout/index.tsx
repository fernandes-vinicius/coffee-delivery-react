import { Trash } from 'phosphor-react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { SelectAmount } from '~/components/SelectAmount'
import { useCart } from '~/hooks/useCart'
import { formatCurrency } from '~/utils/formatCurrency'

import { AddressForm } from './components/AddressForm'
import { Payment } from './components/Payment'

import {
  AddressAndPaymentContainer,
  ButtonConfirmOrder,
  ButtonRemove,
  CheckoutContainer,
  OrderDetailItem,
  OrderDetailsContainer,
  SelectedCoffee,
  SelectedCoffeeActionsContainer,
  SelectedCoffeeDetails,
  SelectedCoffeeInfo,
  SelectedCoffeesCardContainer,
  Title,
} from './styles'

const addressFormValidationSchema = zod.object({
  postalCode: zod.string(),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string().nullable(),
  district: zod.string(),
  city: zod.string(),
  state: zod.string(),
})

type AddressFormData = zod.infer<typeof addressFormValidationSchema>

export function Checkout() {
  const { cart, removeProduct, updateProductAmount } = useCart()

  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      postalCode: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
    },
  })
  const { handleSubmit, watch, reset } = addressForm

  function handleDeleteProduct(productId: number) {
    removeProduct(productId)
  }

  function handleUpdateProductAmount(productId: number, amount: number) {
    updateProductAmount(productId, amount)
  }

  return (
    <CheckoutContainer>
      <div>
        <Title>Complete seu pedido</Title>
        <AddressAndPaymentContainer>
          AddressAndPaymentContainer
        </AddressAndPaymentContainer>
      </div>

      <div>
        <Title>Cafés selecionados</Title>
        <SelectedCoffeesCardContainer>
          {cart.map((product) => (
            <SelectedCoffee key={product.id}>
              <SelectedCoffeeInfo>
                <img src={product.image} alt="" />

                <SelectedCoffeeDetails>
                  <span>{product.name}</span>

                  <SelectedCoffeeActionsContainer>
                    <SelectAmount
                      defaultValue={product.amount}
                      onChange={(newAmount) => {
                        handleUpdateProductAmount(product.id, newAmount)
                      }}
                    />

                    <ButtonRemove
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <Trash size={16} /> Remover
                    </ButtonRemove>
                  </SelectedCoffeeActionsContainer>
                </SelectedCoffeeDetails>
              </SelectedCoffeeInfo>

              <span>{`R$ ${formatCurrency(product.price)}`}</span>
            </SelectedCoffee>
          ))}

          <OrderDetailsContainer>
            <OrderDetailItem>
              <span>Total de itens</span>
              {`R$ 29,70`}
            </OrderDetailItem>

            <OrderDetailItem>
              <span>Entrega</span>
              {`R$ 3,50`}
            </OrderDetailItem>

            <OrderDetailItem>
              <strong>Total</strong>
              <strong>{`R$ 3,50`}</strong>
            </OrderDetailItem>
          </OrderDetailsContainer>

          <ButtonConfirmOrder>Confirmar Pedido</ButtonConfirmOrder>
        </SelectedCoffeesCardContainer>
      </div>
    </CheckoutContainer>
  )
}
