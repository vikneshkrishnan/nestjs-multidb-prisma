import { Module } from '@nestjs/common';
import {PrismaUserService} from "@app/shared/prisma-user/prisma.service";

@Module({
  providers: [PrismaUserService],
  exports: [PrismaUserService],
})
export class PrismaModule {}
