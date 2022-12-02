import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { MdLocationOn, MdShoppingCart } from 'react-icons/md'

import logoCoffeeDelivery from '~/assets/logo-coffee-delivery.svg'

import { ActionsBox, Cart, HeaderContainer, Location } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      {/* Logotipo */}
      <Link to="/">
        <img src={logoCoffeeDelivery} alt="" />
      </Link>

      <ActionsBox>
        <Location>
          <MdLocationOn size={22} fontWeight="bold" /> Porto Alegre - RS
        </Location>

        <Link to="/checkout">
          <Cart counter={3}>
            <MdShoppingCart size={22} fontWeight="bold" />
          </Cart>
        </Link>
      </ActionsBox>
    </HeaderContainer>
  )
}
