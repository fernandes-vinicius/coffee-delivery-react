import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import homeImg from '~/assets/home-img.svg'
import { useCoffee } from '~/hooks/useCoffee'

import {
  GridItem,
  GridItemIconFour,
  GridItemIconOne,
  GridItemIconThree,
  GridItemIconTwo,
  GridItems,
  HomeContainer,
  IntroContainer,
} from './styles'

export function Home() {
  const { coffees } = useCoffee()

  return (
    <HomeContainer>
      <IntroContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <GridItems>
            <GridItem>
              <GridItemIconOne>
                <ShoppingCart />
              </GridItemIconOne>
              Compra simples e segura
            </GridItem>

            <GridItem>
              <GridItemIconTwo>
                <Package />
              </GridItemIconTwo>
              Embalagem mantém o café intacto
            </GridItem>

            <GridItem>
              <GridItemIconThree>
                <Timer />
              </GridItemIconThree>
              Entrega rápida e rastreada
            </GridItem>

            <GridItem>
              <GridItemIconFour>
                <Coffee />
              </GridItemIconFour>
              O café chega fresquinho até você
            </GridItem>
          </GridItems>
        </div>

        <img src={homeImg} alt="" />
      </IntroContainer>
    </HomeContainer>
  )
}
