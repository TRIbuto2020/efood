import { useParams } from 'react-router-dom'

import HeaderPerfil from '../../components/HeaderPerfil'
import Banner from '../../components/Banner'
import Cardapio from '../../components/Cardapio'
import { useGetPratosQuery } from '../../services/api'

const RestaurantePg = () => {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurante } = useGetPratosQuery(id!)

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderPerfil />
      <Banner
        img={restaurante.capa}
        name={restaurante.titulo}
        category={restaurante.tipo}
      />
      <Cardapio pratos={restaurante.cardapio} />
    </>
  )
}

export default RestaurantePg
