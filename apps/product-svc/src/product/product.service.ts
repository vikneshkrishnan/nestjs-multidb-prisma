import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import {ProductEntity} from "./entities/product.entity";
import {PrismaProductService} from "@app/shared/prisma-product/prisma.service";
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma:PrismaProductService) {
  }
  async create(createProductDto: CreateProductDto) :Promise<ProductEntity> {
    return await this.prisma.product.create({
      data:{
        ...createProductDto
      }
    })
  }

  async findAll() {
    return await this.prisma.product.findMany()
  }

  async findOne(id: number) {
    return await this.prisma.product.findUnique({
      where:{
        id:id
      }
    })
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.prisma.product.update({
      where:{
        id:id
      },
      data:{
        ...updateProductDto
      }
    })
  }

  async remove(id: number) {
    return await this.prisma.product.delete({
      where:{
        id:id
      }
    });
  }
}
