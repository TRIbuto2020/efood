import Restaurante from '../../models/restaurante'
import HeaderPerfil from '../../components/HeaderPerfil'
import trattoria from '../../assets/images/trattoria.png'
import Banner from '../../components/Banner'
import Prato from '../../components/Prato'

const promocoes: Restaurante[] = []

const LaDolce = () => (
  <>
    <HeaderPerfil />
    <Banner
      img={trattoria}
      name="La Dolce Vita Trattoria"
      category="Italiana"
    />
    <Prato title="Pizza" description="Pizza uai" image={trattoria} />
  </>
)

export default LaDolce
