import { useParams } from 'react-router-dom'

import HeaderPerfil from '../../components/HeaderPerfil'
import Banner from '../../components/Banner'
import Cardapio from '../../components/Cardapio'
import { useGetPratosQuery } from '../../services/api'
import Loader from '../../components/Loader'

const RestaurantePg = () => {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurante } = useGetPratosQuery(id!)

  if (!restaurante) {
    return <Loader />
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
