import { IAction, IProduct } from '~/types'
import { createAction } from '~/utils/createAction'

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  UPDATE_PRODUCT_AMOUNT = 'UPDATE_PRODUCT_AMOUNT',
  RESET_CART = 'RESET_CART',
}

type AddProductActionType = IAction<
  typeof ActionTypes.ADD_PRODUCT,
  { product: IProduct; amount: number }
>

type RemoveProductActionType = IAction<
  typeof ActionTypes.REMOVE_PRODUCT,
  { productId: number }
>

type UpdateProductAmountActionType = IAction<
  typeof ActionTypes.UPDATE_PRODUCT_AMOUNT,
  { productId: number; amount: number }
>

type ResetCartActionType = IAction<typeof ActionTypes.RESET_CART, {}>

export type Actions =
  | AddProductActionType
  | RemoveProductActionType
  | UpdateProductAmountActionType
  | ResetCartActionType

export function addProductAction(product: IProduct, amount: number) {
  return createAction(ActionTypes.ADD_PRODUCT, { product, amount })
}

export function removeProductAction(productId: number) {
  return createAction(ActionTypes.REMOVE_PRODUCT, { productId })
}

export function updateProductAmountAction(productId: number, amount: number) {
  return createAction(ActionTypes.UPDATE_PRODUCT_AMOUNT, { productId, amount })
}

export function resetCartAction() {
  return createAction(ActionTypes.RESET_CART, {})
}
