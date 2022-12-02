import { v4 as uuid } from 'uuid'

import { Coffee } from '~/reducers/coffees/reducer'

// catalog assets
import expresso from '~/assets/catalog/expresso.svg'
import expressoAmericano from '~/assets/catalog/expresso-americano.svg'
import expressoCremoso from '~/assets/catalog/expresso-cremoso.svg'
import expressoGelado from '~/assets/catalog/expresso-gelado.svg'
import cafeComLeite from '~/assets/catalog/cafe-com-leite.svg'
import latte from '~/assets/catalog/latte.svg'
import capuccino from '~/assets/catalog/capuccino.svg'
import macchiato from '~/assets/catalog/macchiato.svg'
import mocaccino from '~/assets/catalog/mocaccino.svg'
import chocolateQuente from '~/assets/catalog/chocolate-quente.svg'
import cubano from '~/assets/catalog/cubano.svg'
import havaiano from '~/assets/catalog/havaiano.svg'
import arabe from '~/assets/catalog/arabe.svg'
import irlandes from '~/assets/catalog/irlandes.svg'

export const coffeeCatalog: Coffee[] = [
  {
    id: uuid(),
    amount: 990,
    name: 'Expresso Tradicional',
    description: `O tradicional café feito com água quente e grãos moídos`,
    imagePath: expresso,
  },

  {
    id: uuid(),
    amount: 990,
    name: 'Expresso Americano',
    description: `Expresso diluído, menos intenso que o tradicional`,
    imagePath: expressoAmericano,
  },

  {
    id: uuid(),
    amount: 990,
    name: 'Expresso Cremoso',
    description: `Café expresso tradicional com espuma cremosa`,
    imagePath: expressoCremoso,
  },

  {
    id: uuid(),
    amount: 990,
    name: 'Expresso Gelado',
    description: `Bebida preparada com café expresso e cubos de gelo`,
    imagePath: expressoGelado,
  },

  {
    id: uuid(),
    amount: 990,
    name: 'Café com Leite',
    description: `Meio a meio de expresso tradicional com leite vaporizado`,
    imagePath: cafeComLeite,
  },

  {
    id: uuid(),
    amount: 990,
    name: 'Latte',
    description: `Uma dose de café expresso com o dobro de leite e espuma cremosa`,
    imagePath: latte,
  },

  {
    id: uuid(),
    amount: 990,
    name: 'Capuccino',
    description: `Bebida com canela feita de doses iguais de café, leite e espuma`,
    imagePath: capuccino,
  },

  {
    id: uuid(),
    amount: 990,
    name: 'Macchiato',
    description: `Café expresso misturado com um pouco de leite quente e espuma`,
    imagePath: macchiato,
  },

  {
    id: uuid(),
    amount: 990,
    name: 'Mocaccino',
    description: `Café expresso com calda de chocolate, pouco leite e espuma`,
    imagePath: mocaccino,
  },

  {
    id: uuid(),
    amount: 990,
    name: 'Chocolate Quente',
    description: `Bebida feita com chocolate dissolvido no leite quente e café`,
    imagePath: chocolateQuente,
  },

  {
    id: uuid(),
    amount: 990,
    name: 'Cubano',
    description: `Drink gelado de café expresso com rum, creme de leite e hortelã`,
    imagePath: cubano,
  },

  {
    id: uuid(),
    amount: 990,
    name: 'Havaiano',
    description: `Bebida adocicada preparada com café e leite de coco`,
    imagePath: havaiano,
  },

  {
    id: uuid(),
    amount: 990,
    name: 'Árabe',
    description: `Bebida preparada com grãos de café árabe e especiarias`,
    imagePath: arabe,
  },

  {
    id: uuid(),
    amount: 990,
    name: 'Irlandês',
    description: `Bebida a base de café, uísque irlandês, açúcar e chantilly`,
    imagePath: irlandes,
  },
]
