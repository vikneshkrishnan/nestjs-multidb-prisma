import { NestFactory } from '@nestjs/core';
import { ProductSvcModule } from './product-svc.module';
import {DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ProductSvcModule);
  const config = new DocumentBuilder()
      .setTitle('Product Service')
      .setDescription('Product Service API description')
      .setVersion('1.0')
      .addTag('product')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(4000);
}
bootstrap();
