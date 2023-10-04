import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import {PrismaProductService} from "@app/shared/prisma-product/prisma.service";

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaProductService]
})
export class ProductModule {}
