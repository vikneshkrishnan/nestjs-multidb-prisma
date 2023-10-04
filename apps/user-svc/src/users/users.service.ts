import {Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {PrismaUserService} from "@app/shared/prisma-user/prisma.service";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaUserService) {
  }

  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where: {id},
    });
  }


  async remove(id: number) {
    return await this.prisma.user.delete({
      where: {id},
    });
  }
}
