import RestaurantCard from '../RestaurantCard'
import { Container, List } from './styles'

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
            category={restaurante.tipo}
            description={restaurante.descricao}
            image={restaurante.capa}
            nota={restaurante.avaliacao}
            title={restaurante.titulo}
            highlight={restaurante.destacado}
            to={`/restaurante/${restaurante.id}`}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default Restaurants
