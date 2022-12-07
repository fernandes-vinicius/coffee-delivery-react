import { IProduct } from '~/types'

//* START: coffee catalog assets
import expresso from '~/assets/coffeeCatalog/expresso.svg'
import expressoAmericano from '~/assets/coffeeCatalog/expresso-americano.svg'
import expressoCremoso from '~/assets/coffeeCatalog/expresso-cremoso.svg'
import expressoGelado from '~/assets/coffeeCatalog/expresso-gelado.svg'
import cafeComLeite from '~/assets/coffeeCatalog/cafe-com-leite.svg'
import latte from '~/assets/coffeeCatalog/latte.svg'
import capuccino from '~/assets/coffeeCatalog/capuccino.svg'
import macchiato from '~/assets/coffeeCatalog/macchiato.svg'
import mocaccino from '~/assets/coffeeCatalog/mocaccino.svg'
import chocolateQuente from '~/assets/coffeeCatalog/chocolate-quente.svg'
import cubano from '~/assets/coffeeCatalog/cubano.svg'
import havaiano from '~/assets/coffeeCatalog/havaiano.svg'
import arabe from '~/assets/coffeeCatalog/arabe.svg'
import irlandes from '~/assets/coffeeCatalog/irlandes.svg'
//* END: coffee catalog assets

export const coffeeCatalog: IProduct[] = [
  {
    id: 1,
    price: 990,
    amount: 1,
    name: 'Expresso Tradicional',
    description: `O tradicional café feito com água quente e grãos moídos`,
    image: expresso,
    tags: ['tradicional'],
  },

  {
    id: 2,
    price: 990,
    amount: 1,
    name: 'Expresso Americano',
    description: `Expresso diluído, menos intenso que o tradicional`,
    image: expressoAmericano,
    tags: ['tradicional'],
  },

  {
    id: 3,
    price: 990,
    amount: 1,
    name: 'Expresso Cremoso',
    description: `Café expresso tradicional com espuma cremosa`,
    image: expressoCremoso,
    tags: ['tradicional'],
  },

  {
    id: 4,
    price: 990,
    amount: 1,
    name: 'Expresso Gelado',
    description: `Bebida preparada com café expresso e cubos de gelo`,
    image: expressoGelado,
    tags: ['tradicional', 'gelado'],
  },

  {
    id: 5,
    price: 990,
    amount: 1,
    name: 'Café com Leite',
    description: `Meio a meio de expresso tradicional com leite vaporizado`,
    image: cafeComLeite,
    tags: ['tradicional', 'com leite'],
  },

  {
    id: 6,
    price: 990,
    amount: 1,
    name: 'Latte',
    description: `Uma dose de café expresso com o dobro de leite e espuma cremosa`,
    image: latte,
    tags: ['tradicional', 'com leite'],
  },

  {
    id: 7,
    price: 990,
    amount: 1,
    name: 'Capuccino',
    description: `Bebida com canela feita de doses iguais de café, leite e espuma`,
    image: capuccino,
    tags: ['tradicional', 'com leite'],
  },

  {
    id: 8,
    price: 990,
    amount: 1,
    name: 'Macchiato',
    description: `Café expresso misturado com um pouco de leite quente e espuma`,
    image: macchiato,
    tags: ['tradicional', 'com leite'],
  },

  {
    id: 9,
    price: 990,
    amount: 1,
    name: 'Mocaccino',
    description: `Café expresso com calda de chocolate, pouco leite e espuma`,
    image: mocaccino,
    tags: ['tradicional', 'com leite'],
  },

  {
    id: 10,
    price: 990,
    amount: 1,
    name: 'Chocolate Quente',
    description: `Bebida feita com chocolate dissolvido no leite quente e café`,
    image: chocolateQuente,
    tags: ['especial', 'com leite'],
  },

  {
    id: 11,
    price: 990,
    amount: 1,
    name: 'Cubano',
    description: `Drink gelado de café expresso com rum, creme de leite e hortelã`,
    image: cubano,
    tags: ['especial', 'com leite'],
  },

  {
    id: 12,
    price: 990,
    amount: 1,
    name: 'Havaiano',
    description: `Bebida adocicada preparada com café e leite de coco`,
    image: havaiano,
    tags: ['especial', 'com leite', 'gelado'],
  },

  {
    id: 13,
    price: 990,
    amount: 1,
    name: 'Árabe',
    description: `Bebida preparada com grãos de café árabe e especiarias`,
    image: arabe,
    tags: ['especial'],
  },

  {
    id: 14,
    price: 990,
    amount: 1,
    name: 'Irlandês',
    description: `Bebida a base de café, uísque irlandês, açúcar e Chantilly`,
    image: irlandes,
    tags: ['especial', 'alcoólico'],
  },
]
