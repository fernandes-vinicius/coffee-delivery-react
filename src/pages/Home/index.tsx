import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import homeBannerImg from '~/assets/home-banner.svg'
import homeBackgroundImg from '~/assets/home-background.svg'
import { IProduct } from '~/types'
import { coffeeCatalog } from '~/catalog'
import { useCart } from '~/hooks/useCart'

import { ProductCard } from './components/ProductCard'

import {
  BackgroundImage,
  IntroItem,
  ItemIconFour,
  ItemIconOne,
  ItemIconThree,
  ItemIconTwo,
  IntroItemsContainer,
  HomeContainer,
  IntroContainer,
  IntroDescription,
  IntroImage,
  Heading,
  ProductList,
  IntroTitle,
} from './styles'

export function Home() {
  const { addProduct } = useCart()

  function handleAddToCart(product: IProduct, amount: number) {
    addProduct(product, amount)
  }

  return (
    <HomeContainer>
      <IntroContainer>
        <BackgroundImage src={homeBackgroundImg} alt="" />

        <div>
          <IntroTitle>
            Encontre o café perfeito para qualquer hora do dia
          </IntroTitle>

          <IntroDescription>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </IntroDescription>

          <IntroItemsContainer>
            <IntroItem>
              <ItemIconOne>
                <ShoppingCart size={16} weight="fill" />
              </ItemIconOne>
              Compra simples e segura
            </IntroItem>

            <IntroItem>
              <ItemIconTwo>
                <Package size={16} weight="fill" />
              </ItemIconTwo>
              Embalagem mantém o café intacto
            </IntroItem>

            <IntroItem>
              <ItemIconThree>
                <Timer size={16} weight="fill" />
              </ItemIconThree>
              Entrega rápida e rastreada
            </IntroItem>

            <IntroItem>
              <ItemIconFour>
                <Coffee size={16} weight="fill" />
              </ItemIconFour>
              O café chega fresquinho até você
            </IntroItem>
          </IntroItemsContainer>
        </div>

        <IntroImage src={homeBannerImg} alt="" />
      </IntroContainer>

      <Heading>Nossos cafés</Heading>

      <ProductList>
        {/* coffee catalog */}
        {coffeeCatalog.map((coffee) => (
          <ProductCard
            key={coffee.id}
            product={coffee}
            onAddToCart={handleAddToCart}
          />
        ))}

        {/* others catalogs */}
      </ProductList>
    </HomeContainer>
  )
}
