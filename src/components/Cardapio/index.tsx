import Prato from '../Prato'
import PratoM from '../../models/prato'
import { Container, List } from './styles'

export type Props = {
  pratos: PratoM[]
}

const Restaurants = ({ pratos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {pratos.map((prato) => (
          <Prato
            key={prato.id}
            description={prato.description}
            image={prato.image}
            title={prato.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default Restaurants
