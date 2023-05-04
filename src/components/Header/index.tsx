import { HeaderDiv } from './styles'
import bg from '../../assets/images/bg.png'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderDiv style={{ backgroundImage: `url(${bg})` }}>
    <img src={logo} alt="" />
    <p>Viva experiências gastronômicas no conforto da sua casa</p>
  </HeaderDiv>
)

export default Header
