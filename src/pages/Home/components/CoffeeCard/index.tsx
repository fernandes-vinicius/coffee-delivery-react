import { Coffee } from '~/reducers/coffees/reducer'
import { formatCurrency } from '~/utils/formatCurrency'

import {
  CardContainer,
  CardFooter,
  CoffeeAmount,
  Tag,
  TagsList,
} from './styles'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <CardContainer>
      <img src={coffee.imagePath} alt="" />

      <TagsList>
        <Tag>Tradicional</Tag>
      </TagsList>

      <h2>{coffee.name}</h2>
      <p>{coffee.description}</p>

      <CardFooter>
        <CoffeeAmount>
          R$ <span>{formatCurrency(coffee.amount)}</span>
        </CoffeeAmount>
      </CardFooter>
    </CardContainer>
  )
}
