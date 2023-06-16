import Restaurants from '../../components/Restaurants'
import Header from '../../components/Header'
import { useGetRestaurantsQuery } from '../../services/api'

export type Prato = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

const Home = () => {
  const { data } = useGetRestaurantsQuery()

  if (data) {
    return (
      <>
        <Header />
        <Restaurants restaurantes={data} />
      </>
    )
  } else {
    return <h4>Carregando...</h4>
  }
}

export default Home
