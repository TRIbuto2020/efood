import { Container, Logo, Redes, Text } from './styles'
import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <Container>
    <Logo src={logo} alt="Logo efood" />
    <Redes>
      <li>
        <img src={instagram} alt="" />
      </li>
      <li>
        <img src={facebook} alt="" />
      </li>
      <li>
        <img src={twitter} alt="" />
      </li>
    </Redes>
    <Text>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Text>
  </Container>
)

export default Footer
