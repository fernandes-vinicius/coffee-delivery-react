import { IAction } from '~/types'

export function createAction<T extends string, P>(
  type: T,
  payload: P,
): IAction<T, P> {
  return { type, payload }
}
