class Restaurante {
  title: string
  category: string
  description: string
  nota: number
  image: string
  id: number
  to: string
  highlight?: boolean

  constructor(
    title: string,
    category: string,
    description: string,
    nota: number,
    image: string,
    id: number,
    to: string,
    highlight?: boolean
  ) {
    this.title = title
    this.category = category
    this.description = description
    this.nota = nota
    this.image = image
    this.id = id
    this.to = to
    this.highlight = highlight
  }
}

export default Restaurante
