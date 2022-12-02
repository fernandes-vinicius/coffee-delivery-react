import { createContext, ReactNode, useReducer } from 'react'

import { Coffee, coffeeReducer } from '~/reducers/coffees/reducer'
import { coffeeCatalog } from '~/catalog'

interface CoffeeContextType {
  coffees: Coffee[]
}

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext({} as CoffeeContextType)

const initialState: CoffeeContextType = {
  coffees: coffeeCatalog,
}

export function CoffeeContextProvider(props: CoffeeContextProviderProps) {
  const { children } = props

  const [state, dispatch] = useReducer(coffeeReducer, initialState)
  const { coffees } = state

  return (
    <CoffeeContext.Provider value={{ coffees }}>
      {children}
    </CoffeeContext.Provider>
  )
}
