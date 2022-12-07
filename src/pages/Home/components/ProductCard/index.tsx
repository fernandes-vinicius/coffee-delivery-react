import { useState } from 'react'
import { ShoppingCart } from 'phosphor-react'

import { IProduct } from '~/types'
import { formatCurrency } from '~/utils/formatCurrency'
import { SelectAmount } from '~/components/SelectAmount'

import {
  ActionsContainer,
  CardContainer,
  CardDescription,
  CardFooter,
  CardTitle,
  IconButton,
  ProductPrice,
  Tag,
  TagsList,
} from './styles'

interface ProductCardProps {
  product: IProduct
  onAddToCart: (product: IProduct, amount: number) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [amount, setAmount] = useState(1)

  function handleAddToCart() {
    onAddToCart(product, amount)
  }

  return (
    <CardContainer>
      <img src={product.image} alt="" />

      <TagsList>
        {product.tags?.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsList>

      <CardTitle>{product.name}</CardTitle>
      <CardDescription>{product.description}</CardDescription>

      <CardFooter>
        <ProductPrice>{formatCurrency(product.price)}</ProductPrice>

        <ActionsContainer>
          <SelectAmount onChange={setAmount} />

          <IconButton title="Adicionar no carrinho" onClick={handleAddToCart}>
            <ShoppingCart weight="bold" size={22} />
          </IconButton>
        </ActionsContainer>
      </CardFooter>
    </CardContainer>
  )
}
