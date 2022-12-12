import { useFormContext } from 'react-hook-form'

import { AddressFormData } from '~/pages/Checkout'

import { AddressFormContainer, FormItem, Input } from './styles'

export function AddressForm() {
  const { register } = useFormContext<AddressFormData>()

  return (
    <AddressFormContainer>
      <FormItem colSpan={4}>
        <Input placeholder="CEP" {...register('postalCode')} />
      </FormItem>

      <FormItem>
        <Input placeholder="Rua" {...register('street')} />
      </FormItem>

      <FormItem colSpan={4}>
        <Input placeholder="Número" {...register('number')} />
      </FormItem>

      <FormItem colSpan={8}>
        <Input placeholder="Complemento" {...register('complement')} />
      </FormItem>

      <FormItem colSpan={4}>
        <Input placeholder="Bairro" {...register('district')} />
      </FormItem>

      <FormItem colSpan={6}>
        <Input placeholder="Cidade" {...register('city')} />
      </FormItem>

      <FormItem colSpan={2}>
        <Input placeholder="UF" {...register('state')} />
      </FormItem>
    </AddressFormContainer>
  )
}
