import Tag from '../Tag'
import { Card, Descricao, Infos, Titulo, Box, Tags } from './styles'
import star from '../../assets/images/star.png'
import Button from '../Button'

type Props = {
  highlight?: boolean
  title: string
  category: string
  description: string
  nota: number
  image: string
  to: string
}

const RestaurantCard = ({
  highlight,
  title,
  category,
  description,
  nota,
  image,
  to
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 270) {
      return descricao.slice(0, 270) + '...'
    }
    return descricao
  }
  return (
    <Card>
      <img src={image} alt={title} />
      <Tags>
        {highlight && <Tag>Destaque da semana</Tag>}
        <Tag>{category}</Tag>
      </Tags>
      <Box>
        <Infos>
          {nota}
          <img src={star} alt="Estrela" />
        </Infos>
        <Titulo>{title}</Titulo>
        <Descricao>{getDescricao(description)}</Descricao>
        <Button to={to as string}>Saiba mais</Button>
      </Box>
    </Card>
  )
}

export default RestaurantCard
