import { Categoria, Imagem, Titulo } from './styles'

type Props = {
  name: string
  img: string
  category: string
}

const Banner = ({ name, img, category }: Props) => (
  <Imagem style={{ backgroundImage: `url(${img})` }}>
    <div className="filter">
      <div className="container">
        <Categoria>{category}</Categoria>
        <Titulo>{name}</Titulo>
      </div>
    </div>
  </Imagem>
)

export default Banner
