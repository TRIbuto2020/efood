import { useDispatch } from 'react-redux'
import { useState } from 'react'

import fechar from '../../assets/images/fechar.png'
import {
  Card,
  Descricao,
  Titulo,
  Box,
  Botao,
  Modal,
  ModalContent,
  Foto,
  Close
} from './styles'
import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

interface ModalState extends Prato {
  isVisible: boolean
}

const PratoCard = ({ nome, descricao, foto, porcao, preco, id }: Prato) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 150) {
      return descricao.slice(0, 150) + '...'
    }
    return descricao
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    id: 0,
    foto: '',
    preco: 0,
    nome: '',
    descricao: '',
    porcao: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      id: 0,
      foto: '',
      preco: 0,
      nome: '',
      descricao: '',
      porcao: ''
    })
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(
      add({
        id: id,
        foto: foto,
        nome: nome,
        preco: preco,
        descricao: descricao,
        porcao: porcao
      })
    )
    dispatch(open())
  }

  return (
    <>
      <Card>
        <img src={foto} alt={nome} />
        <Box>
          <Titulo>{nome}</Titulo>
          <Descricao>{getDescricao(descricao)}</Descricao>
          <Botao
            onClick={() => {
              setModal({
                isVisible: true,
                foto: foto,
                descricao: descricao,
                id: 0,
                preco: preco,
                nome: nome,
                porcao: porcao
              })
            }}
          >
            Mais detalhes
          </Botao>
        </Box>
      </Card>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <Foto src={modal.foto} alt="" />
          <Close
            src={fechar}
            alt="Ícone de fechar"
            onClick={() => closeModal()}
          />
          <div>
            <h4>{modal.nome}</h4>
            <p>{modal.descricao}</p>
            <p>Serve: {modal.porcao}</p>
            <Botao onClick={addToCart}>
              Adicionar ao carrinho - {parseToBrl(preco)}
            </Botao>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default PratoCard
