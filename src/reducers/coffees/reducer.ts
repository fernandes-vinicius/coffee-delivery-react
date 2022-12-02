import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface Coffee {
  id: string
  name: string
  description: string
  amount: number
  imagePath: string
}

interface CoffeeState {
  coffees: Coffee[]
}

export function coffeeReducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE:
      return produce(state, (draft) => {})
    default:
      return state
  }
}
