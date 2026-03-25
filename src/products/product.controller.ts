
import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';


@Controller('product') 
export class ProductController {

  constructor(private readonly productService: ProductService) {}

  @Get('test')
  test() {
    return this.productService.test();
  }

  @Get(':id')
  findAll(
    @Param('id') id: string,
    @Query('fields') fields?: string 
  ) {

    const parsedFields = fields ? fields.split(',') : undefined;
    
    return this.productService.findAll(id, parsedFields);
  }



}