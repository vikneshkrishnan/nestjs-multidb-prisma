import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma-product/prisma/client';

@Injectable()
export class PrismaProductService extends PrismaClient {
  async enableShutdownHooks(app?:INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
