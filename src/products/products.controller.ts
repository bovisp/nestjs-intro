import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common'
import { ProductsService } from './products.service'

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  store(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number
  ): any {
    const id = this.productService.create(title, description, price)

    return { id }
  }

  @Get()
  index() {
    return this.productService.all()
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.productService.get(id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number
   ) {
    this.productService.update(id, title, description, price)

    return null
  }

  @Delete(':id')
  destroy(
    @Param('id') id: string
   ) {
    this.productService.destroy(id)

    return null
  }
}