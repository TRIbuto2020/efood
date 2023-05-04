import RestaurantCard from '../RestaurantCard'
import { Container, List } from './styles'
import Restaurante from '../../models/restaurante'

export type Props = {
  restaurantes: Restaurante[]
}

const Restaurants = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <RestaurantCard
            key={restaurante.id}
            category={restaurante.category}
            description={restaurante.description}
            image={restaurante.image}
            nota={restaurante.nota}
            title={restaurante.title}
            highlight={restaurante.highlight}
            to={restaurante.to}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default Restaurants
