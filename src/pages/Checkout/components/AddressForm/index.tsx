import { useFormContext } from 'react-hook-form'

import { AddressFormContainer, Input } from './styles'

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <AddressFormContainer>
      <Input placeholder="CEP" {...register('postalCode')} />
      <Input placeholder="Rua" {...register('street')} />
      <Input placeholder="Número" {...register('number')} />
      <Input placeholder="Complemento" {...register('complement')} />
      <Input placeholder="Bairro" {...register('district')} />
      <Input placeholder="Cidade" {...register('city')} />
      <Input placeholder="UF" {...register('state')} />
    </AddressFormContainer>
  )
}
