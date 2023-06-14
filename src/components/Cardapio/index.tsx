import PratoCard from '../Prato'
import { Prato } from '../../pages/Home'
import { Container, List } from './styles'

export type Props = {
  pratos: Prato[]
}

const Restaurants = ({ pratos }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {pratos.map((prato) => (
            <PratoCard
              key={prato.id}
              id={prato.id}
              descricao={prato.descricao}
              foto={prato.foto}
              nome={prato.nome}
              preco={prato.preco}
              porcao={prato.porcao}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default Restaurants
