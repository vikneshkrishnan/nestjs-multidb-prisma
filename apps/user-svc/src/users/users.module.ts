import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {PrismaUserService} from "@app/shared/prisma-user/prisma.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService,PrismaUserService]
})
export class UsersModule {}
