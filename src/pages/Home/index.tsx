import Restaurants from '../../components/Restaurants'
import Header from '../../components/Header'
import { useGetRestaurantsQuery } from '../../services/api'
import Loader from '../../components/Loader'

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
    return <Loader />
  }
}

export default Home
