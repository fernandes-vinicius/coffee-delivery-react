import { useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import { Trash } from 'phosphor-react'
import { z } from 'zod'

import { SelectAmount } from '~/components/SelectAmount'
import { useCart } from '~/hooks/useCart'
import { formatCurrency } from '~/utils/formatCurrency'

import { AddressForm } from './components/AddressForm'
import { Payment } from './components/Payment'
import Success from './components/Success'
import {
  ButtonConfirmOrder,
  ButtonRemove,
  CheckoutContainer,
  ProductActionsContainer,
  ProductItem,
  ProductItemDetails,
  ProductItemInfo,
  ProductPrice,
  SelectProductsCard,
  Title,
} from './styles'

const DEFAULT_DELIVERY_FEE = 350 /** standard shipping fee charged */

const addressFormValidationSchema = z.object({
  postalCode: z.string().trim().min(8, 'Informe um CEP válido'),
  street: z.string().trim().min(3, 'Informe a rua'),
  number: z.string().trim().min(1, 'Informe o número'),
  complement: z.string().trim().nullable(),
  district: z.string().trim().min(3, 'Informe o bairro'),
  city: z.string().trim().min(3, 'Informe a cidade'),
  state: z.string().trim().min(2, 'Informe o estado (UF)'),
})

export type AddressFormData = z.infer<typeof addressFormValidationSchema>

export type PaymentTypes = 'credit_card' | 'debit_card' | 'money'

export interface IOrderData {
  address: AddressFormData
  paymentType: PaymentTypes
  sumTotalItems: number
  deliveryFee: number
  total: number
}

export function Checkout() {
  const navigate = useNavigate()

  const [paymentType, setPaymentType] = useState<PaymentTypes | null>(null)
  const [success, setSuccess] = useState(false)

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
  const { handleSubmit, watch } = addressForm

  const { cart, totalItems, removeProduct, updateProductAmount } = useCart()

  const sumTotalItems = cart.reduce((acc, currentValue) => {
    acc += currentValue.price * currentValue.amount
    return acc
  }, 0)
  const deliveryFee = DEFAULT_DELIVERY_FEE
  const total = sumTotalItems + deliveryFee

  function handleDeleteProduct(productId: number) {
    removeProduct(productId)
  }

  function handleUpdateProductAmount(productId: number, amount: number) {
    updateProductAmount(productId, amount)
  }

  function handleConfirmOrder(addressData: AddressFormData) {
    if (paymentType) {
      const orderData: IOrderData = {
        address: addressData,
        paymentType,
        sumTotalItems,
        deliveryFee,
        total,
      }

      console.log('orderData', orderData)

      setSuccess(true)
    }
  }

  // returns user to home page if cart is empty
  useEffect(() => {
    if (totalItems <= 0) navigate('/')
  }, [navigate, totalItems])

  if (success) {
    const address = watch()
    return <Success address={address} />
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleConfirmOrder)}>
        <div>
          <Title>Complete seu pedido</Title>

          <FormProvider {...addressForm}>
            <AddressForm />
          </FormProvider>

          <Payment
            onChangePaymentType={(newPaymentType) => {
              setPaymentType(newPaymentType)
            }}
          />
        </div>

        <div>
          <Title>Cafés selecionados</Title>

          <SelectProductsCard>
            {cart.map((product) => (
              <ProductItem key={product.id}>
                <ProductItemInfo>
                  <img src={product.image} alt="" />

                  <ProductItemDetails>
                    <span>{product.name}</span>

                    <ProductActionsContainer>
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
                    </ProductActionsContainer>
                  </ProductItemDetails>
                </ProductItemInfo>

                <ProductPrice>
                  {`R$ ${formatCurrency(product.price)}`}
                </ProductPrice>
              </ProductItem>
            ))}

            <div>Total items R$ {formatCurrency(sumTotalItems)}</div>

            <div>Total delivery R$ {formatCurrency(deliveryFee)}</div>

            <strong>Total R$ {formatCurrency(total)}</strong>

            <ButtonConfirmOrder type="submit">
              Confirmar pedido
            </ButtonConfirmOrder>
          </SelectProductsCard>
        </div>
      </form>
    </CheckoutContainer>
  )
}
