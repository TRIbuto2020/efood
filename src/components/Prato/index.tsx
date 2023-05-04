import { Card, Descricao, Titulo, Box } from './styles'
import star from '../../assets/images/star.png'
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
    </Box>
  </Card>
)

export default Prato
