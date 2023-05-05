import { Card, Descricao, Titulo, Box, Botao } from './styles'
type Props = {
  title: string
  description: string
  image: string
}

const Prato = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Box>
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <Botao>Adicionar ao carrinho</Botao>
    </Box>
  </Card>
)

export default Prato
