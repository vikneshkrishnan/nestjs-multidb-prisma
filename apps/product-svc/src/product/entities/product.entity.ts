import { Product } from '@prisma-product/prisma/client';
import {ApiProperty} from "@nestjs/swagger";


export class ProductEntity implements Product{
  constructor(partial: Partial<Product>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;


}
