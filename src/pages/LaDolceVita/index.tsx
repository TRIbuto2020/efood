import PratoM from '../../models/prato'
import HeaderPerfil from '../../components/HeaderPerfil'
import trattoria from '../../assets/images/trattoria.png'
import Banner from '../../components/Banner'
import pizza from '../../assets/images/pizza.png'
import Cardapio from '../../components/Cardapio'

const cardapio: PratoM[] = [
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 1
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 2
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 3
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 4
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 5
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    id: 6
  }
]

const LaDolce = () => (
  <>
    <HeaderPerfil />
    <Banner
      img={trattoria}
      name="La Dolce Vita Trattoria"
      category="Italiana"
    />
    <Cardapio pratos={cardapio} />
  </>
)

export default LaDolce
