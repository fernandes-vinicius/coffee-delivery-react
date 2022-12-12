import { produce } from 'immer'

import { IProduct } from '~/types'

import { Actions, ActionTypes } from './actions'

interface ICartState {
  cart: IProduct[]
  totalItems: number
}

export function cartReducer(state: ICartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT: {
      const { product, amount } = action.payload

      const productIndex = state.cart.findIndex((currentProduct) => {
        return currentProduct.id === product.id
      })

      return produce(state, (draft) => {
        if (productIndex < 0) draft.cart.push({ ...product, amount })
        else draft.cart[productIndex].amount += amount

        draft.totalItems += amount
      })
    }

    case ActionTypes.REMOVE_PRODUCT: {
      const { productId } = action.payload

      const productIndex = state.cart.findIndex((product) => {
        return product.id === productId
      })
      const cartWithoutAProduct = state.cart.filter((product) => {
        return product.id !== productId
      })

      return produce(state, (draft) => {
        if (productIndex >= 0) {
          draft.totalItems -= state.cart[productIndex].amount
          draft.cart = cartWithoutAProduct
        }
      })
    }

    case ActionTypes.UPDATE_PRODUCT_AMOUNT: {
      const { productId, amount } = action.payload

      const productIndex = state.cart.findIndex((product) => {
        return product.id === productId
      })

      return produce(state, (draft) => {
        if (productIndex >= 0) {
          draft.cart[productIndex].amount = amount

          const totalItemsUpdated = draft.cart.reduce((acc, currentValue) => {
            acc += currentValue.amount
            return acc
          }, 0)

          draft.totalItems = totalItemsUpdated
        }
      })
    }

    case ActionTypes.RESET_CART: {
      return produce(state, (draft) => {
        draft.cart = []
        draft.totalItems = 0
      })
    }

    default:
      return state
  }
}
