import { PulseLoader } from 'react-spinners'

import { colors } from '../../styles'

import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <PulseLoader color={colors.beige} />
    </Container>
  )
}

export default Loader
