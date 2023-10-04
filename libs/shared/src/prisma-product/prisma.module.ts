import { Module } from '@nestjs/common';
import {PrismaProductService} from "@app/shared/prisma-product/prisma.service";

@Module({
  providers: [PrismaProductService],
  exports: [PrismaProductService],
})
export class PrismaModule {}
