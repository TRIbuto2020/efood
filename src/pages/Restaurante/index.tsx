import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Restaurante } from '../Home'
import HeaderPerfil from '../../components/HeaderPerfil'
import Banner from '../../components/Banner'
import Cardapio from '../../components/Cardapio'

const RestaurantePg = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

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
