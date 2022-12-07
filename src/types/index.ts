export enum TagTypes {
  'TRADICIONAL' = 'tradicional',
  'GELADO' = 'gelado',
  'COM_LEITE' = 'com leite',
  'ESPECIAL' = 'especial',
  'ALCOOLICO' = 'alcoólico',
}

export interface IProduct {
  id: number
  price: number
  amount: number
  name: string
  description: string
  image: string
  tags?: `${TagTypes}`[]
}

export interface IAction<T, P> {
  readonly type: T
  readonly payload: P
}
