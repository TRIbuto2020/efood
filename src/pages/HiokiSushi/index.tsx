import PratoM from '../../models/prato'
import HeaderPerfil from '../../components/HeaderPerfil'
import sushi from '../../assets/images/sushi.png'
import Banner from '../../components/Banner'
import Cardapio from '../../components/Cardapio'

const cardapio: PratoM[] = [
  {
    title: 'Sushi',
    description: 'Sei lá, é sushi... Eu não gosto de sushi',
    image: sushi,
    id: 1
  },
  {
    title: 'Sushi',
    description: 'Sei lá, é sushi... Eu não gosto de sushi',
    image: sushi,
    id: 2
  },
  {
    title: 'Sushi',
    description: 'Sei lá, é sushi... Eu não gosto de sushi',
    image: sushi,
    id: 3
  },
  {
    title: 'Sushi',
    description: 'Sei lá, é sushi... Eu não gosto de sushi',
    image: sushi,
    id: 4
  },
  {
    title: 'Sushi',
    description: 'Sei lá, é sushi... Eu não gosto de sushi',
    image: sushi,
    id: 5
  },
  {
    title: 'Sushi',
    description: 'Sei lá, é sushi... Eu não gosto de sushi',
    image: sushi,
    id: 6
  }
]

const HiokiSushi = () => (
  <>
    <HeaderPerfil />
    <Banner img={sushi} name="Hioki Sushi" category="Japonesa" />
    <Cardapio pratos={cardapio} />
  </>
)

export default HiokiSushi
