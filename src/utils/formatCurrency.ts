import Dinero from 'dinero.js'

export function formatCurrency(amount: number) {
  const dinero = Dinero({ amount, currency: 'BRL' })
  return dinero.setLocale('pt-BR').toFormat('0.00')
}
