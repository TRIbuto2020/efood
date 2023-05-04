import Restaurants from '../../components/Restaurants'
import sushi from '../../assets/images/sushi.png'
import trattoria from '../../assets/images/trattoria.png'
import Restaurante from '../../models/restaurante'
import Header from '../../components/Header'

const restaurantes: Restaurante[] = [
  {
    id: 1,
    category: 'Japonesa',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestiae perspiciatis magni rem omnis accusamus sequi provident exercitationem. Pariatur qui aliquam magni officia amet maxime cumque autem corporis maiores laborum!',
    title: 'Hioki Sushi',
    to: 'ladolcevitatrattoria',
    nota: 4.9,
    image: sushi,
    highlight: true
  },
  {
    id: 2,
    category: 'Italiana',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestiae perspiciatis magni rem omnis accusamus sequi provident exercitationem. Pariatur qui aliquam magni officia amet maxime cumque autem corporis maiores laborum!',
    title: 'La Dolce Vita Trattoria',
    to: 'ladolcevitatrattoria',
    nota: 4.6,
    image: trattoria
  },
  {
    id: 3,
    category: 'Italiana',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestiae perspiciatis magni rem omnis accusamus sequi provident exercitationem. Pariatur qui aliquam magni officia amet maxime cumque autem corporis maiores laborum!',
    title: 'La Dolce Vita Trattoria',
    to: 'ladolcevitatrattoria',
    nota: 4.6,
    image: trattoria
  },
  {
    id: 4,
    category: 'Italiana',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestiae perspiciatis magni rem omnis accusamus sequi provident exercitationem. Pariatur qui aliquam magni officia amet maxime cumque autem corporis maiores laborum!',
    title: 'La Dolce Vita Trattoria',
    to: 'ladolcevitatrattoria',
    nota: 4.6,
    image: trattoria
  },
  {
    id: 5,
    category: 'Italiana',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestiae perspiciatis magni rem omnis accusamus sequi provident exercitationem. Pariatur qui aliquam magni officia amet maxime cumque autem corporis maiores laborum!',
    title: 'La Dolce Vita Trattoria',
    to: 'ladolcevitatrattoria',
    nota: 4.6,
    image: trattoria
  },
  {
    id: 6,
    category: 'Italiana',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestiae perspiciatis magni rem omnis accusamus sequi provident exercitationem. Pariatur qui aliquam magni officia amet maxime cumque autem corporis maiores laborum!',
    title: 'La Dolce Vita Trattoria',
    to: 'ladolcevitatrattoria',
    nota: 4.6,
    image: trattoria
  }
]

const Home = () => (
  <>
    <Header />
    <Restaurants restaurantes={restaurantes} />
  </>
)

export default Home
