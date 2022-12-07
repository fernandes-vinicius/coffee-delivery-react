import { createContext, ReactNode, useEffect, useReducer } from 'react'

import { IProduct } from '~/types'
import { cartReducer } from '~/reducers/cart/reducer'
import {
  addProductAction,
  removeProductAction,
  updateProductAmountAction,
} from '~/reducers/cart/actions'

interface ICartContext {
  cart: IProduct[]
  totalItems: number
  addProduct: (product: IProduct, amount: number) => void
  removeProduct: (productId: number) => void
  updateProductAmount: (productId: number, amount: number) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as ICartContext)

const initialState = {
  cart: [],
  totalItems: 0,
}

export function CartProvider(props: CartProviderProps) {
  const { children } = props

  const [cartState, dispatch] = useReducer(cartReducer, initialState, () => {
    const storedCartAsJSON = localStorage.getItem(
      '@coffee-delivery:cart-state-1.0.0',
    )

    if (storedCartAsJSON) return JSON.parse(storedCartAsJSON)

    return {
      cart: [],
      totalItems: 0,
    }
  })
  const { cart, totalItems } = cartState

  useEffect(() => {
    const cartJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', cartJSON)
  }, [cartState])

  function addProduct(product: IProduct, amount: number) {
    dispatch(addProductAction(product, amount))
  }

  function removeProduct(productId: number) {
    dispatch(removeProductAction(productId))
  }

  function updateProductAmount(productId: number, amount: number) {
    dispatch(updateProductAmountAction(productId, amount))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        addProduct,
        removeProduct,
        updateProductAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
