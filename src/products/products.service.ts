import { Injectable, NotFoundException } from '@nestjs/common'
import { Product } from './product.model'

@Injectable()
export class ProductsService {
  private products: Product[] = [] 

  create (title: string, desc: string, price: number) {
    const id = Math.floor(Math.random() * 1000).toString()

    const newProduct = new Product(
      id, title, desc, price
    )

    this.products.push(newProduct)

    return id
  }

  all () {
    return [...this.products]
  }

  get (id: string) {
    const [product, _] = this.find(id)

    return {...product}
  }

  update (id: string, title: string, desc: string, price: number) {
    const [product, index] = this.find(id)
    const updatedProduct = {...product}

    updatedProduct.title = title ? title : updatedProduct.title
    updatedProduct.description = desc ? desc : updatedProduct.description
    updatedProduct.price = price ? price : updatedProduct.price

    this.products[index] = updatedProduct
  }

  destroy (id: string) {
    const [_, index] = this.find(id)

    this.products.splice(index, 1)
  }

  private find(id: string): [Product, number] {
    const index = this.products.findIndex(product => product.id === id)
    const product = this.products[index]

    if (!product) {
      throw new NotFoundException('Could not find product')
    }

    return [product, index]
  }
}