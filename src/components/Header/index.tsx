import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '~/assets/logo-coffee-delivery.svg'
import { useCart } from '~/hooks/useCart'

import { ActionsContainer, Cart, HeaderContainer, Location } from './styles'

export function Header() {
  const { totalItems } = useCart()

  return (
    <HeaderContainer>
      {/* Logotipo */}
      <Link to="/">
        <img src={logoCoffeeDelivery} alt="" />
      </Link>

      <ActionsContainer>
        <Location>
          <MapPin size={22} weight="fill" /> Porto Alegre - RS
        </Location>

        <Link to="/checkout">
          <Cart title="Ver carrinho" counter={totalItems}>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </Link>
      </ActionsContainer>
    </HeaderContainer>
  )
}
